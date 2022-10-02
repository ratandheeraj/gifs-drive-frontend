import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const baseURL = "http://localhost:8000/api/v1/users/login";

function Login() {
  const navigate = useNavigate();
	function loginUser() {
		const jsonBody = {
			email : email,
			password : password
		}
		console.log("baseUrl", baseURL);
		console.log(jsonBody);
		axios.post(baseURL, jsonBody)
		.then((response) => {
		if(response.status == "201") {
			console.log("success");
			localStorage.setItem("toptal", response?.data?.token);
			navigate('/home');
		} else {
			console.log(response)
			alert("Error while logging the user");
		}
		});
	
	}

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");


  return (
    <main class="container my-8 mx-auto flex justify-center">
    <div
      class="w-full xl:w-1/2 py-4 px-8 border-2 border-slate-100 rounded-md"
    >
      <h1 class="text-xl font-medium text-center">
        Login To Your Account
      </h1>
      <form class="mt-4 flex flex-col gap-4">
        <div class="flex flex-col gap-1">
          <label for="email" class="text-lg font-medium"
            >Enter Email</label
          >
          <input
            class="w-full outline-none border-slate-100 border p-2 rounded-md focus:border-slate-800 focus:border-2"
            type="email"
            id="email"
            placeholder="john@example.com"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div class="flex flex-col gap-1">
          <label for="password" class="text-lg font-medium"
            >Enter Password</label
          >
          <input
            class="w-full outline-none border-slate-100 border p-2 rounded-md focus:border-slate-800 focus:border-2"
            type="password"
            id="password"
            placeholder="**************"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <input
            type="button"
            value="Login"
            class="py-1 px-8 bg-slate-800 text-white rounded-md text-lg cursor-pointer"
            onClick={loginUser}
          />
        </div>
      </form>
      <div class="flex mt-8 justify-center">
        <h2 class="text-lg">
          Don't have an account?
          <a href="./register.html" class="underline">
            Create A New Account</a
          >
        </h2>
      </div>
    </div>
  </main>
  )
}

export default Login;
