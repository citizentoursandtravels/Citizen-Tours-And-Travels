import { Vehicle, Service, TourPackage, Testimonial, FAQItem, GalleryItem, BlogPost, Feature } from "./types";

// Import local images so Vite builds and bundles them correctly
import ertigaImg from "./assets/images/regenerated_image_1783928449436.jpg";
import innovaImg from "./assets/images/regenerated_image_1783928446290.jpg";
import tempoImg from "./assets/images/regenerated_image_1783928451611.jpg";
import urbaniaImg from "./assets/images/regenerated_image_1783928453631.jpg";
import fortunerImg from "./assets/images/regenerated_image_1784102931461.jpg";
import sedanImg from "./assets/images/regenerated_image_1784097640014.jpg";
import gujaratImg from "./assets/images/regenerated_image_1784097642154.jpg";
import rajasthanImg from "./assets/images/regenerated_image_1784097643746.jpg";
import somnathImg from "./assets/images/regenerated_image_1784097645071.jpg";
import statueImg from "./assets/images/regenerated_image_1784097646437.jpg";
import galleryImg1 from "./assets/images/regenerated_image_1784604938845.jpg";
import galleryImg2 from "./assets/images/regenerated_image_1784604940587.jpg";
import galleryImg3 from "./assets/images/regenerated_image_1784604942499.jpg";
import blogImg1 from "./assets/images/regenerated_image_1784605526517.jpg";
import blogImg2 from "./assets/images/regenerated_image_1784605529895.jpg";
import blogImg3 from "./assets/images/regenerated_image_1784605531473.jpg";
import mountAbuImg from "./assets/images/regenerated_image_1784605763174.jpg";
import udaipurImg from "./assets/images/regenerated_image_1784605760194.jpg";

export const SERVICES: Service[] = [
  {
    id: "car-rental",
    title: "Car Rental",
    description: "Wide range of neat and clean Hatchback, Sedan, and luxury SUV models for flexible personal travel.",
    icon: "Car",
  },
  {
    id: "airport-drop",
    title: "Airport Pick & Drop",
    description: "Reliable and punctual transfer services to and from Sardar Vallabhbhai Patel International Airport (AMD).",
    icon: "PlaneTakeoff",
  },
  {
    id: "railway-drop",
    title: "Railway Station Pick & Drop",
    description: "Seamless transfers to Kalupur (Ahmedabad Junction) and other major stations with luggage assistance.",
    icon: "Train",
  },
  {
    id: "tempo-traveller",
    title: "Tempo Traveller Rental",
    description: "Premium 9 to 26 seater Tempo Travellers, perfect for medium-sized family outings and corporate teams.",
    icon: "Users",
  },
  {
    id: "bus-rental",
    title: "Bus Rental",
    description: "Comfortable mini buses, luxury coaches, and high-capacity 52/56-seater buses for large groups.",
    icon: "Bus",
  },
  {
    id: "corporate-travel",
    title: "Corporate Travel",
    description: "Tailored transit contracts, regular pick-drop, and premium fleets for corporate clients and VIP events.",
    icon: "Briefcase",
  },
  {
    id: "wedding-transport",
    title: "Wedding Transportation",
    description: "Make your special day seamless with elegant car rentals, decorated bridal cars, and group guest transit.",
    icon: "Heart",
  },
  {
    id: "local-sightseeing",
    title: "Local Sightseeing",
    description: "Guided or independent day tours covering Sabarmati Ashram, Adalaj Stepwell, Kankaria Lake, and more.",
    icon: "Compass",
  },
  {
    id: "outstation-tours",
    title: "Outstation Tours",
    description: "Comfortable long-distance intercity road trips with expert drivers well-versed in highway routes.",
    icon: "MapPin",
  },
  {
    id: "hotel-booking",
    title: "Hotel Booking Assistance",
    description: "Get the best hotel deals matching your budget alongside your tour package and transportation booking.",
    icon: "Hotel",
  },
  {
    id: "family-tours",
    title: "Family Tours",
    description: "Customized, stress-free itineraries designed to entertain and comfort toddlers and seniors alike.",
    icon: "Smile",
  },
  {
    id: "pilgrimage-tours",
    title: "Pilgrimage Tours",
    description: "Specialized spiritual journeys to Somnath, Dwarka, Ambaji, Palitana, Dakor, and Shrinathji.",
    icon: "Sparkles",
  },
];

