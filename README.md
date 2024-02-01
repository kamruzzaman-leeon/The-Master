# The Master!

## Table of Contents
- [Overview](#overview)
- [Live Site](#live-site)
- [Features](#features)
  - [General Features](#general-features)
  - [All Classes](#all-classes)
  - [Class Details Page](#class-details-page-private-route)
  - [Teach on The Master!](#teach-on-the-master-private-route)
  - [Student Dashboard ](#student-dashboard-private-route)
  - [Admin Dashboard](#admin-dashboard-private-route)
  - [Teacher Dashboard](#teacher-dashboard-private-route)
  - [Login & Registration Systems](#login--registration-systems)
  - [Extra](#extra)
- [Technology Stack](#technology-stack)
- [How to Run Locally](#how-to-run-locally)
- [License](#license)
- [Acknowledgements](#acknowledgements)
- [Contributing](#contributing)


## Overview
"The Master!" is an online platform developed using the MERN stack for student and class management. It provides a seamless experience for students, teachers, and administrators.

## Live Site
[Visit The Master!](https://the-master-6c9ad.firebaseapp.com/)

## Features

### General Features
- Responsive design for mobile, tablet, and desktop
- Navbar with user authentication and dropdown
- Homepage with banner, partner highlights, popular classes, and feedback carousel
- Sections for total users, classes, and student enrollment
- Teacher registration and application review system
- Additional homepage sections

### All Classes
- Display classes in card format with relevant information
- Enroll button for students

### Class Details Page (Private Route)
- Redirects to class details page after enrollment
- Information about the class, teacher, price, etc.
- Pay button redirects to payment page (pending)
- Data saved in another collection (payment and class information) (pending)

### Teach on The Master! (Private Route)
- Page for users to apply for a teaching position
- Form with fields: Name, Images, Experience, Title, Category
- Submit for review button
- Data saved in the database, and admin dashboard shows teacher requests

### Student Dashboard (Private Route)
- My enroll class
  - Display enrolled classes in card format
  - Continue button to class details
- My enroll class details
  - Tabular form with assignment details
  - Option to create Teaching Evaluation Report (TER) with a modal
- My Profile
  - Display user information with required data

### Admin Dashboard (Private Route)
- Teacher Request
  - Tabular form with options to approve or reject
- Users
  - Tabular form with options to make admin
  - Server-side search functionality
- All Classes
  - Tabular form with options to approve, reject, and see progress
- My Profile
  - Display admin information with required data

### Teacher Dashboard (Private Route)
- Add class
  - Form to add classes with fields: Title, Name, Email, Price, Description, Image
  - Add class button saves data to MongoDB
- My class
  - Display added classes with options to update, delete, and see details
- My Profile
  - Display teacher information with required data

### Login & Registration Systems
- Relevant error messages
- Login with Email/Password and Google Sign-in
- Registration with fields: Name, Email, Password, PhotoURL

### Extra
- Implement tanstack query
- Add tanstack mutation for every post request (pending)
- Implement react-hook-form in all form pages
- Show toast for every CRUD operation
- Implement JWT on login and store the token
- Implement pagination at the footer of all tables and cards
- Create a 'My Order' page on the student dashboard (pending)
- Add animation using framer motion or AOS
- Implement Axios interceptor
- Add a search bar in the navbar on all class pages (pending)
- Use infinite scroll on all class pages (pending)

## Technology Stack
- React
- Node.js
- Express
- MongoDB
- @tanstack/react-query
- Axios
- dotenv
- Firebase
- localforage
- lottie-react
- match-sorter
- react-countup
- react-dom
- react-helmet
- react-hook-form
- react-icons
- react-responsive-carousel
- react-router-dom
- react-simple-captcha
- sort-by
- sweetalert2
- swiper

## How to Run Locally
1. Clone the repository: `git clone https://github.com/kamruzzaman-leeon/the-master.git`
2. Navigate to the project directory: `cd the-master`
3. Install dependencies: `npm install`
4. Start the development server: `npm start`

## License
This project is licensed under the [MIT License](LICENSE).

## Acknowledgements
- Mention any libraries, tools, or resources that you used and deserve credit.

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

