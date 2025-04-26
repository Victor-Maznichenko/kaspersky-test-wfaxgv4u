import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components/app';
import './assets/styles.css';
import { StyleProvider } from '@ant-design/cssinjs';
import { ConfigProvider, theme } from 'antd';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <StyleProvider layer>
      <ConfigProvider theme={{ algorithm: theme.darkAlgorithm }}>
        <App />
      </ConfigProvider>
    </StyleProvider>
  </React.StrictMode>
);
