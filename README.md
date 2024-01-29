# NODE SERVER

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)![Babel](https://img.shields.io/badge/Babel-F9DC3e?style=for-the-badge&logo=babel&logoColor=black)![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)![MySQL](https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white) 	![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens)

## INSTALLATION
### REQUIS
- Base de données MySQL (port 3306 par défaut)
- Git, Node & Npm installés
- ton meilleur ami: le terminal !

### MISE EN ROUTE
Copier le projet via<br />
```git clone git@github.com:Lilian-Mahut/node_server.git```

Se déplacer dans le projet<br />
```cd node_server```

Installer les dépendances<br />
```npm i```

Lancer l'application<br />
```npm start```

## FEATURES
- Construction de l'application en multi-couches sécurisée via hash de mot de passe
- Automatisation de l'installation d'une base de données si celle-ci est inexistante avec la table USERS
- Route pour l'utilisateur pour s'enregistrer avec un hash du mot de passe enregistré dans la base de données
- Route pour l'utilisateur pour s'authentifier avec un jeton web token
