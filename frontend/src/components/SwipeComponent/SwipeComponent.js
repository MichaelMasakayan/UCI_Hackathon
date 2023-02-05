import { useState, useEffect } from 'react';
import TinderCard from 'react-tinder-card';
import "./SwipeComponent.css";

const cards = [
  {
    image: 'https://t4.ftcdn.net/jpg/02/79/95/39/360_F_279953994_TmVqT7CQhWQJRLXev4oFmv8GIZTgJF1d.jpg',
    color: '#55ccff',
    zIndex: 1,
  },
  {
    image: 'https://img.icons8.com/color/452/GeeksforGeeks.png',
    color: '#e8e8e8',
    zIndex: 2,
  },
  {
    image: 'https://img.icons8.com/color/452/GeeksforGeeks.png',
    color: '#0a043c',
    zIndex: 3,
  },
  {
    image: 'https://img.icons8.com/color/452/GeeksforGeeks.png',
    color: 'black',
    zIndex: 4,
  }
];


export default function SwipeComponent() {
  const [ cardsArray, setCardsArray ] = useState([]);
  const [currCard, setCurrCard] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // useEffect(() => {
  //   setCardsArray((currCard) => [...cardsArray, "test"]);
  // }, [])
 

  const onSwipe = (direction) => {
    console.log('You swiped: ' + direction)
    setAction(direction)
    setCardsArray(...cardsArray, direction);
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
      {/* <TinderCard className="swipe-container" onSwipe={onSwipe} onCardLeftScreen={() => onCardLeftScreen('fooBar')} preventSwipe={['right', 'left']}>Hello, World!</TinderCard>
      <TinderCard className="swipe-container" onSwipe={onSwipe} onCardLeftScreen={() => onCardLeftScreen('fooBar')} preventSwipe={['right', 'left']}>Hello, World!</TinderCard>
      <TinderCard className="swipe-container" onSwipe={onSwipe} onCardLeftScreen={() => onCardLeftScreen('fooBar')} preventSwipe={['right', 'left']}>Hello, World!</TinderCard> */}
      <div className="swipe-container">
        {cards.map((card, index) =>
          <TinderCard className='swipe' key={cards.image} onSwipe={onSwipe} onCardLeftScreen={() => onCardLeftScreen('fooBar')} >
            <div style={{ backgroundImage: 'url(' + card.image + ')', position:'relative'  }} className='card'>
              <img 
                src={card.image}
                key={card.image}
                alt={`Image ${index + 1}`}
                style=
                  {{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    opacity: 1,
                    transition: "opacity 0.5s ease-out"
                  }}>
              </img>
            </div>
          </TinderCard>
        )}
      </div>

      {/* <TinderCard className='swipe' key={cards[0].image} onSwipe={onSwipe} onCardLeftScreen={() => onCardLeftScreen('fooBar')} >
        <div style={{ backgroundImage: 'url(' + cards[0].image + ')' }} className='card'>
          <h3>{cards[0].image}</h3>
        </div>
      </TinderCard>

      <TinderCard className="swipe" onSwipe={onSwipe} onCardLeftScreen={() => onCardLeftScreen('fooBar')} preventSwipe={['up', 'down']} flickOnSwipe={true}><img src={cards[1].image} alt="Logo" /></TinderCard> */}
      {/* {action} */}
      {/* {cardsArray} */}
    </div>
  </>
  )
}


