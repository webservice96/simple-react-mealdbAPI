import React from 'react';
import './Order.css';
const Order = (props) => {
    const { strMeal, quantity, strMealThumb, strInstructions } = props.order;
    return (
        <>
            <ol className="list-group">
                <li className="list-group-item d-flex justify-content-between align-items-start">
                    <div className="ms-2 me-auto">
                        <img className="cart-image" src={strMealThumb} alt="Not found!" />
                        <div className="fw-bold">{strMeal}</div>
                        {strInstructions.slice(0, 25)}...
                    </div>
                    <span className="badge bg-primary rounded-pill">{quantity}</span>
                </li>
            </ol>
        </>
    );
};

export default Order;