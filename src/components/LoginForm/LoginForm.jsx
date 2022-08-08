import React from 'react';
import { Divider, Grid, Form, Segment, Button } from 'semantic-ui-react';
import logo from '../../img/statusq-icon.png';
import image from '../../img/statusq-main-image.png';
import './LoginForm.css';

function LoginForm() {
    return (
        <div className="login">
            <Segment className='main'>
                <Grid columns={2} relaxed="very" stackable>
                    <Grid.Column className='login-left'>
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
                            <h1>Sign In</h1>
                            <Form className='form-content'>
                                <Form.Field>
                                    <label>Email</label>
                                    <input type="email" placeholder='dinindu1999@gmail.com' />
                                </Form.Field>
                                <Form.Field className='password'>
                                    <label>Password</label>
                                    <input type="password" placeholder='***********' />
                                </Form.Field>
                                <br />
                                <Button type='submit' color='yellow'>Sign In</Button>
                                <Form.Field className='button-below'>
                                    <span>Don't have an account? </span>
                                    <a href='/signup'>
                                        <span>Sign Up</span>
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

export default LoginForm;