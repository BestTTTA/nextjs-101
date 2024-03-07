"use client"
import Image from "next/image";
import TextField from '@mui/material/TextField';
import React from "react";
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useState } from "react";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Loginpage() {
    const [showPassword, setShowPassword] = React.useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const router = useRouter()

    const Login = async () => {
        try{
        const responseLogin = await axios.post("https://4d65-2403-6200-8821-1051-413-3023-7a17-abba.ngrok-free.app/login/",
            {
                username: email,
                password: password
            })
            console.log(responseLogin)

            if(responseLogin.status === 200){
                router.push("/")
            }
        }
        catch (error) {
            console.log("Error from func Resgister", error)
        }
    }

    return (
        <div className="flex justify-center items-center w-full h-screen bg-gray-200">
            <div className="flex flex-initial flex-col justify-evenly rounded-xl w-[450px] h-[620px] bg-white shadow-md mx-2">

                <div className="flex justify-center items-center h-[100%]">
                    <div className="flex justify-center items-center flex-col gap-8">
                        <h1 className="font-extrabold text-3xl ">Welcome Best</h1>
                        <Image className="hover:scale-110 hover:h-24" alt="" src="next.svg" width={70} height={70} />
                    </div>
                </div>

                <div className="h-[100%] flex flex-col gap-4 items-center">
                    <TextField className="w-[270px]" id="standard-basic" label="Email" variant="standard" value={email} onChange={(e) => setEmail(e.target.value)}
                    />
                    <FormControl className="w-[270px]" sx={{ m: 1, width: '25ch' }} variant="standard">
                        <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                        <Input
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            id="standard-adornment-password"
                            type={showPassword ? 'text' : 'password'}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                    >
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            }
                        />
                    </FormControl>
                </div>

                <div className="h-[100%] flex flex-col items-center justify-between">

                    <button onClick={Login} className="font-bold text-white  w-[270px] h-[40px] rounded-3xl bg-gradient-to-r from-sky-500 via-indigo-500 to-fuchsia-500 hover:scale-95">LOGIN</button>
                    <div className="flex">
                        <p className="mb-[20px] text-gray-500 mr-[5px]">Don't have an accout?</p>
                        <Link href="register" className="mb-[20px] hover:text-blue-700">Sign Up</Link>
                    </div>
                </div>

            </div>
        </div>
    )
}



{/* <button className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-[270px] h-[40px] rounded-full font-bold text-white hover:scale-95">LOGIN</button>
<div className="flex">
<h5 className="mb-6 text-gray-500">Don't have an account? </h5>
<h5 className="mb-6 font-bold">Sign Up</h5>
</div> */}

{/* <h1 className="text-red-400">{email}</h1>
    <h1 className="text-blue-400">{password}</h1> */}