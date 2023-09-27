import { useEffect, useState } from "react";
import Form from "../../Components/Form";
import GamesCard from "../../Components/Games/GamesCard";
import "./Home.css"
import { v4 as uuidv4 } from 'uuid';

const Home = () => {
    const [showForm, setShowForm] = useState(false)
    const [fromUpdate, setFromUpdate] = useState(false)
    const [existingGames, setExistingGames] = useState([])
    const Game = {
        "id": 999,
        "name": "Bottle Flip",
        "url": "https://simpleiralgames.com",
        "author": "Simple Viral Games",
        "published_date": "2022-08-01"
    }
    const [newGameForm, setNewGameForm] = useState({
        id: uuidv4(),
        name: "",
        url: "",
        author: "",
        published_date: ""
    })

    const gamesFromLocal = JSON.parse(localStorage?.getItem('newGameForm')) || []
    useEffect(() => {
        setExistingGames(gamesFromLocal)
    }, [showForm])
    return (
        <div className="homeContainer">
            <div className="addGameContainer">
                <nav className="gameNav">
                    My games
                </nav>
                <div className="Gamesmain">
                    {showForm && <Form setShowForm={setShowForm} setNewGameForm={setNewGameForm} newGameForm={newGameForm} toUpdate={fromUpdate} />}
                    {!showForm && <div className="addGame" onClick={() => setShowForm(true)}>Add new Game</div>}
                    <h3 className="myGamesTitle">My games</h3>
                    <div className="gamesContainer">
                        {existingGames.map((eachGame) => <GamesCard {...eachGame} setNewGameForm={setNewGameForm} setShowForm={setShowForm} setFromUpdate={setFromUpdate} setExistingGames={setExistingGames} />)}
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Home;