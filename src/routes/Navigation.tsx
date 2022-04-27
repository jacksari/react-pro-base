import { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route, NavLink } from "react-router-dom";
import Logo from "../logo.svg";
import { routes } from "./routes";

export const Navigation = () => {
  return (
    <Suspense fallback={<span>Loading</span>}>
      <BrowserRouter>
        <div className="main-layout">
          <nav>
            <img src={Logo} alt="React Logo" />
            <ul>
              {routes.map(({ to, name }, index) => (
                <li key={index}>
                  <NavLink
                    to={to}
                    className={({ isActive }) => (isActive ? "" : "nav-active")}
                  >
                    {name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <Routes>
            {routes.map(({ path, component: Component }, index) => (
              <Route key={index} path={path} element={<Component />} />
            ))}

            <Route path="/*" element={<h1>Page Not found</h1>} />
          </Routes>
        </div>
      </BrowserRouter>
    </Suspense>
  );
};
