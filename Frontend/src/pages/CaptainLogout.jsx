import axios from "axios"
import { useNavigate } from "react-router-dom"

const UserLogout = () => {
    const token = localStorage.getItem("token")
    const navigate = useNavigate();
    axios.get(`${import.meta.env.VITE_BASE_URL}/users/logout`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }).then((response) => {
        if(response.status === 200) {
            localStorage.removeItem("token")
            console.log(response.status);
            navigate("/login")
        }
    })

  return (
    <div>UserLogout</div>
  )
}
export default UserLogout


// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import { useEffect } from "react";

// const CaptainLogout = () => {
//   const token = localStorage.getItem("token");
//   const navigate = useNavigate();

//   useEffect(() => {
//     // Ensure the side effect is handled within useEffect
//     const logoutUser = async () => {
//       try {
//         const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/captains/logout`, {
//           headers: {
//             Authorization: `Bearer ${token}`
//           }
//         });
//         console.log(response.status);
//         if (response.status === 200) {
//           localStorage.removeItem("token");
//           navigate("/login"); // Navigate after the successful logout
//         }
//       } catch (error) {
//         console.error("Logout failed:", error);
//       }
//     };

//     logoutUser();
//   }, [navigate, token]); // Dependencies for useEffect

//   return (
//     <div>CaptainLogout</div>
//   );
// };

// export default CaptainLogout;