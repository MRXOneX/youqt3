//
import Link from "next/link"
import { useRouter } from "next/router"

const Navbar = () => {

    const router = useRouter()


    const handleSignIn = () => {
        router.push('/auth')
    }

    const handleSignOut = async () => {
        try {
            // sign out
        } catch (error) {

        }
    }

    return (
        <div className="flex items-center justify-between h-[50px] sm:h-[60px] py-[10px] px-[20px] w-full bg-white fixed z-50 shadow-nav">
            <span className="font-nunito hidden sm:block font-black text-4xl text-[#4971FF]" >
                <Link href="/">
                    YouQ
                </Link>
            </span>
            <button
                onClick={handleSignIn}
                className="bg-[#4971FF] hidden sm:block border-none cursor-pointer rounded-[17px] hover:bg-[#2851E4] font-bold font-nunito text-[20px] text-white h-auto py-[5px] px-[17px]"
            >
                Войти
            </button>
        </div>
    )
}


export default Navbar