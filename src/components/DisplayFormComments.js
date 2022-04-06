import React, { Component } from "react";
import CommentDisplay from "./CommentDisplayComponent";
import {
  Card,
  CardHeader,
  CardText,
  Col,
  Button,
  UncontrolledCollapse,
} from "reactstrap";
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
      date: new Date().toLocaleString("en-US"),
      rec: " ",
      storageComments: COMMENTS,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleClick = (e) => {
    e.preventDefault();

    //Grab local storage
    const localStoreComments = JSON.parse(localStorage.getItem("comments"));

    //Copy current state info
    const newComment = {
      id: this.state.id,
      level: this.state.level,
      rating: this.state.rating,
      text: this.state.text,
      author: this.state.author,
      date: this.state.date,
      rec: this.state.rec,
    };

    //Add new comment into the storage copy
    localStoreComments.unshift(newComment);

    //Push updated comment array into the store
    localStorage.setItem("comments", JSON.stringify(localStoreComments));

    //Update the comments stored in the state
    this.setState((this.state.storageComments = localStoreComments));
  };

  render() {
    const randAccom = this.props.randAccom;
    const currComments = this.state.storageComments;
    return (
      <React.Fragment>
        <Col>
          <Card className="pb-4">
            <CardHeader tag="h5">Currently Available Accommodations</CardHeader>
            <CardText tag="h6" className="m-3">
              ADA Title III Compliance:{" "}
              {randAccom === true ? (
                <li className="ml-3">Yes</li>
              ) : (
                <li className="ml-3">No</li>
              )}
            </CardText>
            <CardText tag="h6" className="m-3">
              Accommodations Available:
              {!randAccom && <li className="ml-3">None</li>}
              {randAccom && <li className="ml-3">Assisted Listening Device</li>}
              {randAccom && <li className="ml-3">Closed Caption Device</li>}
            </CardText>
            <CardText tag="h6" className="m-3">
              Accommodation Type:
              {!randAccom && <li className="ml-3">None</li>}
              {randAccom && (
                <li className="ml-3">
                  CCD - Handheld, Cupholder, On-Screen, Glasses
                </li>
              )}
              {randAccom && (
                <li className="ml-3">
                  ALD - In-ear, Over-Ear, Personal Hearing Device Pairing
                </li>
              )}
            </CardText>
          </Card>
          <div style={{ textAlign: "center" }}>
            <Button color="success" id="toggler" className="mt-5">
              Add Comment
            </Button>
            <UncontrolledCollapse toggler="#toggler">
              <ContributionForm
                handleClick={this.handleClick}
                handleChange={this.handleChange}
              />
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
