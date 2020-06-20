import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Cart } from "entities/cart.entity";
import { Repository } from "typeorm";
import { Order } from "entities/order.entity";

@Injectable()
export class OrderService {
    constructor(
        @InjectRepository(Cart)
        private readonly cart: Repository<Cart>,
 
        @InjectRepository(Order)
        private readonly order: Repository<Order>,
    ) { }
    
}