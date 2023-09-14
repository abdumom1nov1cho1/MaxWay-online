import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
const api = "./Data.js/products";
const Context = createContext();

const ContextProvider = ({ children }) => {
  const [title, SetTitle] = useState();
  const [img, SetImg] = useState();
  const [description, SetDescription] = useState();
  const [category, SetCategory] = useState();
  const [price, SetPrice] = useState();
  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");

  // get
  useEffect(() => {
    axios
      .get(api)
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  
  let logoutClasses = "";

  const LogoutFunc = () => {
    const userAuth = JSON.parse(localStorage.getItem("auth"));
    if (userAuth) {
      logoutClasses += "btn btn-danger";
      console.log(true);
    }else{
      console.log(false);
      logoutClasses = "d-none"
    }
  };
  LogoutFunc()
  const userData = {
    name: name,
    // number: number,
    login: user,
    pass: pass,

  };

  const PatchElements = async (_id) => {
    await axios.patch(`http://localhost:7777/TrailFX/${_id}`, {
      title: title,
      image: img,
      desc: description,
      price: price,
      category: category,
    });
    window.location.reload();
  };

  return (
    <Context.Provider
      value={{
        setData,
        data,
        // mura,
        // searchText,
        // dataSearch,
        api,
        user,
        setUser,
        pass,
        setPass,
        SetTitle,
        // userData,
        PatchElements,
        // AdminDelete,
        createContext,
        // CreateDevice,
        title,
        // setData,
        // image,
        // SetImage,
        price,
        // desc,
        // SetDesc,
        SetPrice,
        category,
        SetCategory,
        logoutClasses,
        LogoutFunc,
        name,
        setName,
        // number,
        // setNumber
      }}
    >
      {children}
    </Context.Provider>
  );
};
export { Context, ContextProvider };
