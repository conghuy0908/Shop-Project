import React from "react"
import Banner from "./Banner";
import Main from "./Main";

const Home = () =>{
    return(
        <div>
        <div className="row">
        <div className="col-12 d-flex justify-content-center">
        <a href="#a">
        <img
            src="https://cmsv2.yame.vn/uploads/38cfaf0e-4503-4e71-acf5-a3242652fd84/Banner_sale_14.2_(02).jpg?quality=80&w=0&h=0"
            alt="SALE"
            style={{ width: "1350px" }}
            />
        </a>
        </div>
    </div>
    <div className="row mt-4">
        <div className="col-12">
        <Banner/>
        </div>
    </div>
    <div className="row">
        <div className="col-12">
        <Main/>
        </div>
        </div>
        </div>
    )
}

export default Home;