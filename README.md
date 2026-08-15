# 🌸 Luxe Bloom

### ✨ Discover beauty. Discover your style.

A modern and responsive web application for discovering and exploring perfumes and cosmetics.

**Luxe Bloom** is a React-based web project developed as a frontend application with a simulated backend using JSON Server and Express. It provides a seamless e-commerce experience for beauty products.

---

## 📸 Project Preview

*   **Main Page:** A welcoming entry point with featured products and navigation.
*   **Product Catalog:** Browse through a variety of perfumes and cosmetics.
*   **Shopping Cart:** Manage selected items, quantities, and view the total price.
*   **Contact Form:** Reach out with inquiries and feedback.

---

## ✨ Features

*   🏠 Modern and responsive landing page
*   💐 Extensive perfume and cosmetics product catalog
*   🔎 Detailed product browsing and information
*   ❤️ Favorites functionality (Note: Implementation details for favorites not fully present in provided code snippets, but mentioned in existing README)
*   🛒 Robust shopping cart with quantity management
*   👤 User authentication system (simulated)
*   🔐 Differentiated user roles (Admin and Guest)
*   ➕ Admin capabilities for product management (add new products)
*   📩 Functional contact form with submission capabilities
*   🗺️ Google Maps integration on the contact page
*   📱 Fully responsive design for all devices
*   💾 Mock backend using JSON Server and Express.js
*   ⚡ React Context API for efficient cart state management
*   🎨 Stylish UI crafted with Tailwind CSS
*   🧭 Seamless navigation powered by React Router

---

## 🛠️ Tech Stack

| Technology        | Purpose                          |
|-------------------|----------------------------------|
| ⚛️ React           | Frontend framework               |
| 🟨 JavaScript     | Programming language             |
| 🎨 Tailwind CSS   | Styling and responsive design    |
| 🧭 React Router   | Client-side routing              |
| 🟢 Node.js        | Runtime environment              |
| 📦 npm            | Package management               |
| 🗄️ JSON Server    | Mock REST API (for backend data) |
| 🚀 Express.js     | Minimalist backend framework     |
| 🐘 MongoDB (via URI) | Database (as per backend config) |
| 🔧 Git            | Version control                  |
| 🐙 GitHub         | Code hosting                     |

---

## 📦 Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/AminaHeljaa/Projekat_Luxe-bloom.git
    ```

2.  **Navigate to the project directory:**
    ```bash
    cd Projekat_Luxe-bloom
    ```

3.  **Install frontend dependencies:**
    ```bash
    npm install
    ```

4.  **Install backend dependencies (if applicable, assuming a separate backend setup or integrated within the project):**
    Navigate to the `backend` directory if it's a separate module:
    ```bash
    cd backend
    npm install
    ```
    (Note: The provided code suggests a backend is managed within the main project structure, so `npm install` at the root should cover most dependencies).

---

## ▶️ Running the Application

1.  **Start the React development server:**
    ```bash
    npm start
    ```
    The frontend will be available at `http://localhost:3000`.

2.  **Start the mock backend server (JSON Server):**
    The `package.json` includes a script for this. Run:
    ```bash
    npm run json-server
    ```
    This will start the mock API server, typically on `http://localhost:3001`.

    *Alternatively, the `backend/server.js` file suggests a more robust Express backend that might need to be run separately if configured.
    If using `backend/server.js`:
    ```bash
    cd backend
    node server.js
    ```
    This server might use environment variables for configuration (e.g., `MONGODB_URI`), ensure these are set up if you encounter connection issues.

---

## 🗄️ Backend API Reference (Simulated)

The project utilizes a simulated backend, primarily through `JSON Server` (as per scripts) and a basic Express server (`backend/server.js`).

**JSON Server Endpoints (based on `db.json` and scripts):**

*   **Products:** `http://localhost:3001/proizvodi` (or the port specified in `json-server` script)
*   **Users:** `http://localhost:3001/korisnici`
*   **Messages:** `http://localhost:3001/poruke`

**Express Server Endpoints (based on `backend/server.js`):**

