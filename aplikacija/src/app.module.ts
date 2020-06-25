import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './controllers/app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseConfiguration } from 'config/database.configuration';
import { AdministratorService } from './services/administrator/administrator.service';
import { Administrator } from 'src/entities/administrator.entity';
import { ArticleFeature } from 'src/entities/article-feature.entity';
import { Article } from 'src/entities/article.entity';
import { CartArticle } from 'src/entities/cart-article.entity';
import { Cart } from 'src/entities/cart.entity';
import { Category } from 'src/entities/category.entity';
import { Feature } from 'src/entities/feature.entity';
import { Order } from 'src/entities/order.entity';
import { User } from 'src/entities/user.entity';
import { AdministratorController } from './controllers/api/administrator.controller';
import { CategoryController } from './controllers/api/category.controller';
import { CategoryService } from './services/category/category.service';
import { ArticleService } from './services/article/article.service';
import { ArticleController } from './controllers/api/article.controller';
import { FeatureService } from './services/feature/feature.service';
import { FeatureController } from './controllers/api/feature.controller';
import { UserService } from './services/user/user.service';
import { CartService } from './services/cart/cart.service';
import { OrderService } from './services/order/order.service';
import { ArticlePrice } from 'src/entities/article-price.entity';
import { AuthController } from './controllers/api/auth.controller';

import { PhotoService } from './services/photo/photo.service';
import { Photo } from 'src/entities/photo.entity';
import { AuthMiddleware } from './middlewares/auth.middleware';
import { UserCartController } from './controllers/api/user.cart.controller';
import { MailerModule } from '@nestjs-modules/mailer';
import { MailConfig } from 'config/mail.config';
import { OrderMailer } from './services/order/order.mailer.service';



@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: DatabaseConfiguration.hostname,
      port: 3306,
      username: DatabaseConfiguration.username,
      password: DatabaseConfiguration.password,
      database: DatabaseConfiguration.database,
      entities: [
         Administrator,
         ArticleFeature,
         Article,
         CartArticle,
         Cart,
         Category,
         Feature,
         Order,
         User,
         ArticlePrice,
         ArticleFeature,
         Photo,
         
        ]
    }),
    TypeOrmModule.forFeature([ 
      Administrator,
      Category,
      Article,
      Feature,
      ArticleFeature,
      User,
      Cart,
      CartArticle,
      Order,
      ArticlePrice,
      Photo,

  
    
    ]),
    MailerModule.forRoot({
      transport: 'smtps://' + MailConfig.username + ':' +
                              MailConfig.password + '@' +
                              MailConfig.hostname,
      defaults: {
        from: MailConfig.senderEmail,
      },
    }),
  ],
  controllers: [
    AppController, 
    AdministratorController, 
    CategoryController,
    ArticleController,
    FeatureController,
    AuthController,
    UserCartController,
    
  ],
  providers: [AppService, 
    AdministratorService, 
    CategoryService,
    ArticleService,
    FeatureService,
    UserService,
    CartService,
    OrderService,
    PhotoService,
    OrderMailer,

   
  ],
  exports: [
      AdministratorService,
      UserService,

  ]
})

export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthMiddleware)
      .exclude('auth/*')
      .forRoutes('api/*');
  }
}
