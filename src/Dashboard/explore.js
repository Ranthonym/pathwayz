import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import CareersItem from "../components/careers/CareersItem";
import { Card, CardTitle } from "shards-react";
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
    // const careersLists = [
    //   {
    //     id: 1,
    //     title: "Software Engineer",
    //     description:
    //       "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?",
    //     education:
    //       "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain.",
    //     salary: "$100,000-$110,000",
    //     outlook: "Job prospects: ★ ★ ★ Good",
    //   },
    //   {
    //     id: 2,
    //     title: "Doctor",
    //     description:
    //       "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?",
    //     education:
    //       "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain.",
    //     salary: "$100,000-$110,000",
    //     outlook: "Job prospects: ★ ★ ☆ Fair",
    //   },
    // ];

    onchange = (e) => {
      this.setState({ search: e.target.value });
    };
    const { search } = this.state;
    const filteredCareers = this.state.career.filter((careers) => {
      return careers.title.toLowerCase().indexOf(search.toLowerCase()) !== -1;
    });

    return (
      <section className="Careers">
        {/* <CardTitle>Search Through All The Career Options</CardTitle> */}
        <Card id="search-bar">
          <input placeholder="Search Careers" onChange={this.onchange}></input>
        </Card>

        <div className="row">
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
