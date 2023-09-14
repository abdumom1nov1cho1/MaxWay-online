import React from "react";
import "../Navbar/Navbar.css";
import { Link, NavLink } from "react-router-dom";
import { useCart } from "react-use-cart";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };
  const currentLang = i18n.language;
  const { items } = useCart();
  let img = ""
    if (currentLang === "uz") {
        img = "uz.svg";
    } else if (currentLang === "ru") {
        img = "ru.svg";
    } else if (currentLang === "en") {
        img = "en.svg";
    }
  return (
    <div>
      {/* <!-- Navbar --> */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white">
        {/* <!-- Container wrapper --> */}
        <div className="container">
          {/* <!-- Toggle button --> */}
          <button
            className="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars"></i>
          </button>

          {/* <!-- Collapsible wrapper --> */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {/* <!-- Navbar brand --> */}
            <a className="navbar-brand mt-2 mt-lg-0" href=" ">
              <img
                data-aos="fade-up"
                src="https://maxway.uz/_next/image?url=https%3A%2F%2Fcdn.delever.uz%2Fdelever%2Fcfff938f-a7f6-4694-972e-c7fa9c0f68ba&w=48&q=75"
                height="50"
                alt="MDB Logo"
                loading="lazy"
              />
            </a>
            {/* <!-- Left links --> */}
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink to="/" className="nav-link
                
                " activeClassName="active" aria-current="page">
                  {t("navulli1")}
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/About" className="nav-link" activeClassName="active">
                  {t("NavUlLi2")}
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/Filials" className="nav-link " activeClassName="active">
                  {t("NavUlLi3")}
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/Contact" className="nav-link " activeClassName="active">
                  {t("NavUlLi4")}
                </NavLink>
              </li>
            </ul>
            {/* <!-- Left links --> */}
          </div>
          {/* <!-- Collapsible wrapper --> */}

          {/* <!-- Right elements --> */}

          <div className="buutns d-flex  align-items-center">
            <div className="maps__texts">
              <i
                className="map fa-solid fa-location-dot"
                style={{ color: "#51267d" }}
              ></i>
              <h5>{t("NavUlLiInput")}</h5>
            </div>
            <div className="maps__buttons__2">
              {/* <!-- Notifications --> */}
              <nav className="bbb">
                <div className="container-fluid">
                  <ul className="dsa navbar-nav">
                    {/* <!-- Icon dropdown --> */}
                    <li className="nav-item dropdown">
                      <a
                        className="sss nav-link dropdown-toggle"
                        href=" "
                        id="navbarDropdown"
                        role="button"
                        data-mdb-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <img src={process.env.PUBLIC_URL + "/images/" + img} alt="" />
                      </a>
                      <ul
                        className="dropdown-menu"
                        aria-labelledby="navbarDropdown"
                      >
                        <li
                          className="dropdown-item"
                          onClick={() => changeLanguage("uz")}
                          href=" "
                        >
                          <img src={process.env.PUBLIC_URL + "/images/uz.svg"} alt="" />Uzbekistan
                          <i className="fa fa-check text-success ms-2"></i>
                        </li>
                        <li>
                        </li>

                        <li>
                          <li
                            className="dropdown-item"
                            onClick={() => changeLanguage("ru")}
                            href=" "
                          >
                            <img src={process.env.PUBLIC_URL + "/images/ru.svg"} alt="" />Русский
                          </li>
                        </li>
                        <li>
                          <li
                            className="dropdown-item"
                            onClick={() => changeLanguage("en")}
                            href=" "
                          >
                            <img src={process.env.PUBLIC_URL + "/images/en.svg"} alt="" />English
                          </li>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </nav>
              {/* <!-- Icon --> */}
              <Link
                to="/Korzinka"
                className="link-secondary me-3 mt-2"
                href=" "
              >
                <i
                  className="fas fa-shopping-cart"
                  style={{ color: "#51267d" }}
                ></i>
                <span className="badge rounded-pill badge-notification bg-danger">
                  {items.length}
                </span>
              </Link>
              {/* <!-- Avatar --> */}
              <div className="btns">
                <a
                  className="dropdown-toggle d-flex mt-2 align-items-center hidden-arrow"
                  href=" "
                  id="navbarDropdownMenuAvatar"
                  role="button"
                  data-mdb-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i
                    className="icons fa-solid fa-user"
                    style={{ color: "#51267d" }}
                  ></i>
                </a>


                
                <ul
                  className="dropdown-menu dropdown-menu-end"
                  aria-labelledby="navbarDropdownMenuAvatar"
                >
                  <li>
                    <NavLink to="/signUp"  activeClassName="active" className="dropdown-item" href=" ">
                      Sign Up
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/signIn"  activeClassName="active" className="dropdown-item" href=" ">
                      Sign In
                    </NavLink>
                  </li>
                  <li>
                    <a className="dropdown-item" href=" ">
                      Logout
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* <!-- Right elements --> */}
        </div>
        {/* <!-- Container wrapper --> */}
      </nav>
    </div>
  );
};

export default Navbar;
