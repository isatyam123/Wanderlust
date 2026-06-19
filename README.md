# Wanderlust

A full-stack accommodation booking platform inspired by modern travel marketplaces such as Airbnb. Users can explore properties, create listings, upload images, leave reviews, and discover locations through interactive maps.

## Live Demo

🌐 Live: https://wanderlust-9z3d.onrender.com

## Features

* User Authentication (Signup/Login/Logout)
* Secure Session Management with Passport.js
* Property Listing Management (Create, Read, Update, Delete)
* Review and Rating System
* Cloudinary-based Image Uploads
* Mapbox Geocoding and Location Search
* MongoDB Atlas Cloud Database
* Responsive UI with Bootstrap
* Flash Messages and Error Handling
* MVC Architecture

## Tech Stack

### Backend

* Node.js
* Express.js
* MongoDB Atlas
* Mongoose
* Passport.js
* Express Session

### Frontend

* EJS
* Bootstrap
* JavaScript
* HTML5
* CSS3

### Third-Party Services

* Cloudinary
* Mapbox

## Project Statistics

* 500+ Property Listings Supported
* Full CRUD Operations for Listings and Reviews
* Cloud-Based Image Storage
* Interactive Location Mapping

## Installation

```bash
git clone https://github.com/isatyam123/Wanderlust.git
cd Wanderlust
npm install
```

Create a `.env` file and add:

```env
MONGOATLAS_URL=your_mongodb_connection_string
SECRET=your_secret_key
CLOUD_NAME=your_cloudinary_name
CLOUD_API_KEY=your_cloudinary_api_key
CLOUD_API_SECRET=your_cloudinary_api_secret
MAPBOX_TOKEN=your_mapbox_token
```

Run the project:

```bash
node app.js
```

Visit:

```text
http://localhost:8080
```

## Architecture

The application follows the MVC (Model-View-Controller) architecture for maintainability and scalability.

## Author

Satyam Kumar
