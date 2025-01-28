import { useState } from "react"
import { Link } from "react-router-dom"

const CaptainLogin = () => {

    const[email, setEmail] = useState(''); //Two-Way Binding...
    const[password, setPassword] = useState('');
    const[captainData, setCaptainData] = useState({});

    const submitHandler = (e) => {
        e.preventDefault();
        // console.log(email,password)
        setCaptainData({
            email: email,
            password: password
        })
        // console.log(userData.email)
        setEmail('')
        setPassword('')
    }

  return (
    <div className="p-7 h-screen flex flex-col justify-between">
        <div>
            <img className="w-16 mb-10" src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"></img>
        
            <form onSubmit={(e) => {
                submitHandler(e)
            }}>
                <h3 className="text-lg font-medium mb-2">What's your email</h3>
                <input
                    className="bg-[#eeeeee] mb-7 rounded px-4 py-2 w-full text-lg placeholder:text-base" 
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email" 
                    placeholder="John@example.com"
                />

                <h3 className="text-lg font-medium mb-2">Enter Password</h3>
                <input
                    className="bg-[#eeeeee] mb-7 rounded px-4 py-2 w-full text-lg placeholder:text-base" 
                    required 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password" 
                    placeholder="password"
                />

                <button
                    className="bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 w-full text-lg placeholder:text-base"            
                >Login
                </button>

                <Link to='/captain-signup' className="text-blue-600">New Capatin Here?</Link>
            </form>
        </div>

        <div>
            <Link to='/login'
                className="bg-[#f3c164] flex items-center justify-center text-white font-semibold mb-5 rounded px-4 py-2 w-full text-lg placeholder:text-base"
            >Sign in as User</Link>
        </div>
    </div>
  )
}
export default CaptainLogin