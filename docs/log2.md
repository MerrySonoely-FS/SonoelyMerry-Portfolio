⚙️ Overview - Week 1 - 05-11-25
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