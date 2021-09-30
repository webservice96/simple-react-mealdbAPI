import React from 'react';

const Meal = (props) => {
    const { strMeal, strInstructions, strMealThumb, strTags, strYoutube } = props.meal;
    const { handleAddToOrder, meal } = props;
    return (
        <div className="col-md-4 mb-4">
            <div className="card">
                <img src={strMealThumb} className="card-img-top" alt="Thumbnail not found" />
                <div className="card-body">
                    <h5 className="card-title">{strMeal}</h5>
                    <p className="card-text">{strInstructions.slice(0, 100)}...</p>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Tags: {strTags}</li>
                </ul>
                <div className="card-body d-flex justify-content-between">
                    <a href={strYoutube} className="card-link btn btn-info">See Video</a>
                    <button onClick={() => handleAddToOrder(meal)} type="button" className="btn btn-warning">Add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default Meal;