import React from "react";

interface CartState {
    count: number;
    visible: boolean;
    message: string;
    cartMenuColor: string;
}

export default class Cart extends React.Component {

    constructor(props: Readonly<{}>) {
        super(props);

        this.state = {
            count: 0,
            visible: false,
            message: '',
            cartMenuColor: '#000000'
        };
    }
}