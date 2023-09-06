import React from "react";
import "../Navbar/Navbar.css";
import { Link } from "react-router-dom";
import { useCart } from "react-use-cart";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  const { items } = useCart();
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
                <Link to="/" class="nav-link active" aria-current="page">
                  {t("navulli1")}
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/About" class="nav-link">
                  {t("NavUlLi2")}
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/Filials" class="nav-link ">
                  {t("NavUlLi3")}
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/Contact" class="nav-link ">
                  {t("NavUlLi4")}
                </Link>
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
                  <ul className="navbar-nav">
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
                        <i className="flag-uzbekistan flag m-0"></i>
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
                          <i className="flag-uzbekistan flag"></i>Uzbekistan
                          <i className="fa fa-check text-success ms-2"></i>
                        </li>
                        <li>
                          <hr className="dropdown-divider" />
                        </li>

                        <li>
                          <li
                            className="dropdown-item"
                            onClick={() => changeLanguage("ru")}
                            href=" "
                          >
                            <i className="flag-russia flag"></i>Русский
                          </li>
                        </li>
                        <li>
                          <li
                            className="dropdown-item"
                            onClick={() => changeLanguage("en")}
                            href=" "
                          >
                            <i className="flag-uk flag"></i>English
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
                    class="icons fa-solid fa-user"
                    style={{ color: "#51267d" }}
                  ></i>
                </a>
                <ul
                  className="dropdown-menu dropdown-menu-end"
                  aria-labelledby="navbarDropdownMenuAvatar"
                >
                  <li>
                    <a className="dropdown-item" href=" ">
                      My profile
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href=" ">
                      Settings
                    </a>
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
