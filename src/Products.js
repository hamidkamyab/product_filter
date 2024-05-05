import React from 'react'
import * as FA from "react-icons/fa6";

function Products({ products }) {

    return (
        <div className='products-list row justify-content-center justify-content-md-start'>

            {
                products.map((item) => {
                    return (
                        <div className="product col-lg-4 col-10 col-md-6 p-3 d-flex align-items-stretch" key={item.id}>
                            <div className='box bg-white p-4 d-flex flex-wrap gap-3 w-100'>
                                <div className="p-head">
                                    <img src={item.img} alt="" />
                                </div>
                                <div className="p-body d-flex flex-column gap-2">
                                    <p className='name p-0 m-0'>{item.title}</p>
                                    <hr className='m-0 p-0' />
                                    <p className='description p-0 m-0'>{item.description}</p>
                                </div>
                                <div className="p-bottom d-flex flex-row flex-wrap align-items-center justify-content-between gap-3 align-self-end w-100">
                                    <div>
                                        <button className='add-to-cart btn btn-outline-success d-flex justify-content-center align-items-center'>
                                            <FA.FaCartPlus size={20}/>
                                        </button>
                                    </div>
                                    <div className='priceBox d-flex flex-column align-items-end'>
                                        <div className='price d-flex gap-1 align-items-center' data-amaz={item.discount ? "true" : "false"}>
                                            <strong className='initial-price byekan fs-6 position-relative'>{item.price}</strong>
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
                        </div>
                    );
                })
            }


        </div>
    )
}

export default Products