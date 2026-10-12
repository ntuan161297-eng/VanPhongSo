import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ConfigProvider, theme } from 'antd';
import viVN from 'antd/locale/vi_VN';
import { AppProvider } from './context/AppContext';
import { AppRoutes } from './routes/AppRoutes';

export const App: React.FC = () => {
  return (
    <ConfigProvider
      locale={viVN}
      theme={{
        token: {
          fontFamily: "'Be Vietnam Pro', 'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
          colorPrimary: '#1769AA',
          colorSuccess: '#159A75',
          colorWarning: '#D99A25',
          colorError: '#D64545',
          colorInfo: '#1769AA',
          colorTextBase: '#1F2D3D',
          colorBgBase: '#FFFFFF',
          borderRadius: 8,
          fontSize: 13.5
        },
        components: {
          Button: {
            borderRadius: 6,
            controlHeight: 34,
            fontWeight: 500
          },
          Table: {
            headerBg: '#F5F7FA',
            headerColor: '#1F2D3D',
            rowHoverBg: '#F8FAFC',
            borderColor: '#DCE5EF',
            fontSize: 13
          },
          Card: {
            borderRadiusLG: 10
          },
          Segmented: {
            itemSelectedBg: '#1769AA',
            itemSelectedColor: '#FFFFFF',
            controlHeight: 36,
            borderRadius: 6
          },
          Select: {
            controlHeight: 34
          },
          Input: {
            controlHeight: 34
          }
        }
      }}
    >
      <AppProvider>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </AppProvider>
    </ConfigProvider>
  );
};

export default App;
