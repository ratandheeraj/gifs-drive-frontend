import React from "react"
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const baseURL = "http://localhost:8000/api/v1/users/signup";

function Register() {
	const navigate = useNavigate();
	function createUser() {
		const jsonBody = {
			name : userName,
			email : email,
			password : password,
			passwordConfirm : password
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
			alert("Error while creating the user");
		}
		});
	
	}

	const [userName, setUserName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

  return (
    <div class="container my-8 mx-auto flex justify-center">
			<div
				class="w-full xl:w-1/2 py-4 px-8 border-2 border-slate-100 rounded-md"
			>
				<h1 class="text-xl font-medium text-center">
					Create A New Account
				</h1>
				<form class="mt-4 flex flex-col gap-4">
					<div class="flex flex-col gap-1">
						<label for="name" class="text-lg font-medium"
							>Enter Name</label
						>
						<input
							class="w-full outline-none border-slate-100 border p-2 rounded-md focus:border-slate-800 focus:border-2"
							type="text"
							id="name"
							placeholder="John Doe"
							onChange={(e) => setUserName(e.target.value)}
						/>
					</div>
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
						<label for="password" class="text-lg font-medium">
							Enter Password
						</label>
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
							value="Register"
							class="py-1 px-8 bg-slate-800 text-white rounded-md text-lg cursor-pointer"
							onClick={createUser}
						/>
					</div>
				</form>
				<div class="flex mt-8 justify-center">
					<h2 class="text-lg">
						Already have an account?
						<a href="./login.html" class="underline" style={{"paddingLeft":"5px"}}>
							Click Here to Login</a
						>
					</h2>
				</div>
			</div>
		</div>
   )
}

export default Register;
