import React, { Component } from 'react'
import {Button} from '@material-ui/core'
import {Form, Col} from 'react-bootstrap'
import '../styles/Diagnosis.css'
export default class Diagnosis extends Component {
    render() {
        return (
            <div className="Diagnosis">
                <br/>
                <h2>Patient Details</h2>
                <hr/>
                <Form>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter patient name" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridDOB">
                        <Form.Label>Date of Birth</Form.Label>
                        <Form.Control type="date" placeholder="date" />
                        </Form.Group>
                    </Form.Row>

                    <Form.Group controlId="formGridAddress1">
                        <Form.Label>Address</Form.Label>
                        <Form.Control placeholder="Patient's Address" />
                    </Form.Group>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>City</Form.Label>
                        <Form.Control />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>State</Form.Label>
                        <Form.Control as="select" defaultValue="Choose...">
                            <option>Choose...</option>
                            <option>Maharashtra</option>
                            <option>Goa</option>
                            <option>Delhi</option>
                            <option>Andhra Pradesh</option>
                        </Form.Control>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridZip">
                        <Form.Label>Zip</Form.Label>
                        <Form.Control />
                        </Form.Group>
                    </Form.Row>

                    <Form.Group id="formGridFile">
                        <Form.Label>Upload file</Form.Label>
                        <Form.File></Form.File>
                    </Form.Group>

                    <center><Button variant="outlined" className="btn1" type="submit">
                        Submit
                    </Button></center>
                    </Form>
            </div>
        )
    }
}

