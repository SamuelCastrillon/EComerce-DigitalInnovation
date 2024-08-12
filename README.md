# EComerce-Proyecto

This project is a simple ecommerce, including user sign in, user sign up, user dashboard and products list.

## Installation

1. Clone the repository using `git clone <repository-link>`
2. Navigate to the project's root directory
3. Run `npm install` or `yarn install` to install all the project's dependencies
4. Run `npm run dev` or `yarn dev` to start the development server

## Technologies

This project was made using the following technologies:

- Typescript
- PostgreSQL
- TypeORM
- Next.js
- Tailwind CSS

## Structure

This project has the following structure:

- **src**: contains all the source code of the project.
  - **components**: contains all the reusable components of the project.
  - **context**: contains all the contexts of the project.
  - **views**: contains all the pages of the project.
  - **helpers**: contains all the helpers of the project.
  - **types**: contains all the types of the project.
  - **app/layout.tsx**: is the entry point of the project.

## Configuration

### Frontend Environment Variables

To configure the project, you need to create a `.env.local` file in the /front directory and add the following variables:

- **NEXT_PUBLIC_API_URL**: the URL of the API server.

### Backend Environment Variables:

To configure the project, you need to create a `.env` file in the /back directory and add the following variables:

- **DB_USER**: the username of the database.
- **DB_PASSWORD**: the password of the database.
- **DB_HOST**: the host of the database.
- **DB_PORT**: the port of the database.
- **DB_NAME**: the name of the database.
- **JWT_SECRET**: the secret key used to sign and verify JWT tokens.
- **PORT**: the port on which the server will listen.