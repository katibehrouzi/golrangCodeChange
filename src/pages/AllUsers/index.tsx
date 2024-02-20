import { FC, useEffect, useState } from "react"
import { useMutation, useQuery } from "react-query"
import { deleteUser, getAllUsers } from "../../controllers/userController"
import { UserData2Type, UserDataType, userObjectKeyE} from "../../types/userData.types"
import UserTable from "../../sections/Users/UsersTable"
import PageTitles from "../../Components/Titles/PageTitles"
import { MenuProps, Modal } from "antd"
import UserSerch from "../../sections/Users/UsersSerch"

const AllUsers: FC = () => {
    const [tableData, setTableData] = useState<UserData2Type[]>()
    const [filterTableData, setFilterTableData] = useState<UserData2Type[]>()
    const [nameFilterItem, setNameFilterItem] = useState<MenuProps['items']>([])
    const [nameFilterKey, setNameFilterKey] = useState<string>()
    const [filterKey, setFilterKey] = useState<string>()
    const [isDeleteModalOpen, setIsDeleteModalOpen]= useState<boolean>(false)
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [isErrModalOpen, setIsErrModalOpen] = useState<boolean>(false);
    const [userDeleteId, setUserDeleteId] = useState<number>()
    
    const {
        isLoading,
        isError,
        error,
        data: userData,
        isFetching,
        isPreviousData,
    } = useQuery(['users'], () => getAllUsers(), {
        keepPreviousData: true,
        refetchOnWindowFocus: false,
        retry: false,
    })

    useEffect(() => {
        if (userData?.data) {
            const t = createTableDataModel(userData.data)
            setTableData(t.tableItem)
            setFilterTableData(t.tableItem)
            setNameFilterItem(t.nameFilter)
        }
    }, [userData])

    useEffect(() => {
        if(nameFilterKey) {
            setFilterTableData((tableData?.filter(c => c[userObjectKeyE.key] === Number(nameFilterKey))))
        }      
    }, [nameFilterKey])

    useEffect(() => {
        if(filterKey && tableData) {
            setNameFilterKey(undefined)
            const k= [[userObjectKeyE.key],
                        [userObjectKeyE.name],
                        [userObjectKeyE.username],
                        [userObjectKeyE.email],
                        [userObjectKeyE.address],
                        [userObjectKeyE.phone],
                        [userObjectKeyE.website],
                        [userObjectKeyE.company]
                    ]
            var results = [];
            for(var i=0; i < tableData.length; i++) {
                if(tableData[i][userObjectKeyE.name].toLowerCase().indexOf(filterKey)!=-1) {
                        results.push(tableData[i]);
                }
                else if(tableData[i][userObjectKeyE.username].toLowerCase().indexOf(filterKey)!=-1) {
                    results.push(tableData[i]);
                }
                else if(tableData[i][userObjectKeyE.email].toLowerCase().indexOf(filterKey)!=-1) {
                    results.push(tableData[i]);
                }
                else if(tableData[i][userObjectKeyE.address].toLowerCase().indexOf(filterKey)!=-1) {
                    results.push(tableData[i]);
                }
                else if(tableData[i][userObjectKeyE.phone].indexOf(filterKey)!=-1) {
                    results.push(tableData[i]);
                }
                else if(tableData[i][userObjectKeyE.website].toLowerCase().indexOf(filterKey)!=-1) {
                    results.push(tableData[i]);
                }
                else if(tableData[i][userObjectKeyE.company].toLowerCase().indexOf(filterKey)!=-1) {
                    results.push(tableData[i]);
                }
            }
            setFilterTableData(results)

        }
        else if(!filterKey) setFilterTableData(tableData)       
    }, [filterKey, tableData])

    const deleteUserApi = useMutation(deleteUser, {
        onError : err => {
            setIsDeleteModalOpen(false);
            setIsErrModalOpen(true);
            setFilterTableData(tableData)
            setUserDeleteId(undefined)
        },
        onSuccess: data => {
            setUserDeleteId(undefined)
            setTableData(filterTableData)
            setIsDeleteModalOpen(false)
            setIsModalOpen(true);
        }
    })

    const showDeleteConfirm = (userId: number) => {
        setUserDeleteId(userId)
        setIsDeleteModalOpen(true)
    }
    
    const handleDelete = () => {
        setFilterTableData((tableData?.filter(c => c[userObjectKeyE.key] !== userDeleteId)))
        deleteUserApi.mutate(userDeleteId!)

    };

    const handleCancel = () => {
        setIsDeleteModalOpen(false)
        setIsModalOpen(false);
        setIsErrModalOpen(false)
        setUserDeleteId(undefined)
    };

    const createTableDataModel= (apiResponse:UserDataType[])=> {
        const myArray: UserData2Type[] = []
        const nameFilter : MenuProps['items'] =[]
        apiResponse.forEach((element: UserDataType) => {
            myArray.push(
                {
                    [userObjectKeyE.key]: element.id,
                    [userObjectKeyE.name]: element.name,
                    [userObjectKeyE.username]: element.username,
                    [userObjectKeyE.email]: element.email,
                    [userObjectKeyE.address]: element.address.city + " - " + element.address.street,
                    [userObjectKeyE.phone]: element.phone,
                    [userObjectKeyE.website]: element.website,
                    [userObjectKeyE.company]: element.company.name
                }
            )
            nameFilter.push({label: element.name, key: `${element.id}`})
        })
        return ({
            nameFilter: nameFilter,
            tableItem: myArray
        })
    }

    return(
        <section>
            <PageTitles title="Users" />
            <UserSerch nameFilterItem={nameFilterItem} setNameFilterKey={setNameFilterKey} setFilterKey={setFilterKey} />
            {isLoading ?
                <p>Data is Loading ...</p> : 
                <UserTable showDeleteConfirm={showDeleteConfirm} tableData={filterTableData} />
            }
            <Modal
                title="Delete"
                open={isDeleteModalOpen}
                onOk={handleDelete}
                onCancel={handleCancel}
            >
                <p>Delete user number {userDeleteId}</p>
            </Modal>
            <Modal
                title="Success"
                open={isModalOpen}
                onOk={handleCancel}
                onCancel={handleCancel}
                footer={(_, { OkBtn, CancelBtn }) => (
                    <>
                    <OkBtn />
                    </>
                )}
            >
            <p>User delete successful</p>
        </Modal>
        <Modal
            title="Error"
            open={isErrModalOpen}
            onOk={handleCancel}
            onCancel={handleCancel}
        >
            <p>We have error for delete user</p>
        </Modal>
        </section>
    )
}

export default AllUsers