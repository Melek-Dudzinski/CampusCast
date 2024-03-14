import './login.css'
import Link from 'next/link'
import Header from './header.js'
import Form from './form.js'

export default function Login() {
    return (
        <>
            <Header />
            <div class="login-box">
                <Form />
            </div>
    </>
    )
}