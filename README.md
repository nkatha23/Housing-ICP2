# Ark - Blockchain-Based Land Tokenization Platform

Welcome to **Ark**, a revolutionary platform designed to simplify, secure, and modernize the way we manage land ownership using blockchain technology. Ark provides transparent and efficient property tokenization, enabling seamless transactions, data integrity, and security for property owners, buyers, and investors.

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Getting Started](#getting-started)
- [Installation](#installation)
- [Usage](#usage)
- [Frontend](#frontend)
- [Backend](#backend)
- [Technology Stack](#technology-stack)
- [Contributing](#contributing)
- [Contributors](#contributors)
- [License](#license)

## Introduction
Ark aims to transform the real estate industry by making land tokenization accessible to everyone. Utilizing blockchain technology, we provide landowners and buyers with a platform that records, verifies, and transfers property ownership as digital tokens. This ensures transparency, security, and convenience throughout the process.

## Features
- **Property Tokenization**: Convert physical properties into blockchain-based digital tokens.
- **Ownership Transfer**: Secure and efficient ownership transfer using blockchain to eliminate the risk of fraud.
- **Detailed Property Data**: Rich details about property, including zoning type, utilities, geolocation, and legal status.
- **Legal Transparency**: All properties on Ark are verified for legal transparency to provide peace of mind for investors.
- **Access Anytime, Anywhere**: Manage your properties from any device, anywhere in the world.

## Getting Started
This guide will help you set up the Ark platform locally and begin using its core functionalities.

### Prerequisites
- **Node.js (v14.x or higher)**
- **DFINITY SDK**: You need the DFINITY SDK installed to manage Motoko backend (version 0.18.0 or above).
- **npm** or **yarn**: To manage dependencies for the frontend.

## Installation
### Step 1: Clone the Repository
```bash
$ git clone https://github.com/nkatha23/Housing-ICP2.git
$ cd Housing-ICP2
```

### Step 2: Install Backend Dependencies
Go to the `backend` directory and install dependencies.
```bash
$ cd backend
$ npm install
```

### Step 3: Install Frontend Dependencies
Go to the `frontend` directory and install dependencies.
```bash
$ cd ../frontend
$ npm install
```

## Usage
### Running Locally
#### Step 1: Start the Local Internet Computer
Ensure you are in the `backend` directory and start the local instance of the Internet Computer:
```bash
$ dfx start --background
```

#### Step 2: Deploy Canisters
Create and deploy the backend canisters:
```bash
$ dfx canister create --all
$ dfx build
$ dfx canister install --all
```

#### Step 3: Run the Frontend
Switch to the `frontend` directory and start the development server:
```bash
$ npm start
```
Your frontend will be running on `http://localhost:3000`.

## Frontend
The frontend is built using **React** with **TypeScript**. It interacts with the backend through API calls to the deployed canisters. It provides a user-friendly interface for:
- Viewing listed properties.
- Adding new property data.
- Connecting a digital wallet for property ownership.
- Viewing detailed information on individual properties.

### Key Components
- **PropertyList**: Displays a list of available land parcels, utilizing map integration.
- **PropertyDetail**: Provides detailed information for each property, including geolocation on an interactive map.
- **ConnectWallet**: Integrates with Internet Identity for secure authentication.

## Backend
The backend is developed using **Motoko**, a programming language designed for the Internet Computer, and handles property data storage and transactions. Key features include:
- **LandRegistry Canister**: A smart contract managing properties' information, ownership, and transactions.
- **Properties Canister**: A store for all tokenized properties, including geolocation, area, zoning type, and utility availability.

### Property Data Storage
Property information is stored as JSON files for easy access and fallback purposes if the backend cannot be accessed.

### Sample Command
To get the status of the `land_registry` canister:
```bash
$ dfx canister status land_registry
```

## Technology Stack
- **Frontend**: React, TypeScript, Leaflet.js for maps.
- **Backend**: Motoko, DFINITY Internet Computer.
- **Blockchain Integration**: Property tokenization with ICP.
- **Styling**: Tailwind CSS for UI styling.

## Contributing
We welcome contributions to enhance Ark. Please follow these steps to contribute:
1. Fork the repository.
2. Create a new feature branch (`git checkout -b feature-name`).
3. Commit your changes (`git commit -m 'Add new feature'`).
4. Push to your branch (`git push origin feature-name`).
5. Open a Pull Request.

Please ensure your code adheres to our [Code of Conduct](https://github.com/nkatha23/Housing-ICP2/CODE_OF_CONDUCT.md).

## Contributors
- [Sharon Nkatha](https://github.com/nkatha23)
- [Gregory Mikuro](https://github.com/gregorymikuro)

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---
We hope Ark provides you with an efficient and modern way to manage land ownership. For questions, issues, or suggestions, feel free to open an issue or contribute to the repository.

