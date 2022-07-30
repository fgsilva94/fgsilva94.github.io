import React from "react";
import styled from "styled-components";

const Contact = () => {
  return (
    <Wrapper className="section">
      <section className="title">
        <h2>contact me</h2>
        <div className="underline"></div>
      </section>
      <section className="section-center">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
          blanditiis vero quod nihil recusandae porro aliquid veniam ullam error
          libero modi voluptatem, eius minus ducimus accusamus accusantium velit
          omnis minima et? Veniam vero perspiciatis omnis consequuntur commodi
          alias eum expedita.
        </p>
        <button type="button" className="btn">
          contact me
        </button>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .section-center {
    width: 50vw;
    text-align: center;
  }

  p {
    margin-bottom: 5rem;
  }

  .btn {
    text-align: center;
  }
`;

export default Contact;
