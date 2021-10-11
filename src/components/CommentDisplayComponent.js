import React from 'react';
import Rating from 'react-rating';
import Avatar from 'react-avatar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { Toast, ToastHeader, ToastBody } from 'reactstrap';
import { COMMENTS } from '../shared/comments';
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, CardHeader } from 'reactstrap';


function CommentDisplay() {
    const comments = COMMENTS;
    shuffle(comments);

    //Shuffle Function for the comments
    function shuffle(array) {
        let currentIndex = array.length, randomIndex;
        // While there remain elements to shuffle...
        while (currentIndex != 0) {
            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            // And swap it with the current element.
            [array[currentIndex], array[randomIndex]] = [
                array[randomIndex], array[currentIndex]];
        }
        return array;
    }


    return (
        comments.map(comment => (
            <React.Fragment>

                {/* <Toast className='m-2'>
                    <ToastHeader icon={<img src='https://retailx.com/wp-content/uploads/2019/12/iStock-476085198.jpg' width="50px" height="50px" />}>
                        {comment.author}
                        <div>Level {comment.level} Contributor</div>
                    </ToastHeader>
                    <ToastBody>
                        <div>
                            <Rating
                                readonly
                                emptySymbol={<FontAwesomeIcon size="md" color='#264653ff' icon={faStar} />}
                                fullSymbol={<FontAwesomeIcon size="md" color='#e9c46aff' icon={faStar} />}
                                initialRating={comment.rating}
                            />
                        </div>
                        {comment.text}
                    </ToastBody>
                </Toast> */}

                <Card class="w-50 p-3">
                    <CardHeader>
                        <Avatar size="50" src='https://retailx.com/wp-content/uploads/2019/12/iStock-476085198.jpg' />
                        <div><strong>{comment.author}</strong></div>
                        <div>Level {comment.level} Contributor</div>
                    </CardHeader>
                    <CardBody>
                        <div>
                            <Rating
                                readonly
                                emptySymbol={<FontAwesomeIcon size="md" color='#264653ff' icon={faStar} />}
                                fullSymbol={<FontAwesomeIcon size="md" color='#e9c46aff' icon={faStar} />}
                                initialRating={comment.rating}
                            />
                        </div>
                        {comment.text}</CardBody>
                </Card>
            </React.Fragment>
        ))

    );
}


export default CommentDisplay;