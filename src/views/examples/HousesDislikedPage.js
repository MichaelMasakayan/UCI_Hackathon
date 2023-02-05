import { useState, useEffect} from 'react';
import TinderCard from 'react-tinder-card';
import {
  Col,
  Row,
} from 'reactstrap';
import ListComponent from 'components/ListComponent/ListComponent';

export default function HousesDislikedPage(props) {
    const cards = [
        {
          image: require('assets/img/house1/house1pict3.png'),
          price: '$500,500',
          zIndex: 3,
          bedNum: 1,
          bathNum: 1.5,
          sqFt: 550,
          date: '05/03/2023',
          name: "House 3",
          address: "91011 Maple Blvd, Anytown USA 12345",
        },
        {
          image: require('assets/img/house1/house1pict2.png'),
          price: '$5,300,900',
          zIndex: 2,
          bedNum: 4,
          bathNum: 5.5,
          sqFt: 1557,
          date: '05/10/2023',
          name: "House 2",
          address: "5678 Oak Ave, Anytown USA 12345",
        },
        {
          image: require('assets/img/house1/house1pict1.png'),
          price: '$850,000',
          zIndex: 1,
          bedNum: 3,
          bathNum: 2,
          sqFt: 1050,
          date: '05/04/2023',
          name: "House 1",
          address: "1234 Elm St, Anytown USA 12345",
        },
    ];
  
  return (
    <>
    {Array.isArray(props.location.dislikedArray)
        ? props.location.dislikedArray.map(element => {
            console.log(element);
            return cards.map(card => {
              if (card.name === element){
                return <ListComponent housePrice={card.price} houseAddress={card.address} houseDate={card.date} houseImg={card.image} />;
              }
            });
          })
    : "Page not rendered"}
    </>
  );
}
