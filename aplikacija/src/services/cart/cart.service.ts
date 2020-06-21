import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Cart } from "src/entities/cart.entity";
import { Repository } from "typeorm";
import { CartArticle } from "src/entities/cart-article.entity";

@Injectable()
export class CartService {
    constructor(
        @InjectRepository(Cart)
        private readonly cart: Repository<Cart>,
 
        @InjectRepository(CartArticle)
        private readonly cartArticle: Repository<CartArticle>,
    ) { }

}