import React from 'react'

function TopButtons() {
    const cities = [
        {
            id:1,
            title:'Adelaide'
        },
        {
            id:2,
            title:'Sydney'
        },
        {
            id:3,
            title:'Beijing'
        },
        {
            id:4,
            title:'Shanghai'
        },
        {
            id:5,
            title:'London'
        }
    ];

    // 创建了上面的数组后，要进行循环 要注意若箭头函数返回是一个对象，需要加上括号；若有多条语句，就要使用大括号将它们括起来，并且使用return语句返回。
    return (
        <div className='flex items-center justify-around my-6'>
            {cities.map((city) => (
                <button key={city.id} className='text-white text-lg font-medium'>{city.title}</button>
            ))}
        </div>
    ); 
}

export default TopButtons;

