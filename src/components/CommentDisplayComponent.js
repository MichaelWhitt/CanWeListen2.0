import React from 'react';
import Rating from 'react-rating';
import Avatar from 'react-avatar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { Card, CardBody, CardTitle, CardHeader, CardFooter } from 'reactstrap';

function CommentDisplay(props) {
    return (
        props.comments.map(comment => (
            <React.Fragment>
                <Card class="w-50 p-3 mb-2">
                    <CardHeader>
                        <Avatar size="50" src={`https://ui-avatars.com/api/?background=6D1E20&color=f0e9e9&name=${comment.author}&size=50`} />
                        <CardTitle className='font-weight-bold'>
                            <Link
                                to={{
                                    pathname: "/userpage",
                                    state: { data: comment },
                                    hash: comment.author
                                }}>
                                {comment.author}
                            </Link>
                        </CardTitle>
                        <div>Level {comment.level} Contributor</div>
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
            </React.Fragment>
        )).slice(0,4)
    );
}


export default CommentDisplay;