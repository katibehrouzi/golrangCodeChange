import { Button, Space, Table, TableProps } from "antd";
import { FC } from "react";
import { Link } from "react-router-dom";
import { UserData2Type } from "../../types/userData.types";

const UserTable: FC<{
    showDeleteConfirm: (userId: number) => void
    tableData: UserData2Type[] | undefined
}> = (props) => {
    const columns: TableProps<UserData2Type>['columns'] = [
        {
            title: '',
            dataIndex: 'key',
            rowScope: 'row',
            width: '40px'
        },
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
        },
        {
            title: 'Username',
            dataIndex: 'username',
            key: 'username',
        },
        {
          title: 'Email',
          dataIndex: 'email',
          key: 'email',
        },
        {
          title: 'Address',
          dataIndex: 'address',
          key: 'address',
        },
        {
            title: 'Phone',
            dataIndex: 'phone',
            key: 'phone',
        },
        {
            title: 'Website',
            dataIndex: 'website',
            key: 'website',
        },
        {
            title: 'Company',
            dataIndex: 'company',
            key: 'company',
        },
        {
            title: 'Action',
            key: 'action',
            fixed: 'right',
            render: (_, record) => (
              <Space size="middle">
                <Link to={`/users/${record.key}`}>View User</Link>
                <Link to={`/users/edit/${record.key}`}>Edit User</Link>
                <Button type="primary" danger onClick={() => props.showDeleteConfirm(record.key)}>Delete</Button>
              </Space>
            ),
          },
    ]
    return (
        <Table columns={columns} dataSource={props.tableData} bordered scroll={{ x: 1500 }} />
    )
}

export default UserTable