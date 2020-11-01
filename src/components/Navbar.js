import React, { useState } from 'react'
import "./styles/navbar.css";
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import { Button, FormControl } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';

function Navbar() {

    const [input, setInput] = useState("");

    const formSubmit = async (event) => {
        event.preventDefault()
        const search_term = input;
        const request = await fetch(process.env.API_URL);
        const data = await request.json();
        console.log(data.results);
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
