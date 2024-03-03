# React Application with Vite for FazPay

This README provides detailed instructions on how to install, configure, and run a React application using Vite. It also includes steps to run unit tests using the `npm run test` command. Be sure to follow all the steps carefully.

## Technologies Used

- **Vite:** Vite is an extremely fast and lightweight React application builder. [More information](https://vitejs.dev/)

- **Firebase Authentication:** User authentication is managed using Firebase Authentication, an efficient and secure solution. [Firebase Authentication Documentation](https://firebase.google.com/docs/auth)

- **API Context for State Management:** React's Context API is used to manage the global state of the application, providing an effective way to share data between components without the need for props. [React Context Documentation](https://reactjs.org/docs/context.html)

## Firebase Configuration

> Important: this project already has a firebase public config, so you can run withou problems in the first time.

1. **Create a Project in Firebase:**

   - Access the [Firebase Console](https://console.firebase.google.com/).
   - Create a new project and follow the instructions to set up Firebase.

2. **Authentication Configuration:**

   - Enable email/password authentication in the Firebase console.
   - Copy the credentials from your project (API Key, Auth Domain, etc.) and paste them into the Firebase configuration file (`src/firebaseConfig.js`).

## Prerequisites

Before getting started, ensure that the following software is installed on your machine:

- Node.js: [Download and Installation](https://nodejs.org/)
- npm (Node Package Manager): Usually installed automatically with Node.js.

## Installation Steps

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/your-username/fazpay-react-app.git
   cd fazpay-react-app
   ```

2. **Install Dependencies:**

   ```bash
   npm install
   ```

## Running the Application

Now that the dependencies are installed, you can start the application. Use the following command:

```bash
npm run dev
```

The React application will run locally at `http://localhost:5173`. Open your browser and visit this address to view the application.

## Running Unit Tests

The application uses unit tests to ensure code quality. Run the tests using the following command:

```bash
npm run test
```

This will initiate the test execution and provide detailed results. Ensure that all tests pass before making any changes.

---

I hope this documentation is clear and helpful for you!
