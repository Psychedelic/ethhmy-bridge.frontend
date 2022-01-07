import * as React from 'react';
import { baseTheme } from 'themes';
import { GlobalStyle } from './GlobalStyle';
import { Providers } from './Providers';
import { Redirect, Route, Switch } from 'react-router';
import { ActionModals } from './components/ActionModals';
import { EthBridge } from './pages/EthBridge';
import { Explorer } from './pages/Explorer';
import { Tokens } from './pages/Tokens';
import { InfoModal } from './components/InfoModal';
import { FAQPage } from './pages/FAQ';
import { InfoPage } from './pages/Info';
import { TransactionExample, Hrc20ContractExample } from './pages/Examples';
import { StuckOperations } from './pages/Explorer/StuckOperations';
import { AdminExplorer } from './pages/Explorer/AdminExplorer';
import { HelpPage } from './interfaces/NeedHelp';

export const App: React.FC = () => (
  <Providers>
    <React.Suspense fallback={<div />}>
      <Switch>
        <Route exact path="/tokens" component={Tokens} />
        <Route exact path="/tx-example" component={TransactionExample} />
        <Route exact path="/hrc20-example" component={Hrc20ContractExample} />
        <Route exact path="/faq" component={FAQPage} />
        <Route exact path="/help" component={HelpPage} />
        <Route exact path="/info" component={InfoPage} />
        <Route exact path="/explorer/:validator?" component={Explorer} />
        <Route exact path="/stuck-operations" component={StuckOperations} />} />
        <Route exact path="/admin-explorer" component={AdminExplorer} />} />
        <Route exact path="/:token" component={EthBridge} />
        <Route
          exact
          path="/:token/operations/:operationId"
          component={EthBridge}
        />
        <Redirect to="/busd" />
      </Switch>
    </React.Suspense>
    <ActionModals />
    <InfoModal />
    <GlobalStyle theme={...baseTheme as any} />
  </Providers>
);
