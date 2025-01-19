import ProductGrid from '@/components/layout/Section/Section';
import { ProductCardDate } from '@/Data/Cards';
import React from 'react';

const ProductsPage: React.FC = () => {
    return (
        <div className='py-12'>
            {/* <div className='px-6 py-6'>
                <h1 className='text-2xl'>New Arrivals</h1>
                <p>The Kith collection of new arrivals features the latest styles from premium brands including Kith, Assouline, Awake NY, Barena, Diptyque, John Elliott, and more. Browse the latest Kith releases and discover apparel including tees, bags, bomber jackets, cargo pants, and shoes, and accessories such as earrings, watches, and rings.</p>
            </div> */}
          
            <ProductGrid cards={ProductCardDate}/>
            <ProductGrid cards={ProductCardDate}/>
            <ProductGrid cards={ProductCardDate}/>
            <ProductGrid cards={ProductCardDate}/>

        </div>
    );
};

export default ProductsPage;