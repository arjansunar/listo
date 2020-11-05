import React, { useState } from 'react'
import "./styles/navbar.css";
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import { Button, FormControl } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import { useDispatch } from "react-redux"
import { searchRequest, searchSuccess, searchFailure } from '../features/Search/searchSlice'

function Navbar() {

    const dispatch = useDispatch()
    const [input, setInput] = useState("");

    const formSubmit = async (event) => {
        event.preventDefault()
        const search_term = input;
        try {
            dispatch(searchRequest())
            const request = await fetch(`https://api.jikan.moe/v3/search/anime?q=${search_term}&page=1`);
            const data = await request.json();
            dispatch(searchSuccess(data.results))

        } catch (error) {
            dispatch(searchFailure(error))
        }
    }
    return (
        <nav className="navbar__nav">
            <div className="navbar__logo_formwrapper">
                <h1 className="navbar__logo">Listo</h1>
                <form className="navbar__form" >
                    <FormControl className="navbar__formControl">
                        <input className="navbar__input" placeholder="Enter anime name" value={input} onChange={e => {
                            setInput(e.target.value)
                            console.log(input)

                        }} />
                        <IconButton
                            className="navbar__iconButton"
                            disabled={!input}
                            color="primary"
                            variant="outlined"
                            type="submit"
                            onClick={formSubmit}
                        >
                            <SearchRoundedIcon className="navbar__searchIcon" />

                        </IconButton>
                    </FormControl>
                </form>
            </div>
            <Button variant="contained" className="navbar__button">
                Sign in
            </Button>
        </nav>
    )
}

export default Navbar
