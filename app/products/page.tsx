import ProductGrid from '@/components/layout/Section/Section';
import { ProductCardDate } from '@/Data/Cards';
import React from 'react';

const ProductsPage: React.FC = () => {
    return (
        <div className='py-12'>
            <ProductGrid cards={ProductCardDate}/>
        </div>
    );
};

export default ProductsPage;