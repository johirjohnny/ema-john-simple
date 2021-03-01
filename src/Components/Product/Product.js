import React from 'react';

const Product = (props) => {
    console.log(props.product.name);
    return (
        <div className="product">
            <div>
                <img src={props.product.img} alt=""/>
            </div>
            <div>
            <h3>{props.product.name}</h3>
            </div>
            
        </div>
    );
};

export default Product;