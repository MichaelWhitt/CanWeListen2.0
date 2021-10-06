import React from 'react';
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import ClickDisplay from './ClickDisplayComponent';


function SearchResults(props) {
    // console.log(props.data);
    const data = props.data;

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
                <CardBody>
                    <CardImg src="https://via.placeholder.com/468x60?text=Place+Holder+Image" />
                    <CardTitle tag="h5">{data.poi.name}</CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">{data.poi.phone}</CardSubtitle>
                    <CardText>ADA Title III Compliance: Yes/No/Unknown</CardText>
                    <CardText>Accommodation: Yes/No</CardText>
                    <CardText>Accommodation Avail: Closed Caption Device/ Assisted Listening Device</CardText>
                    <CardText>Accommodation Type: CCD - Handheld, Cupholder, On-Screen, Glasses | ALD - In-ear, Over-Ear,  Personal Hearing Device Pairing</CardText>
                    <CardText>Accommodation Rating: 1-5</CardText>
                    <Link
                        to={{
                            pathname: "/searchItemDisplay",
                            state: { info: data },
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
