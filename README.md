
# 🎨 Personal Portfolio – Rivera Sonoely
=======
To start the application - type 'npm install' then 'npm start' in terminal.
Visit http://localhost:3000/ to view my website.

🟩 Week 1: Integrate EmailJS for Contact Functionality

Goal: Enable form-based email sending directly from the portfolio using EmailJS.

Tasks:

 Sign up and create a service on EmailJS.
 Install EmailJS SDK via npm:
npm install @emailjs/browser
 Set up .env variables for EmailJS service ID, template ID, and public key.
 Modify your Contact form component to handle EmailJS submission.
 Add form validation and success/error feedback.
 Test sending emails and debug any issues.
 Style confirmation/error messages for UX clarity.

🟦 Week 2: Add Unsplash API for Dynamic Background Image

Goal: Dynamically load a background image from Unsplash API.

Tasks:

 Sign up on Unsplash Developers and create an API key.
 Install Axios or use fetch for API calls.
 Create a useEffect hook in your main layout or landing page component to call the API.
 Store and render the image URL in the background (consider using style={{ backgroundImage: url(...) }}).
 Handle loading states and errors (e.g., fallback image).
 Add light overlay/darkening for text readability.
 Optionally: rotate daily/random images based on a keyword.

🟨 Week 3: Expand Projects Page

Goal: Showcase more GitHub projects with interactive UI.

Tasks:

 Select and prepare content for additional GitHub projects.
 Add new project cards or components to your Projects page.
 Use hover effects (e.g., Bootstrap tooltips, flip cards, or CSS transitions) to show more info like tech stack, role, or demo link.
 Ensure responsiveness and accessibility.
 Optionally: pull project data directly from GitHub API.

🟥 Week 4: Enhance Overall Styling and UI/UX

Goal: Polish the look and feel of the site.

Tasks:

 Review color scheme, fonts, and spacing — tweak via Bootstrap or custom CSS.
 Add transitions, animations, or subtle hover effects.
 Make sure all pages are mobile responsive.
 Audit for accessibility (contrast ratios, ARIA labels).
 Polish navbar, footer, and any reusable components.

 Review performance (optimize images, remove unused code).

![React](https://img.shields.io/badge/React-2025-blue?logo=react&logoColor=white)
![CSS](https://img.shields.io/badge/Styled_with-CSS-blueviolet)
![Status](https://img.shields.io/badge/Status-Deployed-success)
![GitHub Pages](https://img.shields.io/badge/Hosted_on-GitHub_Pages-green)

## 🚀 Getting Started

To run the project locally:

```bash
npm install
npm start

Then open your browser and go to:
👉 http://localhost:3000

__________________________
🌐 Live Site

Check out the deployed site here:
🔗 https://riverasonoely-fs.github.io/SonoelyMerry_Portfolio/

📁 Project Overview

This is a responsive, interactive personal portfolio built with React, styled with CSS, and deployed via GitHub Pages. The site includes:

A fully responsive layout
Interactive project modals with animations
Semantic, accessible HTML structure
Mobile-first design approach
Smooth navigation with React Router

🛠️ Tech Stack & Features

⚛️ React – Component-based architecture
🎨 CSS – Custom styles and variables for consistent theming
🔄 EmailJS Integration – Email form functionality (in progress)
🖼️ Unsplash API – Dynamically fetches background images for visual appeal
💡 Expanded Projects Page – GitHub project cards with hover effects and modals
🧪 React Router – Seamless navigation between pages
📱 Responsive Design – Mobile-first layout with tested breakpoints
🖌️ Style Enhancements – Improved typography, spacing, and layout beyond the original design plan

✅ Week 1
Set up GitHub repo with issues and milestones
Initialized React project
Created basic layout and file structure
✅ Week 2
Styled the site using CSS
Made the layout mobile-responsive
Implemented navigation with React Router
✅ Week 3
Added content to the Projects page
Implemented interactivity (modals, animations)
Made UI more dynamic and engaging
✅ Week 4
Finalized features and polished the design
Deployed to GitHub Pages
Tested responsiveness and usability
Planned a project showcase section to highlight work
📌 Next Steps

 Build and add a Project Showcase section
 Share portfolio for feedback
 Add dark mode toggle
 Write a development blog or case study
=======
