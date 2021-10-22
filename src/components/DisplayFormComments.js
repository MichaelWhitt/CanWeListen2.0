import React, { Component } from "react";
import CommentDisplay from './CommentDisplayComponent';
import AddContributionForm from './AddContributionForm';
import { Card, CardBody, CardHeader, CardText, Col, Button, UncontrolledCollapse } from 'reactstrap';
import ContributionForm from "./ContributionForm";
import { COMMENTS } from "../shared/comments";


class FormAndComments extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: 12,
            level: 1,
            rating: 0,
            text: " ",
            author: " ",
            date: new Date().toLocaleString('en-US'),
            rec: " ",
            storageComments: COMMENTS
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleClick = (e) => {
        e.preventDefault()

        //Grab local storage
        const localStoreComments = JSON.parse(localStorage.getItem('comments'));
        // console.log(localStoreComments);

        //Copy current state info
        const newComment = {
            id: this.state.id,
            level: this.state.level,
            rating: this.state.rating,
            text: this.state.text,
            author: this.state.author,
            date: this.state.date,
            rec: this.state.rec
        };
        // console.log('New Created Comment: ' + newComment);

        //Add new comment into the storage copy
        localStoreComments.unshift(newComment);
        // console.log(localStoreComments);

        //Push updated comment array into the store
        localStorage.setItem('comments', JSON.stringify(localStoreComments));

        //Update the comments stored in the state
        this.setState(this.state.storageComments = localStoreComments);
    };


    render() {
        const randAccom = this.props.randAccom;
        const currComments = this.state.storageComments;
        return (
            <React.Fragment>
                <Col>
                    <Card>
                        <CardText>ADA Title III Compliance: {randAccom === true ? 'Yes' : 'No'}</CardText>
                        <CardText>
                            Accommodations Available:
                            {randAccom === true ? <li className='ml-3'>Assisted Listening Device</li> : ''}
                            {randAccom === true ? <li className='ml-3'>Closed Caption Device</li> : ''}
                        </CardText>
                        <CardText>Accommodation Type:
                            {randAccom === true ? <li className='ml-3'> CCD - Handheld, Cupholder, On-Screen, Glasses </li> : ''}
                            {randAccom === true ? <li className='ml-3'> ALD - In-ear, Over-Ear,  Personal Hearing Device Pairing</li> : ''}
                        </CardText>
                    </Card>
                    <div style={{ textAlign: 'center' }}>
                        <Button color="success" id="toggler" className="mt-5">
                            Add Contribution
                        </Button>
                        <UncontrolledCollapse toggler="#toggler">
                            <ContributionForm handleClick={this.handleClick} handleChange={this.handleChange} />
                        </UncontrolledCollapse>
                    </div>
                </Col>
                <Col>
                    <CommentDisplay comments={currComments} />
                </Col>
            </React.Fragment>
        );
    }
}

export default FormAndComments;