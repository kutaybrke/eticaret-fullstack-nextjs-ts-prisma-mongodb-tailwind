"use client"

export default function Category() {
    const CategoryList = [{
        name: 'Ayakkabı'
    },
    {
        name: 'Ayakkabı'
    },
    {
        name: 'Ayakkabı'
    },
    {
        name: 'Ayakkabı'
    },
    {
        name: 'Ayakkabı'
    },
    {
        name: 'Ayakkabı'
    },
    {
        name: 'Ayakkabı'
    },
    ]
    return (
        <div className='flex justify-center px:3 md:px-10 items-center gap-3 md:gap-10 py-5 md:py-8 overflow-x-auto'>
            {CategoryList.map((category, index) => {
                return (
                    <div className='border text-slate-500 rounded-full min-w-[120px] px-4 py-2 text-center flex flex-1 items-center justify-center' key={index}>{category.name}</div>
                )
            })}
        </div>
    )
}
