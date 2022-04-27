import { BrowserRouter } from "react-router-dom";
import { Routes, Route, NavLink } from "react-router-dom";
import Logo from "../logo.svg";
import { LazyloadPage, LazyloadPage2, LazyloadPage3 } from '../01-lazyload/pages';

export const Navigation = () => {
  return (
    <BrowserRouter>
      <div className="main-layout">
        <nav>
          <img src={Logo} alt="React Logo" />
          <ul>
            <li>
              <NavLink to="/lazy1" className={ ({ isActive }) => isActive ? 'nav-active' : '' }>Lazy1</NavLink>
            </li>
            <li>
              <NavLink to="/lazy2" className={ ({ isActive }) => isActive ? 'nav-active' : '' }>Lazy2</NavLink>
            </li>
            <li>
              <NavLink to="/lazy3" className={ ({ isActive }) => isActive ? 'nav-active' : '' }>Lazy3</NavLink>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="lazy1" element={<LazyloadPage/>} />
          <Route path="lazy2" element={<LazyloadPage2/>} />
          <Route path="lazy3" element={<LazyloadPage3/>} />
          <Route path="/*" element={<h1>Page Not found</h1>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
