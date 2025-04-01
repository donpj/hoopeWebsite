# Deployment Instructions

This document provides instructions for deploying the Hoope website.

## Local Development

To run the website locally for development:

1. Navigate to the project directory:
   ```
   cd /home/ubuntu/hoope_website/hoope-nextjs
   ```

2. Install dependencies (if not already installed):
   ```
   npm install
   ```

3. Start the development server:
   ```
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:3000`

## Production Deployment

The website can be deployed to a production environment using the following methods:

### Option 1: Deploy to Vercel (Recommended)

1. Create a Vercel account if you don't have one
2. Install Vercel CLI:
   ```
   npm install -g vercel
   ```
3. Login to Vercel:
   ```
   vercel login
   ```
4. Deploy the website:
   ```
   vercel
   ```

### Option 2: Static Export

1. Build the website:
   ```
   npm run build
   ```
2. The static files will be generated in the `.next` directory
3. These files can be deployed to any static hosting service like Netlify, GitHub Pages, or AWS S3

### Option 3: Deploy using Cloudflare Workers

Since this project was created with Cloudflare Workers support:

1. Configure your Cloudflare account in wrangler.toml
2. Deploy using:
   ```
   npm run deploy
   ```

## Environment Variables

For production deployment, you may need to set the following environment variables:

- `NEXT_PUBLIC_API_URL`: The URL of your API (if different from the default)

## Post-Deployment Verification

After deployment, verify that:

1. All pages load correctly
2. Navigation works as expected
3. Forms submit properly
4. The website is responsive on different devices
5. API endpoints are functioning correctly
