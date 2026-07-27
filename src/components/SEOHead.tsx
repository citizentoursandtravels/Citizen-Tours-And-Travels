import { useEffect } from "react";

interface SEOProps {
  currentSection?: string;
}

const SECTION_SEO_DATA: Record<string, { title: string; description: string; keywords: string; canonical: string }> = {
  home: {
    title: "Car Rental & Taxi Service in Ahmedabad | Citizen Tours",
    description: "Rent Sedans, Innova Crysta, Tempo Travellers & Luxury Buses in Ahmedabad. 24/7 Taxi Rental, Local Sightseeing & Outstation Tour Packages with Verified Drivers.",
    keywords: "car rental ahmedabad, taxi service ahmedabad, innova crysta rental ahmedabad, tempo traveller ahmedabad, outstation cab ahmedabad, citizen tours and travels, ahmedabad cab service",
    canonical: "https://citizentoursandtravels.com/",
  },
  services: {
    title: "Cab Rental & Transport Services Ahmedabad | Citizen Tours",
    description: "Comprehensive transport solutions in Ahmedabad: Airport Pickups, Corporate Employee Transit, Wedding Bus Contracts, Outstation Cabs, and Sightseeing.",
    keywords: "ahmedabad airport taxi, corporate car hire ahmedabad, wedding bus rental ahmedabad, local full day cab ahmedabad",
    canonical: "https://citizentoursandtravels.com/#services",
  },
  fleet: {
    title: "Rent Innova Crysta & Tempo Traveller | Citizen Tours",
    description: "Explore our sanitized fleet: Swift Dzire, Ertiga, Toyota Innova Crysta, 12-26 Seater AC Tempo Travellers, Force Urbania, and 56-Seater Luxury Coaches.",
    keywords: "innova crysta price per km ahmedabad, 17 seater tempo traveller rental ahmedabad, force urbania rent ahmedabad, luxury bus hire ahmedabad",
    canonical: "https://citizentoursandtravels.com/#fleet",
  },
  packages: {
    title: "Gujarat & Rajasthan Tour Packages | Citizen Travels",
    description: "Handcrafted tour packages: Statue of Unity Weekend, Somnath Dwarka Pilgrimage, Rajasthan Palace Circuit, Udaipur Romantic Getaway, and Mount Abu.",
    keywords: "statue of unity tour package ahmedabad, somnath dwarka tour package, gujarat heritage tour, rajasthan tour package from ahmedabad",
    canonical: "https://citizentoursandtravels.com/#packages",
  },
  about: {
    title: "About Us: Trusted Car Rental Ahmedabad | Citizen Tours",
    description: "Founded in 2007, Citizen Tours & Travels is Ahmedabad's most trusted transport provider with 18+ years of highway experience and verified chauffeurs.",
    keywords: "about citizen tours and travels, travel agency in navrangpura ahmedabad, best tour operator ahmedabad",
    canonical: "https://citizentoursandtravels.com/#about",
  },
  contact: {
    title: "Contact Us for Cab Rental in Ahmedabad | Citizen Tours",
    description: "Contact Citizen Tours & Travels 24/7 at +91 97240 02200 or visit our head office at Navrangpura, Ahmedabad for instant quotes and bookings.",
    keywords: "contact citizen travels ahmedabad, citizen travels phone number, ahmedabad taxi booking number",
    canonical: "https://citizentoursandtravels.com/#contact",
  },
  faqs: {
    title: "Car Rental & Taxi Booking FAQs | Citizen Tours Ahmedabad",
    description: "Find answers to booking procedures, driver allowances, toll charges, cancellation policies, and night charges for cab rentals in Ahmedabad.",
    keywords: "ahmedabad taxi faq, car rental pricing rules ahmedabad, tempo traveller booking terms",
    canonical: "https://citizentoursandtravels.com/#faqs",
  },
  blog: {
    title: "Gujarat Travel Guides & Road Trip Tips | Citizen Tours",
    description: "Expert road-trip routing secrets, hidden heritage spots inside Gujarat, and essential tips for group travel and outstation cab safety.",
    keywords: "gujarat travel guide, road trip tips ahmedabad, best time to visit statue of unity, somnath route guide",
    canonical: "https://citizentoursandtravels.com/#blog",
  },
};

