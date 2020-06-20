import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './controllers/app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseConfiguration } from 'config/database.configuration';
import { AdministratorService } from './services/administrator/administrator.service';
import { Administrator } from 'entities/administrator.entity';
import { ArticleFeature } from 'entities/article-feature.entity';
import { Article } from 'entities/article.entity';
import { CartArticle } from 'entities/cart-article.entity';
import { Cart } from 'entities/cart.entity';
import { Category } from 'entities/category.entity';
import { Feature } from 'entities/feature.entity';
import { Order } from 'entities/order.entity';
import { User } from 'entities/user.entity';
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
import { ArticlePrice } from 'entities/article-price.entity';
import { AuthController } from './controllers/api/auth.controller';
import { AuthMiddleWare } from './middlewares/auth.middleware';




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
      
  
    
    ])
  ],
  controllers: [
    AppController, 
    AdministratorController, 
    CategoryController,
    ArticleController,
    FeatureController,
    AuthController,
    
  ],
  providers: [AppService, 
    AdministratorService, 
    CategoryService,
    ArticleService,
    FeatureService,
    UserService,
    CartService,
    OrderService,

   
  ],
  exports: [
      AdministratorService,
      UserService,
  ]
})

export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthMiddleWare)
      .exclude('auth/*')
      .forRoutes('api/*');
  }
}