export const VEHICLES: Vehicle[] = [
  {
    id: "ertiga",
    name: "Maruti Ertiga",
    category: "Comfort MPV",
    image: ertigaImg,
    capacity: 6,
    ac: true,
    seating: "6+1 Seating",
    features: ["White or Silver Clean Exterior", "Budget Friendly MPV Group Transit", "Rear AC Vents & Controls", "Generous Luggage Carrier"],
    priceDesc: "Starts at ₹13/km",
  },
  {
    id: "innova",
    name: "Toyota Innova Crysta",
    category: "Premium MPV",
    image: innovaImg,
    capacity: 7,
    ac: true,
    seating: "6+1 / 7+1 Captain Seats",
    features: ["Luxury Leather Seating", "Dual AC Climatic Control", "Supreme Highway Comfort", "GPS Safe-Tracking Enabled"],
    priceDesc: "Starts at ₹17/km",
  },
  {
    id: "tempo-12",
    name: "Tempo Traveller (12 to 17 Seater)",
    category: "Premium Passenger Van",
    image: tempoImg,
    capacity: 17,
    ac: true,
    seating: "Pushback Seating",
    features: ["Ample Headroom & Legroom", "LED TV & Sound System", "Premium Air Suspension", "Separate Luggage Section"],
    priceDesc: "Starts at ₹22/km",
  },
  {
    id: "force-urbania",
    name: "Force Urbania Super-Premium Van",
    category: "VIP Executive Van",
    image: urbaniaImg,
    capacity: 13,
    ac: true,
    seating: "Luxury Bucket Seats",
    features: ["Futuristic Premium Styling", "Ergonomic Individual Recliners", "USB Charger at Every Seat", "Advanced Soft-Ride Suspensions"],
    priceDesc: "Starts at ₹28/km",
  },
  {
    id: "suv",
    name: "Toyota Fortuner",
    category: "Premium SUV",
    image: fortunerImg,
    capacity: 6,
    ac: true,
    seating: "6+1 Seating",
    features: ["Powerful 4x4 Off-Road Capabilities", "Premium Black Leather Cabin", "Exceptional Rugged Terrain Comfort", "Rear Climatic Zone AC"],
    priceDesc: "Starts at ₹21/km",
  },
  {
    id: "sedan",
    name: "Mercedes-Benz E-Class",
    category: "Luxury Sedan",
    image: sedanImg,
    capacity: 4,
    ac: true,
    seating: "4+1 Premium Seating",
    features: ["VIP Leather Executive Cabin", "Panoramic Dual-Zone Sunroof", "Active Air Suspension Ride", "Chauffeur-Driven Quietness"],
    priceDesc: "Starts at ₹45/km",
  },
  {
    id: "luxury-bus",
    name: "Luxury Coach Bus (Volvo / Bharat Benz)",
    category: "Premium Heavy Coach",
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=800",
    capacity: 45,
    ac: true,
    seating: "Luxury Pushback Seats",
    features: ["Mercedes Lounge Interiors", "Individual Reading Lights", "Heavy Suspensions", "Experienced Highway Driver"],
    priceDesc: "Starts at ₹45/km",
  },
];

export const FEATURES: Feature[] = [
  {
    id: "exp",
    title: "18+ Years Experience",
    description: "Serving smiling customers since 2007 with pristine transport services in Ahmedabad and across India.",
    icon: "Award",
  },
  {
    id: "drivers",
    title: "Professional Drivers",
    description: "Highly trained, polite, verified, and deeply familiar with national highways and local routes.",
    icon: "ShieldAlert",
  },
  {
    id: "support",
    title: "24/7 Customer Support",
    description: "Round-the-clock emergency support, booking edits, and assistance during your journey.",
    icon: "Clock",
  },
  {
    id: "prices",
    title: "Affordable Prices",
    description: "Extremely competitive rates with complete transparency. No hidden charges or surprise tolls.",
    icon: "Tag",
  },
  {
    id: "safe",
    title: "Safe & Secure Journey",
    description: "Prioritizing your safety with speed limits, routine mechanic checks, and emergency safety kits.",
    icon: "Shield",
  },
  {
    id: "sanitized",
    title: "Sanitized Vehicles",
    description: "Deep sanitization, wash, and premium air fresheners applied before every single booking.",
    icon: "Sparkles",
  },
  {
    id: "ontime",
    title: "On-Time Pickup",
    description: "Our drivers arrive 15 minutes before scheduled departure to ensure stress-free start times.",
    icon: "Timer",
  },
  {
    id: "satisfaction",
    title: "Guaranteed Satisfaction",
    description: "Consistently rated 5-stars for our seamless booking process and smooth on-road hospitality.",
    icon: "ThumbsUp",
  },
  {
    id: "gps",
    title: "GPS Enabled Vehicles",
    description: "Real-time fleet tracking ensures security, dispatch coordination, and route compliance.",
    icon: "Map",
  },
  {
    id: "easy",
    title: "Easy Instant Booking",
    description: "Book within 2 minutes via a quick online form, WhatsApp message, or direct phone call.",
    icon: "Zap",
  },
];

