import { useEffect, useState } from "react";
import axios from "axios"
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getTypes } from "../../Redux/actions";
import styles from "./Form.module.css"

const Form = () => {

    //manejo del estado 
    const dispatch = useDispatch();
    const pokemons = useSelector((state) => state.pokemons);
    const types = useSelector((state) => state.types)
    const history = useHistory();

    //1-llama al estado global 
    const [form, setForm] = useState({

        name: "",
	    image: "",
	    hp: 0,  
	    attack: 0, 
	    defense: 0, 
	    speed: 0, 
	    height: 0, 
	    weight: 0,
	    types: [],
    });

    console.log(form);
    
    useEffect(() => {
        dispatch(getTypes())
    },[dispatch])
    
    //2-vamos a validar que la informacion que se va ingresar al estado sea correcta con lo rrequerido
    const [errors, setErrors] = useState({});

    //3-cambia el estado global//recibe la informacion y la guarda en el estado
    const changeHandler = (event) => {

        const property = event.target.name;
        const value = event.target.value;

        setErrors(validate ({...form, [property]:value}));// setea los errores en el estado 
        setForm ({...form, [property]:value}); // setea el estado con los nuevos valores      
    };

    //4- esta es la funcion que se encarga de validar la informacion que se recibe en los inputs
    const validate = (form) => {

        let errors = {};

        if (!form.name.trim()){
            errors.name = "This feature is required.";            
        } else if (!/^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/.test(form.name.trim())){
            errors.name = "This feature must contain only letters.";            
        }

        if (!form.image){
            errors.image = "This feature is required.";        
        }
        
        if (!form.hp){
            errors.hp = "This feature is required.";
        }else if (/^\d*\.\d+$/.test(form.hp)){
            errors.hp = "The value of this feature must be an integer.";
        }

        if (!form.attack){
            errors.attack = "This feature is required.";
        }else if (/^\d*\.\d+$/.test(form.hp)){
            errors.hp = "The value of this feature must be an integer.";
        }

        if (!form.defense){
            errors.defense = "This feature is required.";
        }else if (/^\d*\.\d+$/.test(form.hp)){
            errors.hp = "The value of this feature must be an integer.";
        }

        if (/^\d*\.\d+$/.test(form.speed)){
            errors.speed = "The value of this feature must be an integer.";
        }

        if (/^\d*\.\d+$/.test(form.height)){
            errors.height = "The value of this feature must be an integer.";
        }

        if (/^\d*\.\d+$/.test(form.weight)){
            errors.weight = "The value of this feature must be an integer.";
        }

        return errors;
    };

    const handleSelect = (event) => {

        setForm({
            ...form, types: [...form.types, event.target.value]
        });
    };    

    //6 vamos a enviar el nuevo pokemon a la ruta de creacion de la base de datos 
    const submitHandler = (event) => {

        event.preventDefault(); //evita que se recargue la pagina

        if (!errors.name) {

            if(pokemons.find((pokemon) => pokemon.name === form.name)){
                alert("There's already a pokemon with that name");
                setForm({});
                history.push("/home");
            }
        
            axios.post("http://localhost:3001/pokemon",form)
            setForm({});
            alert("Let's check out ours Pokemons!");
            history.push("/home");

        } else if (errors.name){
            alert("Error. Please try again");
            setForm({});
        }        
    };

    return (
        <div className={styles.form}>

            <h1 className={styles.text1} >¿Are we going to create a Pokémon?</h1>
            <p className={styles.text1}>enter the characteristics of your pokemon!</p>        

        <form 
        className={styles.form}
        onSubmit={submitHandler}>
            <div>
                <label
                className={styles.text}
                >Name:</label>
                <input 
                type="text"
                value={form.name}
                onChange={changeHandler}
                name="name"
                />
                {errors.name && <span className={styles.error}>{errors.name}</span>}
                
            </div>

            <div>
                <label
                className={styles.text}
                >Image:</label>
                <input 
                type="file"
                value={form.image}
                onChange={changeHandler}
                name="image"
                className= {styles.error}
                />
                
            </div>

            <div>
                <label
                className={styles.text}
                >Hp ("life"):</label>
                <input 
                type="number"
                value={form.hp}
                onChange={changeHandler}
                name="hp"
                />
                {errors.hp && <span className={styles.error}>{errors.hp}</span>}
            </div>

            <div>
                <label
                className={styles.text}
                >Attack:</label>
                <input 
                type="number"
                value={form.attack}
                onChange={changeHandler}
                name="attack"
                />
                {errors.attack && <span className={styles.error}>{errors.attack}</span>}
            </div>

            <div>
                <label
                className={styles.text}
                >Defense:</label>
                <input type="number"
                value={form.defense}
                onChange={changeHandler}
                name="defense"
                />
                {errors.defense && <span className={styles.error}>{errors.defense}</span>}
            </div>

            <div>
                <label
                className={styles.text}
                >Speed:</label>
                <input type="number"
                value={form.speed}
                onChange={changeHandler}
                name="speed"
                />
                {errors.speed && <span className={styles.error}>{errors.speed}</span>}
            </div>

            <div>
                <label
                className={styles.text}
                >Height:</label>
                <input type="number"
                value={form.height}
                onChange={changeHandler}
                name="height"
                />
                {errors.height && <span className={styles.error}>{errors.height}</span>}
            </div>

            <div>
                <label
                className={styles.text}
                >Weight:</label>
                <input type="number"
                value={form.weight}
                onChange={changeHandler}
                name="weight"
                />
                {errors.weight && <span className={styles.error}>{errors.weight}</span>}
            </div>

            <div>
                <label
                className={styles.text}
                >Types:</label>
                <select
                onChange={handleSelect}
                name ="types">
                    {types.map((typ) =>{
                        return (
                        <option key={typ.id} value={typ.name}>{typ.name}</option>
                    )})}                    
                </select>
                <ul>
                    <li>{form.types.map(elem => elem + " - ")}</li>
                </ul>
            </div>

            <button
                className={styles.button}
                type="submit"
                >CREATE POKEMON</button>
        </form>

        </div>
    )
};

export default Form;