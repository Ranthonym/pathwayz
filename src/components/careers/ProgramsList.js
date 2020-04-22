import React, { useState, useEffect } from "react";
import propTypes from "prop-types";
import { Container } from "shards-react";
import ProgramsItem from "./ProgramsItem";

export default function ProgramsList() {
  const [program, setPrograms] = useState([]);

  useEffect(() => {
    getPrograms();
  }, [program]);

  function getPrograms() {
    fetch("http://localhost:3001/programs/2")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setPrograms(data);
      });
  }

  const programs = program.map((program) => {
    return (
      <ProgramsItem
        key={program.id}
        id={program.id}
        title={program.title}
        description={program.description}
        required_courses={program.required_courses}
        courses={program.course}
        grade_average={program.grade_average}
      />
    );
  });

  return (
    <section className="Programs">
      <h4>Programs</h4>
      <Container>
        <ul className="programs_list">{programs}</ul>
      </Container>
    </section>
  );
}

ProgramsItem.propTypes = {
  name: propTypes.string,
  description: propTypes.string,
  required_courses: propTypes.array,
  courses: propTypes.string,
  school: propTypes.string,
  grade_average: propTypes.string,
};
