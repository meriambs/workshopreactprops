import React from 'react'
import { Card, Button} from 'react-bootstrap';

const Welcome = (props) => {
    return (
        <div style={{ display:"flex",justifyContent:"space-around" }}>
            <Card style={{ width: '18rem'}}>
  <Card.Img variant="top" src={props.photo} />
  <Card.Body>
    <Card.Title>{props.name}</Card.Title>
    <Card.Text>
     {props.lastnmae}
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card> 
        </div>
    )
}

export default Welcome
