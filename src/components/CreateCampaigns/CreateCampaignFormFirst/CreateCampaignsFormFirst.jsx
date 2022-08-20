import React, { useState } from 'react'
import {
  Form,
  Divider,
  Checkbox,
  Grid,
  Button,
} from 'semantic-ui-react'
import * as BsIcons from "react-icons/bs";
import './CreateCampaignsFormFirst.css'

const CreateCampaignsFormFirst = props => {

  const [showSchoolCat, setShowSchoolCat] = useState(false);
  const setSchoolCat = () => setShowSchoolCat(!showSchoolCat);

  const [showUniversityCat, setShowUniversityCat] = useState(false);
  const setUniversityCat = () => setShowUniversityCat(!showUniversityCat);

  const [showALCat, setShowALCat] = useState(false);
  const setALCat = () => setShowALCat(!showALCat);

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

      <Form className='form-space'>
        <div className="form-item">
          <Form.Group inline>
            <label>Campaign Media</label>
            <span className='radio-span'>
              <input type="radio" value="WhatsApp" name="platform" /> WhatsApp
            </span>
            <span className='radio-span'>
              <input type="radio" value="Facebook" name="platform" /> Facebook
            </span>
            <span className='radio-span'>
              <input type="radio" value="Instagram" name="gplatform" /> Instagram
            </span>
          </Form.Group>
        </div>
        <br />
        <div className="form-item">
          <Form.Group inline>
            <label>Audience Category</label>
          </Form.Group>
          <Divider />
          <Form.Group inline>
            <h3>Educational Level</h3>
            <Form.Field>
              <Checkbox label='School Category' onClick={setSchoolCat} />
            </Form.Field>
            <Form.Field>
              <Checkbox label='University Category' onClick={setUniversityCat} />
            </Form.Field>
          </Form.Group>
          <Divider />
          <div className="educationcat">
            {
              showSchoolCat ?
                // <SchoolCat />
                <div className='educationcat'>
                  <Form.Group inline>
                    <h3 className='firstSubHeadingScl'>School Category</h3>
                    <Form.Field>
                      <Checkbox label='Ordinary Level' />
                    </Form.Field>
                    <Form.Field>
                      <Checkbox label='Advanced Level' onClick={setALCat} />
                    </Form.Field>
                  </Form.Group>
                  <Divider />
                  {
                    showALCat ?
                      <div className="advanced-level-cat">
                        <h3 className='firstSubHeading'>A/L Subject Categories</h3>
                        <Grid columns={3} relaxed="very" stackable>
                          <Grid.Column className=''>
                            <Form.Field>
                              <Checkbox label='Mathematics' />
                            </Form.Field>
                            <Form.Field>
                              <Checkbox label='Biology' />
                            </Form.Field>
                            <Form.Field>
                              <Checkbox label='Commerce' />
                            </Form.Field>
                          </Grid.Column>
                          <Grid.Column className=''>
                            <Form.Field>
                              <Checkbox label='Art' />
                            </Form.Field>
                            <Form.Field>
                              <Checkbox label='Technology' />
                            </Form.Field>
                          </Grid.Column>
                        </Grid>
                        <Divider />
                      </div>
                      : null
                  }
                </div>
                : null
            }

            {
              showUniversityCat ?
                <div className='educationcat'>
                  <Form.Group inline>
                    <h3 className='firstSubHeading'>University Category</h3>
                    <Form.Field>
                      <Checkbox label='Undergraduate' />
                    </Form.Field>
                    <Form.Field>
                      <Checkbox label='Postgraduate' />
                    </Form.Field>
                  </Form.Group>
                  <Divider />
                </div>
                : null
            }
          </div>
          <Divider />
          <h3>Age Level</h3>
          <Grid columns={3} relaxed="very" stackable>
            <Grid.Column className=''>
              <Form.Field>
                <Checkbox label='13 - 15 years' />
              </Form.Field>
              <Form.Field>
                <Checkbox label='16 - 18 years' />
              </Form.Field>
            </Grid.Column>
            <Grid.Column className=''>
              <Form.Field>
                <Checkbox label='19 - 25 years' />
              </Form.Field>
              <Form.Field>
                <Checkbox label='26 - 35 years' />
              </Form.Field>
            </Grid.Column>
            <Grid.Column className=''>
              <Form.Field>
                <Checkbox label='36 - 60 years' />
              </Form.Field>
              <Form.Field>
                <Checkbox label='Over 60 years' />
              </Form.Field>
            </Grid.Column>
          </Grid>
          <Divider />
          <Divider />
          <h3>Region</h3>
          <Grid columns={3} relaxed="very" stackable>
            <Grid.Column className=''>
              <Form.Field>
                <Checkbox label='Western Province' />
              </Form.Field>
              <Form.Field>
                <Checkbox label='Central Province' />
              </Form.Field>
              <Form.Field>
                <Checkbox label='Southern Province' />
              </Form.Field>
            </Grid.Column>
            <Grid.Column className=''>
              <Form.Field>
                <Checkbox label='Uva Province' />
              </Form.Field>
              <Form.Field>
                <Checkbox label='Northern Province' />
              </Form.Field>
              <Form.Field>
                <Checkbox label='Eastern Province' />
              </Form.Field>
            </Grid.Column>
            <Grid.Column className=''>
              <Form.Field>
                <Checkbox label='Sabaragamuwa Province' />
              </Form.Field>
              <Form.Field>
                <Checkbox label='North Western Province' />
              </Form.Field>
              <Form.Field>
                <Checkbox label='North Central Province' />
              </Form.Field>
            </Grid.Column>
          </Grid>
          <Divider />
          <Divider />
          <h3>Language</h3>
          <Grid columns={3} relaxed="very" stackable>
            <Grid.Column className=''>
              <Form.Field>
                <Checkbox label='Sinhala' />
              </Form.Field>
            </Grid.Column>
            <Grid.Column className=''>
              <Form.Field>
                <Checkbox label='Tamil' />
              </Form.Field>
            </Grid.Column>
            <Grid.Column className=''>
              <Form.Field>
                <Checkbox label='English' />
              </Form.Field>
            </Grid.Column>
          </Grid>
          <Divider />
          <Divider />
          <h3>Gender</h3>
          <Grid columns={3} relaxed="very" stackable>
            <Grid.Column className=''>
              <Form.Field>
                <Checkbox label='For Male' />
              </Form.Field>
            </Grid.Column>
            <Grid.Column className=''>
              <Form.Field>
                <Checkbox label='For Female' />
              </Form.Field>
            </Grid.Column>
          </Grid>
          <Divider />
        </div>
        <div className='button-div-3'>
          <Button onClick={() => props.setClientViewNum(0)} content='Go Back' negative/>
          <Button onClick={() => props.setClientViewNum(2)} content='Continue' positive />
          <Button content='Reset' secondary/>
        </div>
      </Form>
    </div>


  )
}

export default CreateCampaignsFormFirst