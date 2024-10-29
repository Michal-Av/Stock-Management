📊 Stock Management Application
A comprehensive stock management system built using React, Node.js, MongoDB, and MobX to provide users with an interactive way to track, add, and manage their portfolios. 
This app supports searching for stocks, displaying real-time data, and dynamically managing stock holdings.

🛠️ Tech Stack
Frontend: React (TypeScript), MobX for state management
Backend: Node.js (Express)
Database: MongoDB (Mongoose)
Styling: CSS and HTML5
Libraries Used: Axios, React Router, Joi for validation
🖥️ Features
Frontend:
Search Stocks: Users can search for stocks by symbol using an input field.
Portfolio Overview: Displays the portfolio's total value, day change, cash holdings, unrealized, and realized gains.
Holdings Table: Shows the list of stocks with current price, quantity, and change percentage.
Stock Details Page: Navigate to a dedicated page for each stock with a detailed view and chart.
CRUD Operations:
Add new stocks to the portfolio.
Update stock quantities dynamically with increment and decrement buttons.
Remove stocks from the portfolio.
Backend:
RESTful API: Endpoints to manage stock data.
Data Validation: Joi middleware for request validation.
MongoDB Integration: Stores stock information persistently.
🚀 Getting Started
Prerequisites
Node.js (version 14.x or higher)
MongoDB: Ensure MongoDB is installed and running locally or use a cloud MongoDB Atlas database.

Git: To clone the repository.

Clone the Repository:

git clone https://github.com/your-username/stock-management.git
cd stock-management
Install Dependencies

Backend:
cd backend
npm install


Frontend:

cd frontend
npm install
Environment Setup


Backend:

npm start

Frontend:

npm start

📄 API Documentation
Base URL

http://localhost:8000
Endpoints
GET /portfolio: Fetch all stocks in the portfolio.
POST /portfolio: Add a new stock to the portfolio.
PUT /portfolio/: Update a stock quantity by its symbol.
DELETE /portfolio/: Remove a stock from the portfolio by its ID.
📂 Folder Structure
bash
Copy code
/backend
  ├── dist/                # original JS file by TS files
  ├── src/
    ├── config/         # API controllers
    ├── models/              # Mongoose models
    ├── data-access/         # BE layer
    ├── controllers/         # API controllers
    ├── middleware/          # validation
    ├── routes/              # API routes
    ├── utils/               # Third party libraries
    └── services/            # Business logic layer

/frontend
  ├── src/
      ├── assets/          # local resource
      ├── components/      # Reusable UI components
      ├── i18n/            # Language support library
      ├── redux/           # MobX stores
      ├── components/      # Reusable UI components
      ├── service/         # API calls
      ├── pages/           # Application pages
      ├── redux/           # MobX stores
      ├── types/           # TypeScript types
      └── styles/          # css files
🔧 Troubleshooting
MongoDB Connection Issues: Ensure MongoDB is running and the connection string in .env is correct.

Port Conflicts: If port 8000 or 3000 is already in use, change the ports in the .env files and package.json.

📸 Screenshots
![image](https://github.com/user-attachments/assets/ad26e340-df6c-4906-ac47-0dac83bf3722)


Stock Details Page

📜 License
This project is licensed under the MIT License. See the LICENSE file for details.

🙌 Acknowledgements
Yahoo Finance API for stock data.
Ant Design Icons for visual enhancements.
💬 Contact
For any inquiries, feel free to reach out:

Your Name: your-email@example.com
GitHub: your-username
