import React from 'react';
import ProductLinK from './ProductLink';
import database from '../database/database.json' 

export const ProductList = () => {
    console.log(database.database)

    return (
        <div className="product-list">
            {
                database.database.map(item => (
                    <ProductLinK productLink={item}/>
                ))
            }
        </div>
    )   
}

