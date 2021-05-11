import React from 'react'
import { Card, Button } from 'react-bootstrap';
function Popup(props) {
    return (props.trigger) ? (
        <Card>
            <Card.Body>
                Hello
                <Button className="btn1" variant="outlined" onClick={()=>props.setTrigger(false)}>Close</Button>
            </Card.Body>
        </Card>
    ) : "";
}
export default Popup
