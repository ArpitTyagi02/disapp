import React, { Component } from 'react'
import {Menu,Row,Col,Card,Input,Pagination,Avatar,Button,Carousel} from 'antd'
import { MailOutlined, AudioOutlined,EllipsisOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import './Home.css';
import {Navtop} from './Navtop';

const { Meta } = Card;
const { Search } = Input;

const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: '#1890ff',
    }}
  />
);

const onSearch = value => console.log(value);
export class Home extends Component {
    render() {
        return (
            <div>
               <Navtop/>
                <div className='searchBar'>
                <Search
                placeholder="input search text"
              enterButton="Search"
                 size="large"
              suffix={suffix}
              onSearch={onSearch}
    />
                </div>
                <div>
                    <Row>
                        <Col span={16}>
                            <h2 className="headerFirst">People you may Know</h2>
                            <div>
                            <Row gutter={18}>
                                <Col span={6}>
                                <Carousel autoplay className="ProfileCard">
                                              <Card hoverable 
                                          cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                                            >
                                          <Meta title="Europe Street beat" description="www.instagram.com" />
                                          </Card>
                                          <Card 
                                                hoverable 
                                          cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                                            >
                                          <Meta title="Europe Street beat" description="www.instagram.com" />
                                          </Card>
                                          <Card 
                                                hoverable 
                                          cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                                            >
                                          <Meta title="Europe Street beat" description="www.instagram.com" />
                                          </Card>
                                </Carousel>      
                             </Col>
                                <Col span={6}>
                                <Carousel autoplay className="ProfileCard">
                                            <Card 
                                          cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                                            >
                                          <Meta title="Europe Street beat" description="www.instagram.com" />
                                          </Card>
                                          <Card 
                                          cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                                            >
                                          <Meta title="Europe Street beat" description="www.instagram.com" />
                                          </Card>
                                          <Card 
                                          cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                                            >
                                          <Meta title="Europe Street beat" description="www.instagram.com" />
                                          </Card>
                                </Carousel>
                                </Col>
                                <Col span={6}>
                                <Carousel autoplay className="ProfileCard">
                                              <Card hoverable 
                                          cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                                            >
                                          <Meta title="Europe Street beat" description="www.instagram.com" />
                                          </Card>
                                          <Card 
                                                hoverable 
                                          cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                                            >
                                          <Meta title="Europe Street beat" description="www.instagram.com" />
                                          </Card>
                                          <Card
                                                hoverable 
                                          cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                                            >
                                          <Meta title="Europe Street beat" description="www.instagram.com" />
                                          </Card>
                                  </Carousel>
                                </Col>
                                <Col span={6}>
                                <Carousel autoplay className="ProfileCard">
                                              <Card hoverable 
                                          cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                                            >
                                          <Meta title="Europe Street beat" description="www.instagram.com" />
                                          </Card>
                                          <Card 
                                                hoverable 
                                          cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                                            >
                                          <Meta title="Europe Street beat" description="www.instagram.com" />
                                          </Card>
                                          <Card
                                                hoverable 
                                          cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                                            >
                                          <Meta title="Europe Street beat" description="www.instagram.com" />
                                          </Card>
                                  </Carousel>
                                </Col>
                            </Row> 
                            </div>
                            <Pagination defaultCurrent={1} total={50} className='pageUpdate'/>
                        </Col>
                        <Col span={7}>
                        <h2 className="headerFirst">Poll Going on</h2>
                        <div className="paraGraph1">
                          <div class="row">
                          <div class="column">
                            <b className="coll1">Poll Type</b>
                            <p className="coll2">Sport club</p>
                            <Button size="small" className="buttonSignup1">Link</Button>
                          </div>
                            <div class="column">
                            <h4 className="colll1">40</h4>
                              <p className="colll2">Mins</p>
                              <p className="colll3">Warm-up</p>
                            </div>
                            <div class="column">
                            <h4 className="colll1">20</h4>
                              <p className="colll2">Mins</p>
                              <p className="colll3">Stretch</p>
                            </div>
                    <div class="column">
                    <Avatar size="large" icon={<EllipsisOutlined  />}  shape="square" className="icon1" style={{ backgroundColor: 'blue' }}/>
                    </div>
                  </div>
                      </div>
                      </Col>
                    </Row>
                </div>
            </div>
        )
    }
}

export default Home