import type { NextPage } from "next"
// layouts
import PageContainer from "../../layouts/PageContainer"



const Profile: NextPage = (props) => {
    console.log(props)
    return (
        <PageContainer>
            <div className="flex justify-between h-full">
                <div className="h-full w-[100%] lg:w-[490px]">

                </div>
                <div className="h-full w-[100%] lg:w-[790px]">

                </div>
            </div>
        </PageContainer>
    )
}

export default Profile