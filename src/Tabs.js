import React from 'react'

function Tabs() {
  return (
    <ul className='tabs list-unstyled d-flex align-items-center gap-2'>
        <li className='tab-item p-2 position-relative' data-active="true" role='button'>
            <span>همه</span>
        </li>
        <li className='tab-item p-2 position-relative' role='button'>
            <span>لپ تاپ</span>
        </li>
        <li className='tab-item p-2 position-relative' role='button'>
            <span>هدفون</span>
        </li>
        <li className='tab-item p-2 position-relative' role='button'>
            <span>موبایل</span>
        </li>
    </ul>
  )
}

export default Tabs