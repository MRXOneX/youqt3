import { useRouter } from "next/router"
// utils/icons
import Plus from '../utils/svg/plus.svg'
import User from '../utils/svg/user.svg'
import Menu from '../utils/svg/menu.svg'



const NavbarMobile = () => {


    const router = useRouter()


    return (
        <div className="shadow-nav_mob fixed left-[50%] bottom-[10px] z-50 w-[96%] h-[54px] px-[10px] flex items-center justify-around rounded-[10px] bg-white translate-x-[-50%] sm:hidden">
            <div className="h-full flex items-center">
                <button className="flex flex-col items-center justify-center bg-none border-none rounded">
                    <Menu
                        width={22}
                        height={22}
                        fill="#71716e"
                    />
                    <span style={{
                        color: '#71716e'
                    }} className="text-[14px] font-bold font-nunito leading-4">
                        Главная
                    </span>
                </button>
            </div>
            <div className="h-full flex items-center">
                <button className="border-none hover:shadow-none rounded-[17px] bg-[#4971FF] outline-none cursor-pointer text-white flex items-center justify-center h-[38px] w-[38px] shadow-create">
                    <Plus fill="white" width={28} height={28} />
                </button>
            </div>
            <div>
                <button className="flex flex-col items-center justify-center bg-none border-none rounded">
                    <User
                        width={22}
                        height={22}
                        fill="#71716e"
                    />
                    <span style={{
                        color: '#71716e'
                    }} className="text-[14px] font-bold font-nunito leading-4">
                        Профиль
                    </span>
                </button>
            </div>
        </div>
    )
}


export default NavbarMobile