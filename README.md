# SpaceX Capsule Manager

A Next.js app for managing SpaceX capsule data with local state additions and editing capabilities. This project highlights clean design, responsive UI, and efficient data management using `react-redux` with `async thunk`.

## Table of Contents
- [Demo](#demo)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Implementation Details](#implementation-details)
- [Additional Considerations](#additional-considerations)

## Demo
- **Live Demo:** [Link to deployed site](https://uko-joshua-checkit-fe.vercel.app/)  
- **Video Walkthrough:** [Link to video](https://www.loom.com/share/41ede0e4362d409aa57595fb640019ce)

## Features
- **Capsule Table**: Displays a paginated list of capsules fetched from the SpaceX API, with 5 items per page.
- **Search Form**: Filter capsules by `status`, `original_launch`, and `type` for accurate and fast results.
- **Add New Item**: Allows adding new capsules to the local state with form validation via Formik and Yup.
- **Edit Item**: Inline editing for each capsule with local state updates, validated using Formik and Yup.
- **Popup Details**: Click on any item to see additional details in a modal.

## Technologies Used
- **Next.js** for building the app with the `/src` router for modular structure.
- **React-Redux & Redux Toolkit** with `async thunk` for state management and asynchronous data fetching, replacing the need for `react-query` or `useEffect`.
- **Formik & Yup** for form management and validation.
- **PrimeReact** for a clean, customizable table component with built-in pagination.
- **Tailwind CSS** for responsive styling.
- **React Testing Library** (Optional): Test cases covering form validation, search functionality, and Redux actions.

## Getting Started
### Prerequisites
- **Node.js** and **npm** installed

### Installation
- Clone the repo:  
   ```bash
    git clone https://github.com/Haru-hue/UkoJoshua_CheckitFE.git
- Navigate to the project folder:
   ```bash
    cd UkoJoshua_CheckitFE
- Install dependencies:
    ```bash
      yarn add
    
- Run the application locally:
    ```bash
    npm run dev

## Project Structure
The project follows a modular structure, with Next.js using the /src directory:
  ```bash
src/
├── components/        # Reusable components (Table, Forms, Modal)
├── pages/             # Next.js pages (Home, Capsule details)
├── redux/             # Redux slice and async thunk setup
├── styles/            # Tailwind CSS styles
└── utils/             # Utility functions (formatting, data processing)
```

## Implementation Details
### Data Fetching with Async Thunk
- **Redux Thunks:** I used async thunk with Redux Toolkit for fetching data from the SpaceX API instead of traditional hooks like useEffect or libraries like react-query. This approach centralizes API calls, enabling seamless integration with the Redux state.
- **Redux for State Management:** Redux manages the API data and locally added/edited items, maintaining consistency across the app.

### Form Handling and Validation
**Formik & Yup:** Formik provides smooth form state management, and Yup ensures form inputs are correctly validated before being submitted. This is used across the search form, add form, and edit form.

### UI and Design
- **PrimeReact for Data Table:** The capsule data is displayed in a paginated, customizable PrimeReact table component.
- **Tailwind CSS:** Provides a responsive and clean UI with minimal custom styling.
- **Responsive Design:** Tailwind CSS achieves a fully responsive layout, ensuring usability across all device sizes.

### Additional Considerations
**Accessibility and SEO:** The app uses semantic HTML, with ARIA attributes and meta tags for enhanced accessibility and SEO.
**Performance Optimization:** Efficient state management and paginated data fetching keep the app lightweight and responsive.

#### **Testing (Optional)**
Basic test cases implemented using React Testing Library and Jest:
* **Form Validation:** Ensures fields require valid inputs.
* **Redux State Management:** Tests for async actions in Redux (data fetching, state updates).
* **Search & Pagination:** Tests for accurate search results and pagination consistency.
