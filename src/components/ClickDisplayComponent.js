import React from 'react';
import { Jumbotron, Container, Row } from 'reactstrap';
import Rating from 'react-rating';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons';
import FormAndComments from './DisplayFormComments';


function ClickDisplay(props) {
    const data = props.location.state.info;
    const rating = props.location.state.rating;
    const randAccom = props.location.state.randAccom;
    // console.log(data);

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
                <p></p>
            </Jumbotron>
            <Row className="justify-content-center">
                <FormAndComments data={props} ranrandAccom={randAccom}/>
            </Row>
        </Container>
    );
}

export default ClickDisplay;