import React from 'react';
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Jumbotron, Button, Container, Row } from 'reactstrap';
import Rating from 'react-rating';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons';
import CommentDisplay from './CommentDisplayComponent';
import Col from 'reactstrap/lib/Col';


function ClickDisplay(props) {
    const data = props.location.state.info;
    const rating = props.location.state.rating;
    console.log(data);

    return (
        <Container>
            <Jumbotron className="px-5">
                <h1 className="display-3">{data.poi.name}</h1>
                <p className="lead">{data.address.freeformAddress} |
                    <Rating className=""
                        readonly
                        emptySymbol={<FontAwesomeIcon size="lg" color='#264653ff' icon={faStar} />}
                        fullSymbol={<FontAwesomeIcon size="lg" color='#e9c46aff' icon={faStar} />} initialRating={rating}
                    />
                </p>
                <hr className="my-2 lead" />
                <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
            </Jumbotron>
            <Row className="justify-content-center">
                    <Col></Col>
                    <Col><CommentDisplay/></Col>
            </Row>
        </Container>
    );
}

export default ClickDisplay;