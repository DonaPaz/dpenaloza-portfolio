export const ViewProjects = () => {
  document.getElementById('root').innerHTML = `
  
  <div class="container">
    <div><h1>Últimos Proyectos</h1></div>  

  
  <br><br>

  <div class="container">
  
    <div class="row">
      <div class="card-deck">
        
      <div class="card col-md-4">
      <img class="card-img-top" src="..." alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
      </div>
      <div class="card-footer">
        <button type="button" class="btn btn-secondary">Ver más</button>
      </div>
    </div>
          
        <div class="card col-md-4">
          <img class="card-img-top" src="..." alt="Card image cap">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
          </div>
          <div class="card-footer">
            <button type="button" class="btn btn-secondary">Ver más</button>
          </div>
        </div>

        <div class="card col-md-4">
        <img class="card-img-top" src="..." alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
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


    $(document).ready(function(){
     
      $('.col-md-4').hover(
   
      // trigger when on hover
        function(){
          $(this).animate({
            marginTop: "-=1%",
          },200);
          
        },
   
      // trigger when hover out
        function(){
          $(this).animate({
            marginTop: "0%"
          },200);
        }
   
      );
   
    });
  