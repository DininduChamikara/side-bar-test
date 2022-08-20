import React, { useState } from 'react'
import {
    Form,
    Dropdown,
    Input,
    Button,
} from 'semantic-ui-react'
import * as BsIcons from "react-icons/bs";
import './AdvertisementDetailsInputForm.css'
import DragAndDrop from './SubComponents/DragAndDrop/DragAndDrop';

const AdvertisementDetailsInputForm = props => {

    const viewsAmountOptions = [
        { key: '#', text: '1000', value: '1000' },
        { key: '#', text: '2000', value: '2000' },
        { key: '#', text: '3000', value: '3000' },
        { key: '#', text: '4000', value: '4000' },
    ]

    const viewsAmountFromEachOptions = [
        { key: '#', text: '50', value: '1000' },
        { key: '#', text: '100', value: '2000' },
        { key: '#', text: '200', value: '3000' },
        { key: '#', text: '500', value: '4000' },
    ]

    return (
        <div>
            <div className="page-top">
                <div className='page-heading'>
                    <h2>Client View <span><BsIcons.BsPersonBoundingBox /></span></h2>
                </div>
                <div className='center'>
                    <div className='center-heading-cre-camp'>
                        <h2>Create Campaign</h2>
                    </div>
                </div>
            </div>
            <Form>
                <DragAndDrop />
                <br />
                <div className="box">
                    <div className="form-field">
                        <div className="field-title">
                            <span>Select the required amount of views</span>
                        </div>
                        <div className="iconed_input">
                            <Dropdown
                                button
                                className='icon'
                                floating
                                labeled
                                icon='eye'
                                options={viewsAmountOptions}
                                search
                                placeholder='Required amount of views'
                            />
                        </div>

                    </div>
                    <br />
                    <div className="form-field">
                        <div className="field-title">
                            <span>Required Payment</span>
                        </div>
                        <Input icon='money bill money outline' placeholder='Rs. 0,000.00 /=' readOnly className='iconed_input' />
                    </div>
                    <br /><br />
                    <div className="form-field">
                        <div className="field-title">
                            <span>Select the required amount of views from each promoter</span>
                        </div>
                        <div className="iconed_input">
                            <Dropdown
                                button
                                className='icon'
                                floating
                                labeled
                                icon='eye'
                                options={viewsAmountFromEachOptions}
                                search
                                placeholder='Required views from each promoter'
                            />
                        </div>

                    </div>
                    <br />
                    <div className="form-field">
                        <div className="field-title">
                            <span>Number of promoters required</span>
                        </div>
                        <Input icon='users' placeholder='0' readOnly className='iconed_input' />
                    </div>
                </div>


                <div className='button-div-3'>
                    <Button onClick={() => props.setClientViewNum(1)} content='Go Back' negative />
                    <Button onClick={() => props.setClientViewNum(3)} content='Continue' positive />
                    <Button content='Reset' secondary />
                </div>
            </Form>
        </div>
    )
}

export default AdvertisementDetailsInputForm