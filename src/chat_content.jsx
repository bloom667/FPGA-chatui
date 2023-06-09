import './index.css';
import './add.css';
import React from 'react';
import { useState, useEffect } from 'react';

const Typewriter = ({ text }) => {
  const [currentText, setCurrentText] = useState('');

  useEffect(() => {
    let currentIndex = 0;

    const timer = setInterval(() => {
      setCurrentText((prevText) => {
        const nextChar = text[currentIndex];
        const newText = prevText + nextChar;
        currentIndex++;

        if (currentIndex === text.length) {
          clearInterval(timer);
        }

        return newText;
      });
    }, 100);

    return () => {
      clearInterval(timer);
    };
  }, [text]);

  return <div>{currentText}</div>;
};

function clearContainers() {
  const containers = document.querySelectorAll('.container');
  containers.forEach((container) => {
    container.innerHTML = '';
  });
}

function Chatui() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const handlePostMessage = (event) => {
      try {
        // 获取 POST 请求中的消息内容
        const message = JSON.parse(event.data);

        setMessages((prevMessages) => [...prevMessages, message]);
      } catch (error) {
        console.error('Failed to parse message:', error);
      }
    };

    // 监听 message 事件
    window.addEventListener('message', handlePostMessage);

    return () => {
      // 移除事件监听器
      window.removeEventListener('message', handlePostMessage);
    };
  }, []);

  const Welcome = () => {
    const message = "Welcome to our Ui";
    setMessages((prevMessages) => [...prevMessages, message]);
  };

  useEffect(() => {
    Welcome(); // 在组件加载时调用 Welcome 函数
  }, []); // 空数组作为依赖项，确保只在组件加载时调用一次

  return (
    <div className="items-center py-4">
      <div className="message-container w-full">
        {messages.length > 0 && messages.map((message, index) => (
          <div key={index} className="container">
            <div className="block">
              <img src="./1.png" className="chat" alt="chat" />
              <p>:</p>
            </div>
            <div className="message p-20 m-2 rounded-lg">
              <Typewriter text={message} />
            </div>
            <div className="block"></div>
          </div>
        ))}
      </div>
      <div className="items-center py-4">
        <div className="button-container">
          <button
            onClick={Welcome}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Welcome Message
          </button>
          <button
            onClick={clearContainers}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Clear Message
          </button>
        </div>
      </div>
    </div>
  );
}

export default Chatui;
