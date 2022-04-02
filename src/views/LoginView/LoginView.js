import { signInWithEmailAndPassword } from 'firebase/auth'
import React, { useState } from 'react'
import Button from '../../components/Button/Button'
import Form from "../../components/Form/Form"
import Password from '../../components/Password/Password'
import { auth } from '../../firebase-config'
import Email from '../../components/Email/Email'
import FormTitle from '../../components/FormTitle/FormTitle'
import FormLowerLabel from '../../components/FormLowerLabel/FormLowerLabel'
import "./LoginView.css"
import Layout from '../../components/Layout/Layout'

function LoginView() {
    const [input, setInput] = useState({
        email: "",
        password: ""
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
            await signInWithEmailAndPassword(auth, input.email, input.password)
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <Layout>
            <Form>
                <FormTitle type="login" />
                <Email onChange={onChange} value={input.email} />
                <Password onChange={onChange} value={input.password} />
                <Button type="login" onClick={onClick} />
                <FormLowerLabel type="login" />
            </Form>
        </Layout>
    )
}

export default LoginView