import React from 'react';
import Rating from 'react-rating';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { Toast, ToastHeader, ToastBody } from 'reactstrap';
import { COMMENTS } from '../shared/comments';

function CommentDisplay() {
    const comments = COMMENTS;
    shuffle(comments);
    console.log(comments);

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
                <Toast>
                    <ToastHeader icon={<img src='https://retailx.com/wp-content/uploads/2019/12/iStock-476085198.jpg' width="100px" height="100px"/>}>
                        {comment.author}
                    </ToastHeader>
                    <ToastBody>
                        <div>
                            <Rating className="ml-3"
                                readonly
                                emptySymbol={<FontAwesomeIcon size="md" color='#264653ff' icon={faStar} />}
                                fullSymbol={<FontAwesomeIcon size="md" color='#e9c46aff' icon={faStar} />} initialRating={comment.rating}
                            />
                        </div>
                        {comment.text}
                    </ToastBody>
                </Toast>
            </React.Fragment>))

    );
}


export default CommentDisplay;