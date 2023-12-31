import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductCard from './Cards/ProductCard';

const Shop = () => {
    const productData = useLoaderData();
    return (
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {
                productData.map( product => <ProductCard key={product.id} product={product} />)
            }
        </div>
    );
};

export default Shop;