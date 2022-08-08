import React from 'react';

import { Divider, Grid, Image, Segment } from 'semantic-ui-react';

import image_slider_1 from '../../img/instruction_1.jpg';
import image from '../../img/statusq-main-image.png';

import SimpleImageSlider from "react-simple-image-slider";

import './Home.css';
import Review from '../../components/Review/Review';
import * as AiIcons from "react-icons/ai";

function Home() {

    const images = [
        { url: image_slider_1 },
        { url: image_slider_1 },
        { url: image_slider_1 },
        { url: image_slider_1 },
    ];

    return (
        <div className='home'>
            <div className='page-heading'>
                <h2>Home <span><AiIcons.AiFillHome /></span></h2>
            </div>
            <div>
                <Segment className='seg'>
                    <Grid columns={3} relaxed='very'>
                        <Grid.Column width="10">
                            <div>
                                <SimpleImageSlider className='image-slider'
                                    width={800}
                                    height={450}
                                    images={images}
                                    showBullets={true}
                                    showNavs={true}
                                />
                            </div>
                        </Grid.Column>
                        <Grid.Column width="6">
                            <div className="image">
                                <div className='circle'></div>
                                <img src={image} alt="" className="main-image" />
                            </div>

                        </Grid.Column>
                    </Grid>

                    {/* <Divider className='divider' vertical></Divider> */}
                </Segment>
            </div>
            <br />

            <Review/>

        </div>
    )
}

export default Home;