'use client'
import { useState } from "react";

import { useRouter, redirect } from 'next/navigation'

import Link from "next/link";

import { Button, Menu, MenuItem } from '@mui/material';
import { Create, Home, NewReleases, DoDisturbOn, KeyboardArrowDown, KeyboardArrowUp, MenuOpen } from '@mui/icons-material';

import { useSession } from "next-auth/react";

import DrawerComponent from "./DrawerComponent";

const Navbar = () => {

  const [openDrawer, setOpenDrawer] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);

  const router = useRouter()

  const { data: session, status } = useSession()


  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const actionButton = [
    { text: 'home', variant: 'text', icon: <Home sx={{ width: '1rem', height: '1rem' }} />, src: '/' },
    { text: 'newblogs', variant: 'text', icon: <NewReleases sx={{ width: '1rem', height: '1rem' }} />, src: '/' },
    { text: 'createblog', variant: 'text', icon: <Create sx={{ width: '1rem', height: '1rem' }} />, src: '/createBlog' },
    { text: 'about', variant: 'text', icon: <DoDisturbOn sx={{ width: '1rem', height: '1rem' }} />, src: '/' },

  ]
  const ButtonLR = [
    { text: 'Lognin', variant: 'outlined', src: '/api/auth/signin/credentials' },
    { text: 'SingUp', variant: 'contained', src: '/rigestring' }
  ]

  const ButtonMenu = (
    <>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        sx={{ color: 'black' }}
      >
        {open ? <KeyboardArrowUp /> : <KeyboardArrowDown />} servises
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>working1</MenuItem>
        <MenuItem onClick={handleClose}>working2</MenuItem>
        <MenuItem onClick={handleClose}>working3</MenuItem>
      </Menu>
    </>
  )

  return (
    <div className="flex flex-row items-center bg-slate-300">
      <div className="m-3 cursor-pointer" onClick={() => router.push('/')}>
        <h1 className="text-gray-500 text-2xl">Weblog</h1>
      </div>
      <div className="mr-auto max-[900px]:hidden">
        {actionButton.map((action, index) => (
          <Link href={action.src}>
            <Button key={index} sx={{ color: 'black' }} variant={action.variant}>{action.icon} <p>{action.text}</p></Button>
          </Link>
        ))}
        {ButtonMenu}
      </div>
      {session?.user ?
        <div className=" ml-auto flex flex-col items-center">
          {session?.user.image ?
            <div className=" p-2 flex flex-col items-center">
              <div className="  w-10 h-10 ">
                <img className=" rounded-full" src={session.user.image} />
              </div>

              <h1 className=" text-gray-500">{session.user.name}</h1>
            </div>
            :

          <div>
            <h1 className=" text-gray-500 text-lg mx-2">hello{" "}{session.user.name}</h1>
          </div>
          }
        </div>
        :

        <div className="max-[900px]:hidden">
          {ButtonLR.map((button, index) => (
            <Link href={button.src} >
              <Button
                key={index}
                variant={button.variant}
                sx={{
                  margin: '0 .5rem',
                  color: 'black',
                  ':hover': {
                    backgroundColor: 'black',
                    color: "whitesmoke",
                    borderColor: 'black'
                  }
                }}
              >
                {button.text}
              </Button>
            </Link>
          ))}
        </div>
      }
      <div onClick={() => setOpenDrawer(true)} className="ml-auto min-[900px]:hidden">
        <MenuOpen />
      </div>
      <DrawerComponent openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} />
    </div>
  )
}



export default Navbar;
