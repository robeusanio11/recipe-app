import API_KEY from '../config/API_KEY.js';

export default function Home({recipes}) {
  console.log(recipes);
  return (
    <>
      <div>Search for Pasta Recipes:</div>
      <ul>
        {recipes.results.map((recipe) => (
          <li key={recipe.id}>
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
