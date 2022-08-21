import React, { useState } from 'react'
import {
    Form, Button, Input, Divider,
} from 'semantic-ui-react'
import './SelectPaymentView.css'
import * as BsIcons from "react-icons/bs";
import CardPaymentView from '../CardPaymentView/CardPaymentView';
import PayOnEarningView from '../PayOnEarningView/PayOnEarningView';

const SelectPaymentView = props => {

    const [campaignCost, setCampaignCost] = useState(2000.00)
    const [systemFee, setSystemFee] = useState(campaignCost / 10);
    const [totoalCost, setTotalCost] = useState(campaignCost + systemFee)


    const [payMethodToggle, setPayMethodToggle] = useState(true)
    

    return (
        <div>
            <div className="page-top">
                <div className='page-heading'>
                    <h2>Client View <span><BsIcons.BsPersonBoundingBox /></span></h2>
                </div>
                <div className='center'>
                    <div className='center-heading-cre-camp'>
                        <h2>Payment Method</h2>
                    </div>
                </div>
            </div>
            <div className="box">
                <div className="form-field">
                    <div className="field-title">
                        <span>Advertisement Campaign Cost</span>
                    </div>
                    <Input icon='money bill money outline' placeholder={'Rs. ' + campaignCost + ' /='} readOnly className='iconed_input' />
                </div>
                <br />
                <div className="form-field">
                    <div className="field-title">
                        <span>System Fee (10%)</span>
                    </div>
                    <Input icon='money bill money outline' placeholder={'Rs. ' + systemFee + ' /='} readOnly className='iconed_input' />
                </div>
                <br />
                <div className="form-field">
                    <div className="field-title">
                        <span>Total Ad-Campaign Cost</span>
                    </div>
                    <Input icon='money bill money outline' placeholder={'Rs. ' + totoalCost + ' /='} readOnly className='iconed_input' />
                </div>
                <br />
            </div>
            <br />
            <Form>
                <div className="box">
                    <div className="choose-button">
                        <Form.Group inline>
                            <Button.Group size='large'>
                                <Button color='blue' onClick={() => setPayMethodToggle(true)}>Card Payment</Button>
                                <Button.Or />
                                <Button color='green' onClick={() => setPayMethodToggle(false)}>Pay on Your Earnings</Button>
                            </Button.Group>
                        </Form.Group>
                    </div>
                    <Divider />
                    <div className="pay-method">
                        {
                            payMethodToggle ?
                                <div className="bank-pay-view">
                                    <CardPaymentView/>
                                </div>
                                :
                                <div className="own-pay-view">
                                    <PayOnEarningView/>
                                </div>
                        }
                    </div>
                </div>




                <div className='button-div-3'>
                    <Button onClick={() => props.setClientViewNum(3)} content='Go Back' negative />
                    <Button onClick={() => props.setClientViewNum(4)} content='Continue' positive />
                    <Button
                        // onClick={reset}
                        content='Reset' secondary />
                </div>
            </Form>

        </div >
    )
}

export default SelectPaymentView