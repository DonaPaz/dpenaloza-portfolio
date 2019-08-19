//import { viewHome } from './viewhome.js'

export const ViewProjects = () => {
	document.getElementById('root').innerHTML = `
        <div class="container">
        <div class="jumbotron">
        <div><h1>Projects</h1></div>  
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
         </p>
        </div>
        
        <div class="row">
            <div class="col-md-4">
			<h2>
				Heading
			</h2>
			<p>
				Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. 
			</p>
			<p>
            Donec id elit non mi porta gravida at eget metus.
            </p>
            </div>
        
        <div class="col-md-4 ">
        <h2>
				Heading
			</h2>
			<p class = "project">
				Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.
			</p>
			<p>
            Donec id elit non mi porta gravida at eget metus.
            </p>
        </div>

        <div class="col-md-4">
        <h2>
				Heading
			</h2>
			<p>
				Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.
			</p>
			<p>
            Donec id elit non mi porta gravida at eget metus.
            </p>
        </div>

		</div>
        </div>
        </div>
	`
    
}

