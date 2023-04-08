import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getTypes } from "../../Redux/actions";
import styles from "./Form.module.css";
import axios from "axios";

const Form = () => {
 
    const dispatch = useDispatch();
    const types = useSelector((state) => state.types)
    const history = useHistory();

    const [form, setForm] = useState({
        name: "", 
        image: "", 
        attack: "", 
        defense: "", 
        speed: "",  
        typeOne: "", 
        typeTwo: ""
    });
    
    useEffect(() => {
        dispatch(getTypes())
    },[dispatch])
    
    const [errors, setErrors] = useState({
        name: "", 
        image: "", 
        attack: "", 
        defense: "", 
        speed: "",  
        typeOne: "", 
        typeTwo: ""
    });

    const changeHandler = (event) => {
        const property = event.target.name;
        const value = event.target.value;
        setErrors (validate ({...form, [property]:value}));
        setForm ({...form, [property]:value});      
    };

    const validate = (form) => {
        let errors = {};
        if (!form.name.trim()){
            errors.name = "These characters are required.";            
        } else if (!/^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/.test(form.name.trim())){
            errors.name = "This feature must contain only letters.";            
        }

        if (!form.image){
            errors.image = "These characters are required.";        
        }        
        
        if (!form.attack){
            errors.attack = "These characters are required.";
        }else if (/^\d*\.\d+$/.test(form.attack)){
            errors.attack = "Please enter a whole number.";
        }

        if (!form.defense){
            errors.defense = "These characters are required.";
        }else if (/^\d*\.\d+$/.test(form.defense)){
            errors.defense = "Please enter a whole number.";
        }

        if (!form.speed){
            errors.speed = "These characters are required.";
        }else if (/^\d*\.\d+$/.test(form.speed)){
            errors.speed = "Please enter a whole number.";
        }
    
        return errors;
    };

    const handleTypeOne = (event) => {
        setForm({ ...form, typeOne: event.target.value });
    };  
    
    const handleTypeTwo = (event) => {
        setForm({ ...form, typeTwo: event.target.value });
    };

    const submitHandler = (event) => {
        event.preventDefault()    
        axios.post("http://localhost:3003/pokemon",form)
        .then(res => alert(`${form.name} is your new pokemon`))
        history.push("/home");       
    };

    return (
        
        <div className={styles.init}>
            <header className={styles.title}>Let's create a pokemon !...</header>

            <div className={styles.container}>                 
                <form className={styles.form} onSubmit={submitHandler} >                  
                <span className={styles.text1}>Enter the characteristics of your pokemon !</span>     
            <div>
            <div>
                <label className={styles.text} >Name:</label>
                <input 
                    type="text" 
                    value={form.name} 
                    onChange={changeHandler} 
                    name="name" 
                    className={styles.input} 
                    placeholder="Write the name..." 
                />
                {errors.name && <span className={styles.error}>{errors.name}</span>}
            </div>

            <div>
                <label className={styles.text}>Image:</label>
                <input 
                    type="text" 
                    value={form.image} 
                    onChange={changeHandler} 
                    name="image" 
                    className= {styles.input} 
                    placeholder="Paste the image link..." 
                />                
                {errors.image && <span className={styles.error}>{errors.image}</span>}
            </div>

            <div>
                <label className={styles.text} >Attack:</label>
                <input 
                    type="text" 
                    value={form.attack} 
                    onChange={changeHandler} 
                    name="attack" 
                    className={styles.input}
                />
                {errors.attack && <span className={styles.error}>{errors.attack}</span>}
            </div>

            <div>
                <label className={styles.text} >Defense:</label>
                <input 
                    type="text" 
                    value={form.defense} 
                    onChange={changeHandler} 
                    name="defense" 
                    className={styles.input}
                />
                {errors.defense && <span className={styles.error}>{errors.defense}</span>}
            </div>

            <div>
                <label className={styles.text} >Speed:</label>
                <input 
                    type="text" 
                    value={form.speed} 
                    onChange={changeHandler} 
                    name="speed" 
                    className={styles.input} 
                />
                {errors.speed && <span className={styles.error}>{errors.speed}</span>}
            </div>

            <div>
                <label className={styles.text} >Type One:</label>
                <select 
                    className={styles.input} 
                    onChange={handleTypeOne} 
                    name ="types" >  

                    {types.map((typ) =>{
                        return (
                        <option key={typ.id} value={typ.name}>{typ.name}</option>
                    )})}                    
                </select>
            </div>

            <div>
                <label className={styles.text} >Type Two:</label>
                <select 
                    className={styles.input} 
                    onChange={handleTypeTwo} 
                    name ="types" > 
                                   
                    {types.map((typ) =>{
                        return (
                        <option key={typ.id} value={typ.name}>{typ.name}</option>
                    )})}                    
                </select>
            </div>

            <div>
                <button className={styles.button} type="submit" >CREATE POKEMON</button>
            </div>

            </div>
                                     
                </form>
            </div>
        </div>        
    )
};

export default Form;


            