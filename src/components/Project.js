import React from "react";
import styled from "styled-components";
import projectImg from "../assets/project-img.jpg";
import { MdOutlineOpenInNew } from "react-icons/md";
import { FiGithub } from "react-icons/fi";

const Project = () => {
  return (
    <Wrapper>
      <section className="img-container">
        <img src={projectImg} alt="project img" />
      </section>
      <section className="info">
        <section className="title">
          <h3>Project title</h3>
          <div className="underline"></div>
        </section>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Exercitationem suscipit aspernatur earum fugiat itaque excepturi quia
          obcaecati nesciunt explicabo ipsam perferendis eum veritatis quidem
          culpa impedit accusantium, tenetur mollitia nisi?
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Exercitationem suscipit aspernatur earum fugiat itaque excepturi quia
          obcaecati nesciunt explicabo ipsam perferendis eum veritatis quidem
          culpa impedit accusantium, tenetur mollitia nisi?
        </p>
        <div className="stack">
          <span>java</span>
          <span>react</span>
        </div>
        <div className="links">
          <a href="/" onClick={(e) => e.preventDefault()}>
            <FiGithub className="icon" />
          </a>
          <a href="/" onClick={(e) => e.preventDefault()}>
            <MdOutlineOpenInNew className="icon" />
          </a>
        </div>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  display: grid;
  margin-bottom: 4rem;

  .title {
    margin-bottom: 1.5rem;
    text-align: left;
  }

  h3 {
    font-weight: 500;
    font-size: 1.25rem;
    text-transform: uppercase;
    color: var(--clr-off-white);
  }

  .underline {
    width: 5rem;
    height: 0.175rem;
    background: var(--clr-primary-3);
    margin-left: 0;
    margin-right: auto;
  }

  img {
    height: 100%;
    width: 100%;
    border-radius: var(--radius);

    object-fit: cover;
    object-position: center;
  }

  .img-container {
    display: inline-block;
    position: relative;
    height: 19rem;
    border-radius: var(--radius);
    z-index: 1;
  }

  .img-container::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      to bottom right,
      var(--clr-black),
      var(--clr-off-black)
    );
    opacity: 0.7;
    border-radius: var(--radius);
    transition: var(--transition);
  }

  &:hover .img-container::after {
    opacity: 0.3;
  }

  .info {
    background: var(--clr-off-black);
    padding: 1rem 2rem;
    border-radius: var(--radius);
  }

  .stack {
    margin-bottom: 1rem;
  }

  .stack span {
    display: inline-block;
    background: rgba(11, 9, 10, 0.3);
    color: var(--clr-grey-2);
    margin: 0.25rem;
    padding: 0.25rem 0.5rem;
    border-radius: var(--radius);
    text-transform: uppercase;
    letter-spacing: 2px;
    font-size: 0.85rem;
  }

  .icon {
    color: var(--clr-primary-3);
    font-size: 1.5rem;
    margin-right: 0.75rem;
    transition: var(--transition);
  }

  .icon:hover {
    color: var(--clr-primary-4);
  }

  @media (min-width: 576px) {
    .img-container {
      height: 19rem;
    }
  }
  @media (min-width: 768px) {
    .img-container {
      height: 22rem;
    }
  }
  @media screen and (min-width: 992px) {
    grid-template-columns: repeat(12, 1fr);
    align-items: center;

    .img-container {
      grid-column: 1 / span 8;
      /* grid-column-end: 8; */
      grid-row: 1 / 1;
      height: 30rem;
      border-radius: var(--radius);
      box-shadow: var(--dark-shadow);
    }

    .info {
      border-radius: var(--radius);
      box-shadow: var(--dark-shadow);

      z-index: 1;
      grid-column: 5 /12;
      grid-row: 1 / 1;
    }

    &:nth-of-type(even) .img-container {
      grid-column: 5 / -1;
      grid-row: 1 / 1;
    }

    &:nth-of-type(even) .info {
      grid-column: 2 / span 7;
      grid-row: 1 / 1;
      text-align: left;
    }
  }
`;

export default Project;
