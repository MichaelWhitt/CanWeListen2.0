import React from 'react';
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import Rating from 'react-rating';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons';



function SearchResults(props) {
    // console.log(props.data);
    const data = props.data;
    //Current rands for generating location info
    const randRating = Math.floor((Math.random() * 5) + 1);
    const randComp = Math.random() < 0.6;
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
            <Card key={data.id}>
                <CardBody className="searchResultCard">
                    <CardImg src="https://via.placeholder.com/468x60?text=Place+Holder+Image" />
                    <CardTitle className='mt-3'>{data.poi.name}</CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">{data.poi.phone}</CardSubtitle>

                    <CardText>ADA Title III Compliance: {randBool() === true ? 'Yes' : 'No'}</CardText>
                    <CardText>Accommodation: {randBool() === true ? 'Yes' : 'No'}</CardText>
                    <CardText>
                        Accommodations Available:
                        {randBool() === true ? <li className='ml-3'>Assisted Listening Device</li> : ''}
                        {randBool() === true ? <li className='ml-3'>Closed Caption Device</li> : ''}
                    </CardText>
                    <CardText>Accommodation Type:
                        {randBool() === true ? <li className='ml-3'> CCD - Handheld, Cupholder, On-Screen, Glasses </li> : ''}
                        {randBool() === true ? <li className='ml-3'> ALD - In-ear, Over-Ear,  Personal Hearing Device Pairing</li> : ''}
                    </CardText>
                    <CardText>Accommodation Rating: <Rating
                        readonly
                        emptySymbol={<FontAwesomeIcon size="lg" color='#264653ff' icon={faStar} />}
                        fullSymbol={<FontAwesomeIcon size="lg" color='#e9c46aff' icon={faStar} />} initialRating={randRating}
                    /></CardText>
                    <Link
                        to={{
                            pathname: "/searchItemDisplay",
                            state: { info: data, rating: randRating },
                            hash: data.id
                        }}>
                        <Button className="btn-lg">More Info</Button>
                    </Link>
                </CardBody>
            </Card>
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
