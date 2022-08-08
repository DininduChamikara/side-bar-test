import React from 'react'
import * as BsIcons from "react-icons/bs";
import './ClientView.css'
import campaign_image from '../../img/campaigns.jpg';
import { Button } from 'semantic-ui-react'

function ClientView() {

    const onClickCreate = () => {
        window.location.href="/mainmenu/client-view/create_campaign_1";
    }

    return (
        <div className='client-view'>
            <div className='page-heading'>
                <h2>Client View <span><BsIcons.BsPersonBoundingBox /></span></h2>
            </div>

            <div className='center'>
                <div className='center-heading'>
                    <h2>Campaigns</h2>
                </div>
                <img src={campaign_image} alt="" className='campaign-image' />

                <p>Promote your Products or Services on Social Media</p>
                <p>Click on <a>Create New Campaigns</a> to launch an advertisement campaign
                    on a Social Media Platform for your product or service
                </p>
                <div className='button-div'>
                    <a href='mainmenu/client-view/create_campaign=1'>

                    </a>
                    <Button onClick={onClickCreate} content='Create New Campaign' primary />
                    <Button content='Ongoing Campaigns' secondary />
                </div>
            </div>
        </div>
    )
}

export default ClientView;