import { FC } from "react"
import UserInfoForm from "../../Components/forms/UserInfoForm"
import PageTitles from "../../Components/Titles/PageTitles"

const CreateUser: FC = () => {
    return(
        <>
        <PageTitles title="Create New User" />
        <UserInfoForm />
        </>
    )
}

export default CreateUser