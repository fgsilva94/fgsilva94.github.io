import React from "react";
import heroBcg from "../assets/hero-bcg.jpg";
import styled from "styled-components";

const Hero = () => {
  return (
    <Wrapper id="home">
      <section className="section-center">
        <article className="content">
          <h1>Lorem ipsum.</h1>
          <h3>Lorem ipsum dolor sit amet.</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam
            ducimus soluta quibusdam. Natus iure vitae eveniet dolore eaque sint
            non.
          </p>
          <button type="button" className="btn">
            contact me
          </button>
        </article>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .section-center {
    display: flex;
    width: 80vw;
    padding-top: 5rem;
    min-height: 60vh;
    align-items: center;
    justify-content: flex-start;
  }

  p {
    line-height: 2;
    max-width: 45em;
    margin-bottom: 2rem;
    color: var(--clr-grey-2);
    font-size: 1rem;
  }

  @media (min-width: 992px) {
    height: 100vh;
    background: linear-gradient(
        rgba(22, 26, 29, 0.7),
        rgba(22, 26, 29, 0.9),
        rgba(22, 26, 29, 0.9),
        rgba(22, 26, 29, 0.7)
      ),
      url(${heroBcg}) center/cover no-repeat;

    .section-center {
      min-height: 100%;
    }

    h1 {
      font-size: 4rem;
      margin-bottom: 2rem;
    }

    h3 {
      font-size: 3rem;
      margin-bottom: 1.25rem;
    }

    p {
      font-size: 1.25rem;
    }
  }
`;

export default Hero;
