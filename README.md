# The Master!
## Objective

Developed a student and class management online platform using the MERN stack named "The Master!"

### Made the website responsive for mobile, tablet, and desktop.

1. **Navbar:**
   - Logo + website name
   - Home
   - All Classes
   - Teach on The Master!
   - Sign In (when not logged in) button
   - If logged in, display profile picture with a dropdown:
      - User name (not clickable)
      - Dashboard
      - Logout button

2. **Homepage:**
   - Banner section with images/carousel
   - Highlight partners or collaborators with logos and brief descriptions
   - Highlight popular or recommended classes using a slider
   - Feedback section in the student dashboard using a carousel
      - Feedback text
      - Name (who posted the feedback)
      - Image (who posted the feedback)
      - Title (class title)
   - Show total users, total classes, and total student enrollment with relevant information cards and images
   - Section for teachers to join with an image, text, and "Start Teaching Today" button
   - At least two extra sections on the home page relevant to the website

3. **All Classes:**
   - Display classes in card format with:
      - Title
      - Name (who posted the class)
      - Image
      - Price
      - Short description
      - Total enrollment
      - Enroll button

4. **Class Details Page (Private Route):**
   - Redirect to class details page after clicking the Enroll button
   - Information about the class, teacher, price, etc.
   - Pay button redirects to payment page (pending)
   - After successful payment, redirect to /dashboard/my-enroll-classes page (pending)
   - Data saved in another collection (payment and class information) (pending)

5. **Teach on The Master! (private route):**
   - Page for users to apply for a teaching position
   - Form with fields: Name, Images, Experience, Title, Category
   - Submit for review button
   - Data saved in the database, and admin dashboard shows teacher requests

## Student Dashboard (Private Route)

6. Clicking on the Dashboard redirects to a page with:
   - My enroll class
   - Profile

7. **My enroll class:** (pending)
   - Display enrolled classes in card format with:
      - Title
      - Name (who posted the class)
      - Image
      - Continue button

8. **My enroll class details:** (pending)
   - Redirects to a page with assignments in tabular form
   - Display assignment details: Title, Description, Deadline, Submit button
   - Option to create a Teaching Evaluation Report (TER) with a modal

9. **My Profile:**
   - Display user information with required data

## Admin Dashboard (Private Route)

10. Clicking on the Dashboard redirects to a page with:
    - Teacher Request
    - Users
    - All Classes
    - Profile

11. **Teacher Request:**
    - Display teacher requests in tabular form with options to approve or reject

12. **Users:**
    - Display all users in tabular form with options to make admin
    - Implement server-side search functionality

13. **All Classes:**
    - Display all classes in tabular form with options to approve, reject, and see progress

14. **My Profile:**
    - Display admin information with required data

## Teacher Dashboard (Private Route)

15. Clicking on the Dashboard redirects to a page with:
    - Add class
    - My class
    - Profile

16. **Add class:**
    - Form to add classes with fields: Title, Name, Email, Price, Description, Image
    - Add class button saves data to MongoDB and redirects to My classes page and admin dashboard

17. **My class:**
    - Display added classes in card format with options to update, delete, and see details

18. **My Profile:**
    - Display teacher information with required data

19. **Login & Registration systems:**
    - Display relevant error messages
    - Login page with Email/Password and Google Sign-in
    - Registration page with fields: Name, Email, Password, PhotoURL

20. **Extra:**
    - Implement tanstack query 
    - Add tanstack mutation for every post request (pending)
    - Implement react-hook-form in all form pages 
    - Show toast for every CRUD operation
    - Implement JWT on login and store the token
    - Implement pagination at the footer of all tables and cards
    - Create a 'My Order' page on the student dashboard to view orders in tabular form with an invoice download button. (pending)
        Note: Download the invoice as a PDF using jsPdf.
    - Add animation on your website using framer motion or AOS.
    - Implement Axios interceptor.
    - Add a search bar in the navbar on all class pages. (pending)
    - Use infinite scroll on all class pages(pending)
## Dependencies

```json
"dependencies": {
  "@tanstack/react-query": "^5.17.19",
  "axios": "^1.6.5",
  "dotenv": "^16.3.2",
  "firebase": "^10.7.2",
  "localforage": "^1.10.0",
  "lottie-react": "^2.4.0",
  "match-sorter": "^6.3.3",
  "react": "^18.2.0",
  "react-countup": "^6.5.0",
  "react-dom": "^18.2.0",
  "react-helmet": "^6.1.0",
  "react-hook-form": "^7.49.3",
  "react-icons": "^5.0.1",
  "react-responsive-carousel": "^3.2.23",
  "react-router-dom": "^6.21.3",
  "react-simple-captcha": "^9.3.1",
  "sort-by": "^1.2.0",
  "sweetalert2": "^11.10.3",
  "swiper": "^11.0.5"
},
"devDependencies": {
  "@types/react": "^18.2.43",
  "@types/react-dom": "^18.2.17",
  "@vitejs/plugin-react": "^4.2.1",
  "autoprefixer": "^10.4.17",
  "daisyui": "^4.6.0",
  "eslint": "^8.55.0",
  "eslint-plugin-react": "^7.33.2",
  "eslint-plugin-react-hooks": "^4.6.0",
  "eslint-plugin-react-refresh": "^0.4.5",
  "postcss": "^8.4.33",
  "tailwindcss": "^3.4.1",
  "vite": "^5.0.8"
}
