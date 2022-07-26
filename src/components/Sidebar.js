import React from "react";
import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import { useGlobalContext } from "../context";

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();

  return (
    <SidebarContainer>
      <aside
        className={`${isSidebarOpen ? "sidebar show-sidebar" : "sidebar"}`}
      >
        <div className="sidebar-header">
          <button type="button" className="close-btn" onClick={closeSidebar}>
            <FaTimes />
          </button>
        </div>
        <ul className="links">
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
      </aside>
    </SidebarContainer>
  );
};

const SidebarContainer = styled.div`
  text-align: center;

  .sidebar-header {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 1rem 1.5rem;
  }

  .close-btn {
    font-size: 2rem;
    background: transparent;
    border-color: transparent;
    color: var(--clr-primary-2);
    transition: var(--transition);
    cursor: pointer;
    margin-top: 0.2rem;
  }

  .close-btn:hover {
    color: var(--clr-primary-4);
  }

  .links {
    margin-bottom: 2rem;
  }

  .links a {
    display: block;
    text-align: left;
    font-size: 1rem;
    text-transform: capitalize;
    padding: 1rem 1.5rem;
    color: var(--clr-grey-1);
    transition: var(--transition);
    letter-spacing: var(--spacing);
  }

  .links a:hover {
    padding: 1rem 1.5rem;
    padding-left: 2rem;
    color: var(--clr-grey-2);
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
