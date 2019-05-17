import Link from 'next/link'
//import ReactHtmlParser from 'react-html-parser';
//import addTeam from '../../components/addTeam.js'
//import parse from 'html-react-parser';
//import renderHTML from 'react-render-html';
import { Steps, Button, message } from 'antd';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import { Card } from 'antd';
import { Input,InputNumber } from 'antd';
const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;
const Step = Steps.Step;



import { Form } from 'antd';

function onChange(value) {
  console.log('changed', value);
}
const steps = [
  {
    title: 'Step 1',
    content: <div className="steps-content" style={{ marginTop: 20, marginBottom:30 }}><h1 style={{marginRight:20}} >Input Team Numbers:   <InputNumber size="large" min={1} max={100000} onChange={onChange}/></h1> </div>
  },
  {
    title: 'Step 2',
    content: <div className="steps-content" style={{ marginTop: 20, marginBottom:30 }}><h1 style={{marginRight:20}} >Input Team Name:<Input placeholder="Team name" /></h1></div>
  },
];

export default class Add extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          current: 0,
        };
      }
    
      next() {
        const current = this.state.current + 1;
        this.setState({ current });
      }
    
      prev() {
        const current = this.state.current - 1;
        this.setState({ current });
      }
      render() {
        const { current } = this.state;
        return (
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
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
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
        
        <Card title="Team Numbers" style={{ margin:'0% 40% 25% 30%',width: 450 }}>
        <div style={{marginLeft:10+"%",marginRight:10+"%"}}>
        <Steps current={current}>
          {steps.map(item => (
            <Step key={item.title} title={item.title} />
          ))}
        </Steps>
            {(steps[current].content)}
        {/* <Steps current={0}>
            <Step title="In Progress" />
            <Step title="Waiting" />
        </Steps>
        <div style={{ marginTop: 20 }}>
        <span >Input Team Numbers:</span>  
            <InputNumber size="large" min={1} max={100000} onChange={onChange} />
        </div>
        </div>
        <div style={{ marginTop: 20,"text-align":"right"  }}>
                <Button type="primary">
                    Next
                </Button> */}
            </div>
            <div className="steps-action" style={{"textAlign":"right"}}>
          {current < steps.length - 1 && (
            <Button type="primary" onClick={() => this.next()}>
              Next
            </Button>
          )}
          {current === steps.length - 1 && (
            <Button type="primary" onClick={() => message.success('Processing complete!')}>
              Done
            </Button>
          )}
          {current > 0 && (
            <Button style={{ marginLeft: 8 }} onClick={() => this.prev()}>
              Previous
            </Button>
          )}
        </div>
        </Card>
        
        </Content>
      </Layout>
    </Content>
    <Footer style={{ textAlign: 'center' }}>FPT Soccer League ©2018</Footer>
  </Layout>
        );
    }
}







 // (
//     <Layout>
//     <Header className="header">
//       <div className="logo" style={{ width:"120px",height:"31px",background: "rgba(255, 255, 255, 0.2)",margin: "16px 28px 16px 0",
//   float: "left"}}/>
//       <Menu
//         theme="dark"
//         mode="horizontal"
//         //defaultSelectedKeys={['1']}
//         style={{ lineHeight: '64px' }}
//       >
//         <Menu.Item key="1"><Link prefetch href="/teamMng"><a>Team Management</a></Link></Menu.Item>
//         <Menu.Item key="2"><Link prefetch href="/scheduleMng"><a>Schedule Management</a></Link></Menu.Item>
//         <Menu.Item key="3"><Link prefetch href="/ranking"><a>Ranking</a></Link></Menu.Item>
//       </Menu>
//     </Header>
//     <Content style={{ padding: '0 50px' }}>
//       <Breadcrumb style={{ margin: '16px 0' }}>
//         <Breadcrumb.Item>Home</Breadcrumb.Item>
//         <Breadcrumb.Item>List</Breadcrumb.Item>
//         <Breadcrumb.Item>App</Breadcrumb.Item>
//       </Breadcrumb>
//       <Layout style={{ padding: '24px 0', background: '#fff' }}>
//         <Sider width={200} style={{ background: '#fff' }}>
//           <Menu
//             mode="inline"
//             defaultSelectedKeys={['1']}
//             defaultOpenKeys={['sub1']}
//             style={{ height: '100%' }}
//           >
//             <SubMenu
//               key="sub1"
//               title={
//                 <span>
//                   <Icon type="user" />
//                   Team Management
//                 </span>
//               }
//             >
//               <Menu.Item key="1"><Link prefetch href="/teamMng/add"><a>
//               <Icon type="plus" />
//               Add More Team
//             </a></Link></Menu.Item>
//               <Menu.Item key="2"><Link prefetch href="/teamMng/view"><a>
//               <Icon type="eye" />
//                 View
//             </a></Link>
//                 </Menu.Item>
//             </SubMenu>
//             <SubMenu
//               key="sub2"
//               title={
//                 <span>
//                   <Icon type="schedule"/>
//                   Schedule Management
//                 </span>
//               }
//             >
//               <Menu.Item key="3">
//               <span>
//               <Icon type="edit" />
//               Edit Schedule
//             </span></Menu.Item>
//               <Menu.Item key="4"><span>
//                 <Icon type="eye" />
//                 View Schedule
//             </span></Menu.Item>
//             </SubMenu>
//             <SubMenu
//               key="sub3"
//               title={
//                 <span>
//                   <Icon type="line-chart" />
//                   Ranking
//                 </span>
//               }
//             >
//               <Menu.Item key="5"><span>
//               <Icon type="edit" />
//               Edit Ranking
//             </span></Menu.Item>
//               <Menu.Item key="6"> <span>
//                <Icon type="eye" />
//                View Ranking 
//            </span></Menu.Item>
//             </SubMenu>
//           </Menu>
//         </Sider>
//         <Content style={{ padding: '0 24px', minHeight: 500 }}> 
//         <Card title="Team Numbers" style={{ width: 450 }}>
//         <div style={{"text-align":"center"}}>
//         <Steps current={0}>
//             <Step title="In Progress" />
//             <Step title="Waiting" />
//         </Steps>
//         <div style={{ marginTop: 20 }}>
//         <span >Input Team Numbers:</span>  
//             <InputNumber size="large" min={1} max={100000} onChange={onChange} />
//         </div>
//         </div>
//         <div style={{ marginTop: 20,"text-align":"right"  }}>
//                 <Button type="primary">
//                     Next
//                 </Button>
//             </div>
//         </Card>
        
//         </Content>
//       </Layout>
//     </Content>
//     <Footer style={{ textAlign: 'center' }}>FPT Soccer League ©2018</Footer>
//   </Layout>
