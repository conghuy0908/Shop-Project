import React from "react";
import "./App.css";
import {
  AiOutlineDown,
  AiOutlineSearch,
  AiOutlineUser,
  AiTwotoneShopping,
} from "react-icons/ai";
import {Routes,Route,Link} from "react-router-dom"
import Home from "./Components/Home";
import Login from "./Components/Login";

function App() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 bg-black" style={{ height: "82px" }}>
          <div className="container mt-3">
            <div className="row">
              <div className="col-2">
                <Link to={"/"}>
                  <img
                    src="https://res.yame.vn/Content/images/yame-f-logo-white.png"
                    alt="Logo"
                    style={{ width: "66px", height: "43.33px" }}
                  />
                </Link>
              </div>
              <div className="col-10">
                <div className="container">
                  <div className="row">
                    <div className="col-10">
                      <ul id="main-menu">
                        <li className="child">
                          <a
                            href="#a"
                            className="d-flex justify-content-center text-decoration-none"
                            style={{ color: "white" }}
                          >
                            {" "}
                            GU TỐI GIẢN{" "}
                          </a>
                        </li>
                        <li className="child">
                          <a
                            href="#1"
                            className="d-flex justify-content-center text-decoration-none"
                            style={{ color: "white" }}
                          >
                            <span>
                              GU ĐƠN GIẢN{" "}
                              <AiOutlineDown style={{ width: "12px" }} />
                            </span>
                          </a>
                          <ul className="sub-menu">
                            <li className="last-child">
                              <a
                                href="#1"
                                className="menu-menu"
                                style={{ color: "white", height: "54px" }}
                              >
                                Áo thun đơn giản
                              </a>
                            </li>
                            <li className="last-child">
                              <a
                                href="#1"
                                className="menu-menu"
                                style={{ color: "white", height: "54px" }}
                              >
                                Áo khoác đơn giản 2
                              </a>
                            </li>
                            <li className="last-child">
                              <a
                                href="#1"
                                className=""
                                style={{ color: "white", height: "54px" }}
                              >
                                Áo sơ mi đơn giản{" "}
                              </a>
                            </li>
                            <li className="last-child">
                              <a
                                href="#1"
                                className=""
                                style={{ color: "white", height: "54px" }}
                              >
                                Quần đơn giản{" "}
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="child">
                          <a
                            href="#1"
                            className="d-flex justify-content-center text-decoration-none"
                            style={{ color: "white" }}
                          >
                            <span>
                              GU THIẾT KẾ{" "}
                              <AiOutlineDown style={{ width: "12px" }} />
                            </span>
                          </a>
                          <ul className="sub-menu">
                            <li className="last-child">
                              <a
                                href="#1"
                                className=""
                                style={{ color: "white", height: "54px" }}
                              >
                                GU 12 Vị Anh Hùng Dân Tộc
                              </a>
                            </li>
                            <li className="last-child">
                              <a
                                href="#1"
                                className=""
                                style={{ color: "white", height: "54px" }}
                              >
                                GU Thần Cổ Đại
                              </a>
                            </li>
                            <li className="last-child">
                              <a
                                href="#1"
                                className=""
                                style={{ color: "white", height: "54px" }}
                              >
                                GU Ngân Hà
                              </a>
                            </li>
                            <li className="last-child">
                              <a
                                href="#1"
                                className=""
                                style={{ color: "white", height: "54px" }}
                              >
                                GU Y Nguyên Bản 18+
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="child">
                          <a
                            href="#1"
                            className="d-flex justify-content-center text-decoration-none"
                            style={{ color: "white" }}
                          >
                            <span>
                              GU UNISEX{" "}
                              <AiOutlineDown style={{ width: "12px" }} />
                            </span>
                          </a>
                          <ul className="sub-menu">
                            <li className="last-child">
                              <a
                                href="#1"
                                className=""
                                style={{ color: "white", height: "54px" }}
                              >
                                GU Linh Vật
                              </a>
                            </li>
                            <li className="last-child">
                              <a
                                href="#1"
                                className=""
                                style={{ color: "white", height: "54px" }}
                              >
                                GU Y Nguyên Bản 18-
                              </a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                    <div className="col-2">
                      <ul className="sub-control">
                        <li className="menu-control">
                          <a href="#a">
                            <AiOutlineSearch
                              style={{
                                color: "white",
                                width: "25px",
                                height: "25px",
                              }}
                            />
                          </a>
                        </li>
                        <li className="menu-control">
                          <Link to={"/login"}>
                            <AiOutlineUser
                              style={{
                                color: "white",
                                width: "25px",
                                height: "25px",
                              }}
                            />
                          </Link>
                        </li>
                        <li className="menu-control">
                          <a href="#a">
                            <AiTwotoneShopping
                              style={{
                                color: "white",
                                width: "25px",
                                height: "25px",
                              }}
                            />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        </Routes>
        </div>
      </div>
      <div className="row">
        <div className="col-12 bg-black" style={{height:"230px"}}>
        <div className="row mt-2 text-center">
          <div className="col-12 mt-2">
                <Link to={"/"}>
                  <img
                    src="https://res.yame.vn/Content/images/yame-f-logo-white.png"
                    alt="Logo"
                    style={{ width: "107px", height: "70px" }}
                  />
                  </Link>
                  <p style={{color:"white",fontSize:"20px"}}>Đặt hàng và thu tiền tận nơi toàn quốc</p>
                  <Link to={"#a"} style={{textDecoration:"none",color:"white"}} >
                    <p >Than phiền/Góp ý</p>
                  </Link>
          </div>
          <div className="col-12 mt-2">
            <p style={{color:"white"}}>CopyRight@ by Nguyen Cong Huy </p>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default App;
