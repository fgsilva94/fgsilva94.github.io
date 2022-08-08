import React from "react";
import styled from "styled-components";
import Project from "./Project";

const Projects = () => {
  return (
    <Wrapper id="projects" className="section">
      <section className="title">
        <h2>featured projects</h2>
        <div className="underline"></div>
      </section>
      <section className="section-center">
        <Project />
        <Project />
        <Project />
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  article:last-child {
    margin-bottom: 0;
  }
`;

export default Projects;
