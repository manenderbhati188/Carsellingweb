const cars = [
    {
        name: "Mahindra Thar",
        image: "https://stimg.cardekho.com/images/carexteriorimages/630x420/Mahindra/Thar/10745/1697697308167/front-left-side-47.jpg?tr=w-300",
        price: "₹24,90,000",
        engineCapacityCC: 2184,
        fuelType: ["Petrol", "Diesel"]
    },
    {
        name: "Mahindra Bolero",
        image: "https://stimg.cardekho.com/images/carexteriorimages/630x420/Mahindra/Bolero/10754/1697696929365/front-left-side-47.jpg?tr=w-300",
        price: "₹16,60,000",
        engineCapacityCC: 2523,
        fuelType: ["Diesel"]
    },
    {
        name: "Tata Punch",
        image: "https://stimg.cardekho.com/images/carexteriorimages/630x420/Tata/Punch/10681/1691392713058/front-left-side-47.jpg?tr=w-300",
        price: "₹14,94,000",
        engineCapacityCC: 1199,
        fuelType: ["Petrol"]
    },
    {
        name: "Mahindra Scorpio",
        image: "https://stimg.cardekho.com/images/carexteriorimages/630x420/Mahindra/Scorpio/10764/1708522826716/front-left-side-47.jpg?tr=w-300",
        price: "₹23,24,000",
        engineCapacityCC: 2179,
        fuelType: ["Diesel"]
    },
    {
        name: "Hyundai Creta",
        image: "https://stimg.cardekho.com/images/carexteriorimages/630x420/Hyundai/Creta/8667/1705465218824/front-left-side-47.jpg?tr=w-300",
        price: "₹20,75,000",
        engineCapacityCC: 1497,
        fuelType: ["Petrol", "Diesel"]
    },
    {
        name: "Mahindra XUV 700",
        image: "https://stimg.cardekho.com/images/carexteriorimages/630x420/Mahindra/XUV700/10789/1705388477954/front-left-side-47.jpg?tr=w-300",
        price: "₹29,05,000",
        engineCapacityCC: 2198,
        fuelType: ["Petrol", "Diesel"]
    },
    {
        name: "Tata Nexon",
        image: "https://stimg.cardekho.com/images/carexteriorimages/630x420/Tata/Nexon/11104/1697698470038/front-left-side-47.jpg?imwidth=420&impolicy=resize",
        price: "₹18,26,000",
        engineCapacityCC: 1199,
        fuelType: ["Petrol", "Diesel"]
    },
    {
        name: "Maruti Suzuki Brezza",
        image: "https://stimg.cardekho.com/images/carexteriorimages/630x420/Maruti/Brezza/10388/1694424068944/front-left-side-47.jpg?imwidth=420&impolicy=resize",
        price: "₹19,92,000",
        engineCapacityCC: 1462,
        fuelType: ["Petrol"]
    },
    {
        name: "Toyota Fortuner",
        image: "https://stimg.cardekho.com/images/carexteriorimages/630x420/Toyota/Fortuner/10903/1695443447797/front-left-side-47.jpg?imwidth=420&impolicy=resize",
        price: "₹37,35,000",
        engineCapacityCC: 2755,
        fuelType: ["Diesel"]
    },
    {
        name: "Mahindra XUV 300",
        image: "https://stimg.cardekho.com/images/carexteriorimages/630x420/Mahindra/XUV-3XO/11683/1714407830967/front-left-side-47.jpg?imwidth=420&impolicy=resize",
        price: "₹17,43,000",
        engineCapacityCC: 1497,
        fuelType: ["Petrol", "Diesel"]
    },
    {
        name: "Land Rover Defender",
        image: "https://stimg.cardekho.com/images/carexteriorimages/630x420/Land-Rover/Defender/11830/Land-Rover-Defender-Octa/1720081741749/front-left-side-47.jpg?imwidth=420&impolicy=resize",
        price: "₹49,80,000",
        engineCapacityCC: 2997,
        fuelType: ["Petrol", "Diesel"]
    },
    {
        name: "Maruti Suzuki FRONX",
        image: "https://stimg.cardekho.com/images/carexteriorimages/630x420/Maruti/FRONX/9243/1697697928533/front-left-side-47.jpg?imwidth=420&impolicy=resize",
        price: "₹15,77,000",
        engineCapacityCC: 1197,
        fuelType: ["Petrol"]
    },
    {
        name: "Land Rover Range Rover",
        image: "https://stimg.cardekho.com/images/carexteriorimages/630x420/Land-Rover/Range-Rover/11540/1719037980777/front-left-side-47.jpg?imwidth=420&impolicy=resize",
        price: "₹74,70,000",
        engineCapacityCC: 2997,
        fuelType: ["Petrol", "Diesel"]
    },
    {
        name: "Kia Seltos",
        image: "https://stimg.cardekho.com/images/carexteriorimages/630x420/Kia/Seltos-2023/8709/1688465684023/front-left-side-47.jpg?imwidth=420&impolicy=resize",
        price: "₹22,41,000",
        engineCapacityCC: 1497,
        fuelType: ["Petrol", "Diesel"]
    },
    {
        name: "Hyundai Venue",
        image: "https://stimg.cardekho.com/images/carexteriorimages/630x420/Hyundai/Venue/10145/1697696499095/front-left-side-47.jpg?imwidth=420&impolicy=resize",
        price: "₹18,26,000",
        engineCapacityCC: 1197,
        fuelType: ["Petrol"]
    },
    {
        name: "Nissan X-Trail",
        image: "https://stimg.cardekho.com/images/carexteriorimages/630x420/Nissan/X-Trail/3372/1666087743726/front-left-side-47.jpg?imwidth=420&impolicy=resize",
        price: "₹26,56,000",
        engineCapacityCC: 2488,
        fuelType: ["Petrol", "Diesel"]
    },
    {
        name: "Tata Harrier",
        image: "https://stimg.cardekho.com/images/carexteriorimages/630x420/Tata/Harrier/9368/1697532960290/front-left-side-47.jpg?imwidth=420&impolicy=resize",
        price: "₹24,90,000",
        engineCapacityCC: 1956,
        fuelType: ["Diesel"]
    }
];

export default cars;
