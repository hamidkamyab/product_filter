import React, { useState } from 'react'

function Tabs({ categories,filterProduct }) {
    const [Active, setActive] = useState(0)
    const handleClick = (index,item)=>{
        setActive(index);
        filterProduct(item)
    }
    return (
        <ul className='tabs list-unstyled d-flex align-items-center gap-2'>
            {
                categories.map((item, index) => {
                    return (
                        <li className='tab-item p-2 position-relative' data-active={Active == index ? "true" : "false"} role='button' onClick={() => handleClick(index,item)} key={index} >
                            <span>{item}</span>
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default Tabs