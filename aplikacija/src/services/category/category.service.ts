import { Category } from "entities/category.entity";
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class CategoryService extends TypeOrmCrudService<Category> {
    constructor( 
        @InjectRepository(Category) 
        private readonly category: Repository<Category>
     ){
        super(category);
    }
}