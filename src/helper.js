// create functions that are going to be used multiple times
// place functions here to remove cluster from other js files?

function generateHtml() { // returns a basic layout of the webpage, we can then append new 'cards' dynamically
    return `
    <html lang="en">
        <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <title>My Team Info!</title>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous">
        </head>
        <body>
            <header class="container-fluid text-center">
                <h1>MY TEAM INFO</h1>
            </header>

            <div class="container-fluid bg-primary text-center text-light mt-2">
                <h1>MANAGER</h1>
            </div>
            
            <div class="container-fluid">
                <div class="container-fluid row d-flex justify-content-center" id="manager"></div>
            </div>

            <div class="container-fluid bg-primary text-center text-light mt-2">
                <h1>ENGINEER</h1>
            </div>

            <div class="container-fluid">
                <div class = "container-fluid row d-flex justify-content-center" id="engineer"></div>
            </div>

            <div class="container-fluid bg-primary text-center text-light mt-2">
                <h1>INTERN</h1>
            </div>

            <div class="container-fluid">
                <div class = "container-fluid row d-flex justify-content-center" id="intern"></div>
            </div>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa" crossorigin="anonymous"></script>
        </body>
    </html>
    `;
};

module.exports = { generateHtml }