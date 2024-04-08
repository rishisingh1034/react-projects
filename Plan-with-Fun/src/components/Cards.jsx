import React from 'react';
import Card from './Card';
import Agra from '../assets/Agra.jpeg';
import Jaipur from '../assets/Jaipur.jpeg';
import Darjeeling from '../assets/Darjeeling.jpeg';
import Goa from '../assets/Goa.jpeg';
import Jaisalmer from '../assets/Jaisalmer.jpeg';
import Konchi from '../assets/Kochi.jpeg';
import Varanasi from '../assets/Varanasi.jpeg';

const Cards = () => {
    return (
        <div className='flex flex-wrap ml-16'>
            <Card place="Agra" price="₹ 35,758" image={Agra} alt="agra" more="Agra is a city in northern India, known for the iconic Taj Mahal, a stunning white marble mausoleum built by Mughal emperor Shah Jahan in memory of his beloved wife. Agra is also home to several other..." less='Agra is a city in northern India, known for the iconic Taj Mahal, a stunning white marble mausoleum built by Mughal emperor Shah Jahan in memory of his beloved wife. Agra is also home to several other historic and architectural wonders, including Agra Fort and Fatehpur Sikri. ' />

            <Card place="Jaipur" price="₹ 82,560" image={Jaipur} alt="jaipur" more="Jaipur is the capital city of the Indian state of Rajasthan, known for its stunning pink-hued buildings and palaces. The city is also known as the 'Pink City' due to the color of many of its buildings.... " less='Jaipur is the capital city of the Indian state of Rajasthan, known for its stunning pink-hued buildings and palaces. The city is also known as the "Pink City" due to the color of many of its buildings. Jaipur is famous for its intricate textiles, colorful handicrafts, and delicious cuisine.' />

            <Card place="Darjeeling" price="₹ 35,758" image={Darjeeling} alt="agra" more="Starting in the colorful port city of Gdańsk, you'll escape the crowds and embrace the understated elegance of ready-for-prime-time Poland for 10 days. With an expert Rick Steves guide at your side, y...." less="Starting in the colorful port city of Gdańsk, you'll escape the crowds and embrace the understated elegance of ready-for-prime-time Poland for 10 days. With an expert Rick Steves guide at your side, you'll experience mighty Malbork castle, the cobbly-cute village of Toruń, Poland's contemporary capital of Warsaw, the spiritual Jasna Góra Monastery, and charming Kraków — Poland's finest city. In this land of surprises — so trendy and hip, yet steeped in history — there's so much to discover. Join us for the Best of Poland in 10 Days!" />

            <Card place="Jaisalmer" price="₹ 35,758" image={Jaisalmer} alt="Jaisalmer" more="Jaisalmer is a city in the Indian state of Rajasthan, known for its stunning sandstone architecture and its location in the heart of the Thar Desert. The city is home to several impressive palaces and.... " less="Jaisalmer is a city in the Indian state of Rajasthan, known for its stunning sandstone architecture and its location in the heart of the Thar Desert. The city is home to several impressive palaces and fortresses, as well as unique cultural traditions and handicrafts." />

            <Card place="Goa" price="₹ 35,758" image={Goa} alt="Goa" more="Goa is a small state on India's western coast, known for its stunning beaches, vibrant nightlife, and Portuguese-influenced architecture. The state is also known for its spicy seafood dishes and uniq...." less="Goa is a small state on India's western coast, known for its stunning beaches, vibrant nightlife, and Portuguese-influenced architecture. The state is also known for its spicy seafood dishes and unique cultural traditions." />

            <Card place="Konchi" price="₹ 35,758" image={Konchi} alt="Konchi" more="Kochi is a port city in the Indian state of Kerala, known for its historic connections to trade and commerce. The city is home to several stunning churches, synagogues, and mosques, as well as a rich ...." less="Kochi is a port city in the Indian state of Kerala, known for its historic connections to trade and commerce. The city is home to several stunning churches, synagogues, and mosques, as well as a rich culinary tradition that blends Indian, Portuguese, and other influences." />

            <Card place="Varanasi" price="₹ 35,758" image={Varanasi} alt="Varanasi" more="Varanasi is a holy city in northern India, situated on the banks of the sacred river Ganges. The city is a major pilgrimage site for Hindus and is famous for its ancient temples, winding alleyways, an.... " less='Varanasi is a holy city in northern India, situated on the banks of the sacred river Ganges. The city is a major pilgrimage site for Hindus and is famous for its ancient temples, winding alleyways, and colorful festivals.' />
        </div>
    )
}

export default Cards