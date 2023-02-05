import { useState, useEffect } from 'react';
import TinderCard from 'react-tinder-card';
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Col,
  Row,
  Button,
  UncontrolledCarousel
} from 'reactstrap';
import "./SwipeComponent.css";
import ListComponent from 'components/ListComponent/ListComponent';
import { Link } from "react-router-dom";

const cards = [
  {
    price: '$500,500',
    zIndex: 3,
    bedNum: 1,
    bathNum: 1.5,
    sqFt: 550,
    date: '05/03/2023',
    name: "House 3",
    address: "91011 Maple Blvd, Anytown USA 12345",
    images: [
      {
        src: require("assets/img/house2/house2pic1.png"),
        altText: "Slide 1",
        caption: ""
      },
      {
        src: require("assets/img/house2/house2pic2.png"),
        altText: "Slide 2",
        caption: ""
      },
      {
        src: require("assets/img/house2/house2pic3.png"),
        altText: "Slide 3",
        caption: ""
      },
      {
        src: require("assets/img/house2/house2pic4.png"),
        altText: "Slide 4",
        caption: ""
      }
    ],
  },
  {
    price: '$5,300,900',
    zIndex: 2,
    bedNum: 4,
    bathNum: 5.5,
    sqFt: 1557,
    date: '05/10/2023',
    name: "House 2",
    address: "5678 Oak Ave, Anytown USA 12345",
    images: [
      {
        src: require("assets/img/house1/house1pict1.png"),
        altText: "Slide 1",
        caption: ""
      },
      {
        src: require("assets/img/house1/house1pict2.png"),
        altText: "Slide 2",
        caption: ""
      },
      {
        src: require("assets/img/house1/house1pict3.png"),
        altText: "Slide 3",
        caption: ""
      }
    ],
  },
  {
    price: '$850,000',
    zIndex: 1,
    bedNum: 3,
    bathNum: 2,
    sqFt: 1050,
    date: '05/04/2023',
    name: "House 1",
    address: "1234 Elm St, Anytown USA 12345",
    images: [
      {
        src: require("assets/img/house3/house3pic1.png"),
        altText: "Slide 1",
        caption: ""
      },
      {
        src: require("assets/img/house3/house3pic2.png"),
        altText: "Slide 2",
        caption: ""
      },
      {
        src: require("assets/img/house3/house3pic3.png"),
        altText: "Slide 3",
        caption: ""
      }
    ],
  }
];


export default function SwipeComponent() {
  const [ cardsArray, setCardsArray ] = useState([]);
  const [ dislikedCardsArray, setDislikedCardsArray ] = useState([]);
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
  }, [cardsArray])
 

  const onSwipe = (direction) => {
    console.log('You swiped: ' + direction)
    setAction(direction)
    if (direction === "right" ){
      setCardsArray((direction) => [...cardsArray, "House " + String(counter)]);
    } else {
      setDislikedCardsArray((direction) => [...dislikedCardsArray, "House " + String(counter)])
      setCounter(counter + 1);
    }

    // Increment counter by 1
    setCounter(counter + 1);
    
  }
  
  const onCardLeftScreen = (myIdentifier) => {
    console.log(myIdentifier + ' left the screen')
  }

  const [ action, setAction ] = useState("");

  return (
    <>
    <div className="cardContainer">
      <link href='https://fonts.googleapis.com/css?family=Damion&display=swap' rel='stylesheet' />
      <link href='https://fonts.googleapis.com/css?family=Alatsi&display=swap' rel='stylesheet' />
      <div className="swipe-container">
        {cards.map((card, index) =>
          <TinderCard className='swipe' key={cards.image} onSwipe={onSwipe} onCardLeftScreen={() => onCardLeftScreen('fooBar')} >
            <Card style={{ width: '30rem', height: '35rem', position: 'absolute' }}>
                <UncontrolledCarousel items={card.images} />
              <CardBody>
                <CardTitle tag={'h2'} style={{ marginBottom: 20 }}>
                  <Row>
                    <Col>
                    {card.price}
                    </Col>
                    <Col className='text-right'>
                    {card.date}
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
                <CardText >
                  Some quick example text to build on the card title and make up the bulk of the card‘s content.
                </CardText>
              </CardBody>
            </Card>
          </TinderCard>
        )}
      </div>
      <div className="list-container">
        {Array.isArray(cardsArray)
        ? cardsArray.map(element => {
            return cards.map(card => {
              if (card.name === element){
                return <ListComponent housePrice={card.price} houseAddress={card.address} houseDate={card.date} houseImg={card.images[1].src} />;
              }
            });
          })
        : null}

        
        <Link to={{pathname: "/HousesDisliked", dislikedArray: dislikedCardsArray}}>
          <Button
            className="btn-simple"
            color="primary"
            style={{margin: "200px"}}>
            Click to view disliked houses
            <i className="tim-icons icon-minimal-right" />
          </Button>
          
        </Link>
      </div>
    </div>    
  </>
  )
}


