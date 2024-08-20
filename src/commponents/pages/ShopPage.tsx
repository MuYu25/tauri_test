import React from 'react';
import { Col, Flex, Layout, Row } from 'antd';
import { DeleteOutlined, MenuOutlined } from '@ant-design/icons';

const { Header } = Layout
const { Footer, Content } = Layout;

// const headerStyle: React.CSSProperties = {
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     textAlign: 'center',
//     color: '#fff',
//     height: "6%",
//     backgroundColor: '#4096ff',
//     padding: 0,
// };


const contentStyle: React.CSSProperties = {
    textAlign: 'center',
    minHeight: 120,
    lineHeight: '120px',
    color: '#fff',
    backgroundColor: '#0958d9',
};

const footerStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    color: '#fff',
    height: "10%",
    backgroundColor: '#4096ff',
    padding: 0,
};

const layoutStyle = {
    borderRadius: 8,
    overflow: 'hidden',
    width: "calc(50% - 8px)",
    maxWidth: "100%",
    high: "calc(100% - 8px)",
};

const ShopPage: React.FC = () => (
    <div style={{ height: '100vh', margin: 0 }}>
        <Flex gap="middle" wrap style={{ height: '100%' }}>
            <Layout style={layoutStyle}>
                <Layout>
                    <Header style={headerStyle}>
                        <Row style={{ width: '100%', height: "100%"}}>
                        <Col span={4}><MenuOutlined style={{fontSize: "25px"}}/></Col>
                        <Col span={4}>col-6</Col>
                        <Col span={8}>col-6</Col>
                        <Col span={4}>col-6</Col>
                        <Col span={4}><DeleteOutlined style={{fontSize: "25px"}}/></Col>
                        </Row>
                    </Header>
                    <Content style={contentStyle}>Content</Content>
                    <Footer style={footerStyle}>Footer</Footer>
                </Layout>
            </Layout>
        </Flex>
    </div>
);

export default ShopPage;