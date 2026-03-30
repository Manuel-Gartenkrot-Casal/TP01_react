import './Buscador.css'

function Buscador() {
    return (
        <div id="search-bar" role="search" aria-label="Buscador">
            <form class="search-form" action="#" method="get" role="search">
                <label for="q" class="visually-hidden">Buscar</label>
                <input id="q" name="q" type="search" placeholder="Buscar..." aria-label="Buscar" />
                <button type="submit" aria-label="Buscar">Buscar</button>
            </form>
        </div>
    )
}

export default Buscador