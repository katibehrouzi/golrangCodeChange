import { Button, Space, Table, TableProps } from "antd";
import { FC } from "react";
import { Link } from "react-router-dom";
import { UserData2Type, userObjectKeyE } from "../../types/userData.types";

const UserTable: FC<{
    showDeleteConfirm: (userId: number) => void
    tableData: UserData2Type[] | undefined
}> = (props) => {
    const columns: TableProps<UserData2Type>['columns'] = [
        {
            title: '',
            dataIndex: [userObjectKeyE.key],
            rowScope: 'row',
            width: '50px'
        },
        {
          title: 'Name',
          dataIndex: [userObjectKeyE.name],
          key: 'name',
        },
        {
            title: 'Username',
            dataIndex: [userObjectKeyE.username],
            key: 'username',
        },
        {
          title: 'Email',
          dataIndex: [userObjectKeyE.email],
          key: 'email',
        },
        {
          title: 'Address',
          dataIndex: [userObjectKeyE.address],
          key: 'address',
        },
        {
            title: 'Phone',
            dataIndex: [userObjectKeyE.phone],
            key: 'phone',
        },
        {
            title: 'Website',
            dataIndex: [userObjectKeyE.website],
            key: 'website',
        },
        {
            title: 'Company',
            dataIndex: [userObjectKeyE.company],
            key: 'company',
        },
        {
            title: 'Action',
            key: 'action',
            fixed: 'right',
            render: (_, record) => (
              <Space size="middle">
                <Link to={`/users/${record[userObjectKeyE.key]}`}>View User</Link>
                <Link to={`/users/edit/${record[userObjectKeyE.key]}`}>Edit User</Link>
                <Button type="primary" danger onClick={() => props.showDeleteConfirm(record[userObjectKeyE.key])}>Delete</Button>
              </Space>
            ),
          },
    ]
    return (
        <Table columns={columns} dataSource={props.tableData} bordered scroll={{ x: 1500 }} />
    )
}

export default UserTable