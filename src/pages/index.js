import React, { useState } from 'react';
import RecipeCard from '../components/RecipeCard.js';
import NavBar from '../components/NavBar.js';
// edanam api version
export default function Home() {
  const [recipeList, setRecipeList] = useState([]);

    return (
      <>
      <NavBar setRecipeList={setRecipeList} />

      <div class="d-flex m-2" style={{maxHeight: '50%', overflow: 'scroll', marginRight: '10px'}}>
        {recipeList.map(({recipe}, index) => (
          <>
          <RecipeCard key={index} recipe={recipe}/>
          </>
        ))}
      </div>
    </>
    );
  }