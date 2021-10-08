// import React from 'react';
// import { Col, Container, Row, Button } from 'reactstrap';
// import { Component } from 'react';

// class AccountInfo extends Component {
//   constructor(props){
//     super(props);
//     this.state = {
//       email: "connect@michaeldwhitt.com",
//       location: "",
//       phone: "",
//       selected: false,
//       contributions: 0,
//       level: 0,
//       contributionsToLevel: 0
//     }
//   }

//   onEmailSubmit = (event) => {
//     console.log(event)
//     console.log(event.target)
//     console.log(event.target.value)
//     event.preventDefault();
//     // alert(`Updated Email: ${this.state.email}`)
//   }

//   onLocationSubmit = (event) => {
//     event.preventDefault();
//     alert(`Updated Location: ${this.state.location}`)
//   }

//   onPhoneSubmit = (event) => {
//     event.preventDefault();
//     alert(`Updated Phone: ${this.state.phone}`)
//   }

//   render(){
//   return (
//     <div> 
//         <div>
//           <Row>
//             <Col sm="12">
//                 <Container className="mt-5">
//                     <Row>
//                         <hr/>
//                         <Col sm="5" ><b >Email: </b></Col>
//                         <Col sm="5"  id="emailText">{this.state.email === "" ? <input type='text' ></input> : this.state.email }</Col>
//                         <Col sm="2" className="pb-2" id="emailDiv" >
//                           <Button className="btn btn-sm" color="primary" id='emailEdit' >Edit</Button>
//                         </Col>
//                     </Row>
//                     <Row>
//                         <hr/>
//                         <Col sm="5"><b>Location:</b></Col>
//                         <Col sm="5"  id="locationText">{this.state.location}</Col>
//                         <Col sm="2" className="pb-2" id="locationDiv"><Button className="btn btn-sm" color="primary" id="locationEdit" onclick="changeLocation()">Edit</Button></Col>
//                     </Row>
                    
//                     <Row>
//                         <hr/>
//                         <Col sm="5"><b>Phone:</b></Col>
//                         <Col sm="5"  id="phoneText">
//                             {this.state.phone}
//                         </Col>
//                         <Col sm="2" className="pb-2" id="phoneText"><Button className="btn btn-sm" color="primary" id="phoneEdit" onclick="changePhone()">Edit</Button></Col>
//                         <hr/>
//                     </Row>
//                 </Container>
//             </Col>
//           </Row>
//         </div>

        
//     </div>
    
//   );
// }
// }

// export default AccountInfo;