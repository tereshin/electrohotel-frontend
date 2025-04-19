# ElectroHotel Proxy Server

This proxy server is designed to help the ElectroHotel frontend fetch Yandex Maps reviews while bypassing CORS restrictions.

## Features

- Proxies requests to external URLs to avoid CORS issues
- Serves static files from the built React app
- Handles all routes to work with React Router

## Setup

1. Install dependencies:

```bash
npm install
```

2. Run the server:

```bash
# Development mode with auto-restart
npm run dev

# Production mode
npm start
```

## API Endpoints

### Proxy Endpoint

`GET /proxy?url={encodedUrl}`

Fetches content from the provided URL and returns it to the client.

Example:
```
/proxy?url=https%3A%2F%2Fyandex.ru%2Fmaps%2Forg%2Felektrostal%2F1110996853%2Freviews%2F
```

## Integration with Main Project

In the main project's package.json, we've added a script to run the proxy server:

```json
"scripts": {
  "server": "cd server && npm run dev"
}
```

You can run both the frontend and server concurrently using:

```bash
# In terminal 1
npm run dev

# In terminal 2
npm run server
```

## Production Deployment

For production, you can either:

1. Deploy the proxy server separately on a different service
2. Include it in your main application deployment and ensure it runs alongside your frontend

The proxy server is configured to serve the built React app from the `../dist` directory, making it suitable for a combined deployment. 