import styles from "./Paginated.module.css";

const Paginated = ({ showPerPage, pokemons, paginate, page }) => {

    const pageNumber = [];
    const total = Math.ceil(pokemons / showPerPage);

    for ( let i=1; i <= total; i++){
        pageNumber.push(i)
    };

    return (
        <div className={styles.paginate}>

            <button
            className={styles.prev}
            onClick={page > 1 ? () => paginate(page - 1) : null}
            disabled={page === 1 ? true : false}
            >
            Prev
            </button>        

            {pageNumber.length > 0 && pageNumber.map((number) => {
                return (
                    <button
                    className={styles.prev}
                    key={number}
                    onClick={() => paginate(number)}
                    >
                    {number}
                    </button>
                );})
            }

            <button
            className={styles.prev}
            onClick={page < total ? () => paginate(page + 1) : null}
            disabled={page === total ? true : false}
            >
            Next
            </button>
            </div>        
    );
};

export default Paginated;