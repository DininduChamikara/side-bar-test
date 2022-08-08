import React from 'react'
import './ReviewCard.css'
import testImage from '../../img/statusq-icon.png'
import { Item, Rating } from 'semantic-ui-react'
import { ReviewsData } from '../ReviewsData'

function ReviewCard() {
    return (
        <div className='review-card'>
            <div className="review-item">
                <div class="card">
                    <div class="content">
                        <img class="right floated mini ui image" src={testImage} />
                        <div class="header">
                            Jenny Hess
                        </div>
                        <div class="star-ratings">
                            <Rating defaultRating={3} maxRating={5} disabled />
                            <span>20/12/2019</span>
                        </div>
                        <br/>
                        <div class="description">
                            A usefull web application. I love the features. Highly Recomonded.
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )

    // {
    //     ReviewsData.map((item, index) => {
    //         return (
    //             <div key={index} className='review-card'>
    //                 <div className="review-item">
    //                     <div class="card">
    //                         <div class="content">
    //                             <img class="right floated mini ui image" src={item.image} />
    //                             <div class="header">
    //                                 {item.name}
    //                             </div>
    //                             <div class="star-ratings">
    //                                 <Rating defaultRating={item.ratingCount} maxRating={5} disabled />
    //                                 <span>{item.date}</span>
    //                             </div>
    //                             <br />
    //                             <div class="description">
    //                                 {item.description}
    //                             </div>
    //                         </div>

    //                     </div>
    //                 </div>
    //             </div>
    //         )
    //     })
    // }


}

export default ReviewCard