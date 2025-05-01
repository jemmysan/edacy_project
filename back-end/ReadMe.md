/------  Project Documentation  ------/

# Gestion de Bibliothèque 
Une application web MERN (MongoDB, Express, React, Nodejs) permettant de gérer les livres et les emprunts.

# Table de matières
- [Description](#description)
- [Fonctionnalités](#fonctionnalités)
- [Installation](#installation)
- [Technologies](#technologies)
- [Structure du projet](#structure-du-projet)
- [Utilisation](#utilisation)
- [API Endpoints](#api-endpoints)
- [Auteur](#auteur)


- # I- Description

- # II- Fonctionnalités
    - Authentification (inscription, connexion)
    - Gestion des livres (CRUD)
    - Gestion des utilisateurs (admin/user)
    - Recherche de livres
    - API REST sécurisée avec JWT

- # III- Technologies
    - React.js
    - Node.js
    - Express.js
    - MongoDB (avec Mongoose)
    - JWT pour l'authentification
    - CSS / Tailwind (ou Bootstrap)

- # IV- Installation
    1. Cloner le projet :
        git clone https://github.com/toncompte/ton-projet.git
        cd ton-projet

    2. Lancer le backend :
        cd back-end
        npm install
        npm run dev

    3. Lancer le frontend :
        cd front-end
        npm install
        npm start

- # V- Dependances 
        - mongodb
        - mongoose
        - express
        - nodemon
        - dotenv
        - bcryptjs
        - cors
        - express-joi-validations
        - jsonwebtoken
        - helmet
        - morgan


- # VI- Structure du Project
    # - Back-End
        - Server.js
        - Folders : 
            - config
            - middlewares
            - models
            - controllers
            - routes
            - utils
            - validations
