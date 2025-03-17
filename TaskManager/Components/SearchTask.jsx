import React from 'react'

const SearchTask = ({ setSearch }) => {
    return (
        <>
            <div style={{margin:19}}>
                <input type="text"
                    style={{padding:8,border:'1px solid lightGrey', borderRadius:4}}
                    placeholder='Search your tasks...'
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>
        </>
    )
}

export default SearchTask