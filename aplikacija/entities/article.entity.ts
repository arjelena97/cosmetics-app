import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinTable,
  Double,
} from "typeorm";
import { ArticleFeature } from "./article-feature.entity";
import { Category } from "./category.entity";
import { CartArticle } from "./cart-article.entity";
import { Feature } from "./feature.entity";

@Index("fk_article_category_id", ["categoryId"], {})
@Entity("article")
export class Article {
  [x: string]: any;
  @PrimaryGeneratedColumn({ type: "int", name: "article_id", unsigned: true })
  articleId: number;

  @Column("varchar", { name: "name", length: 128 })
  name: string;

  @Column("int", { name: "category_id", unsigned: true})
  categoryId: number;

  @Column("text", { name: "description" })
  description: string;

  @Column("varchar", { name: "image_path", length: 128 })
  imagePath: string;

  @Column("double", { name: "price"})
  ArticlePrice: Double;

  @OneToMany(() => ArticleFeature, (articleFeature) => articleFeature.article)
  articleFeatures: ArticleFeature[];


  @ManyToMany(type => Feature, feature => feature.articles)
  @JoinTable({
    name: 'article_feature',
    joinColumn: { name: 'article_id', referencedColumnName: 'articleId'},
    inverseJoinColumn: { name: 'feature_id', referencedColumnName: 'featureId'}
  })
  features: Feature[];


  @ManyToOne(() => Category, (category) => category.articles, {
    onDelete: "NO ACTION",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "category_id", referencedColumnName: "categoryId" }])
  category: Category;

  @OneToMany(() => CartArticle, (cartArticle) => cartArticle.article)
  cartArticles: CartArticle[];

}

