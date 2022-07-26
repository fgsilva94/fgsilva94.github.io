import React from "react";
import styled from "styled-components";

const InConstructionPage = () => {
  return (
    <Wrapper className="page-100">
      <section>
        <h1>Site under construction</h1>
        <h3>Come back in a few days</h3>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  background: var(--clr-primary-5);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  h1 {
    font-size: 4rem;
  }

  h3 {
    text-transform: none;
    margin-bottom: 2rem;
  }
`;

export default InConstructionPage;
