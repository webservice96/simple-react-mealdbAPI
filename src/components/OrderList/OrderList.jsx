import React from 'react';
import Order from '../Order/Order';

const OrderList = (props) => {
    const { orders } = props;
    const orderTotal = orders.reduce((previus, meal) => previus + meal.quantity, 0);
    return (
        <>
            <div className="card">
                <div className="card-header">
                    Added to Cart: {orderTotal}
                </div>
                <div className="card-body">
                    {
                        orders.map(order => <Order
                            key={order.idMeal}
                            order={order}
                        >
                        </Order>)
                    }
                </div>
            </div>
        </>
    );
};

export default OrderList;