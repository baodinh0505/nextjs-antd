import Link from 'next/link'
import { Layout, Menu, Breadcrumb, Icon,Button } from 'antd';

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

export default () => (
  <Layout>
    <Header className="header">
      <div className="logo" style={{ width:"120px",height:"31px",background: "rgba(255, 255, 255, 0.2)",margin: "16px 28px 16px 0",
  float: "left"}}/>
      <Menu
        theme="dark"
        mode="horizontal"
        //defaultSelectedKeys={['1']}
        style={{ lineHeight: '64px' }}
      >
        <Menu.Item key="1"><Link prefetch href="/teamMng"><a>Team Management</a></Link></Menu.Item>
        <Menu.Item key="2"><Link prefetch href="/scheduleMng"><a>Schedule Management</a></Link></Menu.Item>
        <Menu.Item key="3"><Link prefetch href="/ranking"><a>Ranking</a></Link></Menu.Item>
      </Menu>
    </Header>
    <Content style={{ padding: '0 50px' }}>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
      </Breadcrumb>
      <Layout style={{ padding: '24px 0', background: '#fff' }}>
        <Sider width={200} style={{ background: '#fff' }}>
          <Menu
            mode="inline"
            //defaultSelectedKeys={['1']}
            //defaultOpenKeys={['1']}
            style={{ height: '100%' }}
          >
            <SubMenu
              key="sub1"
              title={
                <span>
                  <Icon type="user" />
                  Team Management
                </span>
              }
            >
              <Menu.Item key="1"><Link prefetch href="/teamMng/add"><a>
              <Icon type="plus" />
              Add More Team
            </a></Link></Menu.Item>
              <Menu.Item key="2"><Link prefetch href="/teamMng/view"><a>
              <Icon type="eye" />
                View
            </a></Link>
                </Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub2"
              title={
                <span>
                  <Icon type="schedule"/>
                  Schedule Management
                </span>
              }
            >
              <Menu.Item key="3">
              <span>
              <Icon type="edit" />
              Edit Schedule
            </span></Menu.Item>
              <Menu.Item key="4"><span>
                <Icon type="eye" />
                View Schedule
            </span></Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub3"
              title={
                <span>
                  <Icon type="line-chart" />
                  Ranking
                </span>
              }
            >
              <Menu.Item key="5"><span>
              <Icon type="edit" />
              Edit Ranking
            </span></Menu.Item>
              <Menu.Item key="6"> <span>
               <Icon type="eye" />
               View Ranking 
           </span></Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Content style={{ padding: '0 24px', minHeight: 500 }}>
            <img style={{width:"100%", height:500 ,opacity:0.7}} src="../../static/images/ranking.jpg" alt="ahihi"/>
            <div style={{ background:'white', padding: '20px 26px 100px 16px' }}>
            
                <Button style={{marginLeft:'30%', marginRight:'20%' }}type="primary" ghost><Link prefetch href="/ranking/edit"><a>
                    Edit Ranking
                    </a></Link>
                </Button>
                <Button style={{width:150}}type="danger" ghost><Link prefetch href="/ranking/view"><a>
                    View Ranking
                    </a></Link>
                </Button>
            </div>
        </Content>
      </Layout>
    </Content>
    <Footer style={{ textAlign: 'center' }}>FPT Soccer League ©2018</Footer>
  </Layout>
)
