⚙️ Overview – Week 2 - 05-16-25
This past week, I focused on refining the front-end components of my portfolio site, particularly the Projects section. I implemented responsive card layouts using Flexbox, enhanced the UI with hover effects, and integrated image assets and GitHub links. I also cleaned up the color palette using CSS variables to ensure consistency and maintainability across the site.

🌵 Challenges – What problems did I have & how I'm addressing them
One challenge I faced was getting the hover effects to feel smooth and visually appealing without disrupting the layout, especially on mobile. At first, my transitions were either too subtle or too abrupt. To address this, I experimented with different CSS transitions and timing functions. I also struggled briefly with aligning elements inside the project cards but resolved it by revisiting my Flexbox setup and setting consistent padding/margins.

🏆 Accomplishments – What is something I "leveled up" on this week
This week, I leveled up my CSS styling and UI design skills, especially in writing scalable and theme-consistent styles using :root variables. I also improved in debugging layout issues across screen sizes, which has made me more confident working with responsive design. Additionally, my use of semantic HTML and accessible link behaviors showed clear improvement.

## Week 2 
⚙️ Overview — 05-20-25
This week, I focused on implementing dynamic background images using the Unsplash API. I registered for an Unsplash developer account, generated an API key, and integrated it into my project using fetch. I set up a useEffect hook in the layout component to pull a background image on load and display it behind the main content. I also added styling to handle loading states and ensured text remained readable by applying a dark overlay.

🌵 Challenges
What problems did I have & how I'm addressing them
One key challenge was making the background refresh every time a route changes—not just on a button click. Initially, the API call only triggered on component mount. I’m now addressing this by using React Router’s useLocation hook to detect route changes and trigger the background fetch in response. This ensures a new image is loaded with each navigation.

🏆 Accomplishments
What is something I "leveled up" on this week
I leveled up in working with third-party APIs and React lifecycle behavior. I now have a clearer understanding of how to trigger effects based on route changes and how to manage asynchronous operations like image loading gracefully within UI components.

⚙️ Overview 
What I worked on this past week
This week, I integrated EmailJS into my portfolio to enable form-based email sending through the Contact page. I registered on EmailJS, created a service and template, and installed the EmailJS SDK. I added .env variables to securely store the service ID, template ID, and public key, and updated the Contact form component to handle email submission using emailjs.sendForm. I also added form validation, success/error states, and feedback messages for the user.

🌵 Challenges
What problems did I have & how I'm addressing them
The biggest challenge was troubleshooting why emails weren’t sending correctly. The form looked functional, but the EmailJS request was silently failing. After debugging, I discovered that the issue was due to mismatches between input name attributes and EmailJS template variables, as well as incorrectly referencing environment variables. I also learned that the .env file must be in the root of the project and the development server must be restarted to apply changes.

🏆 Accomplishments
What is something I "leveled up" on this week
I gained a much stronger understanding of working with environment variables in React, the importance of matching field names with third-party APIs like EmailJS, and how to handle async form submission with clear UX feedback. I also became more confident with debugging integration issues by checking console output and testing configuration end-to-end.

🔮 Next Steps — 
What I plan to prioritize and do next
Next, I’ll shift focus to enhancing the visual experience of the site by integrating the Unsplash API to dynamically load background images. This will involve setting up API calls using fetch or Axios, managing the image state in layout components, and ensuring a clean visual transition between routes. I'll also implement logic to refresh the background with every route change using React Router's useLocation, and apply visual overlays to improve text readability.
=======
🏆 Accomplishments – What is something I "leveled up" on this week
This week, I leveled up my CSS styling and UI design skills, especially in writing scalable and theme-consistent styles using :root variables. I also improved in debugging layout issues across screen sizes, which has made me more confident working with responsive design. Additionally, my use of semantic HTML and accessible link behaviors showed clear improvement.

=======
🔮 Next Steps – What I plan to prioritize and do next
Review and refine the color scheme, fonts, and spacing using Bootstrap utilities and custom CSS for consistency.
Add transitions, animations, and subtle hover effects to improve interactivity.
Ensure the site is fully mobile responsive, checking layouts on various screen sizes.
Conduct a basic accessibility audit – including color contrast checks and ARIA labels where appropriate.
Polish shared elements like the navbar, footer, and other reusable components for a more professional finish.

=======
Polish shared elements like the navbar, footer, and other reusable components for a more professional finish.
