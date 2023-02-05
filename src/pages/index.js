import API_KEY from '../config/API_KEY.js';

export default function Home({recipes}) {
  return (
    <>
      <input type="search" id="recipe-search"/>
      <ul>
        {recipes.results.map((recipe) => (
            <li key={recipe.key}>
              <h3>{recipe.title}</h3>
              <img src={recipe.image}/>
            </li>
        ))}
      </ul>
    </>
  )
}

export async function getStaticProps() {
  const res = await fetch(`https://api.spoonacular.com/recipes/complexSearch/?apiKey=${API_KEY}&query=pasta`);
  const recipes = await res.json();

  return {
    props: {
      recipes
    }
  }
}
