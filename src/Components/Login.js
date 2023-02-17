import React from "react";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="conatiner-fluid">
      <div className="row d-flex justify-content-center">
        <div
          className="col-12"
          style={{
            height: "30px",
            width: "1200px",
            backgroundColor: "lightgray",
          }}
        >
          <div className="row">
            <div className="col-10" style={{ margin: "2px" }}>
              <Link to={"/"}>
                <FaHome style={{ color: "black", width: "25px" }} />
              </Link>
              <span> / </span>
              <strong>Đăng nhập - Nhận OTP bởi Zalo</strong>
            </div>
          </div>
        </div>
        <div className="col-12 mt-3 text-center">
          <span style={{ fontSize: "22px" }}>
            Đăng ký/Đăng nhập <br /> bằng số điện thoại
          </span>
        </div>
        <div className="col-12 mt-3 d-flex justify-content-center">
          <form method="post" action="">
            <div className="input-group mb-2">
              <div className="input-group-text" style={{ fontSize: "20px" }}>
                +84
              </div>{" "}
              <input
                className="form-control"
                type={"text"}
                placeholder="Nhập số điện thoại"
              />
            </div>
            <div>
              <button
                type="submit"
                className="btn btn-primary mb-2"
                style={{ width: "100%" }}
              >
                Đăng nhập
              </button>
            </div>
          </form>
        </div>
        <div className="col-3 text-center">
        <div className="alert alert-warning" role="alert">
            * Nếu Số điện thoại của bạn không sử dụng Zalo, Vui lòng
            <br/>
            {" "}
            <a href="#a">
              <b>Đăng nhập tại đây</b>
            </a>
            .
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
