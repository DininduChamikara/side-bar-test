import React, { useState } from 'react'
import Cards from 'react-credit-cards'
import 'react-credit-cards/es/styles-compiled.css'
import { Segment, Grid, Divider } from 'semantic-ui-react'
import './CardPaymentView.css'

function CardPaymentView() {

    const [number, setNumber] = useState('')
    const [name, setName] = useState('')
    const [expiry, setExpiry] = useState('')
    const [cvc, setCvc] = useState('')
    const [focus, setFocus] = useState('')

    return (
        <div>
            <form>
                <Segment className='card-segment' >
                    <Grid columns={3} relaxed='very'>
                        <Grid.Column>
                            <Cards
                                number={number}
                                name={name}
                                xpiry={expiry}
                                cvc={cvc}
                                focused={focus}
                            />
                        </Grid.Column>
                        <Grid.Column>
                            <input
                                className='card-input'
                                type='tel'
                                name='number'
                                placeholder='Card Number'
                                value={number}
                                onChange={e => setNumber(e.target.value)}
                                onFocus={e => setFocus(e.target.name)}
                            />
                            <br />
                            <input
                                className='card-input'
                                type='text'
                                name='name'
                                placeholder='Name'
                                value={name}
                                onChange={e => setName(e.target.value)}
                                onFocus={e => setFocus(e.target.name)}
                            />
                            <br />
                        </Grid.Column>
                        <Grid.Column>
                            <input
                                className='card-input'
                                type='text'
                                name='expiry'
                                placeholder='MM/YY Expiry'
                                value={expiry}
                                onChange={e => setExpiry(e.target.value)}
                                onFocus={e => setFocus(e.target.name)}
                            />
                            <br />
                            <input
                                className='card-input'
                                type='tel'
                                name='cvc'
                                placeholder='CVC'
                                value={cvc}
                                onChange={e => setCvc(e.target.value)}
                                onFocus={e => setFocus(e.target.name)}
                            />
                            <br />
                        </Grid.Column>
                    </Grid>
                </Segment>
            </form>

        </div>
    )
}

export default CardPaymentView