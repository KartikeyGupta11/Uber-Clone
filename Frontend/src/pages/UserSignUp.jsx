import { useState } from "react"
import { Link } from "react-router-dom"

const UserSignUp = () => {
  const [email, setEmail] = useState('');
  const [password,setPassword] = useState(''); //Two-Way Binding...
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [userData, setUserData] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();
    console.log('User Registered')
    setUserData({
      fullName:{
        firstName: firstName,
        lastName: lastName
      },
        email: email,
        password: password,
      })
      // console.log(userData.username.firstName)
      setFirstName('')
      setLastName('')
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
                <h3 className="text-lg font-medium mb-2">What's your name</h3>
                <div className="flex gap-4 mb-5">
                  <input
                    className="bg-[#eeeeee] w-1/2 rounded px-4 py-2 text-lg placeholder:text-base" 
                    required
                    type="text" 
                    placeholder="John"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />

                  <input
                    className="bg-[#eeeeee] w-1/2 rounded px-4 py-2 text-lg placeholder:text-base" 
                    required
                    type="text" 
                    placeholder="Doe"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>

                <h3 className="text-lg font-medium mb-2">What's your email</h3>
                <input
                    className="bg-[#eeeeee] mb-5 rounded px-4 py-2 w-full text-lg placeholder:text-base" 
                    required
                    type="email" 
                    placeholder="John@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <h3 className="text-lg font-medium mb-2">Enter Password</h3>
                <input
                    className="bg-[#eeeeee] mb-5 rounded px-4 py-2 w-full text-lg placeholder:text-base" 
                    required 
                    type="password" 
                    placeholder="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button
                    className="bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 w-full text-lg placeholder:text-base"            
                >Register
                </button>

                <Link to='/login' className="text-blue-600">Already have an Account?</Link>
            </form>
        </div>

        <div>
            <p className="text-[10px] leading-tight">
              This site is protected by reCAPTCHA and the <span className="underline text-blue-600">Google Privacy Policy</span> and <span className="underline text-blue-600">Terms of Service apply</span>.
            </p>
        </div>
    </div>
  )
}
export default UserSignUp