export const PACKAGES: TourPackage[] = [
  {
    id: "gujarat-heritage",
    title: "Gujarat Heritage Tour",
    duration: "6 Nights / 7 Days",
    image: gujaratImg,
    description: "Explore the cultural soul of India. Covers historic Sabarmati, the White Rann of Kutch, and heritage pols.",
    priceDesc: "Starts from ₹5,500/person",
    highlights: ["Rann of Kutch Tent City", "Adalaj Stepwell Heritage Walk", "Sabarmati Ashram", "Traditional Gujarati Cuisine"],
    isPopular: true,
  },
  {
    id: "rajasthan-royal",
    title: "Rajasthan Royal Palace Tour",
    duration: "7 Nights / 8 Days",
    image: rajasthanImg,
    description: "Witness the spectacular fortresses and rich cultural heritage of Jaipur, Jodhpur, and Udaipur.",
    priceDesc: "Starts from ₹5,700/person",
    highlights: ["Amber Fort Elephant Ride", "City Palace Udaipur", "Jodhpur Mehrangarh Fort", "Thar Desert Camping"],
    isPopular: true,
  },
  {
    id: "somnath-dwarka",
    title: "Somnath Dwarka Pilgrimage",
    duration: "4 Nights / 5 Days",
    image: somnathImg,
    description: "A serene spiritual loop connecting Somnath Temple, Dwarkadhish temple, Nageshwar, and Porbandar.",
    priceDesc: "Starts from ₹3,500/person",
    highlights: ["Dwarkadhish Aarti", "Somnath Light & Sound Show", "Kirti Mandir (Gandhi Birthplace)", "Bet Dwarka Boat Ride"],
    isPopular: true,
  },
  {
    id: "statue-unity",
    title: "Statue of Unity & Kevadia Tour",
    duration: "1 Night / 2 Days",
    image: statueImg,
    description: "Witness the tallest statue in the world, the beautiful valley of flowers, and the glowing laser show.",
    priceDesc: "Starts from ₹999/person",
    highlights: ["SOU Viewing Gallery (153m)", "Glow Garden & Valley of Flowers", "Narmada Dam View", "Jungle Safari"],
    isPopular: false,
  },
  {
    id: "mount-abu",
    title: "Mount Abu Hill Station Tour",
    duration: "2 Nights / 3 Days",
    image: mountAbuImg,
    description: "Cool off in the only hill station in Rajasthan. Perfect for peaceful weekend getaways from Ahmedabad.",
    priceDesc: "Starts from ₹1,700/person",
    highlights: ["Dilwara Jain Temples", "Boating in Nakki Lake", "Sunset Point", "Guru Shikhar Trek"],
    isPopular: false,
  },
  {
    id: "udaipur-romantic",
    title: "Udaipur Lakes & Palaces",
    duration: "3 Nights / 4 Days",
    image: udaipurImg,
    description: "Fall in love with the 'Venice of the East'. Enjoy gorgeous boat rides, majestic palaces, and narrow visual markets.",
    priceDesc: "Starts from ₹2,999/person",
    highlights: ["Lake Pichola Scenic Cruise", "Sajjangarh Monsoon Palace", "Saheliyon-ki-Bari", "Vintage Car Museum"],
    isPopular: false,
  },
  {
    id: "goa-beaches",
    title: "Goa Beach Holiday",
    duration: "4 Nights / 5 Days",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=800",
    description: "Relax in sunny Goa with beautiful palm-fringed coastlines, colonial architecture, and active nightlife.",
    priceDesc: "Starts from ₹5,999/person",
    highlights: ["Calangute & Baga Beaches", "Old Goa Churches", "Dudhsagar Waterfalls Trek", "Sunset Cruise & Water Sports"],
    isPopular: false,
  },
  {
    id: "mumbai-getaway",
    title: "Mumbai City & Heritage",
    duration: "3 Nights / 4 Days",
    image: "https://images.unsplash.com/photo-1566552881560-0be862a7c445?auto=format&fit=crop&q=80&w=800",
    description: "The city that never sleeps. Explore the historic Gateway of India, Marine Drive, and Haji Ali Dargah.",
    priceDesc: "Starts from ₹3,999/person",
    highlights: ["Gateway of India", "Marine Drive Sunset Walk", "Siddhivinayak Temple", "Elephanta Caves Ferry Ride"],
    isPopular: false,
  },
  {
    id: "custom-tour",
    title: "Custom Tailor-made Package",
    duration: "Flexible Days",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=80&w=800",
    description: "Design your dream vacation exactly how you want. Choose your favorite vehicles, hotels, and attractions.",
    priceDesc: "Personalized Best Rates",
    highlights: ["Custom Multi-City Routes", "Choice of Hatchback to Big Bus", "Preferred Hotel Categorization", "Dedicated Tour Liaison"],
    isPopular: true,
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "test1",
    name: "Dr. Nilesh Patel",
    location: "Satellite, Ahmedabad",
    role: "Regular Family Client",
    review: "We have been booking vehicles from Citizen Tours & Travels since 2014. For our recent Somnath-Dwarka pilgrimage, we rented an Innova Crysta. The car was spotless, and driver Rajesh was extremely respectful, helpful, and drove very safely. Highly recommended travel partner!",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=150",
  },
  {
    id: "test2",
    name: "Meera Shah",
    location: "Prahlad Nagar, Ahmedabad",
    role: "Corporate HR Manager",
    review: "Citizen Travels handles all our guest transfers and team outing transits. We rented a 25-seater Tempo Traveller for our corporate retreat to Udaipur. Excellent punctuality, hassle-free booking, and transparent billing. Our employees felt completely secure and comfortable.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150",
  },
  {
    id: "test3",
    name: "Amit Trivedi",
    location: "Ghatlodia, Ahmedabad",
    role: "Adventure Traveler",
    review: "Booked a Sedan for our tour to Mount Abu. Outstanding hospitality and an affordable rate that beat the online aggregators. The driver suggested scenic lookout points we would have otherwise missed. Will definitely book again!",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=150",
  },
  {
    id: "test4",
    name: "Rohan Ghori",
    location: "C.G. Road, Ahmedabad",
    role: "Groom (Wedding Event)",
    review: "Extremely thankful to Citizen Travels for handling our wedding guest transportation in January. They managed three 52-seater buses and five Swift Dzire sedans. Everything operated like clockwork, keeping guests on time. Absolute peace of mind!",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150",
  },
];

