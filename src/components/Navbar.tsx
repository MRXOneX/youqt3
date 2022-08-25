//
import Link from "next/link"

const Navbar = () => {



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
        </div>
    )
}


export default Navbar