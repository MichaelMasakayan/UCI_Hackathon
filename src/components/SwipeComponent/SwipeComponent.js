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
    price: '$2,399,900',
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
    desc: 'Features include wood plank floors in the entire home, quartz countertops and custom island in the kitchen, stainless steel appliances, upgraded lighting throughout the home, all bedrooms have remote controlled ceiling fans with lights, dual-pane windows with strong sound barrier and insulation.',
  },
  {
    price: '$500,500',
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
    desc: 'Prime South Coast Metro location! Top floor corner-unit offers open floor plan graced by vaulted ceilings. This beautifully upgraded condo features two spacious en-suite bedrooms and a loft perfect for a home office or kids den. This home is meticulously maintained and turn key.',
  },
 
  {
    price: '$850,000',
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
    desc: 'This stunning 3 bedroom, 2 bathroom home in beautiful city of Santa Ana is a sight to behold! With 1600 square feet of living space and a beautifully landscaped backyard with a built-in tree house, this home is sure to check off every box.',
  },
  {
    price: '$399,000',
    bedNum: 1,
    bathNum: 1,
    sqFt: 700,
    date: '05/05/2023',
    name: "House 4",
    address: "1122 1st St, Anytown USA 12345",
    images: [
      {
        src: require("assets/img/house4/house4pic1.png"),
        altText: "Slide 1",
        caption: ""
      },
      {
        src: require("assets/img/house4/house4pic2.png"),
        altText: "Slide 2",
        caption: ""
      },
      {
        src: require("assets/img/house4/house4pic3.png"),
        altText: "Slide 3",
        caption: ""
      },
      {
        src: require("assets/img/house4/house4pic4.png"),
        altText: "Slide 4",
        caption: ""
      },
      {
        src: require("assets/img/house4/house4pic5.png"),
        altText: "Slide 5",
        caption: ""
      }
    ],
    desc: 'Welcome to an excellent one-bedroom condo with a bonus room that feels like a second bedroom in a 24 hours security gated community, ready for you to move in. Which could be a great home or investment opportunity. The condo brings a lot of natural light through the windows.'
  },
  {
    price: '$1,899,950',
    bedNum: 5,
    bathNum: 5,
    sqFt: 3550,
    date: '05/05/2023',
    name: "House 5",
    address: "7777 East Ave, Anytown USA 12345",
    images: [
      {
        src: require("assets/img/house5/house5pic1.png"),
        altText: "Slide 1",
        caption: ""
      },
      {
        src: require("assets/img/house5/house5pic2.png"),
        altText: "Slide 2",
        caption: ""
      },
      {
        src: require("assets/img/house5/house5pic3.png"),
        altText: "Slide 3",
        caption: ""
      }
    ],
    desc: 'This home is MILLS ACT APPROVED! and is designated landmark status which is a huge tax savings! Now is your chance to own a home in the coveted historic Floral Park neighborhood. It was designed by a prominent local mid-century architect, Philmer Ellerbroek. It is a one of a kind single level ranch home.',
 
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
                  {card.desc}
                  
                </CardText>
              </CardBody>
            </Card>
          </TinderCard>
          
        )}
      
        <Button color="info" style={{fontSize: '0.8em', width: '10em', height: '3em', padding: '0.5em', marginTop: "95%", }} onClick={console.log("clicked ")} href="http://localhost:3000/HouseDescription">More Info</Button>
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
                    <div>  <Button color="info" style={{fontSize: '0.8em', width: '10em', height: '3em', padding: '0.5em', marginTop: "95%", }} onClick={console.log("clicked ")} href="http://localhost:3000/HouseDescription">More Info</Button></div>

          
        </Link>
      </div>
    </div>    
  </>
  )
}


