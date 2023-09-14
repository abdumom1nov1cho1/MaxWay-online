import { useContext } from "react";
import "./SignInPages";
import { GetAPIFunc } from "./../module/api";
import { Context } from "../../Context";

const SignInPages = () => {
    const {
        user,
        setUser,
        pass,
        setPass,
        userData,
        LogoutFunc,
        // number,
        // setNumber,
        name,
        setName,
      } = useContext(Context);
    
      const CheckUserFunc = () => {
        GetAPIFunc("/userData").then((data, index) => {
          for (let i = 0; i < data.length; i++) {
            const element = data[i];
            
            if (element.id && element.login == user) {
              
              window.location.replace("/")
              localStorage.setItem("auth", JSON.stringify(element))
            } else {
              window.location.replace("/")
            }
          }
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
      };
  return (
    <div>
      <div className="app__register">
        <form className="app__register__form" onSubmit={handleSubmit}>
          <h1 data-aos="fade-up" className="app__register__h1">
            Sign In
          </h1>
          <input
            data-aos="fade-up-right"
            required
            className="app__register__input"
            type="email"
            placeholder="@gmail.com"
            onChange={(e) => setUser(e.target.value)}
          />
          <input
            data-aos="fade-up-left"
            required
            className="app__register__input"
            type="password"
            placeholder="Password"
            onChange={(e) => setPass(e.target.value)}
          />
          <button
            data-aos="fade-up"
            className="app__register__btn"
            onClick={CheckUserFunc}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignInPages;
