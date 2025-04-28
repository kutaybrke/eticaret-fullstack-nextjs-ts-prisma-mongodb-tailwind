"use client"
import React from 'react'
import { PageContainer } from '../containers/PageContainer'

const DetailClient = ({ product }: { product: any }) => {
    return (
        <div className='m-10'>
            <PageContainer>
                {product?.name}
            </PageContainer>
        </div>
    )
}

export default DetailClient