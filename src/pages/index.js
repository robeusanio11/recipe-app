import API_KEY from '../config/API_KEY.js';
import APP_ID from '../config/APP_ID.js';
import React, { useState } from 'react';

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
              <h3>{recipe.label}</h3>
              <img src={recipe.images.THUMBNAIL.url}/>
            </li>
        ))}
      </ul>
    </>
    );
  }