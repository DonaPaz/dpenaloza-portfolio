
export const ViewProjects = () => {
  document.getElementById('root').innerHTML = `
  
  <div class="container">
    <div><h1>Últimos Proyectos</h1></div>  

  
  <br><br>

  <div class="container">
  
    <div class="row">
      <div class="card-deck">

          
    <div class="card move">
        <img class="card-img-top" src="./src/img/tictactoe.png" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">Tic Tac Toe -  Gato</h5>
          <p class="card-text">Popular juego del "gato", desarrollado en React Native.</p>
        </div>
        <div class="card-footer">
          <button type="button" class="btn btn-secondary">Ver más</button>
        </div>
      </div>

      <div class="card move">
        <img class="card-img-top" src="./src/img/mdlinks.png" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">Md-Links</h5>
          <p class="card-text">Librería desarrollada para Node, que lee y analiza links de archivos Markdown.</p>
        </div>
        <div class="card-footer">
          <button type="button" class="btn btn-secondary">Ver más</button>
        </div>
      </div>

      
        <div class="card move">
          <img class="card-img-top" src="./src/img/vkh.png" alt="Card image cap">
          <div class="card-body">
            <h5 class="card-title">Síndrome-VHK</h5>
            <p class="card-text">Sitio realizado para la agrupación del Síndrome de VKH, accesibilidad web AA.</p>
          </div>
          <div class="card-footer">
            <button type="button" class="btn btn-secondary">Ver más</button>
          </div>
        </div>

      
        </div>
      </div>
    </div>
  </div>
  </div>

	`
    
}



  