import React from "react";
import { Form } from "reactstrap";

const EditForm = ({props}) => {
    

    const submitEmail = (e) => {
        e.preventDefault();
        console.log(e)
        console.log(e.target)
        console.log(e.target.value)
    }
    return(
        <>  
            <Form>
                <input type="text" name="emailInputName" placeholder={props.ph}></input>
                <button type="submit" onClick={(e)=> submitEmail(e)}>Submit</button>
            </Form>
        </>
    )
}

export default EditForm;