*   **Add New Product:** `POST /api/products`
*   **Get All Products:** `GET /api/products`
*   **Add Contact Message:** `POST /api/messages`
*   **Get All Messages:** `GET /api/messages`
*   **Delete Message by ID:** `DELETE /api/messages/:id`

**Note:** The backend configuration (`backend/config.js`) points to a MongoDB URI, suggesting an intention for a more robust backend beyond simple JSON Server, though the primary usage seems to rely on the mock data.

---

## 🏠 Main Pages Overview

*   **Home:** Features a hero section, top-selling products, and categorized product displays (perfumes, makeup, skincare, haircare, nail care).
*   **Products:** A page to browse all available products (though specific routing for product listing might be implied).
*   **Favorites:** A section for saved products (implementation not detailed in provided code snippets).
*   **Shopping Cart:** Allows users to view, update quantities, and remove items. Uses React Context for state management.
*   **Profile:** Placeholder for user account information.
*   **Contact:** Includes a contact form for messages and an embedded Google Map.
*   **Login/Registration:** Handles user authentication.
*   **Admin Panel:** Enables administrators to add new products and view contact messages.

---

## 🔐 Authentication & Roles

The application simulates user authentication. Upon login, users are assigned a role (`admin` or `user`).

*   **Admin Role:** Grants access to the `/admin` route for managing products and viewing messages.
*   **User Role:** Standard user access to browse products, manage cart, etc.

The authentication is handled client-side, storing user information in `localStorage`.

---

## 👑 Admin Panel Functionality

Administrators can:

*   ➕ Add new products via a form in the admin panel.
*   ✏️ View submitted contact messages.
*   🗑️ Delete contact messages.

Access to the admin panel is typically protected and routed based on the user's role.

---

## 🛒 Shopping Cart Implementation

The shopping cart functionality is managed using React's Context API, ensuring that cart state is accessible throughout the application.

**Key Cart Operations:**

*   Add product to cart.
*   View current cart items.
*   Update item quantities.
*   Calculate the total price.
*   Remove items from the cart.

---

## 📩 Contact Form Details

The contact form collects user's name, email, and message. Upon submission:

*   Data is sent to the backend API (`/api/messages`).
*   Client-side validation ensures required fields are filled.
*   Success or error messages are displayed to the user.

---

## 🗺️ Google Maps Integration

The contact page features an embedded Google Map, providing a visual location reference.

---

## 📱 Responsive Design

Luxe Bloom is built with a responsive design approach, utilizing Tailwind CSS to ensure a consistent and optimal user experience across various devices (desktop, tablet, and mobile).

---

## 📁 Project Structure

```text
Projekat_Luxe-bloom/
│
├── 📁 public/             # Static assets (index.html, favicon, manifest)
├── 📁 src/
│   ├── 📁 components/     # Reusable UI components (Navbar, Sliders, Forms, etc.)
│   ├── 📁 pages/          # Page-level components (Home, Contact, Admin, etc.)
│   ├── 📁 context/        # React Context for state management (e.g., CartContext)
│   ├── 📁 hooks/          # Custom React hooks (if any)
│   ├── 📁 services/       # API interaction logic (if any)
│   ├── 📄 App.js          # Main application component with routing
│   ├── 📄 index.js        # Application entry point
│   ├── 📄 index.css      # Global styles and Tailwind directives
│   └── 📄 tailwind.config.js # Tailwind CSS configuration
│
├── 📄 backend/            # Backend logic and configuration
│   ├── 📄 server.js       # Express.js server setup
│   ├── 📄 package.json    # Backend dependencies
│   ├── 📁 models/         # Mongoose schemas for data models
│   └── 📄 config.js       # Backend configuration (e.g., MongoDB URI)
│
├── 📄 db.json             # Mock data for JSON Server
├── 📄 package.json        # Frontend dependencies and scripts
├── 📄 README.md           # Project documentation
├── 🖼️ *.png, *.jpg        # Image assets
└── 📄 .gitignore          # Git ignore file
```

---

## 💾 Backend Details

The project employs a backend structure that combines Express.js with Mongoose for potential MongoDB integration, alongside JSON Server for mock data.

