import React from "react";
import { useGlobalContext } from "../context";

function Meals() {
  const {loading, meals, selectMeal,addToFavorites} = useGlobalContext();


  if (loading) {
    return <section className="container" style={{width:"100%"}}>
      <img src="https://miro.medium.com/max/1400/1*F_5AEXIfr1AXuShXhYT4zg.gif"  style={{width:"100%"}} />
    </section>
  }
  
  if (meals.length < 1) {
    return <section className="section">
      <h4>No meals matched your search term. Please try again.</h4>
    </section>
  }
  
  else{
    return (
    <section className="section-center">
      {meals.map((singleMeal) => {
        const { idMeal, strMeal: title, strMealThumb: image } = singleMeal;
        return (
          <div className="card" key={idMeal} style={{width: '18rem'}}>
            <img src={image} className="card-img-top" style={{maxHeight:"15rem",cursor:"pointer"}} 
            onClick={() => selectMeal(idMeal)}/>
            <div className="card-body d-flex justify-content-between align-items-center">
              <h5 className="card-title">{title}</h5>
              
              <button className="like-btn"><i className="bi bi-star" onClick={() => addToFavorites(idMeal)}></i></button>
            </div>
          </div>
        );
      })}
    </section>
    );
  }
}

export default Meals;
