export default function RecipeCard({recipe}) {
  return (
    <div key={recipe.key} class="card" style={{minWidth: '18rem', maxHeight: '50rem', padding: '20px'}} >
      <img src={recipe.image} class="card-img-top"/>
      <div class="card-body">
        <h5 class="card-title">{recipe.label}</h5>
        <p class="card-text"><small class="text-muted">{recipe.cuisineType[0]}</small></p>
      </div>
      <ul class="list-group list-group-flush">
        {recipe.ingredients.map((ingredient) => (
          <li class="list-group-item">{ingredient.food}</li>
        ))}
      </ul>
    </div>
  )
}