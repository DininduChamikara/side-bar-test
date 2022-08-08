import React from 'react';
import { Divider, Grid, Form, Segment, Button } from 'semantic-ui-react';
import logo from '../../img/statusq-icon.png';
import image from '../../img/statusq-main-image.png';
import './SignUpForm.css'


function SignUpForm() {
    return (
        <div className="signup">
            <Segment className='main'>
                <Grid columns={2} relaxed="very" stackable>
                    <Grid.Column className='signup-left'>
                        <div className="header">
                            <img src={logo} alt="" className="system-icon" />
                            <h1>StatusQ <span>Welcome</span></h1>
                        </div>
                        <div className="image">
                            <img src={image} alt="" className="main-image" />
                        </div>

                    </Grid.Column>
                    <Grid.Column>
                        <div className="right-content">
                            <h1>Create Account</h1>
                            <Form className='form-content'>
                                <Form.Group widths="equal">
                                    <Form.Input type='text' fluid label='First name' placeholder='Dinindu' />
                                    <Form.Input type='text' fluid label='Last name' placeholder='Chamikara' />
                                </Form.Group>
                                <Form.Field className='email'>
                                    <label>Email</label>
                                    <input type="email" placeholder='dinindu1999@gmail.com' />
                                </Form.Field>
                                <Form.Group widths="equal">
                                    <Form.Input type='password' fluid label='Password' placeholder='***********' />
                                    <Form.Input type='password' fluid label='Confirm Password' placeholder='***********' />
                                </Form.Group>
                                <br />
                                <Button type='submit' color='yellow'>Sign Up</Button>
                                <Form.Field className='button-below'>
                                    <span>Already a member? </span>
                                    <a href='/'>
                                        <span>Sign In</span>
                                    </a>

                                </Form.Field>
                            </Form>
                        </div>
                    </Grid.Column>
                </Grid>

                <Divider vertical></Divider>
            </Segment>
        </div>
    )
}

export default SignUpForm;