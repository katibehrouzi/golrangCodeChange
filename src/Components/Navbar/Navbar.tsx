import { FC, ReactNode } from "react";
import { Menu } from "antd";
import { Header } from "antd/es/layout/layout";
import { Link, useLocation } from "react-router-dom";

const items: {key: number, label: ReactNode}[] = [
    {key: 1, label: <Link to={"/"}>Users</Link>},
    {key: 2, label: <Link to={"/users/create"}>Create User</Link>}
]

const Navbar: FC = () => {
    const location = useLocation()

    return (
        <Header style={{ display: 'flex', alignItems: 'center' }}>
            <div className="demo-logo" />
            <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={location.pathname === "/users/create" ? ['2'] : ['1']}
                items={items}
                style={{ flex: 1, minWidth: 0 }}
                selectedKeys={location.pathname === "/users/create" ? ['2'] : ['1']}
            />
        </Header>
    )
}

export default Navbar