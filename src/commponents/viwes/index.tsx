import React from 'react';
import { Flex, Layout } from 'antd';
import ShopPage from '../pages/ShopPage';
import ClassPage from '../pages/ClassPage';

const { Header, Footer, Sider, Content } = Layout;

// const headerStyle: React.CSSProperties = {
//     textAlign: 'center',
//     color: '#fff',
//     height: 64,
//     paddingInline: 48,
//     lineHeight: '64px',
//     backgroundColor: '#4096ff',
// };

const contentStyle: React.CSSProperties = {
    textAlign: 'center',
    minHeight: 120,
    lineHeight: '120px',
    color: '#fff',
    backgroundColor: '#0958d9',
};

const siderStyle: React.CSSProperties = {
    textAlign: 'center',
    lineHeight: '120px',
    color: '#fff',
    backgroundColor: '#1677ff',
};

const footerStyle: React.CSSProperties = {
    textAlign: 'center',
    color: '#fff',
    backgroundColor: '#4096ff',
};

const layoutStyle = {
    borderRadius: 8,
    overflow: 'hidden',
    width: "calc(50% - 8px)",
    maxWidth: "100%",
    high: "calc(100% - 8px)",
};

const IndexPage: React.FC = () => (
    <div style={{ height: '100vh', margin: 0 }}>
        <Flex gap="middle" wrap style={{ height: '100%' }}>
            <Layout style={layoutStyle}>
                <Sider width="30%" style={siderStyle}>
                    <ShopPage/>
                </Sider>
                <Layout>
                    {/* <Header style={headerStyle}>Header</Header> */}
                    <Content style={contentStyle}>Content</Content>
                    <Footer style={footerStyle}>Footer</Footer>
                </Layout>
                <Sider width="10%" style={siderStyle}>
                    <ClassPage/>
                </Sider>
            </Layout>
        </Flex>
    </div>
);

export default IndexPage;