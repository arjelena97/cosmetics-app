import { Injectable } from "@nestjs/common";
import { TypeOrmCrudService } from "@nestjsx/crud-typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

import { Feature } from "src/entities/feature.entity";
import { ArticleFeature } from "src/entities/article-feature.entity";


@Injectable()
export class FeatureService extends TypeOrmCrudService<Feature> {
    constructor(
        @InjectRepository(Feature) private readonly feature: Repository<Feature>,
        @InjectRepository(ArticleFeature) private readonly articleFeature: Repository<ArticleFeature>,
    ) {
        super(feature);
    }

}
