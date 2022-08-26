import type { NextPage } from "next"
import ProfileInfo from "../../components/Profile/ProfileInfo"
import ProfileMenu from "../../components/Profile/ProfileMenu"
import ProfileMenuElements from "../../components/Profile/ProfileMenuElements"
// layouts
import PageContainer from "../../layouts/PageContainer"



const Profile: NextPage = (props) => {
    console.log(props)
    return (
        <PageContainer>
            <div className="flex justify-between h-full">
                <div className="h-full w-[100%] lg:w-[490px]">
                    <div className="max-w-[630px] lg:max-w-[330px] mx-auto h-full">
                        <ProfileInfo profile="" />
                    </div>
                </div>
                <div className="h-full w-[790px] hidden lg:block">
                    <div className="max-w-[630px] mx-auto h-full">
                        <ProfileMenu />
                        <ProfileMenuElements />
                    </div>
                </div>
            </div>
        </PageContainer>
    )
}

export default Profile