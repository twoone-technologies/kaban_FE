import background1 from "~/assets/img/uyo.png"
import background2 from "~/assets/img/calabar.png"
import background3 from "~/assets/img/commercial.jpeg"
import background4 from "~/assets/img/industrial.jpeg"
import background from "~/assets/img/imgbg.png"
import pic from "~/assets/img/Ikon.png"

export const dummyObj = [
  {
    location: {
      type: "Point",
      coordinates: [
        -180,
        -90
      ]
    },
    _id: "1",
    realtor: {
      agentImg: pic,
      agentName: 'Jojo',
      contact: '+234 703 489 1298',
      location: '40 saint street, Nwaniba rd',
      rating: 4,
      verified: false
    },
    title: "Self contained apartment",
    property_category: "residential",
    property_type: "Self-Contain",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis dicta vero ab quibusdam optio asperiores autem tempora accusamus pariatur veritatis iste dolorem mollitia maiores praesentium libero, est nobis harum voluptas?4",
    status: "sale",
    featured: true,
    price: {
      amount: 3000000
    },
    address: "2 Ekamba Nsukkara, Uyo",
    city: "uyo",
    images: [
      {
        url: background,
        cover: true,
        _id: "1",
        id: "1"
      },
      {
        url: background1,
        cover: false,
        _id: "2",
        id: "2"
      },
      {
        url: background2,
        cover: false,
        _id: "3",
        id: "3"
      },
      {
        url: background3,
        cover: false,
        _id: "4",
        id: "4"
      },
      {
        url: background4,
        cover: false,
        _id: "5",
        id: "5"
      },
      {
        url: background2,
        cover: false,
        _id: "6",
        id: "6"
      }
    ],
    details: {
      bedroom: 1,
      bathroom: 1,
      land_area: "25 sq. meters",
      parking_space: 0,
      features: [
        {
          title: 'Swimming pool',
          checked: false
        },
        {
          title: 'Fitted kitchen',
          checked: true
        },
        {
          title: 'In-built speaker',
          checked: true
        },
        {
          title: 'En-suite',
          checked: true
        },
        {
          title: 'Boys quarter',
          checked: true
        },
        {
          title: 'Gym',
          checked: true
        },
        {
          title: 'CCTV Cameras',
          checked: true
        },
        {
          title: 'Security',
          checked: true
        },
      ]
    },
    videoLink: 'https://youtu.be/Rgt-uRFUV7Q?si=8JA8V1ReznRO9G8x',
    street_view: false,
    report: [],
    createdAt: "2023-08-17T18:57:48.921Z",
    id: "1"
  },

  {
    location: {
      type: "Point",
      coordinates: [
        -180,
        -90
      ]
    },
    _id: "2",
    realtor: {
      agentImg: pic,
      agentName: 'Jojo',
      contact: '+234 703 489 1298',
      location: '40 saint street, Nwaniba rd',
      rating: 4,
      verified: false
    },
    title: "Loft apartment",
    property_category: "residential",
    property_type: "Self-Contain",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis dicta vero ab quibusdam optio asperiores autem tempora accusamus pariatur veritatis iste dolorem mollitia maiores praesentium libero, est nobis harum voluptas?4",
    status: "sale",
    featured: true,
    price: {
      amount: 3000000
    },
    address: "Nwaniba Road, Uyo. Akwa Ibom State",
    city: "uyo",
    images: [
      {
        url: background,
        cover: true,
        _id: "1",
        id: "1"
      },
      {
        url: background1,
        cover: false,
        _id: "2",
        id: "2"
      },
      {
        url: background2,
        cover: false,
        _id: "3",
        id: "3"
      },
      {
        url: background3,
        cover: false,
        _id: "4",
        id: "4"
      },
      {
        url: background4,
        cover: false,
        _id: "5",
        id: "5"
      }
    ],
    details: {
      bedroom: 1,
      bathroom: 1,
      land_area: "25 sq. meters",
      parking_space: 0,
      features: [
        {
          title: 'Swimming pool',
          checked: true
        },
        {
          title: 'Fitted kitchen',
          checked: true
        },
        {
          title: 'In-built speaker',
          checked: true
        },
        {
          title: 'En-suite',
          checked: true
        },
        {
          title: 'Boys quarter',
          checked: true
        },
        {
          title: 'Gym',
          checked: true
        },
        {
          title: 'CCTV Cameras',
          checked: true
        },
        {
          title: 'Security',
          checked: true
        },
      ]
    },
    videoLink: 'https://youtu.be/_noJ6pLvimU',
    street_view: false,
    report: [],
    createdAt: "2023-08-17T18:57:48.921Z",
    id: "2"
  },

  {
    location: {
      type: "Point",
      coordinates: [
        -180,
        -90
      ]
    },
    _id: "3",
    realtor: {
      agentImg: pic,
      agentName: 'Jojo',
      contact: '+234 703 489 1298',
      location: '40 saint street, Nwaniba rd',
      rating: 4,
      verified: false
    },
    title: "Spacious apartment",
    property_category: "residential",
    property_type: "Self-Contain",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis dicta vero ab quibusdam optio asperiores autem tempora accusamus pariatur veritatis iste dolorem mollitia maiores praesentium libero, est nobis harum voluptas?4",
    status: "rent",
    featured: true,
    price: {
      amount: 1000000
    },
    address: "34 Nwaniba Road, Uyo. Akwa Ibom State",
    city: "uyo",
    images: [
      {
        url: background,
        cover: true,
        _id: "1",
        id: "1"
      },
      {
        url: background1,
        cover: false,
        _id: "2",
        id: "2"
      },
      {
        url: background2,
        cover: false,
        _id: "3",
        id: "3"
      },
      {
        url: background3,
        cover: false,
        _id: "4",
        id: "4"
      },
      {
        url: background4,
        cover: false,
        _id: "5",
        id: "5"
      }
    ],
    details: {
      bedroom: 3,
      bathroom: 2,
      land_area: "25 sq. meters",
      parking_space: 2,
      features: [
        {
          title: 'Swimming pool',
          checked: true
        },
        {
          title: 'Fitted kitchen',
          checked: true
        },
        {
          title: 'In-built speaker',
          checked: true
        },
        {
          title: 'En-suite',
          checked: true
        },
        {
          title: 'Boys quarter',
          checked: true
        },
        {
          title: 'Gym',
          checked: true
        },
        {
          title: 'CCTV Cameras',
          checked: false
        },
        {
          title: 'Security',
          checked: true
        },
      ]
    },
    videoLink: 'https://youtu.be/Rgt-uRFUV7Q?si=8JA8V1ReznRO9G8x',
    street_view: false,
    report: [],
    createdAt: "2023-08-17T18:57:48.921Z",
    id: "3"
  },

  {
    location: {
      type: "Point",
      coordinates: [
        -180,
        -90
      ]
    },
    _id: "4",
    realtor: {
      agentImg: pic,
      agentName: 'Jojo',
      contact: '+234 703 489 1298',
      location: '40 saint street, Nwaniba rd',
      rating: 4,
      verified: false
    },
    title: "Luxurious flat",
    property_category: "residential",
    property_type: "Self-Contain",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis dicta vero ab quibusdam optio asperiores autem tempora accusamus pariatur veritatis iste dolorem mollitia maiores praesentium libero, est nobis harum voluptas?4",
    status: "sale",
    featured: true,
    price: {
      amount: 340000
    },
    address: "21 Aka Road, Uyo. Akwa Ibom State",
    city: "uyo",
    images: [
      {
        url: background,
        cover: true,
        _id: "1",
        id: "1"
      },
      {
        url: background1,
        cover: false,
        _id: "2",
        id: "2"
      },
      {
        url: background2,
        cover: false,
        _id: "3",
        id: "3"
      },
      {
        url: background3,
        cover: false,
        _id: "4",
        id: "4"
      },
      {
        url: background4,
        cover: false,
        _id: "5",
        id: "5"
      }
    ],
    details: {
      bedroom: 3,
      bathroom: 2,
      land_area: "20 sq. meters",
      parking_space: 4,
      features: [
        {
          title: 'Swimming pool',
          checked: true
        },
        {
          title: 'Fitted kitchen',
          checked: true
        },
        {
          title: 'In-built speaker',
          checked: true
        },
        {
          title: 'En-suite',
          checked: true
        },
        {
          title: 'Boys quarter',
          checked: true
        },
        {
          title: 'Gym',
          checked: true
        },
        {
          title: 'CCTV Cameras',
          checked: true
        },
        {
          title: 'Security',
          checked: true
        },
      ]
    },
    videoLink: 'https://youtu.be/7x0PiPBFADk',
    street_view: false,
    report: [],
    createdAt: "2023-08-17T18:57:48.921Z",
    id: "4"
  },

  {
    location: {
      type: "Point",
      coordinates: [
        -180,
        -90
      ]
    },
    _id: "5",
    realtor: {
      agentImg: pic,
      agentName: 'Atake',
      contact: '+234 703 489 1298',
      location: '40 saint street, Nwaniba rd',
      rating: 2,
      verified: true
    },
    title: "Classy Duplex",
    property_category: "residential",
    property_type: "Self-Contain",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis dicta vero ab quibusdam optio asperiores autem tempora accusamus pariatur veritatis iste dolorem mollitia maiores praesentium libero, est nobis harum voluptas?4",
    status: "rent",
    featured: true,
    price: {
      amount: 260000
    },
    address: "21 Aka Road, Uyo. Akwa Ibom State",
    city: "uyo",
    images: [
      {
        url: background,
        cover: true,
        _id: "1",
        id: "1"
      },
      {
        url: background1,
        cover: false,
        _id: "2",
        id: "2"
      },
      {
        url: background2,
        cover: false,
        _id: "3",
        id: "3"
      },
      {
        url: background3,
        cover: false,
        _id: "4",
        id: "4"
      },
      {
        url: background4,
        cover: false,
        _id: "5",
        id: "5"
      }
    ],
    details: {
      bedroom: 1,
      bathroom: 2,
      land_area: "50 sq. meters",
      parking_space: 2,
      features: [
        {
          title: 'Swimming pool',
          checked: true
        },
        {
          title: 'Fitted kitchen',
          checked: true
        },
        {
          title: 'In-built speaker',
          checked: true
        },
        {
          title: 'En-suite',
          checked: true
        },
        {
          title: 'Boys quarter',
          checked: true
        },
        {
          title: 'Gym',
          checked: true
        },
        {
          title: 'CCTV Cameras',
          checked: true
        },
        {
          title: 'Security',
          checked: true
        },
      ]
    },
    videoLink: 'https://youtu.be/Rgt-uRFUV7Q?si=8JA8V1ReznRO9G8x',
    street_view: false,
    report: [],
    createdAt: "2023-08-17T18:57:48.921Z",
    id: "5"
  },

  {
    location: {
      type: "Point",
      coordinates: [
        -180,
        -90
      ]
    },
    _id: "6",
    realtor: {
      agentImg: pic,
      agentName: 'Atake',
      contact: '+234 703 489 1298',
      location: '40 saint street, Nwaniba rd',
      rating: 2,
      verified: true
    },
    title: "Spacious Selfcon",
    property_category: "residential",
    property_type: "Apartment",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis dicta vero ab quibusdam optio asperiores autem tempora accusamus pariatur veritatis iste dolorem mollitia maiores praesentium libero, est nobis harum voluptas?4",
    status: "rent",
    featured: true,
    price: {
      amount: 260000
    },
    address: "55 Aka Road, Uyo. Akwa Ibom State",
    city: "uyo",
    images: [
      {
        url: background,
        cover: true,
        _id: "1",
        id: "1"
      },
      {
        url: background1,
        cover: false,
        _id: "2",
        id: "2"
      },
      {
        url: background2,
        cover: false,
        _id: "3",
        id: "3"
      },
      {
        url: background3,
        cover: false,
        _id: "4",
        id: "4"
      },
      {
        url: background4,
        cover: false,
        _id: "5",
        id: "5"
      }
    ],
    details: {
      bedroom: 2,
      bathroom: 2,
      land_area: "70 sq. meters",
      parking_space: 1,
      features: [
        {
          title: 'Swimming pool',
          checked: true
        },
        {
          title: 'Fitted kitchen',
          checked: true
        },
        {
          title: 'In-built speaker',
          checked: true
        },
        {
          title: 'En-suite',
          checked: true
        },
        {
          title: 'Boys quarter',
          checked: true
        },
        {
          title: 'Gym',
          checked: true
        },
        {
          title: 'CCTV Cameras',
          checked: true
        },
        {
          title: 'Security',
          checked: true
        },
      ]
    },
    videoLink: 'https://youtu.be/7x0PiPBFADk',
    street_view: false,
    report: [],
    createdAt: "2023-08-17T18:57:48.921Z",
    id: "6"
  },

  {
    location: {
      type: "Point",
      coordinates: [
        -180,
        -90
      ]
    },
    _id: "7",
    realtor: {
      agentImg: pic,
      agentName: 'Atake',
      contact: '+234 703 489 1298',
      location: '40 saint street, Nwaniba rd',
      rating: 2,
      verified: true
    },
    title: "Simple Extension",
    property_category: "residential",
    property_type: "Apartment",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis dicta vero ab quibusdam optio asperiores autem tempora accusamus pariatur veritatis iste dolorem mollitia maiores praesentium libero, est nobis harum voluptas?4",
    status: "rent",
    featured: false,
    price: {
      amount: 150000
    },
    address: "16 Aka Road, Uyo. Akwa Ibom State",
    city: "uyo",
    images: [
      {
        url: background,
        cover: true,
        _id: "1",
        id: "1"
      },
      {
        url: background1,
        cover: false,
        _id: "2",
        id: "2"
      },
      {
        url: background2,
        cover: false,
        _id: "3",
        id: "3"
      },
      {
        url: background3,
        cover: false,
        _id: "4",
        id: "4"
      },
      {
        url: background4,
        cover: false,
        _id: "5",
        id: "5"
      }
    ],
    details: {
      bedroom: 1,
      bathroom: 2,
      land_area: "19 sq. meters",
      parking_space: 8,
      features: [
        {
          title: 'Swimming pool',
          checked: true
        },
        {
          title: 'Fitted kitchen',
          checked: true
        },
        {
          title: 'In-built speaker',
          checked: true
        },
        {
          title: 'En-suite',
          checked: true
        },
        {
          title: 'Boys quarter',
          checked: true
        },
        {
          title: 'Gym',
          checked: true
        },
        {
          title: 'CCTV Cameras',
          checked: true
        },
        {
          title: 'Security',
          checked: true
        },
      ]
    },
    videoLink: 'https://youtu.be/Rgt-uRFUV7Q?si=8JA8V1ReznRO9G8x',
    street_view: false,
    report: [],
    createdAt: "2023-08-17T18:57:48.921Z",
    id: "7"
  },

  {
    location: {
      type: "Point",
      coordinates: [
        -180,
        -90
      ]
    },
    _id: "8",
    realtor: {
      agentImg: pic,
      agentName: 'Atake',
      contact: '+234 703 489 1298',
      location: '40 saint street, Nwaniba rd',
      rating: 2,
      verified: true
    },
    title: "Modern Fittings",
    property_category: "residential",
    property_type: "Apartment",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis dicta vero ab quibusdam optio asperiores autem tempora accusamus pariatur veritatis iste dolorem mollitia maiores praesentium libero, est nobis harum voluptas?4",
    status: "rent",
    featured: false,
    price: {
      amount: 280000
    },
    address: "55 Aka Road, Uyo. Akwa Ibom State",
    city: "uyo",
    images: [
      {
        url: background,
        cover: true,
        _id: "1",
        id: "1"
      },
      {
        url: background1,
        cover: false,
        _id: "2",
        id: "2"
      },
      {
        url: background2,
        cover: false,
        _id: "3",
        id: "3"
      },
      {
        url: background3,
        cover: false,
        _id: "4",
        id: "4"
      },
      {
        url: background4,
        cover: false,
        _id: "5",
        id: "5"
      }
    ],
    details: {
      bedroom: 2,
      bathroom: 2,
      land_area: "70 sq. meters",
      parking_space: 1,
      features: [
        {
          title: 'Swimming pool',
          checked: true
        },
        {
          title: 'Fitted kitchen',
          checked: true
        },
        {
          title: 'In-built speaker',
          checked: true
        },
        {
          title: 'En-suite',
          checked: true
        },
        {
          title: 'Boys quarter',
          checked: true
        },
        {
          title: 'Gym',
          checked: true
        },
        {
          title: 'CCTV Cameras',
          checked: true
        },
        {
          title: 'Security',
          checked: true
        },
      ]
    },
    videoLink: 'https://youtu.be/Rgt-uRFUV7Q?si=8JA8V1ReznRO9G8x',
    street_view: false,
    report: [],
    createdAt: "2023-08-17T18:57:48.921Z",
    id: "8"
  },

  {
    location: {
      type: "Point",
      coordinates: [
        -180,
        -90
      ]
    },
    _id: "9",
    realtor: {
      agentImg: pic,
      agentName: 'Atake',
      contact: '+234 703 489 1298',
      location: '40 saint street, Nwaniba rd',
      rating: 2,
      verified: true
    },
    title: "Simple Extension",
    property_category: "residential",
    property_type: "Apartment",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis dicta vero ab quibusdam optio asperiores autem tempora accusamus pariatur veritatis iste dolorem mollitia maiores praesentium libero, est nobis harum voluptas?4",
    status: "rent",
    featured: false,
    price: {
      amount: 150000
    },
    address: "16 Aka Road, Uyo. Akwa Ibom State",
    city: "uyo",
    images: [
      {
        url: background,
        cover: true,
        _id: "1",
        id: "1"
      },
      {
        url: background1,
        cover: false,
        _id: "2",
        id: "2"
      },
      {
        url: background2,
        cover: false,
        _id: "3",
        id: "3"
      },
      {
        url: background3,
        cover: false,
        _id: "4",
        id: "4"
      },
      {
        url: background4,
        cover: false,
        _id: "5",
        id: "5"
      }
    ],
    details: {
      bedroom: 1,
      bathroom: 2,
      land_area: "19 sq. meters",
      parking_space: 8,
      features: [
        {
          title: 'Swimming pool',
          checked: true
        },
        {
          title: 'Fitted kitchen',
          checked: true
        },
        {
          title: 'In-built speaker',
          checked: true
        },
        {
          title: 'En-suite',
          checked: true
        },
        {
          title: 'Boys quarter',
          checked: true
        },
        {
          title: 'Gym',
          checked: true
        },
        {
          title: 'CCTV Cameras',
          checked: true
        },
        {
          title: 'Security',
          checked: true
        },
      ]
    },
    videoLink: 'https://youtu.be/Rgt-uRFUV7Q?si=8JA8V1ReznRO9G8x',
    street_view: false,
    report: [],
    createdAt: "2023-08-17T18:57:48.921Z",
    id: "9"
  },

  {
    location: {
      type: "Point",
      coordinates: [
        -180,
        -90
      ]
    },
    _id: "10",
    realtor: {
      agentImg: pic,
      agentName: 'John',
      contact: '+234 703 489 1298',
      location: '40 saint street, Nwaniba rd',
      rating: 5,
      verified: true
    },
    title: "Modern Fittings",
    property_category: "residential",
    property_type: "Apartment",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis dicta vero ab quibusdam optio asperiores autem tempora accusamus pariatur veritatis iste dolorem mollitia maiores praesentium libero, est nobis harum voluptas?4",
    status: "rent",
    featured: true,
    price: {
      amount: 280000
    },
    address: "11 Aka Road, Uyo. Akwa Ibom State",
    city: "uyo",
    images: [
      {
        url: background,
        cover: true,
        _id: "1",
        id: "1"
      },
      {
        url: background1,
        cover: false,
        _id: "2",
        id: "2"
      },
      {
        url: background2,
        cover: false,
        _id: "3",
        id: "3"
      },
      {
        url: background3,
        cover: false,
        _id: "4",
        id: "4"
      },
      {
        url: background4,
        cover: false,
        _id: "5",
        id: "5"
      }
    ],
    details: {
      bedroom: 2,
      bathroom: 2,
      land_area: "30 sq. meters",
      parking_space: 3,
      features: [
        {
          title: 'Swimming pool',
          checked: true
        },
        {
          title: 'Fitted kitchen',
          checked: true
        },
        {
          title: 'In-built speaker',
          checked: true
        },
        {
          title: 'En-suite',
          checked: true
        },
        {
          title: 'Boys quarter',
          checked: false
        },
        {
          title: 'Gym',
          checked: false
        },
        {
          title: 'CCTV Cameras',
          checked: false
        },
        {
          title: 'Security',
          checked: false
        },
      ]
    },
    videoLink: 'https://youtu.be/Rgt-uRFUV7Q?si=8JA8V1ReznRO9G8x',
    street_view: false,
    report: [],
    createdAt: "2023-10-17T18:57:48.921Z",
    id: "10"
  },

  {
    location: {
      type: "Point",
      coordinates: [
        -180,
        -90
      ]
    },
    _id: "11",
    realtor: {
      agentImg: pic,
      agentName: 'Atake',
      contact: '+234 703 489 1298',
      location: '40 saint street, Nwaniba rd',
      rating: 2,
      verified: true
    },
    title: "Simple Extension",
    property_category: "residential",
    property_type: "Apartment",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis dicta vero ab quibusdam optio asperiores autem tempora accusamus pariatur veritatis iste dolorem mollitia maiores praesentium libero, est nobis harum voluptas?4",
    status: "rent",
    featured: false,
    price: {
      amount: 150000
    },
    address: "16 Aka Road, Uyo. Akwa Ibom State",
    city: "uyo",
    images: [
      {
        url: background,
        cover: true,
        _id: "1",
        id: "1"
      },
      {
        url: background1,
        cover: false,
        _id: "2",
        id: "2"
      },
      {
        url: background2,
        cover: false,
        _id: "3",
        id: "3"
      },
      {
        url: background3,
        cover: false,
        _id: "4",
        id: "4"
      },
      {
        url: background4,
        cover: false,
        _id: "5",
        id: "5"
      }
    ],
    details: {
      bedroom: 1,
      bathroom: 2,
      land_area: "19 sq. meters",
      parking_space: 8,
      features: [
        {
          title: 'Swimming pool',
          checked: true
        },
        {
          title: 'Fitted kitchen',
          checked: true
        },
        {
          title: 'In-built speaker',
          checked: true
        },
        {
          title: 'En-suite',
          checked: true
        },
        {
          title: 'Boys quarter',
          checked: true
        },
        {
          title: 'Gym',
          checked: true
        },
        {
          title: 'CCTV Cameras',
          checked: true
        },
        {
          title: 'Security',
          checked: true
        },
      ]
    },
    videoLink: 'https://youtu.be/Rgt-uRFUV7Q?si=8JA8V1ReznRO9G8x',
    street_view: false,
    report: [],
    createdAt: "2023-08-17T18:57:48.921Z",
    id: "11"
  },

  {
    location: {
      type: "Point",
      coordinates: [
        -280,
        -40
      ]
    },
    _id: "12",
    realtor: {
      agentImg: pic,
      agentName: 'Atake',
      contact: '+234 703 489 1298',
      location: '40 saint street, Nwaniba rd',
      rating: 2,
      verified: true
    },
    title: "Modern Fittings",
    property_category: "residential",
    property_type: "Apartment",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis dicta vero ab quibusdam optio asperiores autem tempora accusamus pariatur veritatis iste dolorem mollitia maiores praesentium libero, est nobis harum voluptas?4",
    status: "rent",
    featured: false,
    price: {
      amount: 280000
    },
    address: "51 Aka Road, Uyo. Akwa Ibom State",
    city: "uyo",
    images: [
      {
        url: background,
        cover: true,
        _id: "1",
        id: "1"
      },
      {
        url: background1,
        cover: false,
        _id: "2",
        id: "2"
      },
      {
        url: background2,
        cover: false,
        _id: "3",
        id: "3"
      },
      {
        url: background3,
        cover: false,
        _id: "4",
        id: "4"
      },
      {
        url: background4,
        cover: false,
        _id: "5",
        id: "5"
      }
    ],
    details: {
      bedroom: 2,
      bathroom: 2,
      land_area: "36 sq. meters",
      parking_space: 5,
      features: [
        {
          title: 'Swimming pool',
          checked: true
        },
        {
          title: 'Fitted kitchen',
          checked: true
        },
        {
          title: 'In-built speaker',
          checked: true
        },
        {
          title: 'En-suite',
          checked: true
        },
        {
          title: 'Boys quarter',
          checked: true
        },
        {
          title: 'Gym',
          checked: true
        },
        {
          title: 'CCTV Cameras',
          checked: true
        },
        {
          title: 'Security',
          checked: true
        },
      ]
    },
    videoLink: 'https://youtu.be/Rgt-uRFUV7Q?si=8JA8V1ReznRO9G8x',
    street_view: false,
    report: [],
    createdAt: "2023-02-10T18:57:48.921Z",
    id: "12"
  },

  {
    location: {
      type: "Point",
      coordinates: [
        -180,
        -90
      ]
    },
    _id: "13",
    realtor: {
      agentImg: pic,
      agentName: 'Atake',
      contact: '+234 703 489 1298',
      location: '40 saint street, Nwaniba rd',
      rating: 2,
      verified: true
    },
    title: "Simple Extension",
    property_category: "residential",
    property_type: "Apartment",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis dicta vero ab quibusdam optio asperiores autem tempora accusamus pariatur veritatis iste dolorem mollitia maiores praesentium libero, est nobis harum voluptas?4",
    status: "rent",
    featured: false,
    price: {
      amount: 150000
    },
    address: "16 Aka Road, Uyo. Akwa Ibom State",
    city: "uyo",
    images: [
      {
        url: background,
        cover: true,
        _id: "1",
        id: "1"
      },
      {
        url: background1,
        cover: false,
        _id: "2",
        id: "2"
      },
      {
        url: background2,
        cover: false,
        _id: "3",
        id: "3"
      },
      {
        url: background3,
        cover: false,
        _id: "4",
        id: "4"
      },
      {
        url: background4,
        cover: false,
        _id: "5",
        id: "5"
      }
    ],
    details: {
      bedroom: 1,
      bathroom: 2,
      land_area: "19 sq. meters",
      parking_space: 8,
      features: [
        {
          title: 'Swimming pool',
          checked: true
        },
        {
          title: 'Fitted kitchen',
          checked: true
        },
        {
          title: 'In-built speaker',
          checked: true
        },
        {
          title: 'En-suite',
          checked: true
        },
        {
          title: 'Boys quarter',
          checked: true
        },
        {
          title: 'Gym',
          checked: true
        },
        {
          title: 'CCTV Cameras',
          checked: true
        },
        {
          title: 'Security',
          checked: true
        },
      ]
    },
    videoLink: 'https://youtu.be/Rgt-uRFUV7Q?si=8JA8V1ReznRO9G8x',
    street_view: false,
    report: [],
    createdAt: "2023-08-17T18:57:48.921Z",
    id: "13"
  },

  {
    location: {
      type: "Point",
      coordinates: [
        -180,
        -90
      ]
    },
    _id: "14",
    realtor: {
      agentImg: pic,
      agentName: 'Atake',
      contact: '+234 703 489 1298',
      location: '40 saint street, Nwaniba rd',
      rating: 2,
      verified: true
    },
    title: "Sweetness",
    property_category: "residential",
    property_type: "Apartment",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis dicta vero ab quibusdam optio asperiores autem tempora accusamus pariatur veritatis iste dolorem mollitia maiores praesentium libero, est nobis harum voluptas?4",
    status: "rent",
    featured: false,
    price: {
      amount: 156000
    },
    address: "40 Aka Road, Uyo. Akwa Ibom State",
    city: "uyo",
    images: [
      {
        url: background,
        cover: true,
        _id: "1",
        id: "1"
      },
      {
        url: background1,
        cover: false,
        _id: "2",
        id: "2"
      },
      {
        url: background2,
        cover: false,
        _id: "3",
        id: "3"
      },
      {
        url: background3,
        cover: false,
        _id: "4",
        id: "4"
      },
      {
        url: background4,
        cover: false,
        _id: "5",
        id: "5"
      }
    ],
    details: {
      bedroom: 1,
      bathroom: 2,
      land_area: "20 sq. meters",
      parking_space: 4,
      features: [
        {
          title: 'Swimming pool',
          checked: true
        },
        {
          title: 'Fitted kitchen',
          checked: true
        },
        {
          title: 'In-built speaker',
          checked: true
        },
        {
          title: 'En-suite',
          checked: true
        },
        {
          title: 'Boys quarter',
          checked: true
        },
        {
          title: 'Gym',
          checked: true
        },
        {
          title: 'CCTV Cameras',
          checked: true
        },
        {
          title: 'Security',
          checked: true
        },
      ]
    },
    videoLink: 'https://youtu.be/Rgt-uRFUV7Q?si=8JA8V1ReznRO9G8x',
    street_view: false,
    report: [],
    createdAt: "2023-09-27T18:57:48.921Z",
    id: "14"
  }
]
