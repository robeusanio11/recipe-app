import API_KEY from '../config/API_KEY.js';
import React, { Component } from 'react';

export default class Home extends Component {
  constructor (props) {
    super(props)

    this.state = {
      recipeList: [],
    };

    this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
  }

  handleSearchSubmit = async function(query) {
    const res = await fetch(`https://api.spoonacular.com/recipes/complexSearch/?apiKey=${API_KEY}&query=${query}`);
    const results = await res.json();
    console.log(results.results);
    this.setState({
      searchQuery: "",
      recipeList: results.results,
    });
  }

  render() {
    return (
    <>
      <form>
        <input type="text" id="recipe-search" onChange={(event) => this.setState({searchQuery: event.target.value})}/>
        <button onSubmit={this.handleSearchSubmit(this.state.searchQuery)}></button>
      </form>

      <ul>
        {this.state.recipeList.map((recipe) => (
            <li key={recipe.key}>
              <h3>{recipe.title}</h3>
              <img src={recipe.image}/>
            </li>
        ))}
      </ul>
    </>
    )
  }
}
// ({recipes}) {
//   return (
//     <>
//       <input type="search" id="recipe-search" onSubmit={(query) => this.}/>
//       <ul>
//         {recipes.results.map((recipe) => (
//             <li key={recipe.key}>
//               <h3>{recipe.title}</h3>
//               <img src={recipe.image}/>
//             </li>
//         ))}
//       </ul>
//     </>
//   )
// }

// export async function getServerSideProps(query) {
//   const res = await fetch(`https://api.spoonacular.com/recipes/complexSearch/?apiKey=${API_KEY}&query=${query}`);
//   const recipes = await res.json();

//   return {
//     props: {
//       recipes
//     }
//   }
// }
