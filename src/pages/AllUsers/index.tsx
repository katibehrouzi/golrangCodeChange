import { FC, useEffect, useState } from "react"
import { useQuery } from "react-query"
import { getAllUsers } from "../../controllers/userController"
import { UserData2Type, UserDataType } from "../../types/userData.types"
import UserTable from "../../sections/Users/UsersTable"
import PageTitles from "../../Components/Titles/PageTitles"

const AllUsers: FC = () => {
    const [tableData, setTableData] = useState<UserData2Type[]>()
    
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
        }
    }, [userData])

    const showDeleteConfirm = (userId: number) => {
        console.log(userId)
    }

    const createTableDataModel= (apiResponse:UserDataType[])=> {
        const myArray: UserData2Type[] = []
        const nameFilter : {
            text: string,
            value: string,
          }[] =[]
        apiResponse.forEach((element: UserDataType) => {
            myArray.push(
                {
                    key: element.id,
                    name: element.name,
                    username: element.username,
                    email: element.email,
                    address: element.address.city + " - " + element.address.street,
                    phone: element.phone,
                    website: element.website,
                    company: element.company.name
                }
            )
            nameFilter.push({text: element.name, value: element.name})
        })
        return ({
            nameFilter: nameFilter,
            tableItem: myArray
        })
    }

    return(
        <section>
            <PageTitles title="Users" />
            {isLoading ?
                <p>Data is Loading ...</p> : 
                <UserTable showDeleteConfirm={showDeleteConfirm} tableData={tableData} />
            }
        </section>
    )
}

export default AllUsers