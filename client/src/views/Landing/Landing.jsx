import { Link } from "react-router-dom";
import styles from "./Landing.module.css";
import Swal from "sweetalert2";


const Landing = () => {

    const handlerSubmit = () => {
        Swal.fire({
            title: `Welcome master pokemon`,
            text: "¡ Let's catch them all !",
            confirmButtonColor: 'rgb(230, 37, 37)',
            confirmButtonText: 'Continue',
        })                     
    }

    return (
        <div className={styles.landing}>
            <Link to={`/home`}>
                <button className={styles.button} type="submit" onClick={handlerSubmit}>ENTER</button>
            </Link>            
        </div>
    )
};

export default Landing;