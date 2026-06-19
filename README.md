# Wanderlust

A full-stack accommodation booking platform inspired by modern travel marketplaces. Wanderlust enables users to explore destinations, create property listings, upload images, leave reviews, and discover locations through interactive maps.

## Live Demo

🌐 https://wanderlust-9z3d.onrender.com

## Features

* User Authentication (Signup, Login, Logout)
* Secure Session Management using Passport.js
* Create, Read, Update, and Delete (CRUD) Listings
* Review and Rating System
* Cloudinary-Based Image Uploads
* Interactive Location Search using Mapbox
* MongoDB Atlas Cloud Database
* Flash Messages and Error Handling
* Responsive User Interface with Bootstrap
* MVC (Model-View-Controller) Architecture

## Tech Stack

### Frontend

* HTML5
* CSS3
* JavaScript
* Bootstrap
* EJS

### Backend

* Node.js
* Express.js
* MongoDB Atlas
* Mongoose
* Passport.js
* Express Session

### Third-Party Services

* Cloudinary
* Mapbox

## Project Highlights

* Supports 500+ property listings
* Full CRUD functionality for listings and reviews
* Secure authentication and authorization workflows
* Cloud-based image storage and management
* Interactive geolocation and mapping services
* Deployed on a public cloud platform

## Deployment

* Application Hosting: Render
* Database: MongoDB Atlas
* Image Storage: Cloudinary
* Geolocation Services: Mapbox

## Installation

Clone the repository:

```bash
git clone https://github.com/isatyam123/Wanderlust.git
cd Wanderlust
```

Install dependencies:

```bash
npm install
```

Create a `.env` file in the root directory and add:

```env
MONGOATLAS_URL=your_mongodb_connection_string
SECRET=your_secret_key

CLOUD_NAME=your_cloudinary_name
CLOUD_API_KEY=your_cloudinary_api_key
CLOUD_API_SECRET=your_cloudinary_api_secret

MAPBOX_TOKEN=your_mapbox_token
```

Start the application:

```bash
node app.js
```

Visit:

```text
http://localhost:8080
```

## Architecture

The project follows the MVC (Model-View-Controller) architecture to ensure maintainability, scalability, and separation of concerns.

## Future Enhancements

* Wishlist/Favorites Functionality
* Advanced Search and Filtering
* Booking Management System
* User Profiles
* Payment Gateway Integration

## Author

**Satyam Kumar**

