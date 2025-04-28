import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components/app';
import './assets/styles.css';
import { StyleProvider } from '@ant-design/cssinjs';
import { ConfigProvider, theme, ThemeConfig } from 'antd';

const enum COLORS {
  Blue = '#0286F5',
}

const customTheme: ThemeConfig = {
  algorithm: [theme.darkAlgorithm],
  token: {
    colorLink: COLORS.Blue,
    fontFamily: 'Inter, sans-serif',
  },
  components: {
    Card: {
      bodyPadding: 16,
    },
    Typography: {
      titleMarginBottom: 0,
    },
  },
};

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <StyleProvider layer>
      <ConfigProvider theme={customTheme}>
        <App />
      </ConfigProvider>
    </StyleProvider>
  </React.StrictMode>,
);
