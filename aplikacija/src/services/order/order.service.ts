import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Cart } from "src/entities/cart.entity";
import { Repository } from "typeorm";
import { Order } from "src/entities/order.entity";

@Injectable()
export class OrderService {
    constructor(
        @InjectRepository(Cart)
        private readonly cart: Repository<Cart>,
 
        @InjectRepository(Order)
        private readonly order: Repository<Order>,
    ) { }
    
}