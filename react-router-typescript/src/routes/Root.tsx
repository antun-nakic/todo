import React from "react";
import {
  Outlet,
  Link,
  useParams,
  NavLink,
  Navigate,
  useNavigate,
} from "react-router-dom";

type Props = {};

const Root = (props: Props) => {
  const params = useParams();
  const navigate = useNavigate();

  return (
    <>
      <div id="sidebar">
        <h1
          onClick={() => {
            navigate("/contacts/2", { state: { boja: "red" } });
          }}
        >
          React Router Contacts
        </h1>
        <div>
          <form id="search-form" role="search">
            <input
              id="q"
              aria-label="Search contacts"
              placeholder="Search"
              type="search"
              name="q"
            />
            <div id="search-spinner" aria-hidden hidden={true} />
            <div className="sr-only" aria-live="polite"></div>
          </form>
          <form method="post">
            <button type="submit">New</button>
          </form>
        </div>
        <nav>
          <ul>
            <li>
              <NavLink to={`contacts/1`}>Prvi kontakt</NavLink>
            </li>
            <li>
              <NavLink
                to={`contacts/2`}
                style={({ isActive, isPending }) => {
                  return {
                    fontWeight: isActive ? "bold" : "",
                    color: isPending ? "red" : "black",
                  };
                }}
              >
                Drugi kontakt
              </NavLink>
            </li>
            <li>
              <NavLink to={`contacts/3`}>Treci kontakt</NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <div id="detail">
        {!params.id && (
          <h1>
            {" "}
            <Navigate to="contacts/2" /> Dobrodošli u aplikaciju za
            pregeldavanje kontakata
          </h1>
        )}
        <Outlet />
      </div>
    </>
  );
};

export default Root;
