import React, { useState, state, handleCheckCount } from 'react'
import './PromotersListView.css'
import {
    Form,
    Button,
    Checkbox,
    Table,
    Icon,
    Input
} from 'semantic-ui-react'
import * as BsIcons from "react-icons/bs";
import { PromoterListData } from '../PromoterListData'


const PromotersListView = props => {

    const [numOfSelections, setNumOfSelections] = useState(5)

    const [remainSelectionCount, setRemainSelectionCount] = useState(numOfSelections)

    const [remainEnd, setRemainEnd] = useState(false)

    // const reset = () => {
    //     setRemainEnd(false)
    //     // setRemainSelectionCount(numOfSelections) 
    // }


    handleCheckCount = (e, d) => {
        console.log(d)

        if (remainSelectionCount > 1) {
            if (d.checked == true) {
                setRemainSelectionCount(remainSelectionCount - 1)
            } else if (d.checked == false) {
                setRemainSelectionCount(remainSelectionCount + 1)
            }
        }
        if (remainSelectionCount == 1 && d.checked == true) {
            setRemainSelectionCount(0)
            setRemainEnd(true)
        }

    }

    return (
        <div>
            <div className="page-top">
                <div className='page-heading'>
                    <h2>Client View <span><BsIcons.BsPersonBoundingBox /></span></h2>
                </div>
                <div className='center'>
                    <div className='center-heading-cre-camp'>
                        <h2>Select Promoters</h2>
                    </div>
                </div>
            </div>
            <Form>

                <Table celled compact definition selectable>
                    <Table.Header fullWidth>
                        <Table.Row>
                            <Table.HeaderCell>Selection</Table.HeaderCell>
                            <Table.HeaderCell>Promoter ID</Table.HeaderCell>
                            <Table.HeaderCell>Educational Level</Table.HeaderCell>
                            <Table.HeaderCell>Age Level</Table.HeaderCell>
                            <Table.HeaderCell>Region</Table.HeaderCell>
                            <Table.HeaderCell>Language</Table.HeaderCell>
                            <Table.HeaderCell>Gender</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {
                            PromoterListData.map((promoter, index) => {
                                return (
                                    <Table.Row key={index}>
                                        <Table.Cell collapsing>
                                            <Checkbox
                                                // checked={false}

                                                disabled={remainEnd}
                                                slider onChange={
                                                    (e, d) => handleCheckCount(e, d)
                                                } />
                                        </Table.Cell>
                                        <Table.Cell>{promoter.promoter_id}</Table.Cell>
                                        <Table.Cell>{promoter.edu_level}</Table.Cell>
                                        <Table.Cell>{promoter.age_level}</Table.Cell>
                                        <Table.Cell>{promoter.region}</Table.Cell>
                                        <Table.Cell>{promoter.language}</Table.Cell>
                                        <Table.Cell>{promoter.gender}</Table.Cell>
                                    </Table.Row>
                                )
                            })
                        }
                    </Table.Body>
                </Table>

                <div className="remaining-field">
                    <div className="remaining-field-title">
                        <span>Remaining Selections</span>
                    </div>
                    <Input icon='add user' placeholder={remainSelectionCount} readOnly className='remaining_iconed_input' />
                </div>


                <div className='button-div-3'>
                    <Button onClick={() => props.setClientViewNum(2)} content='Go Back' negative />
                    <Button onClick={() => props.setClientViewNum(4)} content='Continue' positive />
                    <Button
                        // onClick={reset}
                        content='Reset' secondary />
                </div>
            </Form>
        </div>
    )
}

export default PromotersListView