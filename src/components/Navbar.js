import React from "react";
import styled from "styled-components";
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "../context";

const Navbar = () => {
  const { openSidebar } = useGlobalContext();

  return (
    <NavContainer>
      <div className="nav-center">
        <div className="nav-header">
          <button type="button" className="nav-toggle" onClick={openSidebar}>
            <FaBars />
          </button>
        </div>
        <ul className="nav-links">
          <li>
            <a href="/" onClick={(e) => e.preventDefault()}>
              Home
            </a>
          </li>
          <li>
            <a href="/" onClick={(e) => e.preventDefault()}>
              About
            </a>
          </li>
          <li>
            <a href="/" onClick={(e) => e.preventDefault()}>
              Projects
            </a>
          </li>
          <li>
            <a href="/" onClick={(e) => e.preventDefault()}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </NavContainer>
  );
};

const NavContainer = styled.nav`
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;

  .nav-center {
    width: 90vw;
    margin: 0 auto;
    max-width: var(--max-width);
  }

  .nav-header {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }

  .nav-toggle {
    background: transparent;
    border: transparent;
    color: var(--clr-primary-3);
    cursor: pointer;
    svg {
      font-size: 2rem;
    }
  }

  .nav-toggle:hover {
    color: var(--clr-primary-4);
  }

  .nav-links {
    display: none;
  }

  @media (min-width: 992px) {
    .nav-toggle {
      display: none;
    }

    .nav-center {
      display: grid;
      grid-template-columns: auto 1fr auto;
      align-items: center;
    }

    .nav-links {
      display: flex;
      justify-content: center;

      li {
        margin: 0 0.5rem;
      }

      a {
        color: var(--clr-grey-1);
        font-size: 1rem;
        text-transform: capitalize;
        letter-spacing: var(--spacing);
        padding: 0.5rem;
        &:hover {
          border-bottom: 2px solid var(--clr-primary-3);
        }
      }
    }
  }
`;
export default Navbar;
