'use client'

import { useState } from "react";

import { useRouter } from "next/navigation";
import Image from "next/image";

import { nanoid } from "@reduxjs/toolkit";

import Grid from "@mui/material/Unstable_Grid2/Grid2";

import LoginLogo from '@/public/login.png'
import FormRigestring from "./FormRigestring";

const Rigestring = () => {
  const [userFullname, setUserFullname] = useState('');
  const [userAddereses, setUserAddereses] = useState('');
  const [userEmail, setUserEmail] = useState('')
  const [userPassword, setUserPassword] = useState('')

  const router = useRouter();

  const createBlog = async (value) => {

    try {
      const res = await fetch("http://localhost:9000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: nanoid(),
          subscribers: 0,
          name: value.fullname,
          photo: value.photo,
          email: value.email,
          password: value.password

        }),
      });

      if (!res.ok) {
        setError((await res.json()).message);
        return;
      }

      router.push("/api/auth/signin");
    } catch (err) {
      setError(err);
    }
  }

  return (
    <div className=" bg-slate-200 w-full h-[90vh] overflow-x-hidden">
      <div className="flex items-center justify-center w-full">
        <h1 className=" text-2xl text-slate-600">creating User</h1>
      </div>
      <Grid container sx={{ width: '100%', height: '90%' }} >
        <Grid xs={12} sm={6} md={6} lg={6} xl={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Image src={LoginLogo} width={400} height={400} />
        </Grid>
        <Grid xs={12} sm={6} md={6} lg={6} xl={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '1rem' }}>
          <FormRigestring createBlog={createBlog} userAddereses={userAddereses} userEmail={userEmail} userPassword={userPassword} userFullname={userFullname} />
        </Grid>
      </Grid>
    </div>
  )
}

export default Rigestring;