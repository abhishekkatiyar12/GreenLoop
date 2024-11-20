# Green Loop

**Green Loop** is a web application that aims to help users explore categories of products, services, or information. The application features dynamic loading of categories, a scrollable grid layout, and an intuitive user interface built using React and Chakra UI. It fetches category data from an API and displays it to the user, allowing for easy browsing and navigation.

## Features

- **Dynamic Category Loading**: Fetch categories with pagination support. Categories are loaded in batches, and new categories are appended to the list as the user scrolls.
- **Horizontal Scrollable Category List**: Categories are displayed in a horizontal scrollable grid layout, providing an engaging browsing experience.
- **Responsive Design**: Built with Chakra UI, ensuring the app works smoothly on various devices and screen sizes.
- **Interactive UI**: Hover effects, clickable items, and a user-friendly interface.
- **Category Navigation**: Clicking on a category navigates the user to a page with more details about the selected category.

## Tech Stack

- **Frontend**: React, Chakra UI
- **Backend API**: Node.js, Express.js (API endpoint used: `https://greenloop-nw0w.onrender.com/api/v1/search/category`)
- **State Management**: React useState, useEffect hooks
- **Styling**: Chakra UI components
- **Routing**: React Router for navigation

## Installation

### Prerequisites

Ensure you have the following installed on your machine:

- Node.js (>=12.0.0)
- npm (>=6.0.0)

### Steps to Install

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/green-loop.git
