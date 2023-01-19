let tagsData = {
    "Date": [
        "2017",
        "2018",
        "2019",
        "2020",
        "2021",
        "2022",
        "2023"
    ],
    "Language": [
        "C#",
        "Python",
        "WEB",
        "SQL",
        "Java",
        "PHP",
        "BATCH",
        "Bash",
        "C++",
    ],
    "Type": [
        "IUT",
        "SAE",
        "Personnelle"
    ]
}


let ProjectData = [
    {
        "name": "Kromblast",
        "description": "Lancer des fonctions natif à partir d'un site web",
        "tags": ["2022", "Python", "WEB", "C++", "Personnelle"],
        "theme": "simple",
        "theme_data": {
            "CahierCharges": `
            - Utiliser un webview et lancer des fonctions natif à partir du javascript.
            `,
            "competences": `
            - C++<br>
            - Injections propres de code dans python<br>
            - Injections dynamique de librairies dans c++
            `,
            "methodes": `
            Kromblast est une application permettant de transformer un site web en application native
            (ou plutôt de faire un pont entre le site web et les fonctions natifs du système).
            Même s'il existe déjà des Frameworks qui permet de faire cela, comme Electron.js,
            ce dernier est plutôt volumineux. Kromblast, lui, est installé une fois.
            Ensuite un fichier de configuration permet à l'application de savoir ce qu'il
            doit utiliser. Ce projet était fonctionnel mais non applicable à cause pywebview
            qui a besoin de dépendance bien trop volumineuse pour pas grand-chose. Aujourd'hui,
            l'application est développé en c++.Kromblast est une application permettant de transformer
            un site web en application native (ou plutôt de faire un pont entre le site web et les fonctions 
            natifs du système). Même s'il existe déjà des Frameworks qui permet de faire cela, comme Electron.js,
            ce dernier est plutôt volumineux. Kromblast, lui, est installé une fois. Ensuite un fichier de configuration
            permet à l'application de savoir ce qu'il doit utiliser. Ce projet était fonctionnel mais non
            applicable à cause pywebview qui a besoin de dépendance bien trop volumineuse pour pas grand-chose.
            Aujourd'hui, l'application est développé en c++.
            `,
        }
    },
    {
        "name": "Environnement Economique",
        "description": "SAE 1.6, 2021",
        "tags": ["2021", "SAE", "IUT"],
        "theme": "twoimage",
        "theme_data": {
            "img1": "img/root/EnvEco1.png",
            "img2": "img/root/EnvEco2.png",
            "img1alt": "Environnement Economique",
            "img2alt": "Environnement Economique",

            "CahierCharges": `
                - Créer une entreprise
                <br>
            - Trouver son activité
            <br>
            - Trouver nos concurrents
    <br>
    - Analyse de l’entreprise avec le modèle PESTEL et SWOT.
            <br>
    - Construire une stratégie.
            `,

            "competences": `
            ...
    `,

            "methodes": `
            Nous avons commencez par chercher une activité(reventes de jeux vidéo dématérialisé),
    un nom, un slogan et un logo.Une fois cela fait nous avons chercher nos concurrents
            afin de construire une stratégie.Enfin, nous avons analyser notre entreprise et
            activité pour les modèle PESTEL et SWOT.
            `,
        }
    },
    {
        "name": "Créer une page web",
        "description": "SAE 1.5, 2021",
        "tags": ["2021", "WEB", "SAE", "IUT"],
        "theme": "oneimage",
        "theme_data": {
            "img1": "img/root/web1.png",
            "img1alt": "Page web",
            "CahierCharges": `
    - Créer un site web pour l’entreprise créer en Environnement économiques
    <br>
    - Créer des personnas qui serait intéressé par notre site web
    <br>
    - Rendre notre site web responsive(adapté à tout les écrans)
        `,

            "competences": `
    - Travailler en équipes
    <br>
    - css
        `,

            "methodes": `
            Nous avons débuté par faire les personnas.
            Puis nous avons fait la maquette de la page principale.
            Et enfin nous nous sommes partagés les pages pour pouvoir les faire.
            `
        }
    },
    {
        "name": "Création de base de données",
        "description": "SAE 1.04, 2021",
        "tags": ["2021", "SQL", "SAE", "IUT"],
        "theme": "simple",
        "theme_data": {
            "CahierCharges": `
    - Créer une base de données sur les demandes de l’entreprise fictive.
            <br>
    -Créer un modèles relationnelle pour la base de données.
            <br>
    -Remplir la base de données.
            <br>
    - Créer des requêtes préconstruite pour une futures applications.
            <br>
    -Maquetter une application.
            `,

            "competences": `
    - Créer une base de données.
            <br>
    - Appréhension du langages SQL dans une utilisation réelles
    <br>
    - Maquetter une application.
            `,

            "methodes": `
            Nous avons commencé par étudier les besoin de l’entreprise puis créer
            le modèles relationnelle de la base de données par rapport aux demandes.
        Puis, pendant que je développer un script pour remplir la base, mon groupe
            faisait les requêtes sql et le fichier que mon script utilisés pour remplir
            la base.Enfin nous avons maquetter l’application.
            `,
        }
    },
    {
        "name": "Installation de poste",
        "description": "SAE 1.03, installation de linux et d'un espace de travail rust",
        "tags": ["2022", "Bash", "SAE", "IUT"],
        "theme": "threeimage",
        "theme_data": {
            "img1": "img/root/Poste1.png",
            "img2": "img/root/Poste2.png",
            "img3": "img/root/Poste3.png",
            "img1Alt": "Poste1",
            "img2Alt": "Poste2",
            "img3Alt": "Poste3",

            "CahierCharges": `
    - Installer un système d'exploitation sur une machine virtuelle (VM).
    <br>
    -Créer des utilisateurs avec des droits différents.
            <br>
    -Installer des applications et les configurer.
            `,

            "competences": `
    - La création de compte sur Linux
    <br>
    - L'installation de package sur linux
        `,

            "methodes": `Pour débuter, nous avons choisi une distribution Linux(ici Debian).
            Nous l’avons ensuite installer sur la VM puis paramétrer les deux utilisateurs.
        Enfin, nous avons installer les applications demandés(Git, Rust, VSCode).
            `,
        }
    },
    {
        "name": "Lowatem",
        "description": "SAE 1.02, maintiens d'un code sur la durée",
        "tags": ["2021", "Java", "SAE", "IUT"],
        "theme": "oneimage",
        "theme_data": {
            "img1": "img/root/Lowatem1.png",

            "img1Alt": "Lowatem graphique",

            "CahierCharges": `- Créer les règles d'un jeu suivant
                les instructions demandés(une fois une règles implémenter et fonctionnelle, on passe au suivant)
    <br>
    - Créer une "intelligence artificielles"(doit juste pouvoir prendre le coups le plus intéressant)"
        `,

            "competences": `- Java <br>
    - Avoir un code propre et maintenable sur le temps <br>
    - Test unitaires <br>
    - Travailler en équipes <br>
    `,

            "methodes": `J'ai débuter par lire le code puis, pour chaque demande, j'ai commencé par ajouter le code besoin afin de changer le code préexistant pour que tous fonctionne.
            <br>
    Pour l'IA, nous avons tous deux créer une intelligence puis avec un code développer au début de cette partie nous les avons fusionné.`

        }
    },
    {
        "name": "Pong",
        "description": "SAE 1.01, création d'un jeu pour apprendre le développement",
        "tags": ["2021", "Java", "SAE", "IUT"],
        "theme": "twoimage",
        "theme_data": {
            "img1": "img/root/Pong1.png",
            "img2": "img/root/Pong2.png",
            "img1Alt": "Pong graphique",
            "img2Alt": "Pong graphique",

            "CahierCharges": `- Faire bouger les raquettes de haut en bas
            <br>
            - Mettre le jeu en pause
            <br>
            - Créer des collision entre la balle et les raquettes
            <br>
            - Ajouter un score lorsque la balle franchit l’écran à gauche ou à droite
            <br>
            - Ajouter un fond d’écran
            <br>
            - Créer un menu avec un bouton jouer et quitter
            <br>
            - Rajouter des obstacles, un nombre de joueur changeable, des portails de téléportation, ainsi  qu’un mode à 4 balles.(rajout d’un menu options).
            `,

            "competences": `
            - La mise en place de commentaires utiles.
            <br>
            - L'utilisation de Processing et donc d'un langage moins permissif.
            `,

            "methodes": `J’ai commençais par les raquettes puis la mise en pause du jeu en continuant sur les collisions,
            la gestion du score, les images, les menu, les obstacles et les portails. En plus de cela,
            j’ai ajouté des options ainsi qu’un moyen de changer les touches associés au raquettes.`
        }
    },
    {
        "name": "FDS",
        "description": "Systeme de mise à jour<br>(File Download System)",
        "tags": ["2020", "2021", "Python", "PHP", "Personnelle"],
        "theme": "simple",
        "theme_data": {
            "CahierCharges": `
            - Créer un système de mise à jour pour un jeu<br>
            - Connexion a un serveur et recuperation des informations<br>
            - Telechargement des fichiers<br>
            - Installation des fichiers<br>
            `,
            "competences": `
            - zipper et dezipper des fichiers dans un code<br>
            `,
            "methodes": `Pour débuter, j'ai réfléchis à qu'est ce que je pourrai réutiliser dans mes anciens projets.
            Très vite je me suis rendu compte que je pouvais réutiliser PCJSAPI, j'ai donc commencé par l'améliorer pour le client
            ai le moins de travail possible. Ensuite, j'ai créer un serveur qui permet de gérer les fichiers (un zip par dossier) et les versions (json).
            Enfin, j'ai créer un client qui permet de télécharger les fichiers et de les installer.`
        }
    },
    {
        "name": "Relic Engine",
        "description": "Moteur de jeu 2D, avec ajout de script",
        "tags": ["2019", "2021", "Python", "Personnelle"],
        "theme": "simple",
        "theme_data": {
            "CahierCharges": `
            - Créer un moteur de jeu 2D avec tkinter<br>
            - Créer un personnage capable de bouger<br>
            - Changer de map<br>
            `,
            "competences": `
            - canvas en tkinter<br>
            - Fonctionnement de collisions<br>
            - Lanceurs de script<br>
            - Essayer de faire un code propre<br>
            - Essayer de faire le moins de lag possible<br>
            `,
            "methodes": `Pour débuter, j'ai chercher comment injecter du code dans un programme python.
            J'ai donc trouvé exec() qui permet de faire cela. Ensuite, j'ai débuter par
            faire une base simple et facilement modifiable avec des scripts.
            J'ai ensuite ajouté des script permettant de faire des collisions, des map, des animations, des déplacements, etc.
            `

        }
    },
    {
        "name": "Tchat",
        "description": "Tchat en ligne fonctionnant avec ajax",
        "tags": ["2019", "Python", "PHP", "Personnelle"],
        "theme": "simple",
        "theme_data": {
            "CahierCharges": `
            - Créer un tchat en ligne<br>
            - Créer un serveur<br>
            - Créer un client capable de se connecter au server<br>
            - Créer un client capable d'envoyer et de recevoir des messages<br>
            `,
            "competences": `
            - Comment fonctionne ajax<br>
            - Requêtes HTTP<br>
            - PHP<br>
            `,
            "methodes": `Pour débuter, j'ai commencer à chercher comment faire un serveur. 
            Ayant aucun base dans le domaine, j'ai donc regarder le langage le plus connu dans le domaine, PHP.
            J'ai donc commencé par créer un moyen de faciliter la création d'api, qui sera plus tard la 1ère base de PCJSAPI.
            Une fois cela fait je me suis attaquer à un moyen de générer ,d'après une requete du serveur qui me retourne toutes ces fonctions,
            un fichier qui serat injecter au client et qui permettra de lancer les commandes.
            Une fois cela fait, il ne restait qu'à faire une interface graphique avec tkinter.
            `,
        }
    },
    {
        "name": "Utopia",
        "description": "Jeu de carte multijoueur",
        "tags": ["2019", "2020", "2021", "2022", "Python", "WEB", "PHP", "Personnelle"],
        "theme": "simple",
        "theme_data": {
            "CahierCharges": `
            - Créer un jeu de carte fonctionnelle<br>
            - Les cartes ont une attaques et une défense<br>
            - La défense ne regenere pas<br>
            - Les cartes ont un coups à l'utilisation<br>
            - Les cartes ont des effets<br>
            - On peut créer des decks<br>
            `,
            "competences": `
            - Python<br>
            - L'orienté objet<br>
            - Json<br>
            - Tkinter<br>
            - Threading<br>
            - L'importance de la documentation<br>
            - L'importance de la lisibilité du code<br>
            - Socket<br>
            - Comment fonctionne le réseau<br>
            - Javascript<br>
            `,
            "methodes": `Pour débuter, j'ai réfléchis à des cartes avec lequel jouer (une dizaine environ).
            Ensuite, j'ai appris à utiliser tkinter pour faire une interface graphique et une classe pour les cartes.
            J'ai mis les cartes dans une sorte de base de données fait de 5 fichiers txt et utilisé le threading
            et les sockets pour faire un serveur et un client (le serveur est aussi un client).
            Pour continuer j'ai créer des deck, ajouter du son rajouter les effets, des cartes, bloqué l'accès à des cartes, qui doivent
            êtres débloqués, etc. Une fois un support de mods ajouter, je me suis rendu compte que le code était devenu illisible et que je
            n'avais pas documenté mon code. J'ai ainsi tout repris de zéro, en utilisant des parties de l'ancien code qui étaient bien faites.
            J'ai donc créer une nouvelle base de données, une nouvelle interface graphique, avant de me rendre compte que le code était
            redevenu illisible et que les socket rendaient le jeu trop complexe à lancer pour un utilisateur lambda. Pour cela, j'ai fait une
            pause d'environ 10 mois. J'ai pendant ce temps appris à utiliser php (PCJSAPI), l'ajax et je me suis repris tous de zéros
            en essayant de faire du orienté objet. Après une semaine de travail, le jeu était fonctionnel. Mais tkinter étant trop limité
            et faisant énormément laguer le jeu, j'ai remis le jeu en pause et l'ai repris 5 mois après. J'ai alors décidé de garder
            les serveur PHP et de faire un client en HTML/CSS/javascript. J'ai donc appris à utiliser javascript et à faire des requêtes ajax.
            `
        }
    },
    {
        "name": "Launcher",
        "description": "Création d'un lanceur d'application avec connexion",
        "tags": ["2018", "BATCH", "Personnelle"],
        "theme": "dini",
        "theme_data": {}
    },
    {
        "name": "Aie",
        "description": "Test du SpeechSynthesis avec questions/réponses",
        "tags": ["2017", "BATCH", "Personnelle"],
        "theme": "dini",
        "theme_data": {}
    },
]

