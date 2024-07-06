import { useDispatch } from "react-redux";
import { setIsLogin } from "../redux/loginSlice";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login =()=>{
    const [user,setUser]=useState({
        email:"",
        password:""
    })
    const navigate = useNavigate();
const dispatch=useDispatch();
 const handleInputChange=(e)=>{
setUser({  ...user, [e.target.name]:e.target.value }) ;
 }
 const handleSubmit = (e) => {
    e.preventDefault();
    if (user.email === "hamza@hamza.ma" && user.password === "123456") {
        dispatch(setIsLogin({ isLogin: true, user: user.email }));
        navigate("/");
    } else {
        alert("Email ou mot de passe incorrect");
    }
};
    return (
<div className="login">

<form class="max-w-sm mx-auto" onSubmit={handleSubmit}>
    <h2 className="titre-login">Login</h2>
  <div class="mb-5">
    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
    <input type="email" id="email" name="email" value={user.email} onChange={handleInputChange} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  required />
  </div>
  <div class="mb-5">
    <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
    <input type="password" id="password" name="password" value={user.password} onChange={handleInputChange} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
  </div>
  <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
</form>
</div>

      
    );
}

export default Login;