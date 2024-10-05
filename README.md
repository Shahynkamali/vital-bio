# Vital Bio Technical Assignment

This project is a technical assignment for Vital Bio, demonstrating React and TypeScript skills, along with strong CSS capabilities.

## Project Structure

The project is organized into the following main directories:

- `src/components/`: Contains all reusable, "dumb" components. These are designed to be highly reusable across the application.
- `src/views/`: Houses the main view components for different pages or sections of the application.
- `src/layouts/`: Contains reusable layout components that provide structure to the views.
- `src/hooks/`: Custom React hooks for shared stateful logic.
- `src/utils/`: Utility functions and helper methods used throughout the application.

## Key Features

- **React with TypeScript**: The entire application is built using React and TypeScript, ensuring type safety and improved developer experience.
- **Pure SCSS**: No component library was used. All styling is done with pure SCSS to demonstrate strong CSS skills.
- **Responsive Design**: The app is responsive, although not fully optimized for all devices as it wasn't a primary requirement and would have been too time-consuming for the scope of this assignment.
- **Reusable Components**: The project emphasizes the use of reusable components, promoting DRY (Don't Repeat Yourself) principles.

## Scripts

The project includes the following npm scripts:

- `npm start`: Runs the app in development mode.
- `npm run build`: Builds the app for production.
- `npm test`: Runs the test suite.
- `npm run lint`: Runs ESLint to check for code quality and style issues.

## Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Start the development server: `npm start`

## Note on Responsiveness

While efforts have been made to make the application responsive, it's not fully optimized for all screen sizes and devices. This was a conscious decision due to time constraints and it not being a primary requirement of the assignment.

## Linting

ESLint is configured to maintain code quality and consistency. Run `npm run lint` to check for any linting issues.

## Conclusion

This project demonstrates proficiency in React, TypeScript, and CSS/SCSS, with a focus on component reusability and clean code structure. While not every aspect is fully polished due to time constraints, it showcases the ability to create a functional, well-structured React application.

## Notes

I took the initiative to redesign the status bar component, prioritizing improved user experience (UX). The original design featuring half-size green or red bars seemed counterintuitive, as such elements typically serve an indicator purpose. To enhance clarity and utility, I reimagined the status bar to function more like a blood status indicator. This new design provides a more intuitive visual representation of the test results, aligning the component's appearance with its intended purpose of conveying health information at a glance.