export const FAQS: FAQItem[] = [
  {
    id: "faq-1",
    question: "How do I book a vehicle with Citizen Tours & Travels?",
    answer: "You can book easily by filling out our online booking request form, sending a quick message on WhatsApp (+91 97240 02200), or by directly calling us. We will confirm your route, date, vehicle choice, and send you a transparent quotation within minutes.",
  },
  {
    id: "faq-2",
    question: "Are your pricing rates inclusive of driver allowances, tolls, and state taxes?",
    answer: "We provide highly transparent rates. Our custom quotes clearly break down basic per-kilometer charges, driver daily allowance, toll taxes, and state border permits so there are absolutely no surprise hidden charges at the end of your trip.",
  },
  {
    id: "faq-3",
    question: "Are your vehicles GPS-enabled and safe for night driving?",
    answer: "Yes, our entire fleet is enabled with live GPS tracking for real-time safety monitoring. Our drivers are seasoned professionals with over 8+ years of highway driving experience, certified for safe, comfortable night transits.",
  },
  {
    id: "faq-4",
    question: "What is your cancellation and booking modification policy?",
    answer: "We offer maximum flexibility. You can cancel or modify your travel dates free of charge up to 24 hours before your scheduled departure. For last-minute changes, please contact our support desk immediately for assistance.",
  },
  {
    id: "faq-5",
    question: "Do you offer wedding decorations and premium luxury VIP cars?",
    answer: "Yes, we specialize in luxury wedding fleets including decorated luxury sedans, premium SUVs, and guest coaches. Please let us know your decorative themes, and we can arrange state-of-the-art floral decorations.",
  },
  {
    id: "faq-6",
    question: "Can I customize our tour package itinerary?",
    answer: "Absolutely! Customizing itineraries is our core specialty. Simply let us know your preferred destinations, pacing, vehicle type, and budget, and our travel specialists will handcraft the perfect vacation loop for you.",
  },
];

