# GameWheelClub

GameWheelClub is a fast, lightweight, and accessible random-decision tools website (spin wheels, generators, pickers) built with Next.js (App Router), TypeScript, and Tailwind CSS.

## Technology Stack

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS v4 (with neobrutalist style system)
- **Icons**: Lucide React
- **Animations**: Framer Motion (for wheel spin & micro-interactions)

## Development Setup

First, install dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Hostinger Node.js Web App Deployment Steps

Hostinger Business Plan supports hosting Next.js Node.js apps. Follow these steps to set up auto-deployment:

1. **Hostinger Panel Setup**:
   - Go to your Hostinger hPanel -> **Websites** -> **Node.js**.
   - Click **Create Web App**.
   - Set the App Name to `gamewheelclub`.
   - Select the desired Node.js version (v20+ recommended).
   - Set the Document Root pointing to your domain directory.

2. **Git Integration**:
   - Connect your GitHub repository to the Hostinger Node.js Web App.
   - Choose the branch (e.g., `main`) for automated deployments on push.

3. **Build & Start Configuration**:
   - Set the **Install Command**: `npm install`
   - Set the **Build Command**: `npm run build`
   - Set the **Start Command**: `npm run start` or point the entry script to the custom server/Next production server script.
   - Set the environment variable `PORT` to the port provided by Hostinger (usually managed automatically by their proxy).
   
4. **Environment Variables**:
   - Add `NODE_ENV=production` in the environment configuration section.