let themeData = {
    "oneimage": `
        <section>
            <img src="{img1}" alt="{img1Alt}">
            <div>
                <h3>Cahier des charges</h3>
                <p>{CahierCharges}</p>
            </div>
        </section>
        <article>
            <section>
                <h3>Compétences</h3>
                <p>{competences}</p>
            </section>
            <section>
                <h3>Méthodes</h3>
                <p>{methodes}</p>
            </section>
        </article>
    `,

    "twoimage": `
        <section>
            <img src="{img1}" alt="{img1Alt}">
            <div>
                <h3>Cahier des charges</h3>
                <p>{CahierCharges}</p>
            </div>
            <img src="{img2}" alt="{img2Alt}">
        </section>
        <article>
            <section>
                <h3>Compétences</h3>
                <p>{competences}</p>
            </section>
            <section>
                <h3>Méthodes</h3>
                <p>{methodes}</p>
            </section>
        </article>
    `,

    "threeimage": `
        <section>
            <img src="{img1}" alt="{img1Alt}">
            <div>
                <h3>Cahier des charges</h3>
                <p>{CahierCharges}</p>
            </div>
            <img src="{img2}" alt="{img2Alt}">
        </section>
        <article>
            <section>
                <h3>Compétences</h3>
                <p>{competences}</p>
            </section>
            <img src="{img3}" alt="{img3Alt}">
            <section>
                <h3>Méthodes</h3>
                <p>{methodes}</p>
            </section>
        </article>
    `,

    "simple": `
        <section>
            <div>
                <h3>Cahier des charges</h3>
                <p>{CahierCharges}</p>
            </div>
            <div>
                <h3>Compétences</h3>
                <p>{competences}</p>
            </div>
        </section>
        <article>
            <section>
                <h3>Méthodes</h3>
                <p>{methodes}</p>
            </section>
        </article>
    `,

    "dini": `
        <h2>Attention: Chantier en cours</h2>
        <p>Dini est
            actuellement en train de refaire mon portfolio,
            il est donc possible que certaines choses ne
            soient pas encore fonctionnelles.</p>
        <img src="./img/Dini.png">
    `,

    "acceuil": `
        <h2>Alexandre Bouget</h2>
        <p>
        Actuellement étudiant au département informatique de l'IUT de bordeaux
        <br>
        je suis passionné par le développement back-end d'applications.
        </p>
        <img src="./img/alex.jpeg">
    `,
}