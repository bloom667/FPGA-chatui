import React from 'react';
import{ useRef,useState} from 'react';
import './index.css';
import './add.css';
import { Layout } from 'antd';

import Chatui from './chat_content';

const { Header, Content, Footer } = Layout;
function Chat() {
  const [childHeight, setChildHeight] = useState(0);
  const childRef = useRef(null);

  const handleChildHeight = (height) => {
    setChildHeight(height);
  };

    return (
        <Layout className="layout" style={{ height: 'height: childHeight + 100 ' }}>
          <Header style={{ display: 'flex'}} className="css-1m6c83y">
          <div className="rg2km" style={{flexFlow: "nowrap", height: "64px"}}>
              <div className='md-6'>
                <h1>
                  <a className='if06k' href='/index'>
                    <span className="css-zsb1p1">Chat_Ui</span>
                  </a>
                </h1>
              </div>
            </div>
          </Header>
          <Content style={{ flex: 1, padding: '0 50px' ,height:  childHeight+200 }}>
            <Chatui
            onHeightChange={handleChildHeight}
            />
          </Content>
          <Footer style={{ textAlign: 'center' }}>Made with ❤ by Team18</Footer>
        </Layout>
      );
}
export default Chat;