import Image from 'next/image';

export default function RecipeCard({recipe}) {
  return (
    <div key={recipe.key} class="card m-3" style={{minWidth: '18rem', maxHeight: '50rem'}} >
      <img src={recipe.image} class="card-img-top"/>
      <div class="card-body" style={{height: '35rem'}}>
        <h5 class="card-title">{recipe.label}</h5>
        <p class="card-text"><small class="text-muted">{recipe.cuisineType[0]}</small></p>
        <a class="btn btn-primary" type="button" href={recipe.url}>
          See Recipe
        </a>
        <a class="btn btn-outline-success m-2" type="button">Like</a>
          <ul class="list-group list-group-flush" style={{maxHeight: '18rem', overflowY: 'scroll'}}>
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index} class="list-group-item">{ingredient.food}</li>
              ))}
          </ul>
      </div>
    </div>
  )
}