export const GALLERY: GalleryItem[] = [
  {
    id: "g-group-rann",
    url: galleryImg1,
    title: "Happy Clients at Rann of Kutch Desert",
    category: "Tours",
  },
  {
    id: "g-traveller-grey",
    url: galleryImg2,
    title: "Premium Executive Tempo Traveller (12-Seater)",
    category: "Tempo Traveller",
  },
  {
    id: "g-traveller-interior-tan",
    url: galleryImg3,
    title: "Executive Tempo Traveller Tan Interior",
    category: "Tempo Traveller",
  },
  {
    id: "g-traveller-interior-white",
    url: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=800",
    title: "VIP Maharaja Traveller Ivory Interior",
    category: "Tempo Traveller",
  },
  {
    id: "g-bus-interior",
    url: "https://images.unsplash.com/photo-1557223562-6c77ef16210f?auto=format&fit=crop&q=80&w=800",
    title: "Premium Mercedes Coach Business Cabin",
    category: "Buses & Coaches",
  },
  {
    id: "g-bmw-wedding",
    url: "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&q=80&w=800",
    title: "BMW Z4 Convertible for Weddings",
    category: "Weddings",
  },
  {
    id: "g-jaguar-wedding",
    url: "https://images.unsplash.com/photo-1611245706485-80dc0e24ec17?auto=format&fit=crop&q=80&w=800",
    title: "Premium Jaguar Wedding Sedan",
    category: "Weddings",
  },
  {
    id: "g-vintage-wedding",
    url: "https://images.unsplash.com/photo-1516387938699-a93567ec168e?auto=format&fit=crop&q=80&w=800",
    title: "Royal Vintage Classic Wedding Convertible",
    category: "Weddings",
  },
  {
    id: "g-mercedes-e",
    url: "https://images.unsplash.com/photo-1617531653332-bd46c24f2068?auto=format&fit=crop&q=80&w=800",
    title: "Mercedes-Benz E-Class Luxury Sedan",
    category: "Luxury Sedans",
  },
  {
    id: "g-innova-crysta",
    url: innovaImg,
    title: "Toyota Innova Crysta Tourist SUV",
    category: "Innova Crysta",
  },
  {
    id: "g-ertiga-citizen",
    url: ertigaImg,
    title: "Our Ertiga Transit Vehicle in Action",
    category: "MPVs",
  },
  {
    id: "g-fortuner",
    url: fortunerImg,
    title: "Toyota Fortuner Premium SUV",
    category: "Luxury SUVs",
  },
];

export const BLOGS: BlogPost[] = [
  {
    id: "b1",
    title: "10 Most Beautiful Hidden Places to Visit in Gujarat",
    excerpt: "Ditch the standard tourist loops. Discover serene beaches, ancient fort ruins, and tribal heritage sites nestled inside Gujarat.",
    date: "July 10, 2026",
    category: "Travel Guides",
    image: blogImg1,
  },
  {
    id: "b2",
    title: "Why Tempo Traveller is the Best Choice for Family Trips",
    excerpt: "Explore why renting a 12-to-17-seater Tempo Traveller offers unmatched physical comfort, cost savings, and collective joy for big family loops.",
    date: "June 28, 2026",
    category: "Road Trips",
    image: blogImg2,
  },
  {
    id: "b3",
    title: "Ahmedabad to Statue of Unity: The Perfect 2-Day Itinerary",
    excerpt: "Maximize your trip to the world's tallest monument. Find the best travel routes, entry timings, and absolute must-see laser light displays.",
    date: "May 15, 2026",
    category: "Itineraries",
    image: blogImg3,
  },
];
