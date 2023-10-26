// Empêcher le form d'être soumis
document.getElementById("form").addEventListener("submit", function (e) {
    e.preventDefault();

    let userName = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    // 1. verifier si utilisateur existe
    // 2. Si non, créeer tableau vide pour stocker utilisateur
    // utilisation désérialisation
    let users = JSON.parse(localStorage.getItem("users")) || [];

    // Vérifier si l'email ou le nom d'utilisateur existe déjà
    const userExists = users.some(user => user.userName === userName || user.email === email);

    if (userExists) {
        alert('Cet utilisateur existe déjà.');
        alert("L'email" + email + "est déjà utilisé, Veuillez saisir un nouvel email !");

    } else {
        // Crée un objet utilisateur avec les données collectées.
        const user = {
            userName: userName,
            email: email,
            password: password
        }

        // Ajout nouvel utilisateur à la liste
        users.push(user);

        // Enregistre la liste mise à jour dans localStorage
        localStorage.setItem("users", JSON.stringify(users));

        // Effacez les champs du formulaire.
        document.getElementById("username").value = '';
        document.getElementById("email").value = '';
        document.getElementById("password").value = '';
        document.getElementById("password2").value = '';

        alert("Utilisateur enregistré avec succès!");

        location.replace('/GameMemory/log-in.html');

    }
});

