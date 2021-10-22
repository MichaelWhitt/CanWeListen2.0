//npm i @tomtom-international/web-sdk-maps
//npm i @tomtom-international/web-sdk-services

import React, { useEffect, useState } from 'react';
import '@tomtom-international/web-sdk-maps/dist/maps.css';
import tt from '@tomtom-international/web-sdk-maps';
import { services } from '@tomtom-international/web-sdk-services';
import { Row, Col, Container, ListGroup } from 'reactstrap';
import SearchResults from './ResultComponent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWatchmanMonitoring } from '@fortawesome/free-brands-svg-icons';
import { faHandPointLeft } from '@fortawesome/free-solid-svg-icons';



function DisplaySearch({ data }) {
    // console.log(data);
    if (data.length > 0) {
        return data.map((searchItem) => {
            // console.log(searchItem);
            return (
                <SearchResults key={searchItem.id} data={searchItem} />
            );
        })
    }
    else {
        return (
            <div />
        );
    }
}

function SearchPage() {
    //State
    const [searchName, setSearchName] = useState("");
    const [searchData, setSearchData] = useState([]);
    const [map, setMap] = useState(null);

    const APIKEY = "OTesSbZQ5Tvq0TUHV8gKbv2ecpFPAaz2";
    const mapCenter = [-97.733330, 30.266666];


    //tt.setProductInfo('<your-product-name>', '<your-product-version>');

    useEffect(() => {
        const createdMap = tt.map({
            key: APIKEY,
            container: "mapContainer",
            center: mapCenter,
            zoom: 14
        });
        setMap(createdMap);
    }, [])

    //Console log search data
    // useEffect(() => console.log(searchData), [searchData])

    // var moveMap = function (lnglat) {
    //     map.flyTo({
    //         center: lnglat,
    //         zoom: 14
    //     })
    // }

    const handleResults = async function (result) {
        if (result) {
            //Array to hold finished data
            const currData = [];
            for (let x = 0; x < result.results.length; x++) {

                //creates custom marker on map => {element: markerEl, anchor: 'center'} paste into tt.Marker
                // const markerEl = document.createElement('div');
                // markerEl.className = 'marker';
                // markerEl.style.backgroundImage = 'components/CanWeListen.png';

                const marker = new tt.Marker().setLngLat(result.results[x].position).addTo(map);

                currData.push(result.results[x]);

                // creates popup on map
                // var popupOffsets = {
                //     top: [0, 0],
                //     bottom: [0, -70],
                //     'bottom-right': [0, -70],
                //     'bottom-left': [0, -70],
                //     left: [25, -35],
                //     right: [-25, -35]
                // }

                // var popup = new tt.Popup({ offset: popupOffsets }).setHTML("your company name, your company address");
                // marker.setPopup(popup).togglePopup();
            }
            //Code to push the captured data to the state hook
            // console.log(currData);
            setSearchData(currData)
        }
    }

    //"Cinema" - most accurate term for TomTom


    const search = function () {
        
        if (searchName){
            services.poiSearch({
                key: APIKEY,
                query: searchName,
                boundingBox: map.getBounds()
            })
                .then(handleResults)
        } else {
            services.poiSearch({
                key: APIKEY,
                query: "Cinema",
                boundingBox: map.getBounds()
            })
                .then(handleResults)
        }
        
        
    }

    const handleInputChange = (event) => {
        setSearchName(event.target.value)
    }



    return (
        <Container fluid>
            <Row className="searchRow" id="searchDiv">
                <Col md className="px-0">
                    <div className="searchFieldBtn">
                        <input type="text" id="query" value={searchName} onChange={handleInputChange} placeholder='Ex: "Cinema"' />
                        <button onClick={search} id='searchBtn' autofill="off" autocomplete="off">Search</button>
                    </div>
                    <div id="mapContainer" className="mapContainer"></div>
                </Col>
                <Col md className="resultsList">
                    { searchData.length === 0 ? <div style={{textAlign: 'center'}}>
                        <FontAwesomeIcon icon={faWatchmanMonitoring}  id="lighthouseIcon"/> 
                        <div id="journey"><FontAwesomeIcon icon={faHandPointLeft} /> Start Your Journey</div>
                    </div>
                    : <DisplaySearch data={searchData} />  }
                </Col>
            </Row>
        </Container>
    )
}

export default SearchPage;