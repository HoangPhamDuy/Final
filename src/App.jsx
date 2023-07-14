import React, { useState } from 'react';
import { MenuFoldOutlined, MenuUnfoldOutlined, UserOutlined, ClockCircleOutlined,
  TableOutlined, CalculatorOutlined, DollarOutlined, FileOutlined, SettingOutlined,
} from '@ant-design/icons';
import { Space, Layout, Menu, Button,Image, Avatar} from 'antd';
import { Typography } from 'antd';
import { Footer } from 'antd/es/layout/layout';
import { Switch, Route, Link, useHistory } from 'react-router-dom';
import HelloWorld from './HelloWorld/App';
import Chess from './ChessBoard/App';
import Pomodoro from './Pomodoro/App';
import APPCalculator from './Calculator/App';
import MoneyExchange from './MoneyExchange/App';
import Quotes from './Quotes/Quotes';
import LanguageSwitcher from './LanguageSwitcher/index';
import LoginForm from './LoginForm/LoginForm';
import Profile from './LoginForm/Profile';
import tr from './i18n';
import Sun from './icon/sun';
import Peach from './icon/peach';
import Moon from './icon/moon';
const { Title, Text } = Typography;
const { Header, Sider, Content } = Layout;

const App = () => {
  // select key
  const [selectedKey, setSelctedKey] = useState(window.location.pathname);
  const handleMenuClick = (selectedKey) => {
    setSelctedKey(selectedKey);
  };
  const [collapsed, setCollapsed] = useState(false);
  // title 
  function getTitle(selectedKey, lang) {
    if (selectedKey == '/hello-world') return tr('Hello World', lang);
    if (selectedKey == '/chess-board') return tr('Chess Board', lang);
    if (selectedKey == '/pomodoro') return tr('Pomodoro', lang);
    if (selectedKey == '/calculator') return tr('Calculator', lang);
    if (selectedKey == '/money-exchange') return tr('MoneyExchange', lang);
    if (selectedKey == '/quotes') return tr('Quotes', lang);
  };
  // Language 
  const [lang, setLang] = useState('vn');
  const languages = [
    { lang: 'vn', label: 'VIE' },
    { lang: 'en', label: 'ENG' }
  ];
  //themes
  const itemSettings =[
    {
      key: '1',
      icon: <SettingOutlined />,
      label : tr('Settings',lang),
      children: [
        {
          key: 'light',
          icon : <Sun/>,
          label: tr('Light', lang),
        },
        {
          key: 'peach',
          icon: <Peach />,
          label: tr('Peach', lang),
        },
        {
          key: 'dark',
          icon: <Moon />,
          label: tr('Dark', lang),
        },
      ]
    }
  ];
  const history = useHistory();
  const [themeColor, setThemeColor] = useState("#fff");
  function handleItemClick(key) {
    if(key === "light") setThemeColor("#fff");
    if (key === "peach") setThemeColor("#ff787561");
    if (key === "dark") setThemeColor("#00152954");
  }
  // items menu app
  const items = [
    {
      key: '/hello-world',
      icon: <UserOutlined />,
      label: <Link to="/hello-world">{tr('Hello World', lang)}</Link>,
    },
    {
      key: '/chess-board',
      icon: <TableOutlined />,
      label: <Link to="/chess-board">{tr('Chess Board',lang)}</Link>,
    },
    {
      key: '/pomodoro',
      icon: <ClockCircleOutlined />,
      label: <Link to="/pomodoro">{tr('Pomodoro',lang)}</Link>,
    },
    {
      key: '/calculator',
      icon: <CalculatorOutlined />,
      label: <Link to="/calculator">{tr('Calculator', lang)}</Link>,
    },
    {
      key: '/money-exchange',
      icon: <DollarOutlined />,
      label: <Link to="/money-exchange">{tr('MoneyExchange', lang)}</Link>,
    },
    {
      key: '/quotes',
      icon: <FileOutlined />,
      label: <Link to="/quotes">{tr('Quotes', lang)}</Link>,
    },
  ];
  //login
  const [token,setToken] = useState(null);
  const pathname = window.location.pathname
  if((!token || !token.length)&& pathname !=='/login') {
    // window.location.href='./login';
    history.push('/login')
  }

  return (
    <>
        {token ? 
          (<Layout>
            <Sider trigger={null} collapsible collapsed={collapsed} height='100%' style={{ backgroundColor: '#fff' }}>  
              <div className="demo-logo-vertical" style={{ width: '100%', height: '64px', boxShadow:'0 0 4px 4px rgba(0,0,0,0.08)' , zIndex:'1',position:'relative',backgroundColor:'#fff'}} >
                {collapsed ?
                  <Image
                  style={{padding:'10px 10px'}}
                  height={48}
                  src='/KITS.jpg'
                  preview={false}
                  /> 
                  : 
                  <Image
                      width={199} height={48}
                      src='/logo.png'
                      preview={false}
                  />
                }
              </div>
              {!collapsed ?
                <Space style={{width: '100%', height: '180px ', marginTop:'16px'}}>
                  <Space style={{width:'170px' , height:'auto',display:'flex', flexDirection:'column',marginLeft:'8px'}}>
                    <div className="demo-logo-vertical" style={{borderInlineEnd:'none'}}>
                      <Profile token={token} logOut={() => setToken(null)} />
                    </div>
                  </Space>
                </Space> :
                <Space style={{width:'100%',justifyContent:'center',marginTop:'10px'}}>
                    <Avatar size={48} icon={<UserOutlined />} ></Avatar>
                </Space>
              }
              {!collapsed ?
                <div style={{ margin: '10px 10px' }}>
                  <Text strong style={{ fontSize: '20px' }}>Themes</Text>
                </div> : null
              }
              <Menu theme='light' mode='inline' items={itemSettings} onClick={({key}) => handleItemClick(key)} />
              {!collapsed ?
                <div style={{ margin: '10px 10px' }}>
                  <Text strong style={{ fontSize: '20px' }}>App</Text>
                </div> : 
                <div style={{ borderBottom: '1px solid rgba(0, 0, 0, 0.08)'}}></div>
              }
              <Menu defaultSelectedKeys={selectedKey}
                    theme="light" mode="inline" 
                    onClick={({ key }) => handleMenuClick(key)} 
                    items={items} style={{height:'calc(100% - 64px - 420px)'}} 
              />
            </Sider>
            <Layout>
              <Header style={{ padding: 0, background: '#fff', boxShadow:'0 0 4px 4px rgba(0,0,0,0.08)', zIndex:'10',display:'flex',justifyContent:'space-between' }}>
                <Space>
                  <Button
                    type="text"
                    icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                    onClick={() => setCollapsed(!collapsed)}
                    style={{
                      fontSize: '16px',
                      width: 64,  
                      height: 64,
                    }}
                  />
                  <Space>
                    <Text style={{fontSize : '25px'}}>{tr('Demonstration with Ant Design',lang)}</Text>
                  </Space>
                </Space>
                <Space style={{marginRight:'16px'}}>
                  <LanguageSwitcher lang={lang} languages={languages} onClick={(newlang) => setLang(newlang)}  />
                </Space>
              </Header>
              <Content
                style={{
                  margin: '24px 16px',
                  padding:20 ,
                  backgroundColor:themeColor,
                  minHeight: 'calc(100vh - 64px - 110px)',
                }}
              >
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', borderBottom:'1px solid rgba(0,0,0,0.08)',marginBottom:'24px'}}>
                  <Text style={{fontSize: '24px', fontStyle: 'italic',fontWeight: '400', marginLeft:'16px'}}>{getTitle(selectedKey,lang)}</Text>
                </div>
                <div style={{padding:'50px'}}>
                  <Switch>
                    <Route path="/hello-world">
                      <HelloWorld />
                    </Route>
                    <Route path="/chess-board">
                      <Chess />
                    </Route>
                    <Route path="/pomodoro">
                      <Pomodoro />
                    </Route>
                    <Route path="/calculator">
                      <APPCalculator/>
                    </Route>
                    <Route path="/money-exchange">
                      <MoneyExchange/>  
                    </Route>
                    <Route path="/quotes">
                      <Quotes />
                    </Route>
                  </Switch>
                </div>
              </Content>
              <Footer style={{ textAlign: 'left', height: '60px' , backgroundColor:'#fff'}}>
                <Title style={{ margin: '0', padding: '0', fontSize:'14px',fontWeight:'400',lineHeight:'0.5'}} level={5} italic>
                  Copyright by @HoangPhamDuy
                </Title>
              </Footer>
            </Layout>
          </Layout>)
          :<Switch>
              <Route path='/login'>
                <LoginForm
                  onSubmit={async (username, password) => {
                  const response = await fetch('http://localhost:3000/authenticate', {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ username, password })
                  });
                  const { token } = await response.json();
                  setToken(token);
                }}/>
              </Route>
          </Switch> 
        }
    </>
  );
};

export default App;
