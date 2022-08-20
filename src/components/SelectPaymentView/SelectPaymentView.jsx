import React, { useState } from 'react'
import {
    Form, Button, Input, Divider,
    Checkbox,
    Grid,
} from 'semantic-ui-react'
import './SelectPaymentView.css'
import * as BsIcons from "react-icons/bs";

const SelectPaymentView = props => {

    const [campaignCost, setCampaignCost] = useState(2000.00)
    const [systemFee, setSystemFee] = useState(campaignCost / 10);
    const [totoalCost, setTotalCost] = useState(campaignCost + systemFee)


    ////////
    const [showCardPayment, setShowCardPayment] = useState(false)

    const [cardSelected, setCardSelected] = useState(true)

    const setCardPayment = () => {
        setShowCardPayment(!showCardPayment)
    }

    const [showOwnEarningPayment, setShowOwnEarningPayment] = useState(false);
    const setOwnEarningPayment = () => setShowOwnEarningPayment(!showOwnEarningPayment);
    /////////

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
                    <Form.Group inline>
                        <label>Select Your Payment Method</label>
                    </Form.Group>
                    <Divider />
                    <Form.Group inline>
                        <Form.Field>
                            <Checkbox label='Card Payment' onClick={setCardPayment} />
                        </Form.Field>
                        <Form.Field>
                            <Checkbox label='Pay on Your Earnings' onClick={setOwnEarningPayment} />
                        </Form.Field>
                    </Form.Group>
                    <Divider />
                    <div>
                        {
                            showCardPayment ?
                                <div>
                                    <Form.Group inline>
                                        <h3>Bank Payment</h3>
                                    </Form.Group>                                    
                                </div>
                                : null
                        }
                        {
                            showOwnEarningPayment ?
                                <div>
                                    <Form.Group inline>
                                        <h3>Pay on your earnings</h3>
                                    </Form.Group>
                                </div>
                                : null
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