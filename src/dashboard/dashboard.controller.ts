import { BadRequestException, Body, Controller, Get, HttpException, HttpStatus, Param, Post, Query, Render, Req, Res, Session, UseFilters, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { query } from 'express';
import { SoftwaresService } from 'src/softwares/softwares.service';
import { SoftwareCategoriesService } from 'src/software_categories/software_categories.service';
import { UsersService } from 'src/users/users.service';
import { DashboardService } from './dashboard.service';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
import { AuthenticatedGuard } from './guards/authenticated.guard';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { ViewAuthFilter } from './guards/redirect';


@Controller('dashboard')
export class DashboardController {

    constructor(
        private dashboardService: DashboardService, 
        private usersService: UsersService,
        private softwareService: SoftwaresService,
        private softwareCategoriesService: SoftwareCategoriesService
    ) {}

    @UseGuards(AuthenticatedGuard)
    @UseFilters(ViewAuthFilter)
    @Get()
    @Render('admin/dashboard.hbs')
    getDashboard(@Req() req) {
        return {
            title: 'Dashboard - Awanpc',
            menu: 'dashboard'        
        }
    }


    // Handle Software
    //@UseGuards(AuthenticatedGuard)
    //@UseFilters(ViewAuthFilter)
    @Get('software')
    @Render('admin/software/index.hbs')
    async getSoftwareList(@Query() query){
        return {
            title: 'Software List - Awanpc',
            menu: 'software',  
            data: await this.softwareService.findAll(query)
        }
    }

    // Handle Software
    //@UseGuards(AuthenticatedGuard)
    //@UseFilters(ViewAuthFilter)
    @Get('software/add')
    @Render('admin/software/add.hbs')
    async addNewSoftware(@Query() query){
        return {
            title: 'Add New - Awanpc',
            menu: 'software',  
            categories: await this.softwareCategoriesService.findAll()
        }
    }

    
    @Get('article')
    @Render('admin/article/index.hbs')
    getArticle(){
        return {
            title: 'Article List - Awanpc',
            menu: 'article', 
        }
    }

    // Handle Login
    @Get('login')
    @Render('admin/auth/login.hbs')
    getLogin(@Res() res, @Req() req) {
        res.cookie('cookieName', 'cookieValue', { sameSite: 'none', secure: true})
        return {
            title: 'Login - Awanpc',
            fullUrl: req.protocol+'://'+req.get('host')+req.originalUrl
        }
    }

    @UseGuards(LocalAuthGuard)
    @Post('login')
    async postLogin(@Query() query, @Body() body: LoginDto) {
        if(query.redirect){
            return {
                status: true,
                message: "Berhasil Login",
                redirect: query.redirect
            }
        }
        return {
            status: true,
            message: "Berhasil Login",
            redirect: "/dashboard"
        }
    }

    // Handle Register
    @Get('register')
    @Render('admin/auth/register.hbs')
    getRegister() {
        return {
            title: 'Register - Awanpc',
        }
    }

    @Post('register')
    @UsePipes(new ValidationPipe({ transform: true }))
    async postRegister(@Body() body: RegisterDto, @Req() req) {
        let validation =  await this.dashboardService.checkCaptcha(req.body.token);
        if(validation.success){
            try {
                return await this.usersService.register(body)
              } catch (error) {
                let message = [];
                if(error.errno == 1062){
                    message.push('The Email Account Already Exists!')
                }else{
                    message.push('Oops, an error occurred')
                }
                throw new HttpException({
                    message: message
                  }, HttpStatus.BAD_REQUEST);
              }
        }else{
            throw new BadRequestException();
        }
    }

    //Handle Logout
    @Get('logout')
    logout(@Req() req, @Res() res): any {
      req.session.destroy();
      res.redirect('/dashboard/login')
    }
}
