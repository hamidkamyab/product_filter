import React from 'react'

function Products({ products }) {
    console.log(products);

    return (
        <div className='products-list row'>

            {
                products.map((item) => {
                    return (
                        <div className="product col-4 p-3 d-flex align-items-stretch" key={item.id}>
                            <div className='box bg-white p-4 d-flex flex-wrap gap-3'>
                                <div className="p-head">
                                    <img src={item.img} alt="" />
                                </div>
                                <div className="p-body d-flex flex-column gap-2">
                                    <p className='name p-0 m-0'>{item.title}</p>
                                    <hr className='m-0 p-0' />
                                    <p className='description p-0 m-0'>{item.description}</p>
                                </div>
                                <div className="p-bottom d-flex flex-row-reverse gap-3 align-self-end w-100">
                                    <div className='price d-flex gap-1 align-items-center position-relative' data-amaz={item.discount?"true":"false"}>
                                        <strong className='byekan fs-6'>{item.price}</strong>
                                        <strong className='byekan fs-6'>تومان</strong>
                                    </div>

                                    {
                                        item.discount &&
                                        <div className='price amaz d-flex gap-1 align-items-center text-primary'>
                                            <strong className='byekan fs-6'>{item.discount}</strong>
                                            <strong className='byekan fs-6'>تومان</strong>
                                        </div>
                                    }
                                </div>
                            </div>
                        </div>
                    );
                })
            }


        </div>
    )
}

export default Products