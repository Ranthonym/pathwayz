import React from 'react'
import PropTypes from "prop-types";
import ProgramsItem from "./Careers/ProgramsItem"
export default function ProgramsList(props) {

  const programsLists = [
    {
      id: 1,
      program: "Software Engineering",
      description: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?",
      requirements: <ul className="no-bullets"><li>Ontario Secondary School Diploma (OSSD)</li>
      <li>ENG4U</li>
      <li>SCH4U</li>
      <li>SPH4U</li>
      <li>MHF4U</li>
      <li>MCV4U</li>
      <li>And one additional 4U or M courses</li>
      <li><strong>No prerequisite below 70%</strong></li></ul>,
      path: "Software Engineer, Embedded Systems Engineer, Platform and Infrastructure Engineer, Software Architecture Engineer, Computer Systems Designer, Software Developer ",
      school: "York University",
    },
    {
      id: 2,
      program: "Computer Science",
      description: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?",
      requirements: <ul className="no-bullets"><li>Ontario Secondary School Diploma (OSSD)</li>
      <li>ENG4U</li>
      <li>SCH4U</li>
      <li>SPH4U</li>
      <li>MHF4U</li>
      <li>MCV4U</li>
      <li>And one additional 4U or M courses</li>
      <li><strong>No prerequisite below 70%</strong></li></ul>,
      path: "Software Engineer, Embedded Systems Engineer, Platform and Infrastructure Engineer, Software Architecture Engineer, Computer Systems Designer, Software Developer ",
      school: "York University",
    }
  ];

const programs = props.programsLists.map(program => {
  return (
    <ProgramsItem
      key={program.id}
      id={program.id}
      program={program.title}
      description={program.description}
      requirements={program.requirements}
      path={program.path}
      school={program.school}
    />
  );
});

return (
  <section className="Programs">
    <h4>Programs</h4>
    <ul className="programs_list">{programs}</ul>
  </section>
);
}

ProgramsItem.propTypes = {
  program: PropTypes.string,
  description: PropTypes.string,
  requirements: PropTypes.instanceOf(Element),
  path: PropTypes.string,
  school: PropTypes.string,
};