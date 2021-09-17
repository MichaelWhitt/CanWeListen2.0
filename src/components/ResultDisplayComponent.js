import React from 'react';
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText } from 'reactstrap';
import { services } from '@tomtom-international/web-sdk-services';

function ResultItem(props) {
    const data = props.data;
    const searchItems = [];
    console.log(data)

    for (let i = 0; i < data.length; i++) {
        searchItems.push(
            <React.Fragment>
                <Card id={data[i].id}>
                    <CardBody>
                        <CardTitle tag="h5">{data[i].poi.name}</CardTitle>
                        <CardSubtitle tag="h6" className="mb-2 text-muted">{data[i].poi.phone}</CardSubtitle>
                        <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                    </CardBody>
                </Card>
            </React.Fragment>
        );
    }
    return (searchItems);
}

export default ResultItem;

