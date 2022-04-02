import { createUserWithEmailAndPassword } from "firebase/auth"
import React, { useState } from "react"
import Button from "../../components/Button/Button"
import Email from "../../components/Email/Email"
import Form from "../../components/Form/Form"
import FormLowerLabel from "../../components/FormLowerLabel/FormLowerLabel"
import FormTitle from "../../components/FormTitle/FormTitle"
import Layout from "../../components/Layout/Layout"
import Password from "../../components/Password/Password"
import { auth } from "../../firebase-config"

function RegisterView() {
    const [input, setInput] = useState({
        email: "",
        password: "",
        confirmation: ""
    })

    const onChange = (e) => {
        const {name, value} = e.target
        setInput(prev => {
            return {
                ...prev,
                [name]: value
            }
        })
    }

    const onClick = async () => {
        try {
            if (input.password !== input.confirmation) {
                throw new Error('Password not confirmed')
            }
            await createUserWithEmailAndPassword(auth, input.email, input.password)
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <Layout>
            <Form>
                <FormTitle type="register" />
                <Email value={input.email} onChange={onChange}/>
                <Password value={input.password} onChange={onChange}/>
                <Password confirmation value={input.confirmation} onChange={onChange}/>
                <Button type="register" onClick={onClick} />
                <FormLowerLabel type="register" />
            </Form>
        </Layout>
    )
}

export default RegisterView