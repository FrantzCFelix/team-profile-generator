function generateHtml (teamMembers) {

    console.log("Check inside Output Folder");

    return `<!DOCTYPE html>
<html lang="en">

<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta http-equiv="X-UA-Compatible" content="ie=edge">
<title>Team Profile</title>
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap" rel="stylesheet">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">

<style>
   body {
       background: url(http://cdn.backgroundhost.com/backgrounds/subtlepatterns/dark_mosaic.png) center;
       background-size: 100%;
       background-repeat: no-repeat;
       margin: 0%;
       height: 100vh;
   }
   .header {
       background-color: rgb(13, 145, 35);
       border: solid black;
       text-align: center;
       font-size: 30px;
       font-family: 'Roboto', sans-serif;  
   }
   
</style>

</head>

<body>
<div class=header>
   <h1>My Team</h1>
</div>
<div class="container">
    <div class="row">
     ${teamMembers} 
     </div>
</div>
<script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
<script src="https://kit.fontawesome.com/257de25400.js" crossorigin="anonymous"></script>         
</body>

</html>`

}



function generateCard(teamMembers) {
  
    switch(teamMembers.getRole())
    {
        case "Manager": 
        roleInfo = `Office Number: ${teamMembers.officeNumber}`;
        return `<div class="col s3">
          <div class="card-panel  light-green">
            <h4>${teamMembers.name}</h4>
            <h6><i class="far fa-user"></i>${teamMembers.getRole()}</h6>
          <hr />
          <ul>
          <li>ID: ${teamMembers.id}</li>
          <li>Email: ${teamMembers.email}</li>
          <li> Office Number: ${teamMembers.officeNumber} </li>
          </ul>
        </div>
        </div>`
        break;
        case "Engineer":
        roleInfo = `Github Username: ${teamMembers.github}`;
        return `<div class="col s3">
          <div class="card-panel lime">
            <h4>${teamMembers.name}</h4>
            <h6><i class="far fa-user"></i>${teamMembers.getRole()}</h6>
          <hr />
          <ul>
          <li>ID: ${teamMembers.id}</li>
          <li>Email: ${teamMembers.email}</li>
          <li> Github Username: ${teamMembers.github} </li>
          </ul>
        </div>
        </div>`
        break;
        case "Intern": 
        roleInfo = `School: ${teamMembers.school}`;
        return `<div class="col s3">
          <div class="card-panel green">
            <h4>${teamMembers.name}</h4>
            <h6><i class="far fa-user"></i>${teamMembers.getRole()}</h6>
          <hr />
          <ul>
          <li>ID: ${teamMembers.id}</li>
          <li>Email: ${teamMembers.email}</li>
          <li> School: ${teamMembers.school} </li>
          </ul>
        </div>
        </div>`
        break;

    }
}

module.exports = {
    generateHtml : generateHtml,
    generateCard : generateCard
}
