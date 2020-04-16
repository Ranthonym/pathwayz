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
// const { mode, transition } = useVisualMode(SHOW);
// const SHOW = "SHOW";
export default class DashNav extends React.Component {
  constructor(props) {
    super(props);

    this.startQuiz = this.startQuiz.bind(this);
    this.toggleDropdown = this.toggleDropdown.bind(this);
    this.toggleNavbar = this.toggleNavbar.bind(this);

    this.state = {
      quiz: false,
      dropdownOpen: false,
      collapseOpen: false,
    };
  }

  startQuiz() {
    this.setState({
      quiz: !this.state.quiz,
    });
  }

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

  // takeAssessment() {
  //   transition(SHOW);
  // }
  render() {
    const isTakingQuiz = this.state.quiz;
    let quiz;
    if (isTakingQuiz) {
      quiz = <QuizApp totalQuestions={5} />;
    }
    return (
      <div>
        {/* {mode === SHOW && <QuizApp totalQuestions={5} />} */}
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
                  <DropdownItem onClick={this.startQuiz}>
                    {" "}
                    Career Quiz
                  </DropdownItem>
                  <DropdownItem> My Dashboard</DropdownItem>
                  <DropdownItem>Logout</DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </Nav>
          </Collapse>
        </Navbar>
        {quiz}
      </div>
    );
  }
}
