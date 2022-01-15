import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Cards from './Cards'
import { Col, Container, Row } from 'react-bootstrap'
import useFetch from 'react-fetch-hook'

function GridCards(props) {

  // const [city, setCity] = useState("Mumbai")
  
  let option1 = {
    weekday: 'long',
  }
  let option2 = {
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
  }

  const { isLoading, data, error } = useFetch(
    "https://api.openweathermap.org/data/2.5/forecast?q="+props.city+"&appid=902d63a6bfbba904729f1ed561e1a4ca&units=metric#",
  )
  if (error) {
    return <div>
      <p>Code: ${error.status}</p>
      <p>Message: ${error.statusText}</p>
    </div>
  }
  else{
  return isLoading ? (
    <div>Loading...</div>
  ) : (
    <div>
      <Container>
        <Row>
          <Col lg={1}></Col>
          <Col lg={2}>
            <Cards
            title={new Date( data.list[0].dt_txt).toLocaleDateString('en-US', option1)}
            subTitle={new Date( data.list[0].dt_txt).toLocaleDateString('en-US', option2)}
            img={('http://openweathermap.org/img/wn/' +  data.list[0].weather[0].icon + '@2x.png')}
            desc={ data.list[0].weather[0].description}
            />
          </Col>
          <Col lg={2}>
            <Cards
            title={new Date( data.list[3].dt_txt).toLocaleDateString('en-US', option1)}
            subTitle={new Date( data.list[3].dt_txt).toLocaleDateString('en-US', option2)}
            img={('http://openweathermap.org/img/wn/' +  data.list[3].weather[0].icon + '@2x.png')}
            desc={ data.list[3].weather[0].description}
            />
          </Col>
          <Col lg={2}>
            <Cards
            title={new Date( data.list[11].dt_txt).toLocaleDateString('en-US', option1)}
            subTitle={new Date( data.list[11].dt_txt).toLocaleDateString('en-US', option2)}
            img={('http://openweathermap.org/img/wn/' +  data.list[11].weather[0].icon + '@2x.png')}
            desc={ data.list[11].weather[0].description}
            />
          </Col>
          <Col lg={2}>
            <Cards
            title={new Date( data.list[19].dt_txt).toLocaleDateString('en-US', option1)}
            subTitle={new Date( data.list[19].dt_txt).toLocaleDateString('en-US', option2)}
            img={('http://openweathermap.org/img/wn/' +  data.list[19].weather[0].icon + '@2x.png')}
            desc={ data.list[19].weather[0].description}
            />
          </Col>
          <Col lg={2}>
            <Cards
            title={new Date( data.list[27].dt_txt).toLocaleDateString('en-US', option1)}
            subTitle={new Date( data.list[27].dt_txt).toLocaleDateString('en-US', option2)}
            img={('http://openweathermap.org/img/wn/' +  data.list[27].weather[0].icon + '@2x.png')}
            desc={ data.list[27].weather[0].description}
            />
          </Col>
          <Col lg={1}></Col>
        </Row>
      </Container>
    </div>
  )
  }
}
export default GridCards
