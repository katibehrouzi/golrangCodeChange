import { FC, useState } from "react"
import { useMutation } from "react-query"
import { useNavigate } from "react-router-dom"
import { Modal } from "antd"
import UserInfoForm from "../../Components/forms/UserInfoForm"
import PageTitles from "../../Components/Titles/PageTitles"
import { UserDataType } from "../../types/userData.types"
import { postUser } from "../../controllers/userController"

const CreateUser: FC = () => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [isErrModalOpen, setIsErrModalOpen] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false)
    const navigate = useNavigate()
    const createUser = (values: UserDataType) => {
        setLoading(true)
        postUserApi.mutate(values)
    }

    const postUserApi = useMutation(postUser, {
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
        <PageTitles title="Create New User" />
        <UserInfoForm onFormSubmit={createUser} loading={loading} />
        <Modal
            title="Success"
            okText="Go Home"
            open={isModalOpen}
            onOk={handleSuccessOk}
            onCancel={handleCancel}
            footer={(_, { OkBtn, CancelBtn }) => (
                <>
                  <OkBtn />
                </>
              )}
        >
            <p>Your user create successful</p>
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

export default CreateUser