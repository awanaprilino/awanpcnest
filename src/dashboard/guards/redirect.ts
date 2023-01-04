import {
    ExceptionFilter,
    Catch,
    ArgumentsHost,
    HttpException,
    ForbiddenException,
  } from '@nestjs/common';
  import { Request, Response } from 'express';
  
  @Catch(ForbiddenException)
  export class ViewAuthFilter implements ExceptionFilter {
    catch(exception: HttpException, host: ArgumentsHost) {
      const ctx = host.switchToHttp();
      const response = ctx.getResponse<Response>();
      const request = ctx.getRequest<Request>();
      const status = exception.getStatus();
      const fullUrl = request.protocol + '://' + request.get('host') + request.originalUrl;
      response.status(status).redirect('/dashboard/login?redirect='+encodeURIComponent(fullUrl));
    }
  }