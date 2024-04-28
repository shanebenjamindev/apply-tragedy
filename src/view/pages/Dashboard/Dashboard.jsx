import React, { useState } from 'react';
import { Layout, Menu, Button, theme, Space } from "antd";
import { Link } from 'react-router-dom';
import {
    BarChartOutlined,
    HomeOutlined,
    LogoutOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    OrderedListOutlined,
    ShoppingCartOutlined,
    UserOutlined,
} from "@ant-design/icons";

const { Header, Sider, Content } = Layout;

export default function Dashboard() {
    const [collapsed, setCollapsed] = useState(false);
    const [menuSelect, setMenuSelect] = useState("");

    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    const handleMenuSelect = (e) => {
        setMenuSelect(e.key);
    };

    const renderPage = (key) => {
        switch (key) {
            case "dashboard":
            // return <Dashboard />;
            case "user-management":
            // return <UserManagement />;
            case "product-management":
            // return <ProductManagement />;
            case "logout":
                // handleLogout();
                break;
            default:
                return <Dashboard />;
        }
    };
    return (
        <Layout>
            <Sider trigger={null} collapsible collapsed={collapsed}>
                <div className="demo-logo-vertical" />

                <Link to="/">
                    <img className="p-2" src="/images/logo.png" />
                </Link>

                <Menu
                    onClick={handleMenuSelect}
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={["dashboard"]}
                    items={[
                        {
                            key: "dashboard",
                            icon: <HomeOutlined />,
                            label: "Dashboard",
                        },
                        {
                            key: "user-management",
                            icon: <UserOutlined />,
                            label: "User",
                        },
                        {
                            key: "product-management",
                            icon: <BarChartOutlined />,
                            label: "Acutal",
                        },
                        {
                            key: "order-management",
                            icon: <OrderedListOutlined />,
                            label: "Order",
                        },
                        {
                            key: "logout",
                            icon: <LogoutOutlined />,
                            label: "Log Out",
                        },
                    ]}
                />
            </Sider>
            <Layout>
                <Header
                    style={{
                        padding: "0 20px 0",
                        background: colorBgContainer,
                    }}
                    theme="dark"
                    className="d-md-flex"
                >
                    <Button
                        type="text"
                        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                        onClick={() => setCollapsed(!collapsed)}
                        style={{
                            fontSize: "16px",
                            width: 64,
                            height: 64,
                        }}
                    />
                    <div className="ml-auto">User</div>
                </Header>

                <Content
                    style={{
                        margin: "24px 16px",
                        padding: 24,
                        background: colorBgContainer,
                        height: "100dvh",
                        borderRadius: borderRadiusLG,
                    }}
                >
                    {renderPage(menuSelect)}
                </Content>
            </Layout>
        </Layout>
    )

}