export function SEOHead({ currentSection = "home" }: SEOProps) {
  useEffect(() => {
    const seoData = SECTION_SEO_DATA[currentSection] || SECTION_SEO_DATA.home;

    // 1. Update Title
    document.title = seoData.title;

    // 2. Helper to set or update meta tags
    const updateMetaTag = (nameAttr: string, attrValue: string, content: string) => {
      let element = document.querySelector(`meta[${nameAttr}="${attrValue}"]`);
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(nameAttr, attrValue);
        document.head.appendChild(element);
      }
      element.setAttribute("content", content);
    };

    // Meta Description & Keywords
    updateMetaTag("name", "description", seoData.description);
    updateMetaTag("name", "keywords", seoData.keywords);

    // Open Graph Tags
    updateMetaTag("property", "og:title", seoData.title);
    updateMetaTag("property", "og:description", seoData.description);
    updateMetaTag("property", "og:url", seoData.canonical);
    updateMetaTag("property", "og:type", "website");
    updateMetaTag("property", "og:site_name", "Citizen Tours & Travels");
    updateMetaTag("property", "og:locale", "en_US");
    updateMetaTag("property", "og:image", "https://citizentoursandtravels.com/assets/images/citizen_travels_logo_1784098450742.jpg");

    // Twitter Tags
    updateMetaTag("name", "twitter:card", "summary_large_image");
    updateMetaTag("name", "twitter:title", seoData.title);
    updateMetaTag("name", "twitter:description", seoData.description);
    updateMetaTag("name", "twitter:image", "https://citizentoursandtravels.com/assets/images/citizen_travels_logo_1784098450742.jpg");

    // Geo Meta Tags
    updateMetaTag("name", "geo.region", "IN-GJ");
    updateMetaTag("name", "geo.placename", "Ahmedabad");
    updateMetaTag("name", "geo.position", "23.0368;72.5615");
    updateMetaTag("name", "ICBM", "23.0368, 72.5615");

    // Google Search Console Verification Ready
    updateMetaTag("name", "google-site-verification", "google_site_verification_token_placeholder");

    // Robots
    updateMetaTag("name", "robots", "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1");

    // 3. Update Canonical Link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement("link");
      canonicalLink.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute("href", seoData.canonical);

    // 4. Inject Dynamic LocalBusiness Schema
    const schemaData = {
      "@context": "https://schema.org",
      "@type": ["TaxiService", "TravelAgency", "LocalBusiness"],
      "@id": "https://citizentoursandtravels.com/#organization",
      "name": "Citizen Tours & Travels",
      "alternateName": ["Citizen Travels Ahmedabad", "Citizen Car Rental"],
      "url": "https://citizentoursandtravels.com/",
      "logo": "https://citizentoursandtravels.com/assets/images/citizen_travels_logo_1784098450742.jpg",
      "image": "https://citizentoursandtravels.com/assets/images/regenerated_image_1784098622037.png",
      "description": "Ahmedabad's leading transport and tour operator since 2007 offering car rental, Innova Crysta cab, 12-26 seater Tempo Traveller, and luxury buses for local and outstation trips.",
      "telephone": "+91-9724002200",
      "email": "citizentoursandtravels07@gmail.com",
      "priceRange": "₹₹",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Citizen House, Ground Floor, Opposite C.G. Road Bus Stop, CG Road, Navrangpura",
        "addressLocality": "Ahmedabad",
        "addressRegion": "Gujarat",
        "postalCode": "380009",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 23.0368,
        "longitude": 72.5615
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "00:00",
        "closes": "23:59"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "1280",
        "bestRating": "5",
        "worstRating": "1"
      },
      "areaServed": [
        { "@type": "City", "name": "Ahmedabad" },
        { "@type": "State", "name": "Gujarat" },
        { "@type": "State", "name": "Rajasthan" },
        { "@type": "City", "name": "Udaipur" },
        { "@type": "City", "name": "Mumbai" },
        { "@type": "City", "name": "Statue of Unity" }
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Car Rental & Tour Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Outstation Car Rental & Taxi Service",
              "description": "Sedan and SUV cab booking with experienced drivers for intercity travel."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Toyota Innova Crysta Rental",
              "description": "Premium 6+1 and 7+1 AC Innova Crysta rental for long highway journeys."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "12 to 26 Seater Tempo Traveller Rental",
              "description": "Spacious luxury AC Tempo Travellers for group pilgrimages and family tours."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Statue of Unity & Gujarat Tour Packages",
              "description": "All-inclusive tour packages with door-to-door cab transport."
            }
          }
        ]
      }
    };

    let schemaScript = document.querySelector('#localbusiness-schema');
    if (!schemaScript) {
      schemaScript = document.createElement('script');
      schemaScript.setAttribute('id', 'localbusiness-schema');
      schemaScript.setAttribute('type', 'application/ld+json');
      document.head.appendChild(schemaScript);
    }
    schemaScript.textContent = JSON.stringify(schemaData);

  }, [currentSection]);

  return null;
}
