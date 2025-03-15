import React from 'react'

const FilterNumber = () => {
    const numbers = [1, 4, 6, 13, 44, 55, 88];

    // const filteredNumbers = numbers.filter((num)=>num/2==0)
    // console.log(filteredNumbers);
    
    return (
        <>
            <div>
                <p>Filtered even numbers are: </p>
                {numbers.filter((data)=>(data % 2 == 0 + '')).join(' ')}
            </div >
        </>
    )
}

export default FilterNumber