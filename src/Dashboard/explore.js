import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import CareersItem from "../components/careers/CareersItem";
import { Card } from "shards-react";
export default class Explore extends React.Component {
  state = {
    search: "",
    career: [],
  };

  componentDidMount() {
    fetch("http://localhost:3001/careers")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({ career: data });
      });
  }

  render() {
  
    onchange = (e) => {
      this.setState({ search: e.target.value });
    };
    const { search } = this.state;
    const filteredCareers = this.state.career.filter((careers) => {
    return careers.title.toLowerCase().indexOf(search.toLowerCase()) !== -1;
    });

    return (
      <section className="Careers">
        <Card id="explore-body">
          {/* <h6>Explore All Career Options</h6> */}
          <Card id="search-bar">
            <input
              placeholder="Search Careers"
              onChange={this.onchange}>
            </input>
          </Card>

          <div id="explore-careers" className="row">
            {filteredCareers.map((careers) => {
              return (
                <CareersItem
                  key={careers.id}
                  id={careers.id}
                  title={careers.title}
                  outlook={careers.outlook}
                  description={careers.description}
                  education={careers.education}
                  salary={careers.salary}
                />
              );
            })}
          </div>
        </Card>
      </section>
    );
  }
}

CareersItem.propTypes = {
  title: PropTypes.string,
  outlook: PropTypes.string,
  description: PropTypes.string,
  education: PropTypes.string,
  salary: PropTypes.string,
};
