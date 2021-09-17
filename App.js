import React from 'react';
import { BrowserRouter, NavLink, Route, Switch } from 'react-router-dom';
import './App.css';
import { Menu, MenuItem } from 'semantic-ui-react';
import Recherche from './composants/Recherche';
import Pays from './composants/Pays';
import Accueil from './composants/Accueil';
import Page404 from './composants/Page404';







function App() {
  return (

    <React.Fragment>
      <BrowserRouter>
        <header className='App-header'>
          <Menu>
            <MenuItem as={NavLink} activeStyle={{ color: "red", fontWeight: "bold" }} to="/" exact={true}> Accueil </MenuItem>
            <Menu.Item as={NavLink} activeStyle={{ color: "red", fontWeight: "bold" }} to="/Recherche"> Recherche </Menu.Item>
            <Menu.Item as={NavLink} activeStyle={{ color: "red", fontWeight: "bold" }} to="/Pays"> Pays </Menu.Item>
          </Menu>
        </header>
        <Switch>
          <Route path="/" component={Accueil} exact={true} />
          <Route path="/pays/:codepays" component={Pays} />
          <Route path="/Recherche" component={Recherche} />
          <Route path="*" component={Page404} />
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;