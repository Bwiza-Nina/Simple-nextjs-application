Next.js Dashboard
This project is a simple dashboard built with Next.js, demonstrating data fetching, visualization, and modern frontend development techniques.

Getting Started
First, install the dependencies:

npm install
# or
yarn install
Then, run the development server:

npm run dev
# or
yarn dev
Open http://localhost:3000 with your browser to see the result.

Project Structure
pages/: Contains the main pages of the application
index.tsx: Landing page with overview
visits.tsx: Detailed visit analysis page
customers.tsx: CRM data list page
api/: API routes for data fetching
components/: Reusable React components
layout.tsx: Main layout component
Features
Dashboard overview with aggregated data
Detailed visit analysis with graph visualization
CRM data list with pagination and search functionality
Client-side caching using SWR
Responsive design using Tailwind CSS
Technologies Used
Next.js
React
Tailwind CSS
Recharts
SWR
Note on Data
This project uses mock data for demonstration purposes. In a real-world scenario, you would replace the mock data in the API routes with actual API calls to your data source or Mockaroo API.

Customization
To customize the data or add more features, you can modify the API routes in the pages/api directory and update the corresponding pages in the pages directory.