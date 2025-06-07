# Ferremas Frontend

Next.js frontend for the Ferremas e-commerce platform.

> Last updated: June 2025

## Development

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run build
npm start
```

## Docker

```bash
docker build -t ferremas-frontend .
docker run -p 3000:3000 ferremas-frontend
```

## Environment Variables

- `NEXT_PUBLIC_API_URL` - API Gateway URL

## Features

- Product catalog
- Admin panel
- Contact page
- Responsive design