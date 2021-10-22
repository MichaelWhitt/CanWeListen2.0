import React from 'react';
import Rating from 'react-rating';
import Avatar from 'react-avatar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { COMMENTS } from '../shared/comments';
import { Card, CardBody, CardTitle, CardHeader, CardFooter } from 'reactstrap';


function CommentDisplay(props) {
    // shuffle(comments);

    //Shuffle Function for the comments
    // function shuffle(array) {
    //     let currentIndex = array.length, randomIndex;
    //     // While there remain elements to shuffle...
    //     while (currentIndex != 0) {
    //         // Pick a remaining element...
    //         randomIndex = Math.floor(Math.random() * currentIndex);
    //         currentIndex--;
    //         // And swap it with the current element.
    //         [array[currentIndex], array[randomIndex]] =
    //             [array[randomIndex], array[currentIndex]];
    //     }
    //     return array;
    // }

    return (
        props.comments.map(comment => (
            <React.Fragment>
                <Card class="w-50 p-3 mb-2">
                    <CardHeader>
                        <Avatar size="50" src='https://retailx.com/wp-content/uploads/2019/12/iStock-476085198.jpg' />
                        <CardTitle className='font-weight-bold'>
                            <Link
                                to={{
                                    pathname: "/userpage",
                                    state: { data:comment },
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
        ))
    );
}


export default CommentDisplay;