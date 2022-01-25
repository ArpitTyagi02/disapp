import React, { Component } from 'react'
import './Navtop.css'
import {Menu} from 'antd'
import { MailOutlined,UserOutlined} from '@ant-design/icons';
import 'antd/dist/antd.css';
import './Home.css';


const { SubMenu } = Menu;
export class Navtop extends Component {
    render() {
        
        return (
            <div>
                <img src='#'></img>
                    <Menu mode="horizontal" className="startMenu">
                     <Menu.Item key="mail2" icon={<MailOutlined />}>
                     <a href="#"> Navigation One</a>
                     </Menu.Item>
                     <SubMenu key="sub1" icon={<MailOutlined />} title="Navigation Two">
                        <Menu.Item key="1">Option 1</Menu.Item>
                        <Menu.Item key="2">Option 2</Menu.Item>
                    </SubMenu>
                     <Menu.Item key="mail3">
                     <a href="#"> Navigation Three</a>
                     </Menu.Item>
                     <Menu.Item key="mail4">
                     <a href="#"> Navigation Four</a>
                     </Menu.Item>
                    </Menu>
                    <Menu>
                    <SubMenu key="sub1" icon={<UserOutlined/>} className='iconUser'>
                        <Menu.Item key="1" className='icon'>Profile</Menu.Item>
                        <Menu.Item key="2" className='icon'>Setting</Menu.Item>
                        <Menu.Item key="1" className='icon'>Logout</Menu.Item>
                    </SubMenu>
                    </Menu>
                   

                </div>
        )

    }
}

export default Navtop
