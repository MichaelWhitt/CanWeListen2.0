import React from "react";
import { Form, Label, CustomInput, FormGroup, Input, Button } from "reactstrap";


export default class ContributionForm extends React.Component {
    state={venue: "venue name from state"};

    render() {
      return (
        <Form className="mb-5">

          <FormGroup>
            
        </FormGroup>
          
          <FormGroup>
          <Label for="exampleCheckbox"><b>Recommend?</b></Label>
          <div>
            <CustomInput type="radio" name="recoRadio" id="exampleRadio1" label="Yes" />
            <CustomInput type="radio" name="recoRadio" id="exampleRadio2" label="No" />
          </div>
        </FormGroup>

        <FormGroup>
          <Label for="exampleCheckbox"><b>Rating</b></Label>
          <div className="d-flex">
            <CustomInput type="radio" id="exampleCustomRadio1" name="customRadio" label="1" className="mr-5"/>
            <CustomInput type="radio" id="exampleCustomRadio2" name="customRadio" label="2" className="mr-5"/>
            <CustomInput type="radio" id="exampleCustomRadio3" name="customRadio" label="3" className="mr-5"/>
            <CustomInput type="radio" id="exampleCustomRadio4" name="customRadio" label="4" className="mr-5"/>
            <CustomInput type="radio" id="exampleCustomRadio5" name="customRadio" label="5" className="mr-5"/>
          </div>
        </FormGroup>
         
          <FormGroup>
            <Label for="exampleCustomFileBrowser"><b>Attach Photo?</b></Label>
            <CustomInput type="file" id="exampleCustomFileBrowser" name="customFile" />
          </FormGroup>
          <FormGroup>
            <Label for="exampleText"><b>Comments</b></Label>
            <Input type="textarea" name="text" id="exampleText" />
        </FormGroup>
        <Button color="success" onClick={() => {this.setState({venue: "updated state"})}}>Submit</Button>
        </Form>
      );
    }
  }