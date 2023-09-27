import { useState } from "react"
import "./Form.css"
import { v4 as uuidv4 } from 'uuid';


const Form = ({ setShowForm, setNewGameForm, newGameForm, toUpdate }) => {
    const existingGames = JSON.parse(localStorage?.getItem('newGameForm')) || []

    const submitHandler = (e) => {
        e.preventDefault()
        localStorage.setItem("newGameForm", JSON.stringify([{ ...newGameForm }, ...existingGames]));
        resetHandler()
        setShowForm(false)
    }

    const resetHandler = () => {
        setNewGameForm({
            id: "",
            name: "",
            url: "",
            author: "",
            published_date: ""
        })
    }

    const cancelHandler = () => {
        resetHandler()
        setShowForm(false)
    }
    const updateHandler = () => {

        const updatedGames = existingGames.map((each) => {
            if (each.id === newGameForm.id) {
                return newGameForm; // Update the existing game
            } else {
                return each; // Keep other games as they are
            }
        });
        localStorage.setItem("newGameForm", JSON.stringify([...updatedGames]));
        resetHandler()
        setShowForm(false)
    }
    return (
        <>
            <div className="add_address_form">
                <form onSubmit={submitHandler}>
                    <div className="formUpperContainer">
                        <input required value={newGameForm.name} onChange={(e) => setNewGameForm(prev => ({ ...prev, name: e.target.value }))} className="formInput" type="text" placeholder="game name" />

                        <input required value={newGameForm.url} onChange={(e) => setNewGameForm(prev => ({ ...prev, url: e.target.value }))} className="formInput" type="text" placeholder="URL" />

                        <input required value={newGameForm.author} onChange={(e) => setNewGameForm(prev => ({ ...prev, author: e.target.value }))} className="formInput" type="text" placeholder="Author" />

                        <input required value={newGameForm.published_date} onChange={(e) => setNewGameForm(prev => ({ ...prev, published_date: e.target.value }))} className="formInput" placeholder="Published (2022-08-03)" />
                    </div>
                    <div className="addGameBtnContainer">
                        {toUpdate ?
                            <button className="gameFormBtn gameAdd" onClick={updateHandler}>Update</button> :
                            <button type="submit" className="gameFormBtn gameAdd">Add</button>
                        }


                        <button className="gameFormBtn gameReset" onClick={resetHandler}>Reset</button>
                        <button className="gameFormBtn gameCancel" onClick={cancelHandler}>Cancel</button>
                    </div>

                </form>
            </div>
        </>
    )
}

export default Form;