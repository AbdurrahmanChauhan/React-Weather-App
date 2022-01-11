import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button, Form } from 'react-bootstrap'
import CityName from './CityName'

function Dropdown() {

  const [cityName, setCityName] = useState("Mumbai")
  const [city, setCity] = useState("Mumbai")

  function handleClick() {
    setCity(cityName)
  }

  function handleChange(e) {
    setCityName(e.target.value)
  }

  return (
    <div>
      <div className="Dropdown">
        <Form.Select
          aria-label="Default select example"
          className="form-select"
          onChange={handleChange}
        >
          <option value="Mumbai">Mumbai</option>
          <option value="Pune">Pune</option>
          <option value="Nashik">Nashik</option>
        </Form.Select>
        <span>
          <Button onClick={handleClick} variant="outline-success">
            Fetch
          </Button>{' '}
        </span>
      </div>
      <CityName city={city}/>
    </div>
  )
}

export default Dropdown
