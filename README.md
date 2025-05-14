To start the application - type 'npm start' in terminal.
Visit http://localhost:3000/ to view my website.

# YYMM-WDV349-RiveraSonoely

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