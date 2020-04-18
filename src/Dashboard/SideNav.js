import React from "react";
// import useVisualMode from "../hooks/useVisualMode";
import QuizApp from "../components/QuizApp";
import {
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Button,
  NavLink,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Collapse,
} from "shards-react";
import Sidebar from "./Sidebar";
export default class DashNav extends React.Component {
  constructor(props) {
    super(props);

    this.startQuiz = this.startQuiz.bind(this);
    this.toggleDropdown = this.toggleDropdown.bind(this);
    this.toggleNavbar = this.toggleNavbar.bind(this);

    this.state = {
      messages: false,
      quiz: false,
      dropdownOpen: false,
      collapseOpen: false,
    };
  }

  startQuiz() {
    this.setState({
      quiz: !this.state.quiz,
      messages: false,
      userProfile: false,
      resources: false,
      exploreCareers: false,
    });
  }

  handler = (val) => {
    this.setState({
      quiz: val,
    });
  };

  handleMessages = (val) => {
    this.setState({
      messages: val,
    });
  };

  handleUserProfile = (val) => {
    this.setState({
      userProfile: val,
    });
  };

  handleResources = (val) => {
    this.setState({
      resources: val,
    });
  };

  handleExploreCareers = (val) => {
    this.setState({
      exploreCareers: val,
    });
  };

  toggleDropdown() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
    });
  }

  toggleNavbar() {
    this.setState({
      collapseOpen: !this.state.collapseOpen,
    });
  }

  render() {
    const isTakingQuiz = this.state.quiz;
    let quiz;
    if (isTakingQuiz) {
      quiz = (
        <div id="quiz">
          {" "}
          <QuizApp totalQuestions={5} />
        </div>
      );
    }
    return (
      <div>
        <div>
          <Navbar type="dark" theme="info" expand="md">
            <NavbarBrand href="#">PathFinder</NavbarBrand>
            <NavbarToggler onClick={this.toggleNavbar} />
            <Collapse open={this.state.collapseOpen} navbar>
              <Nav type="dark" navbar className="ml-auto" expand="md">
                <NavItem>
                  <Button theme="light">Chat with a mentor!</Button>
                </NavItem>
                <NavItem>
                  <NavLink>About</NavLink>
                </NavItem>
                <Dropdown
                  open={this.state.dropdownOpen}
                  toggle={this.toggleDropdown}
                >
                  <DropdownToggle nav caret>
                    <i className="fa fa-fw fa-user"></i>
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem> My Dashboard</DropdownItem>
                    <DropdownItem onClick={this.startQuiz}>
                      {" "}
                      Career Quiz
                    </DropdownItem>
                    <DropdownItem>Logout</DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </Nav>
            </Collapse>
          </Navbar>
        </div>
        <div>
          <Sidebar
            quiz={this.handler}
            setMessages={this.handleMessages}
            message={this.state.messages}
            setUserProfile={this.handleUserProfile}
            userProfile={this.state.userProfile}
            setResources={this.handleResources}
            resources={this.state.resources}
            setExploreCareers={this.handleExploreCareers}
            exploreCareers={this.state.exploreCareers}
          />
        </div>
        <div>{quiz}</div>
      </div>
    );
  }
}
