import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "../context";
import { links } from "../utils/constants";

const Navbar = () => {
  const { openSidebar } = useGlobalContext();
  const [hide, setHide] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const currScrollPos = window.scrollY;

      if (currScrollPos === 0) {
        setScrolled(false);
      } else {
        setScrolled(true);
      }

      if (prevScrollPos > currScrollPos) {
        setHide(false);
      } else {
        setHide(true);
      }

      setPrevScrollPos(currScrollPos);
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [prevScrollPos]);

  return (
    <NavContainer
      className={
        scrolled ? (hide ? "nav-scrolled nav-hide" : "nav-scrolled") : ""
      }
    >
      <div className="center">
        <div className="header">
          <button type="button" className="toggle" onClick={openSidebar}>
            <FaBars />
          </button>
        </div>
        <ul className="links">
          {links.map(({ id, href, text }) => {
            return (
              <li key={id}>
                <a href={href}>{text}</a>
              </li>
            );
          })}
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
  position: fixed;
  top: 0;
  background: var(--clr-off-black);
  transition: var(--transition);
  width: 100%;
  z-index: 9;

  .center {
    width: 90vw;
    margin: 0 auto;
    max-width: var(--max-width);
  }

  .header {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }

  .toggle {
    background: transparent;
    border: transparent;
    color: var(--clr-primary-3);
    cursor: pointer;
    transition: var(--transition);
    svg {
      font-size: 2rem;
    }

    &:hover {
      color: var(--clr-primary-4);
    }
  }

  .links {
    display: none;
  }

  @media (min-width: 992px) {
    .toggle {
      display: none;
    }

    .center {
      align-items: center;
    }

    .links {
      display: flex;
      justify-content: center;

      li {
        margin: 0 0.5rem;
      }

      a {
        line-height: 0;
        color: var(--clr-grey-2);
        font-size: 1rem;
        text-transform: capitalize;
        letter-spacing: var(--spacing);
        padding: 0.5rem;

        &:hover {
          color: var(--clr-off-white);
          border-bottom: 2px solid var(--clr-primary-3);
        }
      }
    }
  }
`;
export default Navbar;
