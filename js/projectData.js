let tagsData = {
    "Date": [
        "2017",
        "2018",
        "2019",
        "2020",
        "2021",
        "2022"
    ],
    "Language": [
        "C#",
        "Python",
        "WEB",
        "SQL",
        "Java",
        "PHP",
        "BATCH"
    ],
    "Type": [
        "IUT",
        "SAE",
        "Personnelle"
    ]
}


let ProjectData = [
    {
        "name": "ClimatView",
        "description": "SAE 2.4 et 2.5, 2022",
        "tags": ["2022", "Python", "SAE", "IUT"],
        "theme": "oneimage",
        "theme_data": {
            "name": "ClimatView",
            "description": "SAE 2.4 et 2.5, 2022",
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
            la base. Enfin nous avons maquetter l’application.
            `,
        }
    },
    {
        "name": "Installation de poste",
        "description": "SAE 1.03, installation de linux et d'un espace de travail rust",
        "tags": ["2022", "BATCH", "SAE", "IUT"],
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

            "methodes": `Pour débuter, nous avons choisi une distribution Linux (ici Debian).
            Nous l’avons ensuite installer sur la VM puis paramétrer les deux utilisateurs.
            Enfin, nous avons installer les applications demandés (Git, Rust, VSCode).
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
                les instructions demandés (une fois une règles implémenter et fonctionnelle, on passe au suivant)
                <br>
            - Créer une "intelligence artificielles" (doit juste pouvoir prendre le coups le plus intéressant)"
            `,

            "competences": `- Java<br>
            - Avoir un code propre et maintenable sur le temps<br>
            - Test unitaires<br>
            - Travailler en équipes<br>
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
        "theme": "dini",
        "theme_data": {}
    },
    {
        "name": "Relic Engine",
        "description": "Moteur de jeu 2D, avec ajout de script",
        "tags": ["2019", "2021", "Python", "Personnelle"],
        "theme": "dini",
        "theme_data": {}
    },
    {
        "name": "Tchat",
        "description": "Tchat en ligne fonctionnant avec ajax",
        "tags": ["2019", "Python", "PHP", "Personnelle"],
        "theme": "dini",
        "theme_data": {}
    },
    {
        "name": "Utopia",
        "description": "Jeu de carte multijoueur",
        "tags": ["2019", "2020", "2021", "2022", "Python", "WEB", "PHP", "Personnelle"],
        "theme": "dini",
        "theme_data": {}
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
    `,
}