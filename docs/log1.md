⚙️ Overview - Week 1 - 05-09-25
This week, I focused on integrating EmailJS into my React-based contact form. I updated the form to securely send messages without revealing my email address. I also set up a .env file to manage sensitive credentials and practiced best practices for asynchronous API calls and UI feedback.

🌵 Challenges
Setting up the .env file correctly took trial and error; values weren’t being read properly due to naming syntax (REACT_APP_ prefix).
EmailJS error handling wasn’t consistent across browsers. I had to improve feedback by using loading states and conditional rendering for messages.
Encountered issues with Git (couldn't switch branches due to uncommitted changes), which delayed integration work.
How I addressed them:

Carefully reviewed the EmailJS docs and React environment variable handling.
Implemented a formStatus state and added isLoading indicators for better UX.
Resolved Git issues by committing/stashing before switching to the dev branch.
🏆 Accomplishments
Integrated EmailJS successfully, allowing users to send messages directly from the contact form.
Learned more about handling sensitive data in React via .env files.
Gained experience using useState, emailjs-com, and form event handling more efficiently.
Improved my comfort with Git branching and troubleshooting version control conflicts.
🔮 Next Steps
Begin work on Unsplash API integration for Week 2: fetch and display a dynamic background image.
Research best practices for background image accessibility and responsiveness.
Ensure the background image enhances visual impact without disrupting page readability.

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