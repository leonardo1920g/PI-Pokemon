

const Paginated = ({pokemonsForPage, allPokemons, paginated} ) => {

    const pageNumber = [];

    for ( let i=0; i <= Math.ceil(allPokemons/pokemonsForPage); i++){
        pageNumber.push(i+1)
    }

    return (
        <nav>
            <ul className="paginated">
                { pageNumber && pageNumber.map(number => (
                    <li className="number" key={number}>
                    <a onClick={() => paginated(number)}>{number}</a>
                    </li>
                ))}
            </ul>
        </nav>
    )

};

export default Paginated;