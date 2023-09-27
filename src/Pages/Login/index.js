import "./Login.css"
import { useContext, useState } from "react"
import { useNavigate } from "react-router";


const Login = () => {
    const [loginDetails, setLoginDetails] = useState({
        email: "admin@gmail.com",
        password: "admin"
    })
    const [error, setError] = useState("")
    const navigate = useNavigate()
    const submitHandler = (e) => {
        e.preventDefault()
        if (loginDetails.email === "admin@gmail.com" && loginDetails.password === "admin") {
            setError("")
            navigate("/")
        } else {
            setError("Enter valid Credentials")
        }
    }
    return (
        <div className="container">
            <div className="mainLoginContainer">
                <h1>Sign in</h1>
                <div className="lowerContainer">
                    <form onSubmit={submitHandler}>
                        {/* Email */}
                        <div className="loginItem">
                            <label for="email">Email Address:</label>
                            <input required id="email" className="email" onChange={(e) => setLoginDetails(prev => ({ ...prev, email: e.target.value }))} value={loginDetails.email} />
                        </div>
                        {/* Password */}
                        <div className="loginItem">
                            <label for="password">Password:</label>
                            <input required id="password" className="password" onChange={(e) => setLoginDetails(prev => ({ ...prev, password: e.target.value }))} value={loginDetails.password} />
                        </div>
                        {error && <p className="error">{error}</p>}
                        {/* Buttons */}
                        <button type="submit" className="submitBtn">Login</button>
                    </form>
                </div>
            </div>
        </div>

    )
}

export default Login;