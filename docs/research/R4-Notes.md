# Week 4 Research Notes

## Topic: React, ESLint, PropTypes, ModuleCSS, and Deployment

- **Date**: December 18, 2024  
- **Overview**: This week, I focused on enhancing my React app by researching best practices, such as integrating ESLint, PropTypes, and ModuleCSS. Additionally, I continued exploring deployment options, with a particular focus on Heroku and the process of deploying a React app.

---

## Key Insights

### 1. **React Best Practices: Thinking in React**
   - **Component Design**: The "Thinking in React" guide emphasized breaking the UI into **small, reusable components**. Each component should focus on a single responsibility to improve maintainability and readability.
   - The app’s UI should be broken down into **containers** (for logic) and **presentational components** (for UI rendering).
   - React’s **state management** should be used wisely, ensuring only necessary components hold state to avoid excessive re-renders.

### 2. **ESLint: Maintaining Code Quality**
   - **ESLint** is a powerful tool that enforces coding standards and best practices. It helps catch **bugs early** by warning developers about potential issues (e.g., unused variables, missing semicolons, inconsistent formatting).
   - It can be configured with specific rules for **React** to ensure code consistency, such as enforcing **prop types** and preventing common mistakes like **missing dependencies in useEffect**.

### 3. **PropTypes & Default Props**
   - **PropTypes** is a runtime type-checking tool for props passed to components, ensuring that the right data types are passed to each component. This is especially useful in larger apps to avoid bugs.
   - **Default Props** are used to define default values for props if they are not provided. This ensures components still render properly even if some props are missing.

### 4. **ModuleCSS for Component-Level Styling**
   - **ModuleCSS** allows CSS to be scoped to individual components, preventing style conflicts across the app. Each CSS file is imported directly into the component, ensuring that styles do not leak into other parts of the application.
   - It also improves maintainability because styles are tied directly to their respective components, making it easier to manage and update.

### 5. **Deployment on GH PAGES**
   - I explored **Git Hub Page's** deployment process for React applications, which involves deploying via GitHub. The app is hosted in a **Node.js environment** on GitHub, and the build process is managed using **Git Hub Page’s buildpacks**.

---

## Next Steps

- **Improve Code Quality**: Continue refining the app by addressing any remaining linting warnings and enforcing best practices.
- **Testing**: Add unit and integration tests using **Jest** and **React Testing Library** to ensure that the app functions correctly as I add more features.
- **Explore Continuous Deployment**: Look into setting up **GitHub Actions** to automate deployments to Heroku whenever new changes are pushed to the repository.
