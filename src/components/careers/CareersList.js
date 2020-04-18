import React, { useState, useEffect } from "react";
import propTypes from "prop-types";
import CareersItem from "./CareersItem";

export default function CareersList() {
  const [career, setCareers] = useState([]);

  useEffect(() => {
    getCareers();
  }, [career]);

  function getCareers() {
    fetch("http://localhost:3001/personalities/16/requirements")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setCareers(data);
      });
  }

  const careers = career.map((career) => {
    return (
      <CareersItem
        key={career.id}
        id={career.id}
        title={career.title}
        outlook={career.outlook}
        description={career.description}
        education={career.education}
        salary={career.salary}
      />
    );
  });

  return (
    <section className="Careers">
      <h4>Careers</h4>
      <ul className="careers_list">{careers}</ul>
    </section>
  );
}

CareersItem.propTypes = {
  title: propTypes.string,
  outlook: propTypes.string,
  description: propTypes.string,
  education: propTypes.string,
  salary: propTypes.string,
};
