import React from "react";
import { Card, CardTitle, CardHeader, CardBody, CardFooter, Col } from 'reactstrap';
import { COMMENTS } from "../shared/comments";
import Rating from 'react-rating';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons';

function UserContributions(props) {
  const comments = COMMENTS;
  const usersComments = comments.filter(item => item.author === props.author);
  const mapedComments = usersComments.map(comment => {
    return (
      <React.Fragment>
        <Col sm="4" className="mt-2">
          <Card class="w-50 p-3 mb-2">
            <CardHeader>
              <CardTitle className='font-weight-bold'>
                {comment.author}
              </CardTitle>
            </CardHeader> 
            <CardBody>
              <div>
                <div><b>Recommend:</b> {comment.rec}</div>
                <Rating
                  readonly
                  emptySymbol={<FontAwesomeIcon size="md" color='#264653ff' icon={faStar} />}
                  fullSymbol={<FontAwesomeIcon size="md" color='#e9c46aff' icon={faStar} />}
                  initialRating={comment.rating}
                />
              </div>
              {comment.text}
            </CardBody>
            <CardFooter className="text-right bg-white p-1">Posted: {comment.date}</CardFooter>
          </Card>
        </Col>
      </React.Fragment>
    )
  });
  return mapedComments;
}

export default UserContributions;