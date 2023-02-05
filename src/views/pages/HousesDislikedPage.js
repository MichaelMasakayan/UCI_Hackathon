import {
  Col,
  Row,
} from 'reactstrap';
import ListComponent from 'components/ListComponent/ListComponent';
import AppNavbar from 'components/Navbars/AppNavbar';

export default function HousesDislikedPage(props) {
  const cards = [
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
  
  return (
    <>
      <AppNavbar />
      <div className='wrapper'>
        <div className='page-header'>
          <Row tag={'h1'} style={{ marginTop: 115, marginLeft: 50 }}>
            Not a Match:
          </Row>
          <Row style={{ marginTop: 50, marginLeft: 50 }}>
            <Col>
              {Array.isArray(props.location.dislikedArray)
                ? props.location.dislikedArray.map(element => {
                    console.log(element);
                    return cards.map(card => {
                      if (card.name === element){
                        return <ListComponent housePrice={card.price} houseAddress={card.address} houseDate={card.date} houseImg={card.images[1].src} />;
                      }
                    });
                  })
              : "Page not rendered"}
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
}
