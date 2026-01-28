import styles from './Main.module.css'
import SearchBar from './SearchBar'

function Main() {
    return (
        <>
            <h1>Dog API</h1>
            <p>Pesquise a raça de um cachorro</p>
            <SearchBar />
        </>
    )
}

export default Main