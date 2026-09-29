const sampleListings = [
    {
        title: "Cozy Beachfront Cottage",
        description: "Escape to this charming beachfront cottage for a relaxing getaway.",
        image: {
            url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2",
            filename: "cozy-beachfront-cottage"
        },
        price: 1500,
        location: "Malibu",
        country: "United States",
        geometry: {
            type: "Point",
            coordinates: [-118.7798, 34.0259]
        }
    },

    {
        title: "Modern Loft in Downtown",
        description: "Stay in the heart of the city in this stylish modern loft apartment.",
        image: {
            url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
            filename: "modern-loft-downtown"
        },
        price: 1200,
        location: "New York City",
        country: "United States",
        geometry: {
            type: "Point",
            coordinates: [-74.0060, 40.7128]
        }
    },

    {
        title: "Mountain Retreat",
        description: "Enjoy breathtaking mountain views from this peaceful retreat.",
        image: {
            url: "https://images.unsplash.com/photo-1510798831971-661eb04b3739",
            filename: "mountain-retreat"
        },
        price: 1800,
        location: "Aspen",
        country: "United States",
        geometry: {
            type: "Point",
            coordinates: [-106.8175, 39.1911]
        }
    },

    {
        title: "Luxury Villa with Pool",
        description: "Relax in this beautiful luxury villa featuring a private swimming pool.",
        image: {
            url: "https://images.unsplash.com/photo-1613490493576-7fde63acd811",
            filename: "luxury-villa-pool"
        },
        price: 3500,
        location: "Bali",
        country: "Indonesia",
        geometry: {
            type: "Point",
            coordinates: [115.1889, -8.4095]
        }
    },

    {
        title: "Seaside Apartment",
        description: "A beautiful apartment with stunning views of the ocean.",
        image: {
            url: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d",
            filename: "seaside-apartment"
        },
        price: 2200,
        location: "Santorini",
        country: "Greece",
        geometry: {
            type: "Point",
            coordinates: [25.4615, 36.3932]
        }
    },

    {
        title: "Forest Cabin",
        description: "Spend a peaceful weekend surrounded by nature in this cozy cabin.",
        image: {
            url: "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8",
            filename: "forest-cabin"
        },
        price: 950,
        location: "Whistler",
        country: "Canada",
        geometry: {
            type: "Point",
            coordinates: [-122.9574, 50.1163]
        }
    },

    {
        title: "Luxury City Penthouse",
        description: "Experience luxury living from this stunning penthouse in the city.",
        image: {
            url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
            filename: "luxury-city-penthouse"
        },
        price: 4200,
        location: "Dubai",
        country: "United Arab Emirates",
        geometry: {
            type: "Point",
            coordinates: [55.2708, 25.2048]
        }
    },

    {
        title: "Rustic Countryside Home",
        description: "A peaceful countryside home perfect for families and groups.",
        image: {
            url: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6",
            filename: "rustic-countryside-home"
        },
        price: 1100,
        location: "Yorkshire",
        country: "United Kingdom",
        geometry: {
            type: "Point",
            coordinates: [-1.5491, 53.9590]
        }
    },

    {
        title: "Modern Lake House",
        description: "Wake up to beautiful lake views in this modern and comfortable house.",
        image: {
            url: "https://images.unsplash.com/photo-1601918774946-25832a4be0d6",
            filename: "modern-lake-house"
        },
        price: 2400,
        location: "Lake Tahoe",
        country: "United States",
        geometry: {
            type: "Point",
            coordinates: [-120.0324, 39.0968]
        }
    },

    {
        title: "Tropical Paradise Villa",
        description: "Enjoy a tropical vacation in this beautiful private villa.",
        image: {
            url: "https://images.unsplash.com/photo-1582610116397-edb318620f90",
            filename: "tropical-paradise-villa"
        },
        price: 2800,
        location: "Phuket",
        country: "Thailand",
        geometry: {
            type: "Point",
            coordinates: [98.3923, 7.8804]
        }
    },

    {
        title: "Historic European Apartment",
        description: "Stay in a charming historic apartment located in the heart of the city.",
        image: {
            url: "https://images.unsplash.com/photo-1560185008-b033106af5c3",
            filename: "historic-european-apartment"
        },
        price: 1600,
        location: "Paris",
        country: "France",
        geometry: {
            type: "Point",
            coordinates: [2.3522, 48.8566]
        }
    },

    {
        title: "Mountain View Villa",
        description: "Relax in a beautiful villa surrounded by stunning mountains and peaceful nature.",
        image: {
            url: "https://images.unsplash.com/photo-1510798831971-661eb04b3739",
            filename: "mountain-view-villa"
        },
        price: 2500,
        location: "Interlaken",
        country: "Switzerland",
        geometry: {
            type: "Point",
            coordinates: [7.8632, 46.6863]
        }
    },

    {
        title: "Luxury Beach House",
        description: "Enjoy a peaceful stay in a luxurious beach house with amazing ocean views.",
        image: {
            url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2",
            filename: "luxury-beach-house"
        },
        price: 3200,
        location: "Bali",
        country: "Indonesia",
        geometry: {
            type: "Point",
            coordinates: [115.1889, -8.4095]
        }
    },

    {
        title: "Forest Cabin Retreat",
        description: "A cozy wooden cabin surrounded by beautiful forests, perfect for a relaxing getaway.",
        image: {
            url: "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8",
            filename: "forest-cabin-retreat"
        },
        price: 1800,
        location: "Aspen",
        country: "United States",
        geometry: {
            type: "Point",
            coordinates: [-106.8175, 39.1911]
        }
    },

    {
        title: "Modern City Apartment",
        description: "Stay in a stylish modern apartment located in the heart of the city.",
        image: {
            url: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
            filename: "modern-city-apartment"
        },
        price: 2200,
        location: "Dubai",
        country: "United Arab Emirates",
        geometry: {
            type: "Point",
            coordinates: [55.2708, 25.2048]
        }
    },

    {
        title: "Lakefront Luxury Lodge",
        description: "Experience a peaceful luxury stay beside a beautiful lake with breathtaking views.",
        image: {
            url: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e",
            filename: "lakefront-luxury-lodge"
        },
        price: 2900,
        location: "Queenstown",
        country: "New Zealand",
        geometry: {
            type: "Point",
            coordinates: [168.6626, -45.0312]
        }
    },

    {
        title: "Cozy Ski Chalet",
        description: "Warm up beside the fireplace after an exciting day on the slopes.",
        image: {
            url: "https://images.unsplash.com/photo-1542718610-a1d656d1884c",
            filename: "cozy-ski-chalet"
        },
        price: 2100,
        location: "Zermatt",
        country: "Switzerland",
        geometry: {
            type: "Point",
            coordinates: [7.7491, 46.0207]
        }
    },

    {
        title: "Ocean View Resort",
        description: "Relax in a comfortable resort with amazing ocean views and modern facilities.",
        image: {
            url: "https://images.unsplash.com/photo-1564501049412-61c2a3083791",
            filename: "ocean-view-resort"
        },
        price: 2600,
        location: "Miami",
        country: "United States",
        geometry: {
            type: "Point",
            coordinates: [-80.1918, 25.7617]
        }
    },

    {
        title: "Minimalist Studio",
        description: "A stylish and affordable studio apartment perfect for solo travelers.",
        image: {
            url: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
            filename: "minimalist-studio"
        },
        price: 800,
        location: "Berlin",
        country: "Germany",
        geometry: {
            type: "Point",
            coordinates: [13.4050, 52.5200]
        }
    },

    {
        title: "Jungle Treehouse",
        description: "Stay high above the forest floor in this unique jungle treehouse.",
        image: {
            url: "https://images.unsplash.com/photo-1510798831971-661eb04b3739",
            filename: "jungle-treehouse"
        },
        price: 1700,
        location: "Ubud",
        country: "Indonesia",
        geometry: {
            type: "Point",
            coordinates: [115.2625, -8.5069]
        }
    },

    {
        title: "Elegant Beach House",
        description: "Enjoy direct beach access from this spacious and elegant vacation home.",
        image: {
            url: "https://images.unsplash.com/photo-1494526585095-c41746248156",
            filename: "elegant-beach-house"
        },
        price: 3200,
        location: "Gold Coast",
        country: "Australia",
        geometry: {
            type: "Point",
            coordinates: [153.4000, -28.0167]
        }
    },

    {
        title: "Modern Mountain Cabin",
        description: "A modern cabin surrounded by mountains, forests, and fresh air.",
        image: {
            url: "https://images.unsplash.com/photo-1510798831971-661eb04b3739",
            filename: "modern-mountain-cabin"
        },
        price: 1450,
        location: "Banff",
        country: "Canada",
        geometry: {
            type: "Point",
            coordinates: [-115.5708, 51.1784]
        }
    },

    {
        title: "Romantic Italian Villa",
        description: "Enjoy a romantic stay in this beautiful villa surrounded by Italian countryside.",
        image: {
            url: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6",
            filename: "romantic-italian-villa"
        },
        price: 2900,
        location: "Tuscany",
        country: "Italy",
        geometry: {
            type: "Point",
            coordinates: [11.2558, 43.7711]
        }
    },

    {
        title: "Luxury Island Bungalow",
        description: "Enjoy crystal-clear water and peaceful surroundings in this island bungalow.",
        image: {
            url: "https://images.unsplash.com/photo-1505881502353-a1986add3762",
            filename: "luxury-island-bungalow"
        },
        price: 3800,
        location: "Maldives",
        country: "Maldives",
        geometry: {
            type: "Point",
            coordinates: [73.5093, 4.1755]
        }
    }
];

module.exports = {
    data: sampleListings
};