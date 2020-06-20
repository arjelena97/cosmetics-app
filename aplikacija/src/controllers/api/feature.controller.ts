import { Controller, UseGuards, Get, Param } from "@nestjs/common";
import { Crud, Feature } from "@nestjsx/crud";
import { FeatureService } from "src/services/feature/feature.service";


@Controller('api/feature')
@Crud({
    model: {
        type: Feature
    },
    params: {
        id: {
            field: 'featureId',
            type: 'number',
            primary: true
        }
    },
    query: {
        join: {
            category: {
                eager: true
            },
            articleFeatures: {
                eager: false
            },
            articles: {
                eager: false
            }
        }
    },
 
})
export class FeatureController {
    constructor(public service: FeatureService) { }
}
