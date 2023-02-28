import API_KEY from '../config/API_KEY.js';
import APP_ID from '../config/APP_ID.js';
import Link from 'next/link';
import React, { useState } from 'react';

export default function NavBar({setRecipeList}) {

  const [recipeQuery, setRecipeQuery] = useState('');

  const handleCallback = (results) => setRecipeList(results);

  const handleSearchSubmit = async function(event) {
    event.preventDefault();
    const res = await fetch(`https://api.edamam.com/api/recipes/v2?app_id=${APP_ID}&app_key=${API_KEY}&type=public&q=${recipeQuery}`, { method: 'GET'});
    const results = await res.json();
    handleCallback(results.hits);
  };

  return (
    <ul class="nav justify-content-center m-1">
      <li class="nav-item">
        <Link class="nav-link active" aria-current="page" href="/">Home</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" href="/home">Saved</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" href="#">Profile</Link>
      </li>
      <li class="nav-item">
        <form class="d-flex" role="search" onSubmit={handleSearchSubmit}>
          <input class="form-control me-2" type="text" id="recipe-search" onChange={event => setRecipeQuery(event.target.value)}/>
          <button class="btn btn-outline-success" type="submit" value="Submit">SEARCH</button>
        </form>
      </li>
    </ul>
)
}