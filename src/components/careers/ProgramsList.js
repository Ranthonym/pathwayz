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

  const programs1 = program.map((program) => {
    if (program.id <= 2)
      return (
        <div>
          <ProgramsItem
            key={program.id}
            id={program.id}
            title={program.title}
            description={program.description}
            required_courses={program.required_courses}
            courses={program.course}
            grade_average={program.grade_average}
          />
        </div>
      );
  });
  const programs2 = program.map((program) => {
    if (program.id >= 3 && program.id <= 4)
      return (
        <div>
          <ProgramsItem
            key={program.id}
            id={program.id}
            title={program.title}
            description={program.description}
            required_courses={program.required_courses}
            courses={program.course}
            grade_average={program.grade_average}
          />
        </div>
      );
  });
  const programs3 = program.map((program) => {
    if (program.id > 4)
      return (
        <div>
          <ProgramsItem
            key={program.id}
            id={program.id}
            title={program.title}
            description={program.description}
            required_courses={program.required_courses}
            courses={program.course}
            grade_average={program.grade_average}
          />
        </div>
      );
  });

  return (
    <section className="Programs">
      <Container>
        <ul id="program-list" className="programs_list">
          {programs1}
        </ul>
        <ul id="program-list" className="programs_list">
          {programs2}
        </ul>
        <ul id="program-list" className="programs_list">
          {programs3}
        </ul>
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
