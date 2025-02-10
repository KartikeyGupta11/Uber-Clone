import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import { CaptainDataContext } from "../context/CaptainContext"
import { useNavigate } from "react-router-dom"
import axios from "axios"

const CaptainSignUp = () => {
  const navigate = useNavigate()

  const [email, setEmail] = useState('');
  const [password,setPassword] = useState(''); //Two-Way Binding...
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [vehicleModel, setVehicleModel] = useState('');
  const [vehicleColor, setVehicleColor] = useState('');
  const [vehiclePlate, setVehiclePlate] = useState('');
  const [vehicleCapacity, setVehicleCapacity] = useState('');
  const [vehicleType, setVehicleType] = useState('');

  const {captain, setCaptain} = useContext(CaptainDataContext)

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log('User Registered')
    const captainData = {
      fullname:{
        firstName: firstName,
        lastName: lastName
      },
      email: email,
      password: password,
      vehicle:{
        model: vehicleModel,
        color: vehicleColor,
        plate: vehiclePlate,
        capacity: vehicleCapacity,
        vehicleType: vehicleType
      }
    }

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/register`, captainData)
    if(response.status === 201){
      const data = response.data
      setCaptain(data.captain)
      localStorage.setItem('token', data.token)
      navigate('/captain-home')
    }
      
    setFirstName('')
    setLastName('')
    setEmail('')
    setPassword('')
    setVehicleModel('')
    setVehicleColor('')
    setVehiclePlate('')
    setVehicleCapacity('')
    setVehicleType('')
  }

  return (
    <div className="p-7 h-screen flex flex-col justify-between">
        <div>
            <img className="w-16 mb-5" src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"></img>
        
            <form onSubmit={(e) => {
                submitHandler(e)
            }}>
                <h3 className="text-lg font-medium mb-2">What's your name</h3>
                <div className="flex gap-4 mb-3">
                  <input
                    className="bg-[#eeeeee] w-1/2 rounded px-4 py-2 text-base placeholder:text-sm" 
                    required
                    type="text" 
                    placeholder="John"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />

                  <input
                    className="bg-[#eeeeee] w-1/2 rounded px-4 py-2 text-base placeholder:text-sm" 
                    required
                    type="text" 
                    placeholder="Doe"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>

                <h3 className="text-lg font-medium mb-2">What's your email</h3>
                <input
                    className="bg-[#eeeeee] mb-3 rounded px-4 py-2 w-full text-base placeholder:text-sm" 
                    required
                    type="email" 
                    placeholder="John@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <h3 className="text-lg font-medium mb-2">Enter Password</h3>
                <input
                    className="bg-[#eeeeee] mb-3 rounded px-4 py-2 w-full text-base placeholder:text-sm" 
                    required 
                    type="password" 
                    placeholder="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <h3 className="text-lg font-medium mb-2">Vehicle Information</h3>
                <input
                    className="bg-[#eeeeee] mb-3 rounded px-4 py-2 w-full text-base placeholder:text-sm" 
                    required 
                    type="text" 
                    placeholder="Vehicle Model"
                    value={vehicleModel}
                    onChange={(e) => setVehicleModel(e.target.value)}
                />

                <div className="flex gap-4 mb-3">
                  <input
                    className="bg-[#eeeeee] w-1/2 rounded px-4 py-2 text-base placeholder:text-sm" 
                    required
                    type="text" 
                    placeholder="Vehicle Color"
                    value={vehicleColor}
                    onChange={(e) => setVehicleColor(e.target.value)}
                  />

                  <input
                    className="bg-[#eeeeee] w-1/2 rounded px-4 py-2 text-base placeholder:text-sm" 
                    required
                    type="text" 
                    placeholder="Vehicle Plate"
                    value={vehiclePlate}
                    onChange={(e) => setVehiclePlate(e.target.value)}
                  />
                </div>

                <div className="flex gap-4 mb-5">
                  <input
                    className="bg-[#eeeeee] w-1/2 rounded px-4 py-2 text-base placeholder:text-sm" 
                    required
                    type="number" 
                    placeholder="Vehicle Capacity"
                    value={vehicleCapacity}
                    onChange={(e) => setVehicleCapacity(e.target.value)}
                  />

                  <select
                    className="bg-[#eeeeee] w-1/2 rounded px-4 py-2 text-base placeholder:text-sm" 
                    required
                    type="text" 
                    placeholder="Vehicle Type"
                    value={vehicleType}
                    onChange={(e) => setVehicleType(e.target.value)}
                  >
                    <option value="" disabled>Select Vehicle Type</option>
                    <option value="Auto">Auto</option>
                    <option value="Bike">Bike</option>
                    <option value="HatchBack">HatchBack</option>
                    <option value="Sedan">Sedan</option>
                    <option value="SUV">SUV</option>
                  </select>
                </div>

                <button
                    className="bg-[#111] text-white font-semibold rounded mb-1 px-4 py-2 w-full text-base placeholder:text-sm"            
                >Register
                </button>

                <Link to='/captain-login' className="text-blue-600 text-sm">Already have an Account?</Link>
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
export default CaptainSignUp