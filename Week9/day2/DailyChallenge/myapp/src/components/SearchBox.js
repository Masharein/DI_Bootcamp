import React from 'react'

const SearchBox = ({searchChange}) => {
    return (
        <div style={{display:'flex', justifyContent: 'center'}}>
        <input 
        style={{height:'40px', width: '300px', textAlign: 'center', marginBottom: '10px'}}
        type='search' 
        placeholder='search robot'
        onChange={searchChange}/>
        </div>
    )
}
export default SearchBox