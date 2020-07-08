import React from "react";
import { Container, Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

export class ContactPage extends React.Component {
render() {
    return(
    <Container>
        <Card>
            <Card.Body>
                <Card.Title>
                    <FontAwesomeIcon icon={ faPhone } /> Contact details
                </Card.Title>
                <Card.Text>
                    Contact details soon...
                </Card.Text>
            </Card.Body>
        </Card>
  </Container>
    );
}

}