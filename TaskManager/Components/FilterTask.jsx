import React from 'react'

const FilterTask = ({ setFilter }) => {
    return (
        <>
            <div  style={{ margin:11 }}>
                <button style={{ padding:8, margin:5, backgroundColor: 'antiquewhite', border: '1px solid grey', borderRadius:3}} onClick={() => setFilter('all')}>all</button>
                <button style={{ padding:8, margin:5, backgroundColor:'antiquewhite', border: '1px solid grey', borderRadius:3}} onClick={() => setFilter('completed')}>completed</button>
                <button style={{ padding:8, margin:5, backgroundColor:'antiquewhite', border: '1px solid grey', borderRadius:3}} onClick={() => setFilter('pending')}>pending</button>
            </div>
        </>
    )
}

export default FilterTask