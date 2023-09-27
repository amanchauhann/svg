import "./GameCard.css"

const GamesCard = ({ setNewGameForm, setShowForm, setFromUpdate, setExistingGames, ...eachGame }) => {
    const { name, url, author, published_date, id } = eachGame
    const updateHandler = () => {
        setNewGameForm({
            id,
            name,
            url,
            author,
            published_date,
        })
        setFromUpdate(true)
        setShowForm(true)
    }

    const deleteHandler = () => {
        const existingGames = JSON.parse(localStorage?.getItem('newGameForm'))
        const updated = existingGames.filter((each) => each.id !== id);
        localStorage.setItem("newGameForm", JSON.stringify(updated));
        setExistingGames(updated)
        setShowForm(false)
    }

    return (
        <div className="myGamesContainer">
            <h2 className="GameCardName">{name}</h2>
            <p >URL: <span className="fontWeight">{url}</span></p>
            <p>Author: <span className="fontWeight">{author}</span></p>
            <p>Published Date: <span className="fontWeight">{published_date}</span></p>
            <button onClick={updateHandler}>Update</button>
            <button onClick={deleteHandler}>Delete</button>
        </div>
    )
}

export default GamesCard