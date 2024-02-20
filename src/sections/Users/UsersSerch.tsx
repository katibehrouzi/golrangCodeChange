import { Button, Col, Dropdown, MenuProps, Row, Space, message } from "antd";
import { DownOutlined } from '@ant-design/icons';
import Search from "antd/es/input/Search";
import { FC } from "react";

const UserSerch: FC<{
    nameFilterItem: MenuProps['items'],
    setNameFilterKey: React.Dispatch<React.SetStateAction<any>>
    setFilterKey: React.Dispatch<React.SetStateAction<any>>
}> = (props) => {

    const handleMenuClick: MenuProps['onClick'] = (e) => {
        props.setNameFilterKey(e.key)
    };

    const menuProps = {
        items: props.nameFilterItem,
        onClick: handleMenuClick,
    };

    const submitSearch = (value: string) => {
        props.setFilterKey(value)
    }

    return (
        <Row style={{paddingBottom: "2rem"}} gutter={12}>
            <Col span={6}>
                <Dropdown menu={menuProps}>
                    <Button>
                        <Space>
                            Select User Name
                            <DownOutlined />
                        </Space>
                    </Button>
                </Dropdown>
            </Col>
            <Col span={6} offset={12} >
                <Search placeholder="Search" enterButton onSearch={(value) => submitSearch(value)} allowClear />
            </Col>
        </Row>
    )
}

export default UserSerch