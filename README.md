# Dress The Earth - A Web3 Environmental Charity Platform

![A green world](/frontend-next/public/images/green.jpg)

Welcome to Dress The Earth, a web3 dapp that allows users to donate ethers to trusted charities of their choosing. Our platform is built with Next.js and utilizes TypeScript and Tailwind CSS to provide a clean and user-friendly experience.

## Features

- Donors can easily browse a list of trusted charities and make donations using Ether.
- The platform utilizes smart contracts on the Ethereum blockchain to ensure transparency and security of donations.
- Built with accessibility in mind, the platform is designed to be user-friendly and easy to navigate.

## Built With

- `Next.js` - Framework for building server-rendered React applications
- `TypeScript` - Superset of JavaScript that adds static types
- `Tailwind CSS` - Utility-first CSS framework

## Snapshots

### Add new charity (Only owner can add new charities)

![Add charity](/frontend-next/screenshots/add-charity.png)
</br>
</br>

### Add new charity confirmation

![Add charity confirmed](/frontend-next/screenshots/confirm-add-charity.png)
</br>
</br>

### Donate to charity

![Donate to charity](/frontend-next/screenshots/donate.png)
</br>
</br>

### Donate to charity confirmed

![Donate to charity confirmed](/frontend-next/screenshots/confirm-donate.png)
</br>
</br>

### Donate to charity successful

![Donate to charity successful](/frontend-next/screenshots/success-donate.png)
</br>
</br>

# Links

Github Link: https://github.com/The-FutureX/zoboswap

Live App Link: https://dresstheearth.netlify.app/

# Author

Toluwani Olugbesan

Github Link: https://github.com/Tolu1

# Getting Started

## Prerequisites

- Node.js
- Alchemy or similar Web3 provider
- Metamask wallet

## How to Install and Run the Project

Clone the repository:

```bash
git clone https://github.com/Tolu1/dte.git
```

**cd into the Project Folder**

```bash
cd dte
```

Checkout latest branch:

```bash
git checkout staging
```

**Install the dependencies**

```bash
npm install
```

**Start Hardhat node**

```bash
npx hardhat node
```

**Run the deploy Script**

```bash
npx hardhat run --network localhost ./script/deploy.js
```

Navigate to the client-side folder:

```bash
cd frontend-next
```

Install the client dependencies:

```bash
npm install
```

Start the development server for client app:

```bash
npm run dev
```

Connect to the site with Metamask

The app will be running on http://localhost:3000

# Charity Registry Contract

The smart contract was deployed at:

https://goerli.etherscan.io/address/0xc73308f898a110fe9468d7dfde749dfcdfddef64

With this address:

```
0xc73308f898a110fe9468d7dfde749dfcdfddef64
```

On the `GOERLI TESTNET`.

## Structs

`Charity`: This stores information about the charity, including the name, mission, website, totalDonation, active, and wallet address.

## Mapping

`charities`: This mapping stores all charities using their unique id as the key.

## Variables

`charityIds`: Stores the array of unique ids for each charity.

`charityIdCounter`: Stores the number of charities that have been registered.

`owner`: This variable stores the address of the owner of the contract.

## Functions

`addCharity`: Adds a new charity to the registry.

`updateCharity`: Updates an existing charity. 

`donate`: Allows users to donate to a registered charity.

`compareStrings`: Compares whether two strings are equal.

## Modifiers

`onlyOwner`: The modifier indicates only owner of the contract can register charities after they have been properly vetted

`onlyValidCharity`: The modifier indicates only a valid charity can be registered by the smart contract

## Events

`CharityAdded`: it stores the charity information passed in transaction logs when emitted.

`CharityUpdated`: it stores the updated charity information passed in transaction logs when emitted.

`DonationMade`: it stores the donation information passed in transaction logs when emitted.

# Dependencies

- `dotenv`: A zero-dependency module that loads environment variables from a .env file into process.env.

- `@fvilers/disable-react-devtools`: A module that disables the react devtools.

- `@metamask/detect-provider`: A module for detecting if the user is using Metamask or not.

- `@next/font`: A font package for the Next.js framework.

- `@types/node`: TypeScript definitions for Node.js.

- `@types/react`: TypeScript definitions for React.

- `@types/react-collapse`: TypeScript definitions for the React-collapse library.

- `@types/react-dom`: TypeScript definitions for React DOM.

- `@types/react-scroll`: TypeScript definitions for the React-scroll library.

- `eslint`: A popular linting utility for JavaScript.

- `eslint-config-next`: A configuration for ESLint that is used with Next.js.

- `ethers`: A compact JavaScript library for interacting with the Ethereum blockchain.

- `install`: A utility for installing dependencies in a project.

- `moment`: A library for parsing, validating, manipulating, and formatting dates.

- `next`: A flexible React framework that provides building blocks to create fast web applications.

- `react`: A JavaScript library for building user interfaces.

- `react-collapse`: A React component for animating and hiding/showing content.

- `react-dom`: A package that serves as the entry point to the DOM-related rendering paths.

- `react-icons`: A library of customizable icons for React.

- `react-scroll`: A React library for scroll events and animations.

- `sleep-promise`: A utility for pausing execution for a specified time.

- `typescript`: A statically typed, object-oriented language that builds on JavaScript.

# Dev Dependencies

- `@nomicfoundation/hardhat-toolbox`: It bundles all the commonly used packages and Hardhat plugins for development in Hardhat.

- `autoprefixer`: A Node.js-based tool that parses CSS and adds vendor prefixes to rules using values from Can I Use.

- `postcss`: A tool for transforming styles with JavaScript plugins.

- `tailwindcss`: A utility-first CSS framework for rapidly building custom designs.

# License

This project is licensed under the GNU General Public License (GPL) - see the LICENSE.md file for details.

# Contributing

We welcome contributions to this project. If you're interested in contributing, please follow the steps below:

1. Fork the repository
2. Create a new branch for your changes (e.g. `git checkout -b new-feature`)
3. Make your changes
4. Commit your changes (e.g. `git commit -am 'Add new feature'`)
5. Push to the branch (e.g. `git push origin new-feature`)
6. Create a new Pull Request
