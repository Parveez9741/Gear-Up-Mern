# GearUp — polished, phone-ready car rental app

This project keeps the existing React + Vite client and Express/MongoDB API. The frontend has a responsive redesign, touch-friendly phone navigation, installable app metadata, and a cached page fallback for offline opening after the app has loaded online. Booking and feedback requests still use the existing API routes.

## Run locally

1. Install a current Node.js LTS release.
2. In `client`, run `npm install`, then `npm run dev`.
3. In `Server`, run `npm install` and create a private `.env` file using `.env.example` as a guide.
4. Start the API with `npm run dev` from `Server`.

Set `VITE_BACKEND_URL` in `client/.env.local` to the API origin you use. Keep the server's `FRONTEND_URL`, `MONGO_URI`, `EMAIL_USER`, and `EMAIL_PASS` values private in `Server/.env`. Never commit either `.env` file.

The Vite development server uses the existing deployed API URL from the sample configuration by default. If you want to use a local API, set `VITE_BACKEND_URL=http://localhost:5000` in `client/.env.local` and set `FRONTEND_URL=http://localhost:5173` in `Server/.env`.

## Make it yours

- **Colors and fonts:** edit the design tokens at the top of `client/src/index.css`. Gold is `--gold`; charcoal is `--ink`; the page background is `--cream`.
- **Home page words and sections:** edit `client/src/components/Home.jsx`. Its layout and mobile styles are in `Home.css`.
- **Cars, prices, and photos:** edit the `cars` list in `client/src/components/FindCar.jsx`. Replace the files in `client/src/assets` or import different images there. The homepage featured fleet is listed near the top of `Home.jsx`.
- **About and feedback copy:** edit `AboutUs.jsx` and `Feedback.jsx`. Their styling is in the same-named CSS files.
- **Navigation:** edit `client/src/components/Navbar.jsx`. The small-screen bottom tab bar is styled in `Navbar.css`.
- **App name and icon:** edit `client/index.html`, `client/public/manifest.webmanifest`, and `client/public/gearup-icon.svg`.

## Existing integrations kept

- `POST /api/bookings` receives the same fields: `car`, `name`, `email`, `phone`, `location`, `pickupDate`, and `dropoffDate`.
- `POST /api/feedback` receives the same fields: `name`, `email`, `rating`, and `message`.
- Existing routes remain `/`, `/find-car`, `/feedback`, and `/about`.

The app manifest and service worker help browsers offer an install option and reopen the cached app shell when offline. Submitting a booking or feedback still needs an internet connection to reach the API.
