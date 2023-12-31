import { ObjectId } from 'mongodb';

export const foods = [
    {
        _id: new ObjectId(),
        name: "Ebi Nigiri 2pcs",
        price: 50000,
        desc: "Shrimp nigiri sushi",
        picturePath: "https://firebasestorage.googleapis.com/v0/b/web-project-1faf3.appspot.com/o/items%2Febi-nigiri-2pcs.jpg?alt=media&token=0d0fb254-d4db-470b-92c5-9869bd2dd0d5",
        type: "sushi",
        isAvailable: true,
    },
    {
        _id: new ObjectId(),
        name: "Unagi Nigiri 2pcs",
        price: 45000,
        desc: "Eel nigiri sushi",
        picturePath: "https://firebasestorage.googleapis.com/v0/b/web-project-1faf3.appspot.com/o/items%2Funagi-nigiri-2pcs.jpg?alt=media&token=163866d2-c3e3-49e8-8579-c91d8592af39",
        type: "sushi",
        isAvailable: true,
    },
    {
        _id: new ObjectId(),
        name: "Salmon Nigiri 2pcs",
        price: 60000,
        desc: "Hand-pressed sushi rice topped with fresh salmon",
        picturePath: "https://firebasestorage.googleapis.com/v0/b/web-project-1faf3.appspot.com/o/items%2Fsalmon-nigiri-2pcs.jpg?alt=media&token=7102371f-a14b-46d7-a8bc-cec03773155a",
        type: "sushi",
        isAvailable: true,
    },
    {
        _id: new ObjectId(),
        name: "Ikura Gunkan 2pcs",
        price: 80000,
        desc: "Trout caviar topped on nori-wrapped sushi rice",
        picturePath: "https://firebasestorage.googleapis.com/v0/b/web-project-1faf3.appspot.com/o/items%2Fikura-gunkan-2pcs.jpg?alt=media&token=cd15702a-3033-463f-8747-7f80000c84c6",
        type: "sushi",
        isAvailable: false,
    },
    {
        _id: new ObjectId(),
        name: "Maguro Nigiri 2pcs",
        price: 60000,
        desc: "Tuna Nigiri Sushi",
        picturePath: "https://firebasestorage.googleapis.com/v0/b/web-project-1faf3.appspot.com/o/items%2Fmaguro-nigiri-2pcs.jpg?alt=media&token=26faaab7-7a65-465c-862b-f9b2c98327df",
        type: "sushi",
        isAvailable: true,
    },
    {
        _id: new ObjectId(),
        name: "Shimesaba Sashimi",
        price: 150000,
        desc: "Cured Mackerel",
        picturePath: "https://firebasestorage.googleapis.com/v0/b/web-project-1faf3.appspot.com/o/items%2Fshimesaba-sashimi.jpg?alt=media&token=d6a760ee-3164-49ad-8111-f8cdac1d9e02",
        type: "sashimi",
        isAvailable: true,
    },
    {
        _id: new ObjectId(),
        name: "Tai Sashimi",
        price: 100000,
        desc: "Sea bream sashimi",
        picturePath: "https://firebasestorage.googleapis.com/v0/b/web-project-1faf3.appspot.com/o/items%2Ftai-sashimi.jpg?alt=media&token=e392bd0a-1014-44fb-8d46-1ed5c0aac26d",
        type: "sashimi",
        isAvailable: false,
    },
    {
        _id: new ObjectId(),
        name: "Hamachi Sashimi",
        price: 230000,
        desc: "Fresh Yellowtail (Imported)",
        picturePath: "https://firebasestorage.googleapis.com/v0/b/web-project-1faf3.appspot.com/o/items%2Fhamachi-sashimi.jpg?alt=media&token=6fff6cd4-2a4a-46b3-834d-e0537a69644d",
        type: "sashimi",
        isAvailable: true,
    },
    {
        _id: new ObjectId(),
        name: "Salmon Sashimi",
        price: 190000,
        desc: "Fresh Salmon, chilled airlift from Norway",
        picturePath: "https://firebasestorage.googleapis.com/v0/b/web-project-1faf3.appspot.com/o/items%2Fsalmon-sashimi.jpg?alt=media&token=14d35160-0ade-41bf-adf0-222ca2cc8692",
        type: "sashimi",
        isAvailable: true,
    },
    {
        _id: new ObjectId(),
        name: "Pork Shogayaki Bento",
        price: 110000,
        desc: "Ginger-grilled Pork Bento set: Ginger-grilled Pork, Rice, Salad, Fruits, Pickles and Miso soup",
        picturePath: "https://firebasestorage.googleapis.com/v0/b/web-project-1faf3.appspot.com/o/items%2Fpork-shogayaki-bento.jpg?alt=media&token=ef9ff231-1804-4d52-b122-7bf6ead585e0",
        type: "bento",
        isAvailable: true,
    },
    {
        _id: new ObjectId(),
        name: "Beef Yakiniku Bento",
        price: 110000,
        desc: "Beef Yakiniku Bento Set",
        picturePath: "https://firebasestorage.googleapis.com/v0/b/web-project-1faf3.appspot.com/o/items%2Fbeef-yakiniku-bento.jpg?alt=media&token=54c4a2f9-d52c-4a97-ae02-ac7243ef6ccc",
        type: "bento",
        isAvailable: true,
    },
    {
        _id: new ObjectId(),
        name: "Salmon Teriyaki Bento",
        price: 110000,
        desc: "Sweetened soy sauce Salmon Bento set: Sweetened soy sauce Salmon, Rice, Salad, Fruits, Pickles and Miso soup",
        picturePath: "https://firebasestorage.googleapis.com/v0/b/web-project-1faf3.appspot.com/o/items%2Fsalmon-teriyaki-bento.jpg?alt=media&token=e2af1b85-91cc-4b4d-a424-1653d28e8fbe",
        type: "bento",
        isAvailable: true,
    },
    {
        _id: new ObjectId(),
        name: "Chicken Teriyaki Bento",
        price: 110000,
        desc: "Chicken Teriyaki Bento set, chicken teriyaki, Rice, Salad, Fruits, Pickles and Miso soup",
        picturePath: "https://firebasestorage.googleapis.com/v0/b/web-project-1faf3.appspot.com/o/items%2Fchicken-teriyaki-bento.jpg?alt=media&token=df278385-6f02-4c34-9e33-fbca977ae4f0",
        type: "bento",
        isAvailable: true,
    },
    {
        _id: new ObjectId(),
        name: "Tempura Bento",
        price: 110000,
        desc: "Tempura bento set, Shrimp and vegetable tempura, Rice, Salad, Fruits, Pickles and Miso soup",
        picturePath: "https://firebasestorage.googleapis.com/v0/b/web-project-1faf3.appspot.com/o/items%2Ftempura-bento.jpg?alt=media&token=adcea7d0-2ade-4539-900f-803e5fb29d40",
        type: "bento",
        isAvailable: true,
    },
    {
        _id: new ObjectId(),
        name: "Tonkatsu Bento",
        price: 110000,
        desc: "Pork Tonkatsu Bento set: Deep-fried breaded pork fillet, Rice, Salad, Fruits, Pickles and Miso soup",
        picturePath: "https://firebasestorage.googleapis.com/v0/b/web-project-1faf3.appspot.com/o/items%2Ftonkatsu-bento.jpg?alt=media&token=b5560f00-6390-4d2b-91b4-5717168cc875",
        type: "bento",
        isAvailable: false,
    },
    {
        _id: new ObjectId(),
        name: "SanMig Light",
        price: 20000,
        desc: "355ml",
        picturePath: "https://firebasestorage.googleapis.com/v0/b/web-project-1faf3.appspot.com/o/items%2Fsanmig-light.jpg?alt=media&token=29d70e34-a320-4fc5-be77-388750805f15",
        type: "beverage",
        isAvailable: true,
    },
    {
        _id: new ObjectId(),
        name: "San Miguel Pilsen",
        price: 23000,
        desc: "355ml",
        picturePath: "https://firebasestorage.googleapis.com/v0/b/web-project-1faf3.appspot.com/o/items%2Fsan-miguel-pilsen.jpg?alt=media&token=e5523242-7320-4e30-a180-cf08ae4afb06",
        type: "beverage",
        isAvailable: true,
    },
    {
        _id: new ObjectId(),
        name: "Bottle Water",
        price: 13000,
        desc: "500ml",
        picturePath: "https://firebasestorage.googleapis.com/v0/b/web-project-1faf3.appspot.com/o/items%2Fbottle-water.jpg?alt=media&token=8dcdca9f-01bc-4cff-9ddf-1304bb5485e2",
        type: "beverage",
        isAvailable: true,
    },
    {
        _id: new ObjectId(),
        name: "Sprite",
        price: 16000,
        desc: "330ml",
        picturePath: "https://firebasestorage.googleapis.com/v0/b/web-project-1faf3.appspot.com/o/items%2Fsprite.jpg?alt=media&token=ad819b46-6df2-446a-84e1-ff1a06b3aeb2",
        type: "beverage",
        isAvailable: true,
    },
    {
        _id: new ObjectId(),
        name: "Coca-Cola Original Taste",
        price: 16000,
        desc: "330ml",
        picturePath: "https://firebasestorage.googleapis.com/v0/b/web-project-1faf3.appspot.com/o/items%2Fcoke-reg.jpg?alt=media&token=0c390d7d-2bcf-4ae0-8c6b-0907ec1ec1b4",
        type: "beverage",
        isAvailable: true,
    },
    {
        _id: new ObjectId(),
        name: "Kakiage Soba",
        price: 120000,
        desc: "https://firebasestorage.googleapis.com/v0/b/web-project-1faf3.appspot.com/o/items%2Fkakiage-soba.jpg?alt=media&token=f4a2775b-c675-4623-a9c9-72b50df7285d",
        picturePath: "Soba with mixed vegetables and seafood tempura",
        type: "soba",
        isAvailable: true,
    },
    {
        _id: new ObjectId(),
        name: "Miso Butter Corn Ramen",
        price: 110000,
        desc: "Ramen noodles in soy-sauce flavored soup with butter and corn",
        picturePath: "https://firebasestorage.googleapis.com/v0/b/web-project-1faf3.appspot.com/o/items%2Fmiso-butter-corn-ramen.jpg?alt=media&token=a193de07-9960-45ca-9630-c349e1c6d5ab",
        type: "ramen",
        isAvailable: true,
    },
    {
        _id: new ObjectId(),
        name: "Kake Soba",
        price: 80000,
        desc: "Plain Soba (buckwheat noodle)",
        picturePath: "https://firebasestorage.googleapis.com/v0/b/web-project-1faf3.appspot.com/o/items%2Fkake-soba.jpg?alt=media&token=c275531b-230a-4a30-a590-f0c0bec9c17c",
        type: "soba",
        isAvailable: false,
    },
    {
        _id: new ObjectId(),
        name: "Kitsune Udon",
        price: 100000,
        desc: "Udon with deep-fried tofu",
        picturePath: "https://firebasestorage.googleapis.com/v0/b/web-project-1faf3.appspot.com/o/items%2Fkitsune-udon.jpg?alt=media&token=5267900d-b31f-4e62-9dd1-200f8bd85f1a",
        type: "udon",
        isAvailable: true,
    },
    {
        _id: new ObjectId(),
        name: "Shio Chashumen",
        price: 110000,
        desc: "Braised Pork Ramen in salt flavored soup",
        picturePath: "https://firebasestorage.googleapis.com/v0/b/web-project-1faf3.appspot.com/o/items%2Fshio-chashumen.jpg?alt=media&token=f787d547-7e49-48ca-bf5a-05f34c302319",
        type: "ramen",
        isAvailable: true,
    },
    {
        _id: new ObjectId(),
        name: "Chikuwa Kyuuri",
        price: 10000,
        desc: "Cucumber wrapped in Japanese fish cake",
        picturePath: "https://firebasestorage.googleapis.com/v0/b/web-project-1faf3.appspot.com/o/items%2Fchikuwa-kyuuri.jpg?alt=media&token=4e040d85-8f2a-47d6-bc6d-9f2a8c5df836",
        type: "appetizer",
        isAvailable: true,
    },
    {
        _id: new ObjectId(),
        name: "Agedashi Tofu",
        price: 12000,
        desc: "Deep-fried tofu with bonito flakes & tentsuyu dipping sauce and green onion toppings",
        picturePath: "https://firebasestorage.googleapis.com/v0/b/web-project-1faf3.appspot.com/o/items%2Fagedashi-tofu.jpg?alt=media&token=480bb31f-3294-4504-8771-027813edae60",
        type: "appetizer",
        isAvailable: true,
    },
    {
        _id: new ObjectId(),
        name: "Edamame",
        price: 5000,
        desc: "Boiled salted green soybeans",
        picturePath: "https://firebasestorage.googleapis.com/v0/b/web-project-1faf3.appspot.com/o/items%2Fedamame.jpg?alt=media&token=b8b65399-72c5-41fd-bf2f-baeae865b541",
        type: "appetizer",
        isAvailable: true,
    },
];

