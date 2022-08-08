import React from "react";
import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import { useGlobalContext } from "../context";
import { links } from "../utils/constants";

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();

  return (
    <SidebarContainer>
      <aside
        className={`${isSidebarOpen ? "sidebar show-sidebar" : "sidebar"}`}
      >
        <div className="header">
          <button type="button" className="close-btn" onClick={closeSidebar}>
            <FaTimes />
          </button>
        </div>
        <ul className="links">
          {links.map(({ id, href, text }) => {
            return (
              <li key={id}>
                <a href={href} onClick={closeSidebar}>
                  {text}
                </a>
              </li>
            );
          })}
        </ul>
      </aside>
    </SidebarContainer>
  );
};

const SidebarContainer = styled.div`
  text-align: center;

  .header {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 1rem 1.5rem;
  }

  .close-btn {
    font-size: 2rem;
    background: transparent;
    border-color: transparent;
    color: var(--clr-primary-3);
    transition: var(--transition);
    cursor: pointer;
    margin-top: 0.2rem;

    &:hover {
      color: var(--clr-primary-4);
    }
  }

  .links {
    margin-bottom: 2rem;

    a {
      display: block;
      text-align: left;
      font-size: 1rem;
      text-transform: capitalize;
      padding: 1rem 1.5rem;
      color: var(--clr-grey-1);
      transition: var(--transition);
      letter-spacing: var(--spacing);

      &:hover {
        padding-left: 2.5rem;
        color: var(--clr-grey-2);
      }
    }
  }

  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--clr-off-black);
    transition: var(--transition);
    transform: translate(-100%);
    z-index: -1;
  }

  .show-sidebar {
    transform: translate(0);
    z-index: 999;
  }

  @media (min-width: 992px) {
    .sidebar {
      display: none;
    }
  }
`;

export default Sidebar;
