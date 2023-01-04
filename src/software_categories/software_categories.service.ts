import { Injectable } from '@nestjs/common';
import { SoftwareCategories } from './software_category.entity';

@Injectable()
export class SoftwareCategoriesService {

    async findAll(): Promise<any>{
        const result = SoftwareCategories.find();
        return result
    }
}
