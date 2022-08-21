import React, { useState } from 'react'
import { Input, } from 'semantic-ui-react'
import './PayOnEarningView.css'

function PayOnEarningView() {

    const [currentEarnBalance, setCurrentEarnBalance] = useState(2211.00)
    const [totoalCampaignCost, setTotalCampaignCost] = useState(2200.00)

    const [sufficientBalance, setSufficientBalance] = useState(
        () => {
            if(currentEarnBalance-totoalCampaignCost>=0){
                return true
            }else{
                return false
            }
        }
    )


    console.log(sufficientBalance)

    return (
        <div>
            <div className="box">
                <div className="form-field">
                    <div className="field-title">
                        <span>Your Current Earning Balance</span>
                    </div>
                    <Input icon='money bill money outline' placeholder={'Rs. ' + currentEarnBalance + ' /='} readOnly className='iconed_input' />
                </div>
                <br />
                <div className="form-field">
                    <div className="field-title">
                        <span>Total Ad-Campaign Cost</span>
                    </div>
                    <Input icon='money bill money outline' placeholder={'Rs. ' + totoalCampaignCost + ' /='} readOnly className='iconed_input' />
                </div>
                <br />
                <br />
                {
                    sufficientBalance ?
                        <div className="center-text sufficient">
                            Your earning balance is sufficient to pay!
                        </div>
                        :
                        <div className="center-text insufficient">
                            Your earning balance is insufficient to pay!
                        </div>
                }
                <br />
            </div>
        </div>
    )
}

export default PayOnEarningView