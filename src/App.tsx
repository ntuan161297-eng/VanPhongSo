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
          colorPrimary: '#0798EB',
          colorSuccess: '#10B981',
          colorWarning: '#F59E0B',
          colorError: '#EF4444',
          colorInfo: '#0284C7',
          colorTextBase: '#1E293B',
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
            headerBg: '#F1F5F9',
            headerColor: '#1E293B',
            rowHoverBg: '#F8FAFC',
            borderColor: '#E2E8F0',
            fontSize: 13
          },
          Card: {
            borderRadiusLG: 10
          },
          Segmented: {
            itemSelectedBg: '#0798EB',
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
