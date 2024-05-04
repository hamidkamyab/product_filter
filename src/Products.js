import React from 'react'

function Products() {
    return (
        <div className='products-list row'>
            <div className="product col-4 p-3">
                <div className='box bg-white p-4'>
                    <div className="p-head">
                        <img src="https://dkstatics-public.digikala.com/digikala-products/79388e43009a36a3406210011c98274a566de2f9_1714299355.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90" alt="" />
                    </div>
                    <div className="p-body d-flex flex-column gap-2 my-3">
                        <p className='name p-0 m-0'>گوشی شیائومی xyz500</p>
                        <hr className='m-0 p-0' />
                        <p className='description p-0 m-0'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است</p>
                    </div>
                    <div className="p-bottom d-flex flex-row-reverse gap-3">
                        <div className='price d-flex gap-1 align-items-center position-relative' data-amaz="true">
                            <strong className='byekan fs-6'>6,000,000</strong>
                            <strong className='byekan fs-6'>تومان</strong>
                        </div>

                        <div className='price amaz d-flex gap-1 align-items-center text-primary'>
                            <strong className='byekan fs-6'>5,000,000</strong>
                            <strong className='byekan fs-6'>تومان</strong>
                        </div>
                    </div>
                </div>
            </div>

            <div className="product col-4 p-3">
                <div className='box bg-white p-4'>
                    <div className="p-head">
                        <img src="https://dkstatics-public.digikala.com/digikala-products/8f435cb234a56316906e4384c485db63e58d798e_1598372344.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90" alt="" />
                    </div>
                    <div className="p-body d-flex flex-column gap-2 my-3">
                        <p className='name p-0 m-0'>هدفون شیائومی xyz500</p>
                        <hr className='m-0 p-0' />
                        <p className='description p-0 m-0'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است</p>
                    </div>
                    <div className="p-bottom d-flex flex-row-reverse gap-3">
                        <div className='price d-flex gap-1 align-items-center position-relative' data-amaz="false">
                            <strong className='byekan fs-6'>6,500,000</strong>
                            <strong className='byekan fs-6'>تومان</strong>
                        </div>
                    </div>
                </div>
            </div>

            <div className="product col-4 p-3">
                <div className='box bg-white p-4'>
                    <div className="p-head">
                        <img src="https://dkstatics-public.digikala.com/digikala-products/bd7648d55ffe49a0596ac3668f4db41f7c790f6a_1696760508.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90" alt="" />
                    </div>
                    <div className="p-body d-flex flex-column gap-2 my-3">
                        <p className='name p-0 m-0'>گوشی سامسونگ xyz500</p>
                        <hr className='m-0 p-0' />
                        <p className='description p-0 m-0'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است</p>
                    </div>
                    <div className="p-bottom d-flex flex-row-reverse gap-3">
                        <div className='price d-flex gap-1 align-items-center position-relative' data-amaz="true">
                            <strong className='byekan fs-6'>7,000,000</strong>
                            <strong className='byekan fs-6'>تومان</strong>
                        </div>

                        <div className='price amaz d-flex gap-1 align-items-center text-primary'>
                            <strong className='byekan fs-6'>6,400,000</strong>
                            <strong className='byekan fs-6'>تومان</strong>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Products