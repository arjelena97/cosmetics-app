import { Injectable } from "@nestjs/common";
import { Order } from "src/entities/order.entity";
import { MailerService } from "@nestjs-modules/mailer";
import { MailConfig } from "config/mail.config";
import { CartArticle } from "src/entities/cart-article.entity";

@Injectable()
export class OrderMailer {

    constructor(private readonly mailService: MailerService) {

    }

    async sendOrderEmail(order: Order){
        await this.mailService.sendMail({
            to: order.cart.user.email,
            bcc: MailConfig.orderNotificationMail,
            subject: 'Order details',
            encoding: 'UTF-8',
            replyTo: 'no-reply@gmail.com',
            html: this.makeOrderHtml(order),
        });
}

private makeOrderHtml(order: Order): string {
    let suma = order.cart.cartArticles.reduce((sum, current: CartArticle) => {
        return sum +
            current.quantity * current.article.articlePrices[current.article.articlePrices.length - 1].price
    }, 0);
    return `<p>Zahvaljuemo se za Vasu porudzbinu!</p>
            <p>Detalji vase porudzbine:</p>
            <ul>
             ${  order.cart.cartArticles.map((CartArticle: CartArticle ) => {
                return `<li>
                ${ CartArticle.article.name } x 
                ${ CartArticle.quantity }`
             }).join("") }
             </ul>
             <p>Ukupan iznos je: ${ suma .toFixed(2)} EUR.</p>
             <p>Potpis ... </p>`;
}
}