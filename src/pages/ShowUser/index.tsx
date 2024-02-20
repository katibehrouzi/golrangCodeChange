import { FC } from "react"
import { useQuery } from "react-query"
import { useParams } from "react-router-dom"
import { Col, Divider, Flex, Row, Typography } from "antd"
import PageTitles from "../../Components/Titles/PageTitles"
import { getUser } from "../../controllers/userController"

const { Text } = Typography;

const ViewUser: FC = () => {
    const {userId} = useParams()
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

    const gutterR = { xs: 6, sm: 12, md: 16, lg: 24 }

    return(
        <>
            <PageTitles title={`User ${userId} Info`} />
            <Divider orientation="left">
                <Text type="danger">
                    User Personal Info
                </Text>
            </Divider>
            <Row gutter={gutterR} >
                <Col span={12}>
                    <Flex gap="small" align="center">
                        <h3>Name:</h3>
                        <p>{userData?.data.name}</p>
                    </Flex>
                </Col>
                <Col span={12}>
                    <Flex gap="small" align="center">
                        <h3>Username:</h3>
                        <p>{userData?.data.username}</p>
                    </Flex>
                </Col>
            </Row>
            <Row gutter={gutterR} >
                <Col span={12}>
                    <Flex gap="small" align="center">
                        <h3>E-mail:</h3>
                        <p>{userData?.data.email}</p>
                    </Flex>
                </Col>
                <Col span={12}>
                    <Flex gap="small" align="center">
                        <h3>Website:</h3>
                        <p>{userData?.data.website}</p>
                    </Flex>
                </Col>
            </Row>
            <Row gutter={gutterR} >
                <Col span={24}>
                    <Flex gap="small" align="center">
                        <h3>Phone:</h3>
                        <p>{userData?.data.phone}</p>
                    </Flex>
                </Col>
            </Row>
            <Divider orientation="left">
                <Text type="danger">
                    User company Info
                </Text>
            </Divider>
            <Row gutter={gutterR} >
                <Col span={24}>
                    <Flex gap="small" align="center">
                        <h3>Company name:</h3>
                        <p>{userData?.data.company.name}</p>
                    </Flex>
                </Col>
            </Row>
            <Row gutter={gutterR} >
                <Col span={12}>
                    <Flex gap="small" align="center">
                        <h3>CatchPhrase:</h3>
                        <p>{userData?.data.company.catchPhrase}</p>
                    </Flex>
                </Col>
                <Col span={12}>
                    <Flex gap="small" align="center">
                        <h3>Bs:</h3>
                        <p>{userData?.data.company.bs}</p>
                    </Flex>
                </Col>             
            </Row>
            <Divider orientation="left">
                <Text type="danger">
                    User address
                </Text>
            </Divider>
            <Row gutter={gutterR} >
                <Col span={8}>
                    <Flex gap="small" align="center">
                        <h3>City:</h3>
                        <p>{userData?.data.address.city}</p>
                    </Flex>
                </Col>
                <Col span={8}>
                    <Flex gap="small" align="center">
                        <h3>Street:</h3>
                        <p>{userData?.data.address.street}</p>
                    </Flex>
                </Col> 
                <Col span={8}>
                    <Flex gap="small" align="center">
                        <h3>Suite:</h3>
                        <p>{userData?.data.address.suite}</p>
                    </Flex>
                </Col>             
            </Row>
            <Row gutter={gutterR} >
                <Col span={8}>
                    <Flex gap="small" align="center">
                        <h3>Zipcode:</h3>
                        <p>{userData?.data.address.zipcode}</p>
                    </Flex>
                </Col>
                <Col span={8}>
                    <Flex gap="small" align="center">
                        <h3>Lat:</h3>
                        <p>{userData?.data.address.geo.lat}</p>
                    </Flex>
                </Col> 
                <Col span={8}>
                    <Flex gap="small" align="center">
                        <h3>Lng:</h3>
                        <p>{userData?.data.address.geo.lng}</p>
                    </Flex>
                </Col>             
            </Row>

        </>
    )
}

export default ViewUser