
import './index.css';

import { createRoot } from 'react-dom/client';

import Chat from './chat';
import Chatui from './chat_content';



createRoot(document.getElementById('root')).render(
  <Chat/>
);