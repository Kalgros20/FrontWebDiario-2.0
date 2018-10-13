import React from 'react';
import history from '../../history';
import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';

// Be sure to include styles at some point, probably during your bootstraping
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
const clickButton = selected => {

  history.push(selected);

}

const SideMenu = () => {

  return (
    <SideNav
      onSelect={(selected) => clickButton(selected)}
    >
      <SideNav.Toggle />
      <SideNav.Nav defaultSelected="home">
        <NavItem eventKey="/Home">
          <NavIcon>
            <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
          </NavIcon>
          <NavText>
            Home
            </NavText>
        </NavItem>
        <NavItem eventKey="/calendario">
          <NavIcon>
            <i className="fa fa-fw fa-calendar" style={{ fontSize: '1.75em' }} />
          </NavIcon>
          <NavText>
            Calendário
            </NavText>
        </NavItem>
        <NavItem eventKey="/teste">
          <NavIcon>
            <i className="fa fa-fw fa-calendar" style={{ fontSize: '1.75em' }} />
          </NavIcon>
          <NavText>
            Calendário
            </NavText>
        </NavItem>
        <NavItem eventKey="charts">
          <NavIcon>
            <i className="fa fa-pencil" style={{ fontSize: '1.75em' }} />
          </NavIcon>
          <NavText>
            Cadastro
            </NavText>
          <NavItem eventKey="/register/semester">
            <NavText>
              Semestre
            </NavText>
          </NavItem>
          <NavItem eventKey="/register/occurrence">
            <NavText>
              Ocorrência
            </NavText>
          </NavItem>
        </NavItem>
      </SideNav.Nav>
    </SideNav>
  );

}

export default SideMenu;
