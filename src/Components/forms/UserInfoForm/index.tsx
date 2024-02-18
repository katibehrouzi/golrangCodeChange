import { FC } from "react";
import { Button, Form, Input } from "antd";

const UserInfoForm: FC = () => {
    const onFinish = (values: any) => {
        console.log('Success:', values);
    };
    return (
        <Form
            name="complex-form"
            onFinish={onFinish}
            labelCol={{ span: 3 }}
            wrapperCol={{ span: 16 }}
            initialValues={{lng: ""}}
        >
            <Form.Item label="Name">
                <Form.Item
                    name="name"
                    noStyle
                    rules={[{ required: true, message: 'Name is required' }]}
                >
                    <Input style={{width: "50%"}} placeholder="Your name" />
                </Form.Item> 
            </Form.Item>
            <Form.Item label="UserName">
                <Form.Item
                    name="username"
                    noStyle
                    rules={[{ required: true, message: 'Username is required' }]}
                >
                    <Input style={{width: "50%"}} placeholder="Your username"/>
                </Form.Item> 
            </Form.Item>
            <Form.Item label="E-mail">
                <Form.Item
                    name="email"
                    noStyle
                    rules={[
                        { required: true, message: 'E-mail is required' },
                        {type: "email", message: 'The input is not valid E-mail!'}
                    ]}
                >
                    <Input style={{width: "50%"}} placeholder="example@mail.com"/>
                </Form.Item> 
            </Form.Item>
            <Form.Item label="Address">
                <Form.Item
                    name={['address', 'street']}
                    style={{ display: 'inline-block', width: 'calc(16% - 3px)', marginBottom: "0" }}
                    rules={[{ required: true, message: 'Street is required' }]}
                >
                    <Input  placeholder="Input street" />
                </Form.Item>
                <Form.Item
                    name={['address', 'suite']}
                    style={{ display: 'inline-block', width: 'calc(16% - 3px)', marginBottom: "0", marginLeft: "3px" }}
                    rules={[{ required: true, message: 'Suite is required' }]}
                >
                    <Input  placeholder="Input Suite" />
                </Form.Item>
                <Form.Item
                    name={['address', 'city']}
                    style={{ display: 'inline-block', width: 'calc(16% - 3px)', marginBottom: "0", marginLeft: "3px" }}
                    rules={[{ required: true, message: 'City is required' }]}
                >
                    <Input  placeholder="Input City" />
                </Form.Item>
                <Form.Item
                    name={['address', 'zipcode']}
                    style={{ display: 'inline-block', width: 'calc(16% - 3px)', marginBottom: "0", marginLeft: "3px" }}
                    rules={[{ required: true, message: 'Zipcode is required' }]}
                >
                    <Input  placeholder="Input Zipcode" />
                </Form.Item>
                <Form.Item
                    name={['address', 'geo', 'lat']}
                    style={{ display: 'inline-block', width: 'calc(16% - 3px)', marginBottom: "0", marginLeft: "3px" }}
                    rules={[{ required: true, message: 'Lat is required' }]}
                >
                    <Input  placeholder="Input Lat" />
                </Form.Item>
                <Form.Item
                    name={['address', 'geo', 'lng']}
                    style={{ display: 'inline-block', width: 'calc(16% - 3px)', marginBottom: "0", marginLeft: "3px" }}
                    // rules={[{ required: true, message: 'Lng is required' }]}
                >
                    <Input  placeholder="Input Lng" />
                </Form.Item>
            </Form.Item>
            <Form.Item label="Phone">
                <Form.Item
                    name="phone"
                    noStyle
                    rules={[{ required: true, message: 'Phone is required' }]}
                >
                    <Input style={{width: "50%"}} placeholder="09111111111"/>
                </Form.Item> 
            </Form.Item>
            <Form.Item label="Website">
                <Form.Item
                    name="website"
                    noStyle
                    rules={[{ required: true, message: 'Website is required' }]}
                >
                    <Input style={{width: "50%"}} placeholder="www.example.com" />
                </Form.Item> 
            </Form.Item>
            <Form.Item label="Company">
                <Form.Item
                    name={['company', 'name']}
                    style={{ display: 'inline-block', width: 'calc(33% - 3px)', marginBottom: "0" }}
                    rules={[{ required: true, message: 'Company name is required' }]}
                >
                    <Input  placeholder="Input company name" />
                </Form.Item>
                <Form.Item
                    name={['company', 'catchPhrase']}
                    style={{ display: 'inline-block', width: 'calc(33% - 3px)', marginBottom: "0", marginLeft: "3px" }}
                    rules={[{ required: true, message: 'Company catchPhrase is required' }]}
                >
                    <Input  placeholder="Input Company catchPhrase" />
                </Form.Item>
                <Form.Item
                    name={['company', 'bs']}
                    style={{ display: 'inline-block', width: 'calc(33% - 3px)', marginBottom: "0", marginLeft: "3px" }}
                    rules={[{ required: true, message: 'Company Bs is required' }]}
                >
                    <Input  placeholder="Input Company Bs" />
                </Form.Item>
            </Form.Item>
            <Form.Item label=" " colon={false}>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    )
}

export default UserInfoForm