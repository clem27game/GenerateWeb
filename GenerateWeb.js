// web_package.js
const fs = require('fs');
const path = require('path');

function createWebPage(backgroundColor, title, paragraph, description) {
    const htmlContent = `
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title}</title>
    <style>
        body {
            background-color: ${backgroundColor};
            color: black;
            font-family: Arial, sans-serif;
            text-align: center;
        }
    </style>
</head>
<body>
    <h1>${title}</h1>
    <p>${paragraph}</p>
    <div>${description}</div>
</body>
</html>
    `;

    const outputPath = path.join(__dirname, 'bzzbee.html');
    fs.writeFileSync(outputPath, htmlContent);
    console.log(`🍯 Page web créée à l'adresse: ${outputPath}`);
}

// Récupérer les arguments de la ligne de commande
const args = process.argv.slice(2);
if (args.length < 4) {
    console.log("Usage: node web_package.js <couleur_de_fond> <titre> <paragraphe> <description>");
    process.exit(1);
}

const [backgroundColor, title, paragraph, description] = args;
createWebPage(backgroundColor, title, paragraph, description);