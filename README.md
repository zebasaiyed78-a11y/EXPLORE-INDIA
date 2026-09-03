# Explore India 🇮🇳

A premium, responsive React + Vite Indian tourism frontend based on the supplied project specification.

## Features

- React + Vite
- React Router
- Framer Motion
- Lucide React
- Light / Dark theme persisted with localStorage
- Responsive desktop / tablet / mobile UI
- Destination search, filters and sorting
- Dynamic destination detail routes
- Wishlist using localStorage
- Multi-step Trip Planner
- Tourism Agent call + WhatsApp CTA
- Indian culture: places, regional food, dances, festivals, heritage and experiences
- Mock data separated from UI
- Service layer prepared for a future REST API
- Future-ready React → Node/Express → Prisma → PostgreSQL architecture

## Run in VS Code

Requirements: Node.js 18+ recommended.

```bash
npm install
npm run dev
```

Open the localhost URL printed by Vite.

## Build

```bash
npm run build
npm run preview
```

## Change Tourism Agent Number

Edit only:

`src/config/contact.js`

Example:

```js
export const tourismAgent = {
  name: "Explore India Tourism Agent",
  phone: "+91 98765 43210",
  tel: "+919876543210",
  whatsapp: "919876543210",
  email: "info@exploreindia.com"
};
```

The navbar, floating contact panel, destination CTA, footer and WhatsApp links read from this configuration.

## Main routes

- `/`
- `/destinations`
- `/destinations/goa`
- `/destinations/rajasthan`
- `/destinations/kerala`
- `/destinations/kashmir`
- `/destinations/gujarat`
- `/destinations/tamil-nadu`
- `/experiences`
- `/itineraries`
- `/plan-trip`
- `/login`
- `/signup`
- `/about`

## Future backend

The frontend keeps data in `src/data` and API access in `src/services`.

Recommended future flow:

React → service layer → REST API → Node.js + Express → Prisma → PostgreSQL

Suggested future tables:

users, states, destinations, places, experiences, itineraries, reviews, wishlist, bookings

Then replace the mock service functions with API calls without rewriting the UI components.

## Note about images

The demo uses remote Unsplash image URLs so the project can run immediately without a large image bundle. For production, download/licence your chosen images and move them into `public/images`.
