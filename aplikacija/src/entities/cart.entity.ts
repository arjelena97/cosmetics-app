import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { CartArticle } from "./cart-article.entity";
import { User } from "./user.entity";
import { Order } from "./order.entity";

@Index("fk_cart_user_id", ["userId"], {})
@Entity("cart")
export class Cart {
  @PrimaryGeneratedColumn({ type: "int", name: "cart_id", unsigned: true })
  cartId: number;

  @Column("int", { name: "user_id", unsigned: true })
  userId: number;

  @Column("timestamp", {
    name: "created_at",
    default: () => "CURRENT_TIMESTAMP",
  })
  createdAt: Date;

  @OneToMany(() => CartArticle, (cartArticle) => cartArticle.cart)
  cartArticles: CartArticle[];

  @ManyToOne(() => User, (user) => user.carts, {
    onDelete: "NO ACTION",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "user_id", referencedColumnName: "userId" }])
  user: User;

  @OneToOne(() => Order, (order) => order.cart, {
    onDelete: "NO ACTION",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "cart_id", referencedColumnName: "cartId" }])
  cart: Order;
    order: any;
}
