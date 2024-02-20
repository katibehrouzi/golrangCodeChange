import { FC, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { useMutation, useQuery } from "react-query"
import { Modal } from "antd"
import PageTitles from "../../Components/Titles/PageTitles"
import { getUser, putUser } from "../../controllers/userController"
import UserInfoForm from "../../Components/forms/UserInfoForm"
import { UserDataType } from "../../types/userData.types"

const EditUser: FC = () => {
    const {userId} = useParams()
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [isErrModalOpen, setIsErrModalOpen] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false)
    const navigate = useNavigate()
    const {
        isLoading,
        isError,
        error,
        data: userData,
        isFetching,
        isPreviousData,
    } = useQuery(['users', userId], () => getUser(userId!), {
        keepPreviousData: true,
        refetchOnWindowFocus: false,
        retry: false,
    })

    const editUser = (data: UserDataType) => {
        if (userId) {
            setLoading(true)
            putUserApi.mutate({userInfo: data, userId})
        }   
    }

    const putUserApi = useMutation(putUser, {
        onError : err => {
            setLoading(false)
            setIsErrModalOpen(true)
        },
        onSuccess: data => {
            setLoading(false)
            showSuccessModal()
        }
    })

    const showSuccessModal = () => {
      setIsModalOpen(true);
    };
  
    const handleSuccessOk = () => {
      setIsModalOpen(false);
      navigate('/users')
    };
  
    const handleCancel = () => {
      setIsModalOpen(false);
      setIsErrModalOpen(false)
    };

    return(
        <>
            <PageTitles title={`Edit user ${userId}`} />
            <UserInfoForm 
                loading={isLoading || loading} 
                onFormSubmit={editUser} 
                formInitialValues={userData?.data}
            />
            <Modal
                title="Success"
                okText="Go Home"
                open={isModalOpen}
                onOk={handleSuccessOk}
                onCancel={handleCancel}
                footer={(_, { OkBtn }) => (
                    <>
                    <OkBtn />
                    </>
                )}
            >
                <p>User {userId} edit successful</p>
            </Modal>
            <Modal
                title="Error"
                open={isErrModalOpen}
                onOk={handleCancel}
                onCancel={handleCancel}
            >
                <p>You got err, please check user info and network and try again</p>
            </Modal>
        </>
    )
}

export default EditUser