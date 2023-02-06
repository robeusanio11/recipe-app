import API_KEY from '../config/API_KEY.js';
import APP_ID from '../config/APP_ID.js';
import React, { useState } from 'react';

// edanam api version
export default function Home() {
  const [recipeList, setRecipeList] = useState([]);
  const [recipeQuery, setRecipeQuery] = useState('');

  const handleSearchSubmit = async function(event) {
    event.preventDefault();
    const res = await fetch(`https://api.edamam.com/api/recipes/v2?app_id=${APP_ID}&app_key=${API_KEY}&type=public&q=${recipeQuery}`, { method: 'GET'});
      const results = await res.json();
      setRecipeList(results.hits);
    };

    return (
      <>
      <form onSubmit={handleSearchSubmit}>
        <input type="text" id="recipe-search" onChange={event => setRecipeQuery(event.target.value)}/>
        <button type="submit" value="Submit">SEARCH</button>
      </form>

      <ul>
        {recipeList.map(({ recipe }) => (

          <li key={recipe.key}>
            <div class="card">
              <div class="card-body">
                <h3 class="card-title"> {recipe.label}</h3>
                <img src={recipe.images.THUMBNAIL.url} class="card-img-right"/>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
    );
  }

{/* <div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div> */}