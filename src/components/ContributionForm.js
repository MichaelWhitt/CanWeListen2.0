import React from "react";
import { Form, Label, CustomInput, FormGroup, Input, Button } from "reactstrap";


export default class ContributionForm extends React.Component {
  render() {
    return (
      <Form className="mb-5" >

        <FormGroup>
        </FormGroup>

        <FormGroup>
          <Label for="exampleText"><b>User Name</b></Label>
          <Input onChange={this.props.handleChange} placeholder='User Name' type="text" name="author" id="authorName" minLength="4" maxLength="13" required/>
        </FormGroup>

        <FormGroup>
          <Label for="exampleCheckbox"><b>Recommend?</b></Label>
          <div >
            <CustomInput onChange={this.props.handleChange} type="radio" name="rec" value='Yes' id="exampleRadio1" label="Yes" />
            <CustomInput onChange={this.props.handleChange} type="radio" name="rec" value='No' id="exampleRadio2" label="No" />
          </div>
        </FormGroup>

        <FormGroup>
          <Label for="exampleCheckbox"><b>Rating</b></Label>
          <div className="d-flex">
            <CustomInput onChange={this.props.handleChange} value={1} type="radio" id="exampleCustomRadio1" name="rating" label="1" className="mr-5" />
            <CustomInput onChange={this.props.handleChange} value={2} type="radio" id="exampleCustomRadio2" name="rating" label="2" className="mr-5" />
            <CustomInput onChange={this.props.handleChange} value={3} type="radio" id="exampleCustomRadio3" name="rating" label="3" className="mr-5" />
            <CustomInput onChange={this.props.handleChange} value={4} type="radio" id="exampleCustomRadio4" name="rating" label="4" className="mr-5" />
            <CustomInput onChange={this.props.handleChange} value={5} type="radio" id="exampleCustomRadio5" name="rating" label="5" className="mr-5" />
          </div>
        </FormGroup>

        <FormGroup>
          <Label for="exampleCustomFileBrowser"><b>Attach Photo?</b></Label>
          <CustomInput type="file" id="exampleCustomFileBrowser" name="customFile" />
        </FormGroup>

        <FormGroup>
          <Label for="exampleText"><b>Comments</b></Label>
          <Input onChange={this.props.handleChange} type="textarea" name="text" id="exampleText" />
        </FormGroup>
        
        <Button color="success" onClick={this.props.handleClick}>Submit</Button>
      </Form>
    );
  }
}

