import { useState, useEffect } from 'react';
import TinderCard from 'react-tinder-card';
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Col,
  Row
} from 'reactstrap';
import "./SwipeComponent.css";

const cards = [
  {
    image: require('assets/img/house1/house1pict1.png'),
    price: '$850,000',
    zIndex: 1,
    bedNum: 3,
    bathNum: 2,
    sqFt: 1050,
    date: '05/04/2023',
  },
  {
    image: require('assets/img/house1/house1pict2.png'),
    price: '$5,300,900',
    zIndex: 2,
    bedNum: 4,
    bathNum: 5.5,
    sqFt: 1557,
    date: '05/10/2023',
  },
  {
    image: require('assets/img/house1/house1pict3.png'),
    price: '$500,500',
    zIndex: 3,
    bedNum: 1,
    bathNum: 1.5,
    sqFt: 550,
    date: '05/03/2023',
  }
];


export default function SwipeComponent() {
  const [ cardsArray, setCardsArray ] = useState([]);
  const [currCard, setCurrCard] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [dummyArr, setDummyArr] = useState([]);
  const [counter, setCounter ] = useState(1);

  useEffect(() => {
    if (cardsArray.length === 0){
      console.log("Empty")
    } else if (cardsArray.length > 0 ){
      console.log("Has " + cardsArray.length + " elements")
    }

    // setCardsArray((currCard) => [...cardsArray, currCard]);
  }, [cardsArray])
 

  const onSwipe = (direction) => {
    console.log('You swiped: ' + direction)
    setAction(direction)
    if (direction === "right" ){
      setCardsArray((direction) => [...cardsArray, "House " + String(counter)]);
      setCounter(counter + 1);
    }
    
  }
  
  const onCardLeftScreen = (myIdentifier) => {
    console.log(myIdentifier + ' left the screen')
  }

  const [ action, setAction ] = useState("");


  // const dummyArr = [];
  return (
    <>
    <div className="cardContainer">
      <link href='https://fonts.googleapis.com/css?family=Damion&display=swap' rel='stylesheet' />
      <link href='https://fonts.googleapis.com/css?family=Alatsi&display=swap' rel='stylesheet' />
      <div className="swipe-container">

      {Array.isArray(cardsArray)
        ? cardsArray.map(element => {
            // console.log(element)
            return <h2>{element}</h2>;
          })
      : null}


        {cards.map((card, index) =>
          <TinderCard className='swipe' key={cards.image} onSwipe={onSwipe} onCardLeftScreen={() => onCardLeftScreen('fooBar')} >
            <Card style={{ width: '30rem', height: '35rem', position: 'absolute' }}>
                <img 
                  src={card.image}
                  key={card.image}
                  alt={`Image ${index + 1}`}
                  style={{ height: '25rem' }}>
                </img>
              <CardBody>
                <CardTitle tag={'h2'} style={{ marginBottom: 20 }}>
                  <Row>
                    <Col>
                    {card.price}
                    </Col>
                    <Col className='text-right'>
                    OH: {card.date}
                    </Col>
                  </Row>
                </CardTitle>
                <CardSubtitle
                  className="mb-2 text-muted"
                  tag="h6"
                >
                  <Row>
                    <Col>
                    Bedrooms: {card.bedNum}
                    </Col>
                    <Col>
                    Bathrooms: {card.bathNum}
                    </Col>
                    <Col>
                    Sq Ft: {card.sqFt}
                    </Col>
                  </Row>
                </CardSubtitle>
                <CardText>
                  Some quick example text to build on the card title and make up the bulk of the card‘s content.
                </CardText>
              </CardBody>
            </Card>
          </TinderCard>
        )}
      </div>
    </div>
  </>
  )
}

