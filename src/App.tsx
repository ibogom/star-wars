import React, { useReducer } from "react";
import { Layout, Typography } from "antd";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { AppContext } from "context/AppContext";
import reducer from "store";

import Home from "./components/home/Home";
import Legends from "./components/legends/Legends";
import Legend from "./components/legends/Legend";
import Planets from "./components/planets/Planets";
import Planet from "./components/planets/Planet";
import Starships from "./components/starships/Starships";
import Starship from "./components/starships/Starship";
import NotFound from "./components/404/NotFound";

import "antd/dist/antd.css";

import styles from "./App.module.scss";

const { Header, Footer, Content } = Layout;

const { Title } = Typography;

const initialState = JSON.parse(localStorage.getItem("state") as string) || {
  favorites: [],
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const { t } = useTranslation();

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <Layout className={styles.layout}>
        <Header className={styles.header}>
          <Title className={styles.title} level={3}>
            {t("header.title")}
          </Title>
        </Header>
        <Content className={styles.content}>
          <Router>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/people" component={Legends} />
              <Route exact path="/people/:id" component={Legend} />
              <Route exact path="/planets" component={Planets} />
              <Route exact path="/planets/:id" component={Planet} />
              <Route exact path="/starships" component={Starships} />
              <Route exact path="/starships/:id" component={Starship} />
              <Route component={NotFound} />
            </Switch>
          </Router>
        </Content>
        <Footer className={styles.footer}>
          {t("footer.content", { year: new Date().getFullYear() })}
        </Footer>
      </Layout>
    </AppContext.Provider>
  );
}

export default App;
