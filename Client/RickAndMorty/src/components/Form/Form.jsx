import {ContainerForm, TagForm, SubmitBtn, InputForm, LabelForm} from "./FormStyle.js"
import { useState } from "react";
import { validation } from "./validation";



function Form({login}) {
    const [userData, setUserData] = useState({
        email: "",
        password: ""
    })

    const [errors, setErrors] = useState({})

    function handleChange(evento) {
        setErrors(validation({ ...userData, [evento.target.name]: evento.target.value })) 
        setUserData({ ...userData, [evento.target.name]: evento.target.value }) 
    }

    const handleSubmit = (evento) =>{
        evento.preventDefault()
        login(userData)
    }

    return (
        <ContainerForm>
            
            <TagForm onSubmit={handleSubmit}>
                 <h1>Welcome</h1>
                <LabelForm htmlFor="email">Email
                <InputForm type="text" placeholder="steve25@gmail.com" id="email" name="email" value={userData.email} onChange={handleChange} />
                </LabelForm>
                {errors.email && (<p>{errors.email}</p>)}

                <LabelForm htmlFor="password">Password
                    <InputForm type="password" placeholder="" id="password" name="password" value={userData.password} onChange={handleChange} />
                </LabelForm>
                {errors.password && (<p>{errors.password}</p>)}
                <SubmitBtn type="submit" >Submit</SubmitBtn>
            </TagForm>
        </ContainerForm>
    )
}

export default Form;