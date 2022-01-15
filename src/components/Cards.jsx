import React from 'react'
import { Card } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

function Cards(props) {
  return (
    <div>
      <Card id="cards" className='cstm-cards'>
        <Card.Body>
          <Card.Title id="title">{props.title}</Card.Title>
          <Card.Subtitle id="subtitle" className="mb-2 text-muted">
            <p>{props.subTitle}</p>
            <p>
              <img src={props.img} alt="weather" />
            </p>
            <h3>{props.temp}℃</h3>
          </Card.Subtitle>
          <Card.Text id="description">{props.desc}</Card.Text>
        </Card.Body>
      </Card>
    </div>  
  )
}
export default Cards
