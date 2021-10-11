import React from 'react';
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Jumbotron, Button, Container, Row } from 'reactstrap';
import Rating from 'react-rating';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons';
import CommentDisplay from './CommentDisplayComponent';


function ClickDisplay(props) {
    const data = props.location.state.info;
    const rating = props.location.state.rating;
    console.log(data);

    return (
        <Container>
            <Jumbotron>
                <h1 className="display-3">{data.poi.name}</h1>
                <p className="lead">{data.address.freeformAddress} |
                    <Rating className="ml-3"
                        readonly
                        emptySymbol={<FontAwesomeIcon size="lg" color='#264653ff' icon={faStar} />}
                        fullSymbol={<FontAwesomeIcon size="lg" color='#e9c46aff' icon={faStar} />} initialRating={rating}
                    />
                </p>
                <hr className="my-2" />
                <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                <p className="lead">    </p>
            </Jumbotron>
            <Row>
                <CommentDisplay />
            </Row>
        </Container>
    );
}

export default ClickDisplay;