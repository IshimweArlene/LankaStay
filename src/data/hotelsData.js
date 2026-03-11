import img1 from '../assets/img1.jpg'
import img2 from '../assets/img2.jpg'
import img3 from '../assets/img3.jpg'
import img4 from '../assets/img4.jpg'
import img6 from '../assets/img6.jpg'
import img5 from '../assets/img5.jpg'
import img7 from '../assets/img7.jpg'
import img8 from '../assets/img8.jpg'
import orign from '../assets/orign.jpg'
import reg from '../assets/reg.jpg'
import green from '../assets/green.jpg'
import room1 from '../assets/room1.jpg'
import room2 from '../assets/room2.jpg'
import small from '../assets/small.png'
import rectangle from '../assets/Rectangle 6.png'
import pic1 from '../assets/pic1.png'
import pic2 from '../assets/pic2.png'
import pic3 from '../assets/pic3.png'
import pic4 from '../assets/pic4.png'

export const hotelsData = [
  {
    id: 1,
    name: 'Blue Origin Fams',
    location: 'Galle, Sri Lanka',
    price: 50,
    image: img1,
    images: [img1, small, rectangle],
    description: 'Minimal techno is a minimalist subgenre of techno music. It is characterized by a stripped-down aesthetic that exploits the use of repetition and understated development. Minimal techno is thought to have been originally developed in the early 1990s by Detroit-based producers Robert Hood and Daniel Bell.',
    description2: 'Such trends saw the demise of the soul-infused techno that typified the original Detroit sound. Robert Hood has noted that he and Daniel Bell both realized something was missing from techno in the post-rave era.',
    features: {
      bedrooms: 1,
      livingRooms: 1,
      bathrooms: 1,
      diningRooms: 1,
      wifi: '10 mbps',
      units: 7,
      kitchen: 1,
      tvs: 2
    },
    treasures: [
      { name: 'Green Lake', category: 'Nature', image: pic1 },
      { name: 'Dog Clubs', category: 'Pool', image: pic2 },
      { name: 'Labour and Wait', category: 'Shopping', image: pic3, popular: true },
      { name: 'Snorkelling', category: 'Beach', image: pic4 }
    ]
  },
  {
    id: 2,
    name: 'Ocean Lund',
    location: 'Trincomalle, Sri Lanka',
    price: 22,
    image: img2,
    images: [img2, small, rectangle],
    description: 'Experience the serene beauty of Ocean Lund, a coastal paradise offering breathtaking views and modern amenities. Perfect for those seeking tranquility by the sea.',
    description2: 'Our property features spacious rooms with ocean views, ensuring a memorable stay for families and couples alike.',
    features: {
      bedrooms: 2,
      livingRooms: 1,
      bathrooms: 2,
      diningRooms: 1,
      wifi: '20 mbps',
      units: 5,
      kitchen: 1,
      tvs: 3
    },
    treasures: [
      { name: 'Beach Walk', category: 'Nature', image: pic1 },
      { name: 'Water Sports', category: 'Activity', image: pic2 },
      { name: 'Local Market', category: 'Shopping', image: pic3 },
      { name: 'Diving', category: 'Beach', image: pic4, popular: true }
    ]
  },
  {
    id: 3,
    name: 'Stark House',
    location: 'Dehiwala, Sri Lanka',
    price: 856,
    image: img3,
    images: [img3, small, rectangle],
    description: 'Luxury redefined at Stark House. This premium property offers world-class amenities and exceptional service in the heart of Dehiwala.',
    description2: 'Indulge in the finest accommodations with state-of-the-art facilities and personalized attention to detail.',
    features: {
      bedrooms: 4,
      livingRooms: 2,
      bathrooms: 3,
      diningRooms: 2,
      wifi: '100 mbps',
      units: 3,
      kitchen: 2,
      tvs: 5
    },
    treasures: [
      { name: 'Zoo Visit', category: 'Nature', image: pic1, popular: true },
      { name: 'Spa Center', category: 'Wellness', image: pic2 },
      { name: 'Shopping Mall', category: 'Shopping', image: pic3 },
      { name: 'Beach Club', category: 'Beach', image: pic4 }
    ]
  },
  {
    id: 4,
    name: 'Vinna Vill',
    location: 'Beruwala, Sri Lanka',
    price: 62,
    image: img4,
    images: [img4, small, rectangle],
    description: 'Discover the charm of Vinna Vill, a cozy retreat nestled in the beautiful coastal town of Beruwala. Perfect for a relaxing getaway.',
    description2: 'Enjoy comfortable accommodations with easy access to pristine beaches and local attractions.',
    features: {
      bedrooms: 2,
      livingRooms: 1,
      bathrooms: 1,
      diningRooms: 1,
      wifi: '15 mbps',
      units: 6,
      kitchen: 1,
      tvs: 2
    },
    treasures: [
      { name: 'Turtle Hatchery', category: 'Nature', image: pic1 },
      { name: 'Beach Resort', category: 'Pool', image: pic2, popular: true },
      { name: 'Craft Market', category: 'Shopping', image: pic3 },
      { name: 'Surfing', category: 'Beach', image: pic4 }
    ]
  },
  {
    id: 5,
    name: 'Bobox',
    location: 'Kandy, Sri Lanka',
    price: 72,
    image: img6,
    images: [img6, small, rectangle],
    description: 'Bobox offers a unique blend of cultural heritage and modern comfort in the historic city of Kandy. Immerse yourself in Sri Lankan culture.',
    description2: 'Our property provides easy access to the Temple of the Tooth and other cultural landmarks.',
    features: {
      bedrooms: 2,
      livingRooms: 1,
      bathrooms: 2,
      diningRooms: 1,
      wifi: '25 mbps',
      units: 8,
      kitchen: 1,
      tvs: 3
    },
    treasures: [
      { name: 'Temple Visit', category: 'Culture', image: pic1, popular: true },
      { name: 'Botanical Garden', category: 'Nature', image: pic2 },
      { name: 'Tea Factory', category: 'Shopping', image: pic3 },
      { name: 'Lake View', category: 'Nature', image: pic4 }
    ]
  },
  {
    id: 6,
    name: 'Shangri-La',
    location: 'Colombo, Sri Lanka',
    price: 120,
    image: img7,
    images: [img7, small, rectangle],
    description: 'Experience luxury at Shangri-La, located in the heart of Colombo. This popular choice offers premium amenities and exceptional service.',
    description2: 'Perfect for business and leisure travelers seeking the best of urban hospitality.',
    features: {
      bedrooms: 3,
      livingRooms: 2,
      bathrooms: 2,
      diningRooms: 1,
      wifi: '50 mbps',
      units: 10,
      kitchen: 1,
      tvs: 4
    },
    treasures: [
      { name: 'City Mall', category: 'Shopping', image: pic1, popular: true },
      { name: 'Rooftop Pool', category: 'Pool', image: pic2 },
      { name: 'Fine Dining', category: 'Restaurant', image: pic3 },
      { name: 'Galle Face', category: 'Beach', image: pic4 }
    ]
  },
  {
    id: 7,
    name: 'Top View',
    location: 'Hikkaduwe, Sri Lanka',
    price: 45,
    image: orign,
    images: [orign, small, rectangle],
    description: 'Top View offers stunning panoramic views of Hikkaduwa beach. A perfect spot for beach lovers and adventure seekers.',
    description2: 'Enjoy water sports, beach activities, and vibrant nightlife just steps from your door.',
    features: {
      bedrooms: 1,
      livingRooms: 1,
      bathrooms: 1,
      diningRooms: 1,
      wifi: '15 mbps',
      units: 4,
      kitchen: 1,
      tvs: 2
    },
    treasures: [
      { name: 'Coral Reef', category: 'Beach', image: pic1 },
      { name: 'Beach Bar', category: 'Entertainment', image: pic2, popular: true },
      { name: 'Surf Shop', category: 'Shopping', image: pic3 },
      { name: 'Snorkeling', category: 'Beach', image: pic4 }
    ]
  },
  {
    id: 8,
    name: 'Green Villa',
    location: 'Kandy, Sri Lanka',
    price: 55,
    image: green,
    images: [green, small, rectangle],
    description: 'Green Villa is surrounded by lush greenery and offers a peaceful retreat in the hills of Kandy. Perfect for nature lovers.',
    description2: 'Wake up to the sounds of nature and enjoy fresh mountain air in this serene setting.',
    features: {
      bedrooms: 2,
      livingRooms: 1,
      bathrooms: 1,
      diningRooms: 1,
      wifi: '20 mbps',
      units: 5,
      kitchen: 1,
      tvs: 2
    },
    treasures: [
      { name: 'Hiking Trail', category: 'Nature', image: pic1, popular: true },
      { name: 'Spice Garden', category: 'Nature', image: pic2 },
      { name: 'Local Crafts', category: 'Shopping', image: pic3 },
      { name: 'Waterfall', category: 'Nature', image: pic4 }
    ]
  },
  {
    id: 9,
    name: 'Wooden Pit',
    location: 'Ambalagonde, Sri Lanka',
    price: 38,
    image: reg,
    images: [reg, small, rectangle],
    description: 'Wooden Pit offers a rustic charm with modern comforts. Experience authentic Sri Lankan hospitality in a tranquil setting.',
    description2: 'This eco-friendly property is perfect for those seeking an off-the-beaten-path experience.',
    features: {
      bedrooms: 1,
      livingRooms: 1,
      bathrooms: 1,
      diningRooms: 1,
      wifi: '10 mbps',
      units: 3,
      kitchen: 1,
      tvs: 1
    },
    treasures: [
      { name: 'Village Tour', category: 'Culture', image: pic1 },
      { name: 'Rice Fields', category: 'Nature', image: pic2, popular: true },
      { name: 'Handicrafts', category: 'Shopping', image: pic3 },
      { name: 'River Bath', category: 'Nature', image: pic4 }
    ]
  },
  {
    id: 10,
    name: 'Boutique',
    location: 'Kandy, Sri Lanka',
    price: 68,
    image: img5,
    images: [img5, small, rectangle],
    description: 'Boutique hotel offering personalized service and unique design elements. Each room tells its own story.',
    description2: 'Experience curated comfort with attention to every detail in this stylish property.',
    features: {
      bedrooms: 2,
      livingRooms: 1,
      bathrooms: 2,
      diningRooms: 1,
      wifi: '30 mbps',
      units: 6,
      kitchen: 1,
      tvs: 3
    },
    treasures: [
      { name: 'Art Gallery', category: 'Culture', image: pic1, popular: true },
      { name: 'Cafe Hopping', category: 'Restaurant', image: pic2 },
      { name: 'Antique Shop', category: 'Shopping', image: pic3 },
      { name: 'City Walk', category: 'Culture', image: pic4 }
    ]
  },
  {
    id: 11,
    name: 'Modern',
    location: 'Nuwereliya, Sri Lanka',
    price: 85,
    image: room1,
    images: [room1, small, rectangle],
    description: 'Modern accommodations in the cool climate of Nuwara Eliya. Perfect for those seeking a mountain retreat.',
    description2: 'Enjoy tea plantations, cool weather, and colonial architecture in this charming hill station.',
    features: {
      bedrooms: 2,
      livingRooms: 1,
      bathrooms: 2,
      diningRooms: 1,
      wifi: '25 mbps',
      units: 7,
      kitchen: 1,
      tvs: 3
    },
    treasures: [
      { name: 'Tea Estate', category: 'Nature', image: pic1, popular: true },
      { name: 'Golf Course', category: 'Activity', image: pic2 },
      { name: 'Tea Shop', category: 'Shopping', image: pic3 },
      { name: 'Lake Gregory', category: 'Nature', image: pic4 }
    ]
  },
  {
    id: 12,
    name: 'Silver Rain',
    location: 'Dehiwala, Sri Lanka',
    price: 75,
    image: room2,
    images: [room2, small, rectangle],
    description: 'Silver Rain combines contemporary design with coastal charm. Enjoy modern amenities near the beach.',
    description2: 'This property offers the perfect balance of comfort and convenience for your coastal getaway.',
    features: {
      bedrooms: 2,
      livingRooms: 1,
      bathrooms: 2,
      diningRooms: 1,
      wifi: '30 mbps',
      units: 8,
      kitchen: 1,
      tvs: 3
    },
    treasures: [
      { name: 'Beach Access', category: 'Beach', image: pic1 },
      { name: 'Seafood Market', category: 'Shopping', image: pic2, popular: true },
      { name: 'Sunset Point', category: 'Nature', image: pic3 },
      { name: 'Water Park', category: 'Activity', image: pic4 }
    ]
  },
  {
    id: 13,
    name: 'CashVille',
    location: 'Ampara, Sri Lanka',
    price: 42,
    image: img8,
    images: [img8, small, rectangle],
    description: 'CashVille is a popular choice for travelers exploring the eastern coast. Comfortable and affordable accommodations.',
    description2: 'Discover pristine beaches and authentic local culture in this emerging tourist destination.',
    features: {
      bedrooms: 1,
      livingRooms: 1,
      bathrooms: 1,
      diningRooms: 1,
      wifi: '15 mbps',
      units: 5,
      kitchen: 1,
      tvs: 2
    },
    treasures: [
      { name: 'Arugam Bay', category: 'Beach', image: pic1, popular: true },
      { name: 'Surf Lessons', category: 'Activity', image: pic2 },
      { name: 'Local Market', category: 'Shopping', image: pic3 },
      { name: 'Lagoon Tour', category: 'Nature', image: pic4 }
    ]
  }
];

export const getHotelById = (id) => {
  return hotelsData.find(hotel => hotel.id === parseInt(id));
};
