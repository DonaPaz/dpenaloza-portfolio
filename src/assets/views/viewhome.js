export const viewHome = () => {

  document.getElementById('nav-bar').innerHTML = `
  <div class="container">

  <nav class="navbar navbar-expand-lg navbar-light">
  <a class="navbar-brand" href="#">Hola, soy DanielaPaz</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#/about">About</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#/projects">Projects</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#/contact" tabindex="-1" aria-disabled="true">Contact</a>
      </li>
    </ul>
  </div>
</nav>
<lu><hr></lu>
</div>
  `
  
  document.getElementById('root').innerHTML = `
  <div class="container">
  <div class="jumbotron">
  <div class="row">
      <div class="col-md-5">
  </div>
  <div class="col-md-7">
  <h1 class="display-4">DanielaPaz</h1>
  <p class="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
  </p>
  <hr class="my-4">
  <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
  
</div>
</div>
</div>
`

}

