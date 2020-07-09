import React from "react";
import CategoryType from "../../types/CategoryType";

interface AdministratorDashboardCategoryState {
    isAdministratorLoggedIn: boolean;
    categories: CategoryType[];

    addModal: {
        visible: boolean;
        name: string;
        imagePath: string;
        message: string;
    };

    editModal: {
        categoryId: number;
        visible: boolean;
        name: string;
        imagePath: string;
        message: string;
    };
}

export default class AdministratorDashboardCategory extends React.Component {
    state: AdministratorDashboardCategoryState;

    constructor(props: Readonly<{}>) {
        super(props);

        this.state = {
            isAdministratorLoggedIn: true,
            categories: [],

            addModal: {
                visible: false,
                name: '',
                imagePath: '',
                message: '',
            },

            editModal: {
                categoryId: 0,
                visible: false,
                name: '',
                imagePath: '',
                message: '',
            },
        };
    }
    
}