*   **Express Server (`backend/server.js`):** Handles API routes for products and messages, including POST and GET requests. It uses environment variables for configuration.
*   **Mongoose Models (`backend/models/`):** Defines schemas for `Proizvod` (products) and `Poruka` (messages).
*   **Mock Data (`db.json`):** While `db.json` is present, the Express server directly interacts with MongoDB (as indicated by `mongoose.connect`). The JSON Server script (`npm run json-server`) might be a secondary or alternative way to serve data.
*   **API Resources:** The Express server exposes `/api/products` and `/api/messages`.

### Example Product Data (Conceptual)

```json
{
  "id": 1,
  "naziv": "Example Perfume",
  "cijena": 50,
  "opis": "A beautiful fragrance",
  "kategorija": "Parfemi"
}
```

---

## 🧭 Navigation Structure

The application features a clear navigation bar with links to key sections:

*   Početna (Home)
*   O nama (About Us)
*   Proizvodi (Products)
*   Favoriti (Favorites)
*   Korpa (Cart)
*   Kontakt (Contact)
*   Admin (Conditional, for admin users)

Navigation adapts based on user authentication status.

---

## 🧪 Testing

Testing appears to be primarily manual, involving:

*   Web browser testing of features like product browsing, cart, authentication, contact form, and admin functionalities.
*   Verification against the mock backend (JSON Server / Express).
*   Checking responsiveness on different devices.

Automated tests (e.g., using Jest or React Testing Library) are present (`src/App.test.js`) but might not cover all functionalities extensively.

---

## 🔄 Application Flow

### User Flow:

1.  **Visit:** User accesses the Luxe Bloom application.
2.  **Browse:** Explores products (perfumes, cosmetics).
3.  **View Details:** Clicks on a product for more information.
4.  **Interact:** Adds products to favorites or the shopping cart.
5.  **Manage Cart:** Reviews and modifies the shopping cart.
6.  **Authenticate:** Logs in or registers an account.
7.  **Utilize:** Accesses account-specific features.

### Admin Flow:

1.  **Login:** Admin logs in with credentials.
2.  **Access Panel:** Navigates to the Admin Panel.
3.  **Manage Products:** Adds new products via the provided form.
4.  **View Messages:** Reviews submitted contact messages.

---

## 🎨 Design & Styling

Luxe Bloom adopts a modern and elegant aesthetic suitable for a beauty and cosmetics brand.

*   **Color Palette:** Primarily uses shades of pink and warm tones, creating a sophisticated and inviting atmosphere.
*   **Layout:** Clean and organized product cards, responsive components, and intuitive navigation.
*   **Typography:** Consistent font usage enhances readability and brand identity.
*   **User Experience:** Focus on a user-friendly interface with clear calls to action.

---

## 🚀 Future Improvements

Potential enhancements identified for future development:

*   💳 Integration of real payment gateways.
*   🗄️ Migration to a production-ready database (e.g., MongoDB Atlas).
*   🔐 Implementation of more robust and secure authentication mechanisms.
*   📦 Development of an order management system.
*   ⭐ Addition of product reviews and rating features.
*   🔍 Advanced product filtering and search capabilities.
*   🔔 User notification system.
*   ☁️ Deployment to a cloud platform for wider accessibility.

---

## 👩‍💻 Author

*   **Amina Helja**
    Software Engineering Student
    Politehnički fakultet – University of Zenica

---

## 📄 License

This project was created for educational purposes as part of a web development project.

---

## 🔗 Important Links

*   **GitHub Repository:** [https://github.com/AminaHeljaa/Projekat_Luxe-bloom](https://github.com/AminaHeljaa/Projekat_Luxe-bloom)

---

## 📝 Contributing

Contributions are welcome! Please feel free to:

1.  Fork the repository.
2.  Create a new branch (`git checkout -b feature/YourFeature`).
3.  Make your changes.
4.  Commit your changes (`git commit -m 'Add some feature'`)
5.  Push to the branch (`git push origin feature/YourFeature`).
6.  Open a Pull Request.

---

## 💬 Footer

© 2023 Luxe Bloom. All rights reserved.

**Developed with ❤️ by Amina Helja**

[Back to Top](#🌸-luxe-bloom)
