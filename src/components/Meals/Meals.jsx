import React, { useEffect, useState } from 'react';
import { addToDB, getDb } from '../../assets/js/localStorage';
import Meal from '../Meal/Meal';
import OrderList from '../OrderList/OrderList';

const Meals = () => {
    const [meals, setMeals] = useState([]);
    const [order, setOrder] = useState([]);
    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=fish')
            .then(res => res.json())
            .then(data => setMeals(data.meals))
    }, []);

    /**
     * add previus order in setOrder hook
     */
    useEffect(() => {
        if (meals.length) {
            const savedDB = getDb();
            const savedOrder = [];
            for (const mealId in savedDB) {
                const cartMeal = meals.find(meal => meal.idMeal === mealId);
                const quantity = savedDB[mealId];
                cartMeal.quantity = quantity;
                savedOrder.push(cartMeal);
            }
            setOrder(savedOrder);
        }
    }, [meals]);


    /**
     * handleAddToOrder
     * @param {Array Item} meal 
     */
    const handleAddToOrder = (meal) => {
        meal.quantity = 1;
        const newOrder = [...order, meal];
        setOrder(newOrder);
        addToDB(meal.idMeal);
    }

    return (
        <>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-9">
                        <div className="row">
                            {
                                meals.map(meal => <Meal
                                    key={meal.idMeal}
                                    meal={meal}
                                    handleAddToOrder={handleAddToOrder}
                                >
                                </Meal>)
                            }
                        </div>
                    </div>
                    <div className="col-md-3">
                        <OrderList orders={order}></OrderList>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Meals;