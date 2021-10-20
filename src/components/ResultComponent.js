import React from 'react';
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Button, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import Rating from 'react-rating';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAssistiveListeningSystems, faAudioDescription, faClosedCaptioning, faStar } from '@fortawesome/free-solid-svg-icons';



function SearchResults(props) {
    // console.log(props.data);
    const data = props.data;

    //Current rands for generating location info
    const randRating = Math.floor((Math.random() * 5) + 1);
    //Decides if there is accommodations randomly.
    const randAccom = Math.random() < 0.6;

    function randBool() {
        return Math.random() < 0.6;
    }


    //-Search for additional details, but most results don't have the needed info ID number-
    // async function poiDetailSearch() {
    //     const poiSearch = await services.poiDetails({
    //         baseUrl: "api.tomtom.com",
    //         versionNumber: "2",
    //         ext: "JSON",
    //         key: "OTesSbZQ5Tvq0TUHV8gKbv2ecpFPAaz2",
    //         id: data.id
    //     })
    //     return console.log(poiSearch);
    // }
    // poiDetailSearch();


    return (
        <React.Fragment>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <Card key={data.id} style={{ width: "80%" }} id="resultCard">
                    <CardBody className="searchResultCard" style={{ padding: "1rem", paddingTop: 0 }}>
                        <CardTitle className="mt-2" style={{ fontSize: "2rem" }}>{data.poi.name}</CardTitle>
                        <hr />
                        <Row>
                            <Col>
                                <CardText>
                                    <Rating
                                        readonly
                                        emptySymbol={<FontAwesomeIcon size="lg" color='#264653ff' icon={faStar} />}
                                        fullSymbol={<FontAwesomeIcon size="lg" color='#e9c46aff' icon={faStar} />} initialRating={randRating}
                                    />
                                </CardText>
                                <CardSubtitle tag="h6" className="mb-2 text-muted">{data.poi.phone}</CardSubtitle>
                                <CardText>
                                    <FontAwesomeIcon size="lg" icon={faAssistiveListeningSystems} /> : {randAccom === true ? 'Hearing Accomodation' : 'No Hearing Accomodation'}
                                </CardText>
                                <CardText>
                                    <FontAwesomeIcon size="lg" icon={faClosedCaptioning} /> : {randAccom === true ? 'Has Closed Captioning' : 'No Closed Captioning'}
                                </CardText>
                                <CardText>
                                    <FontAwesomeIcon size="lg" icon={faAudioDescription} /> : {randAccom === true ? 'Has Audio Description' : 'No Audio Description'}
                                </CardText>

                                <Link
                                    to={{
                                        pathname: "/searchItemDisplay",
                                        state: { info: data, rating: randRating, randAccom: randAccom },
                                        hash: data.id
                                    }}>
                                    <Button className="btn-md btn-info">More Info</Button>
                                </Link>
                            </Col>
                            <Col>
                                <div style={{ display: "flex", justifyContent: "center" }}>
                                    <CardImg className="" style={{ width: "200px", height: "200px", objectFit: "cover" }} src="https://michaeldwhitt.com/wp-content/uploads/2021/09/130959244_10160679891353102_6674840354884251335_n.jpg" />
                                </div>
                            </Col>
                        </Row>
                    </CardBody>
                </Card>
            </div>
        </React.Fragment>
    );
}

export default SearchResults;

// A fake rating for card rendered (2-5 stars),
// ADA Title III Compliance: Yes/No/Unknown
// Accommodation: Yes/No
// Accommodation Avail: Closed Caption Device/ Assisted Listening Device
// Accommodation Type: CCD - Handheld, Cupholder, On-Screen, Glasses | ALD - In-ear, Over-Ear,  Personal Hearing Device Pairing
// Accommodation Rating: 1-5
