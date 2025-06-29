Front-End Portfolio

Welcome to my front-end development portfolio! This React-based web application showcases my skills and projects, featuring dynamic imagery and a contact form integrated with EmailJS.

Technologies Used

React
CSS3
EmailJS (for contact form email sending)
Unsplash API (for dynamic background images)
JavaScript (ES6+)
Folder Structure

/api         # Unsplash API integration and related services  
/build       # Production-ready build files  
/dev         # Development tools and environment configurations  
/docs        # Project documentation (plans, change orders, maintenance plan)  
/public      # Static assets (index.html, favicon, images)  
/src         # Source code (components, pages, styles, utils)  
Installation Instructions

To run this project locally:

Clone the repository:
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
Install dependencies:
npm install
Create a .env file based on .env.example and add your EmailJS and Unsplash API keys:
REACT_APP_EMAILJS_SERVICE_ID=your_service_id
REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id
REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key
REACT_APP_UNSPLASH_ACCESS_KEY=your_unsplash_access_key
Start the development server:
npm start
Open your browser and visit:
http://localhost:3000/
Contact Form Setup (EmailJS)

The contact form uses EmailJS to send messages without a backend server. Please ensure you have:

Created an account on EmailJS
Configured your email service, email template, and public API key
Added the service ID, template ID, and public key to your .env file as shown above
Unsplash API Integration

Background and project images are loaded dynamically via the Unsplash API. You must:

Register for a developer account at Unsplash Developers
Obtain an access key and add it to your .env file
Maintenance Plan

Please refer to the docs/MaintenancePlan.md file for scheduled content updates, backups, and technical maintenance tasks necessary to keep the site secure and functional.

Additional Documentation

All relevant project documentation—including the project plan, change orders, and meeting notes—can be found in the /docs folder.
Email: sonoely@gmail.com
LinkedIn: www.linkedin.com/in/sonoely-merry-13341136b
GitHub: https://github.com/MerrySonoely-FS
Let me know if you'd like a version with Markdown badges, a live demo link, or deployment instructions (e.g., Netlify, Vercel, GitHub Pages).
