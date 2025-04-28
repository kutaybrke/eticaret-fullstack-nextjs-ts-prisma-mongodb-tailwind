import React from 'react'
import Heading from '../general/Heading'
import { products } from '@/utils/Product'
import ProductCard from './ProductCard'
export default function Product() {
    return (
        <div>
            <Heading text='Tüm Ürünler' />
            <div className='flex items-center gap-3 md:gap-10 flex-wrap'>
                {
                    products.map((product) => {
                        return (
                            <ProductCard key={product.id} product={product} />
                        )
                    })
                }
            </div>
        </div>
    )
}
