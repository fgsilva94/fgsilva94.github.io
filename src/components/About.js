import React from "react";
import styled from "styled-components";
import aboutImg from "../assets/about-img.jpg";

const About = () => {
  return (
    <Wrapper id="about" className="section section-center">
      <article className="about-img">
        <img src={aboutImg} alt="about img" />
      </article>
      <article className="about-info">
        <section className="title">
          <h2>about me</h2>
          <div className="underline"></div>
        </section>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem velit
          repellendus, recusandae tempora accusantium itaque nihil aliquid
          possimus magnam ex aspernatur molestiae assumenda commodi quod
          numquam, ipsum animi maxime eum. Recusandae quos nesciunt molestias
          doloribus, eaque quas placeat aliquam ducimus veniam voluptatum minima
          vero, ipsum ex accusamus, facere tenetur dolorem!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem velit
          repellendus, recusandae tempora accusantium itaque nihil aliquid
          possimus magnam ex aspernatur molestiae assumenda commodi quod
          numquam, ipsum animi maxime eum. Recusandae quos nesciunt molestias
          doloribus, eaque quas placeat aliquam ducimus veniam voluptatum minima
          vero, ipsum ex accusamus, facere tenetur dolorem!
        </p>
        <div className="stack">
          <span>react.js</span>
          <span>express.js</span>
          <span>spring boot</span>
        </div>
      </article>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;

  .about-img {
    max-height: 30rem;
    display: block;
    justify-self: center;
  }

  img {
    height: 100%;
    position: relative;
    border-radius: var(--radius);
    -o-object-fit: cover;
    object-fit: cover;
    object-position: center;
  }

  .about-info {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
  }

  .title {
    text-align: left;
    margin-bottom: 2rem;
  }

  .underline {
    margin-left: 0;
  }

  @media (min-width: 992px) {
    grid-template-columns: 2fr 3fr;

    .about-img {
      display: block;
      position: relative;
    }

    .about-img::before {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      border: 0.25rem solid var(--clr-primary-3);
      top: 2rem;
      left: -2rem;
      border-radius: var(--radius);
    }
  }
`;

export default About;