export const reviews = [
    {
        name: "John Wick",
        desc: "Absolutely amazing! The place is beautiful and staff are super friendly and the food is delicious.",
    },
    {
        name: "Alex Pereira ",
        desc: "We tried all their entrees, one of their desserts, and everything was de-li-cious. Highly recommended.",
    },
    {
        name: "Dustin Poirier ",
        desc: "The menus options are an excellent value. The dining experience overall is very pleasant. I highly recommend this restaurant.",
    },
    {
        name: "Kenji Masako",
        desc: "素晴らしい食べ物！最初から最後までの全体の経験は素晴らしいです。",
    },
    {
        name: "Yoko Toshio",
        desc: "食べ物はこれ以上良くなることはなく、価格はポーションサイズに対して公正です。素晴らしい食べ物を手に入れるのに最適な場所です。",
    },
    {
        name: "Charles Oliveira ",
        desc: "This is easily one of, if not the best meal we've ever eaten. I cannot recommend this place enough!",
    }
]

export const orders = [
    {
        _id: new ObjectId(),
        user_id: "6435b4e003631442f3216f74",
        name: "Renjun",
        address: "123 Main Street",
        phone: 1234567890,
        date: new Date("2022-10-10"),
        note: "More soy sauce",
        total: 500000,
        isDelivered: false,
        products: [
            {
                product_id: "6436e3ef52605a2ae34415f1",
                price: 12000,
                quantity: 1,
                total: 30000,
            },
            {
                product_id: "6436e3ef52605a2ae34415f2",
                price: 1000,
                quantity: 3,
                total: 60000,
            },
            {
                product_id: "6436e3ef52605a2ae34415f3",
                price: 20000,
                quantity: 2,
                total: 50000,
            },
            {
                product_id: "6436e3ef52605a2ae34415f4",
                price: 50000,
                quantity: 1,
                total: 40000,
            }
        ]
    },
    {
        _id: new ObjectId(),
        user_id: "6436c8757b85d1d1972522e4",
        name: "Henry",
        address: "123 Wsdf Street",
        phone: 1234567890,
        date: new Date("2022-10-11"),
        note: "More soy sauce",
        total: 234400,
        isDelivered: true,
        products: [
            {
                product_id: "6436e3ef52605a2ae34415f5",
                price: 1200,
                quantity: 2,
                total: 30000,
            },
            {
                product_id: "6436e3ef52605a2ae34415f6",
                price: 10040,
                quantity: 3,
                total: 60000,
            },
        ]
    },
    {
        _id: new ObjectId(),
        user_id: "6436c8757b85d1d1972522e4",
        name: "Lam",
        address: "123 Hanoi Street",
        phone: 1234567890,
        date: new Date("2022-12-12"),
        note: "More milk",
        total: 600000,
        isDelivered: false,
        products: [
            {
                product_id: "6436e3ef52605a2ae34415f8",
                price: 12300,
                quantity: 5,
                total: 30000,
            },
            {
                product_id: "6436e3ef52605a2ae34415f9",
                price: 10040,
                quantity: 5,
                total: 60000,
            },
            {
                product_id: "6436e3ef52605a2ae34415fb",
                price: 20000,
                quantity: 5,
                total: 50000,
            },
            {
                product_id: "6436e3ef52605a2ae34415fd",
                price: 50000,
                quantity: 5,
                total: 40000,
            },
            {
                product_id: "6436e3ef52605a2ae34415fe",
                price: 50000,
                quantity: 5,
                total: 40000,
            }
        ]
    },

    {
        _id: new ObjectId(),
        user_id: "6435114d29ef4951b07bf6f8",
        name: "Tony",
        address: "12 Main HighWay",
        phone: 6666666666,
        date: new Date("2022-10-11"),
        note: "More chopsticks",
        total: 500000,
        isDelivered: false,
        products: [
            {
                product_id: "6436e3ef52605a2ae34415f3",
                price: 60000,
                quantity: 1,
                total: 30000,
            },
            {
                product_id: "6436e3ef52605a2ae34415f2",
                price: 1000,
                quantity: 3,
                total: 60000,
            },
          
        ]
    },

    {
        _id: new ObjectId(),
        user_id: "6436ccdb7b85d1d1972522e5",
        name: "Hades",
        address: "1 Universe Street",
        phone: 1234567892,
        date: new Date("2022-10-9"),
        note: "More soy sauce",
        total: 500000,
        isDelivered: false,
        products: [
            {
                product_id: "6436e3ef52605a2ae34415f5",
                price: 60000,
                quantity: 1,
                total: 30000,
            },
            {
                product_id: "6436e3ef52605a2ae34415f2",
                price: 1000,
                quantity: 3,
                total: 60000,
            },
            {
                product_id: "6436e3ef52605a2ae34415f3",
                price: 20000,
                quantity: 2,
                total: 50000,
            },
          
        ]
    },

    {
        _id: new ObjectId(),
        user_id: "6436cd0e7b85d1d1972522e6",
        name: "leBaoVan",
        address: "207 Neu Street",
        phone: 1234567890,
        date: new Date("2022-10-7"),
        note: "More and more soy sauce",
        total: 500000,
        isDelivered: false,
        products: [
            {
                product_id: "6436e3ef52605a2ae34415f1",
                price: 12000,
                quantity: 1,
                total: 30000,
            },
            {
                product_id: "6436e3ef52605a2ae34415f7",
                price: 100000,
                quantity: 3,
                total: 60000,
            },
            {
                product_id: "6436e3ef52605a2ae34415f3",
                price: 20000,
                quantity: 2,
                total: 50000,
            },
            {
                product_id: "6436e3ef52605a2ae34415f9",
                price: 190000,
                quantity: 1,
                total: 40000,
            }
        ]
    },

    {
        _id: new ObjectId(),
        user_id: "6436cd3c7b85d1d1972522e7",
        name: "ngoKhonTan",
        address: "207 Free Street",
        phone: 1234567890,
        date: new Date("2022-10-6"),
        note: "more ketchup",
        total: 500000,
        isDelivered: false,
        products: [
           
            {
                product_id: "6436e3ef52605a2ae34415fa",
                price: 110000,
                quantity: 3,
                total: 60000,
            },
            {
                product_id: "6436e3ef52605a2ae34415f3",
                price: 20000,
                quantity: 2,
                total: 50000,
            },
            {
                product_id: "6436e3ef52605a2ae34415fc",
                price: 110000,
                quantity: 1,
                total: 40000,
            }
        ]
    },

    {
        _id: new ObjectId(),
        user_id: "6437c7d07ed909fa0024f4d0",
        name: "nguyenTungLam",
        address: "207 Neu Street",
        phone: 948703828,
        date: new Date("2022-10-5"),
        note: "More soy sauce",
        total: 500000,
        isDelivered: false,
        products: [
            {
                product_id: "6436e3ef52605a2ae34415fe",
                price: 110000,
                quantity: 1,
                total: 30000,
            },
          
         
        ]
    },

    {
        _id: new ObjectId(),
        user_id: "6437d6fdef3b1b1cfe89cbf0",
        name: "Jisoo",
        address: "192 Seoul Street",
        phone: 1234567890,
        date: new Date("2022-10-04"),
        note: "More wasabi",
        total: 500000,
        isDelivered: false,
        products: [
            {
                product_id: "6436e3ef52605a2ae3441600",
                price: 20000,
                quantity: 1,
                total: 30000,
            },
            {
                product_id: "6436e3ef52605a2ae34415f2",
                price: 1000,
                quantity: 3,
                total: 60000,
            },
           
        ]
    },

    {
        _id: new ObjectId(),
        user_id: "643881d012799987627e709a",
        name: "tranVanKien",
        address: "156 Pathway Street",
        phone: 1234567890,
        date: new Date("2022-10-03"),
        note: "No soy sauce",
        total: 500000,
        isDelivered: false,
        products: [
            {
                product_id: "6436e3ef52605a2ae34415f1",
                price: 12000,
                quantity: 1,
                total: 30000,
            },
            {
                product_id: "6436e3ef52605a2ae3441601",
                price: 23000,
                quantity: 3,
                total: 60000,
            },
            {
                product_id: "6436e3ef52605a2ae34415f3",
                price: 20000,
                quantity: 2,
                total: 50000,
            },
            {
                product_id: "6436e3ef52605a2ae3441603",
                price: 16000,
                quantity: 1,
                total: 40000,
            }
        ]
    },

    {
        _id: new ObjectId(),
        user_id: "6438d9d8eac598848baaf9cb",
        name: "leMaiLinh",
        address: "153 Small Street",
        phone: 1234567890,
        date: new Date("2022-10-02"),
        note: "More sweet sauce",
        total: 500000,
        isDelivered: false,
        products: [
           
            {
                product_id: "6436e3ef52605a2ae3441604",
                price: 16000,
                quantity: 1,
                total: 40000,
            }
        ]
    },

    {
        _id: new ObjectId(),
        user_id: "6438820e12799987627e709b",
        name: "Renjun",
        address: "123 branch Street",
        phone: 1234567890,
        date: new Date("2022-10-01"),
        note: "More cheess sauce",
        total: 500000,
        isDelivered: false,
        products: [
            {
                product_id: "6436e3ef52605a2ae3441603",
                price: 16000,
                quantity: 1,
                total: 30000,
            },
          
            {
                product_id: "6436e3ef52605a2ae34415f3",
                price: 20000,
                quantity: 2,
                total: 50000,
            },
            
        ]
    },
];