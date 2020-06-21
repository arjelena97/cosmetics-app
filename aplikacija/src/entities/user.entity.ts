import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Cart } from "./cart.entity";

@Index("uq_user_email", ["email"], { unique: true })
@Index("uq_user_phone_number", ["phoneNumber"], { unique: true })
@Entity("user")
export class User {
  @PrimaryGeneratedColumn({ type: "int", name: "user_id", unsigned: true })
  userId: number;

  @Column("varchar", {
    name: "email",
    unique: true,
    length: 255,
  })
  email: string;

  @Column("varchar", {
    name: "password_hash",
    length: 128,
  })
  passwordHash: string;

  @Column("varchar", { name: "name", length: 64})
  name: string;

  @Column("varchar", { name: "last_name", length: 64 })
  lastName: string;

  @Column("tinytext", { name: "postal_adress" })
  postalAdress: string;

  @Column("varchar", {
    name: "phone_number",
    unique: true,
    length: 24,
    default: () => "'0'",
  })
  phoneNumber: string;

  @OneToMany(() => Cart, (cart) => cart.user)
  carts: Cart[];
}
