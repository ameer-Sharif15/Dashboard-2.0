"use client"
import LoginPage from "@/components/LoginPage"
import { Button } from "@nextui-org/react"
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from "next/router"
import { FcGoogle } from 'react-icons/fc'


const Home = () => {
  const { data: session } = useSession()

  // const route = useRouter()

  // if (session) {
  //   // route.forward('/dashboard')
  // }
  return (
    <div className="w-full
     h-screen
    bg-gradient-to-br
    from-pink-400
    to-[#005561]
    rounded-md
    filter
    flex 
    justify-center
    items-center
    flex-col
    gap-3
    ">

      <LoginPage />
      <Button  icon={<FcGoogle />} onClick={() => signIn()}>
         Sign In with Google
      </Button>
    </div>
  )
}

export default Home


