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
  const programsLists = [
    {
      id: 1,
      title: "Software Engineering",
      description:
        "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?",
      required_courses: (
        <ul className="no-bullets">
          <li>Ontario Secondary School Diploma (OSSD)</li>
          <li>ENG4U</li>
          <li>SCH4U</li>
          <li>SPH4U</li>
          <li>MHF4U</li>
          <li>MCV4U</li>
          <li>And one additional 4U or M courses</li>
          <li>
            <strong>No prerequisite below 70%</strong>
          </li>
        </ul>
      ),
      courses:
        "Software Engineer, Embedded Systems Engineer, Platform and Infrastructure Engineer, Software Architecture Engineer, Computer Systems Designer, Software Developer ",
      school: "York University",
    },
    {
      id: 2,
      title: "Computer Science",
      description:
        "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?",
      required_courses: (
        <ul className="no-bullets">
          <li>Ontario Secondary School Diploma (OSSD)</li>
          <li>ENG4U</li>
          <li>SCH4U</li>
          <li>SPH4U</li>
          <li>MHF4U</li>
          <li>MCV4U</li>
          <li>And one additional 4U or M courses</li>
          <li>
            <strong>No prerequisite below 70%</strong>
          </li>
        </ul>
      ),
      courses:
        "Software Engineer, Embedded Systems Engineer, Platform and Infrastructure Engineer, Software Architecture Engineer, Computer Systems Designer, Software Developer ",
      school: "Ryerson University",
    },
  ];

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
