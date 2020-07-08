import React from "react";
import { Card, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faListAlt } from "@fortawesome/free-solid-svg-icons";
import CategoryType from "../../types/CategoryType";

interface CategoryPageProperties {
    match: {
        params: {
            cId: number;
        }
    }
}

interface CategoryPageState {
    category?: CategoryType;
}

export default class CategoryPage extends React.Component<CategoryPageProperties> {
    state: CategoryPageState;

    constructor(props: Readonly<CategoryPageProperties>) {
        super(props);

        this.state = { };
        
    
 }
        render() {
            return (
                <Container>  
                    <Card>
                        <Card.Body>
                            <Card.Title>
                                <FontAwesomeIcon icon={ faListAlt } /> { this.state.category?.name }
                            </Card.Title>
                            <Card.Text>
                                Articles soon ...
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Container>
            );
        };

    }
