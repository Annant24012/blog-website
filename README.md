# Blog Management Application

This repository contains a responsive Blog Management Application built with **ReactJS**, **Redux**, and **Tailwind CSS**. It showcases core frontend development concepts, such as reusable components, form validation, state management using Redux, and toast notifications for user feedback.

## Features

### Home Page

- Displays a list of blogs fetched from the Redux store.
- Utilizes a reusable `BlogCard` component to show:
  - Blog title, description, category, and a "Read More" button.
  - "Delete" button to remove a blog.
- "Create New Post" button to navigate to the Create Blog Page.

### Create Blog Page

- A form to create a new blog post with the following fields:
  - **Title**: Required, minimum 5 characters.
  - **Description**: Required, minimum 10 characters.
  - **Category**: Required, with predefined options (e.g., "Tech," "Lifestyle," "Health").
  - **Tags**: Optional, multi-select input for unique tags.
  - **Cover Image**: Optional, accepts image file formats.
  - **Published Status**: Required radio buttons (Draft or Published).
  - **Published Date**: Required if status is "Published."
- Inline error messages for validation.
- Reusable form components (`FormInput`, `FormSelect`, `FormRadio`, etc.).
- Toast notifications for user feedback:
  - Success: Blog created successfully.
  - Error: Validation failures or other issues.

### Blog Details Page

- Displays full details of a selected blog based on its ID.
- "Back to Home" button to navigate back.
- "Delete Blog" button with:
  - Confirmation dialog before deletion.
  - Toast notifications for success or error.

## Technologies Used

- **ReactJS**: For building the user interface.
- **Redux**: For managing application state.
- **React Hot Toast**: For toast notifications.

## Getting Started

### Prerequisites

Ensure you have the following installed:

- Node.js (v14 or later)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/blog-management-app.git
   cd blog-management-app
   ```
2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```
3. Set up Tailwind CSS:

   - Tailwind configuration is already included in `tailwind.config.js`.
   - Ensure the `content` field includes `./src/**/*.{js,jsx,ts,tsx}`.

4. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

### Available Scripts

- `npm run dev`: Starts the development server.
- `npm run build`: Builds the application for production.
- `npm start`: Runs the production build.

## Redux Store

The Redux store manages the state of blogs. The `blogSlice` includes the following actions:

- `addBlog`: Adds a new blog to the state.
- `deleteBlog`: Removes a blog by ID.

## Tailwind CSS

Tailwind CSS is used for responsive and modern styling. The configuration file `tailwind.config.js` is preconfigured to include all required paths.

Happy coding! 🎉
