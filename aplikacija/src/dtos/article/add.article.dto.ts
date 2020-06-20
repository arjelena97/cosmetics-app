

export class AddArticleDto { 
    name: string;
    categoryId: number;
    description: string;
    ArticlePrice: number;
    features: {
        featureId: number;
        value: string;
    }[];
}



