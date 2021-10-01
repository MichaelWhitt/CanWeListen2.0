import React from 'react';
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText } from 'reactstrap';
import { services } from '@tomtom-international/web-sdk-services';

function ResultItem(props) {
    const data = props.data;
    const searchItems = [];

    function imgFromSearch(imgId) {
        services.poiDetails({
            baseUrl: "api.tomtom.com",
            versionNumber: "2",
            ext: "JSON",
            key: "OTesSbZQ5Tvq0TUHV8gKbv2ecpFPAaz2",
            id: imgId
        })
            .then(response => {
                const imgData = services.poiPhotos({
                    key: "OTesSbZQ5Tvq0TUHV8gKbv2ecpFPAaz2",
                    id: response.result.photos[0].id
                })
                return imgData
            })
            .then( imgURL => {
                return imgURL;
            })
    }

    function checkforImg(dataInt) {
        if (dataInt.hasOwnProperty('dataSources')) {
            imgFromSearch(dataInt.dataSources.poiDetails[0].id);
        }
    }

    for (let i = 0; i < data.length; i++) {

        const imgUrlData = checkforImg(data[i])
        console.log(imgUrlData);

        searchItems.push(
            <React.Fragment>
                <Card id={data[i].id}>
                    <CardBody>
                        <CardImg src={imgUrlData} />
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

