import React from 'react'
import './Review.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import ReviewCard from '../ReviewCard/ReviewCard'
import { ReviewsData } from '../ReviewsData'
import { Item, Rating } from 'semantic-ui-react'

function Review() {
    return (
        <div className="review">
            {/* heading */}
            <span>Recent Reviews</span>

            {/* slider */}
            <Swiper
                spacebetween={20}
                slidesPerView={3}
                grabCursor={true}
                className='review-slider'
            >
                {ReviewsData.map((review, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <div className='review-card'>
                                <div className="review-item">
                                    <div class="card">
                                        <div class="content">
                                            <img class="right floated mini ui image" src={review.image} />
                                            <div class="header">
                                                {review.name}
                                            </div>
                                            <div class="star-ratings">
                                                <Rating defaultRating={review.ratingCount} maxRating={5} disabled />
                                                <span>{review.date}</span>
                                            </div>
                                            <br />
                                            <div class="description">
                                                {review.description}
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </div>
    )
}

export default Review