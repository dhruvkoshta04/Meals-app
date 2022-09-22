import React from 'react'
import { useState } from 'react'
import {useGlobalContext} from '../context'

function Search() {
    const {setSearchTerm, fetchRandomMeal} = useGlobalContext()
    const [text, setText] = useState('')

    const handleChange = (e) => {
        setText(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        if (text) {
            setSearchTerm(text)
        }
    }

    const handleRandomMeal = () => {
        setSearchTerm('')
        setText('')
        fetchRandomMeal()
    }
  return (
    <header className="search-container">
        <form onSubmit={handleSubmit}>
            <input 
            type="text" 
            className="form-input" 
            placeholder='type favourite meal'
            onChange={handleChange}
            value={text}
            />
            <button className="btn" type='submit'>Search</button>
            <button className='btn btn-hipster' onClick={handleRandomMeal}>Suprise me!</button>
        </form>
    </header>
  )
}

export default Search