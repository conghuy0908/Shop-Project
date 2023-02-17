import Carousel from "react-bootstrap/Carousel";

function Banner() {
return (
    <Carousel>
        <Carousel.Item>
        <div className="row" >
        <div className="col-6">
        <a className="text-decoration-none" style={{color:"black"}} href="#a">
            <h3>Mở Bán 1002 Lookbook A</h3>
            <img
            src="https://cmsv2.yame.vn/uploads/77f52c67-6d60-40c4-8a98-8ddc30c0f7e7/Thum_MB_03.02_(08).jpg?quality=80&w=700&h=0"
            className="d-block w-100"
            alt="..."
            />
        </a>
        </div>
        <div className="col-6">
        <a className="text-decoration-none" style={{color:"black"}} href="#a">
            <h3>Mở Bán 1002 Lookbook B</h3>
            <img
            src="https://cmsv2.yame.vn/uploads/71eab3cf-ec50-4dab-b30b-41fa34dbcfcc/thumbmoban-2.jpg?quality=80&w=700&h=0"
            className="d-block w-100"
            alt="..."
            />
        </a>
        </div>
    </div>
        </Carousel.Item>
        <Carousel.Item>
        <div className="row">
                <div className="col-6">
                <a className="text-decoration-none" style={{color:"black"}} href="#a">
                    <h3>Mở Bán 1002 Lookbook B</h3>
                    <img
                        src="https://cmsv2.yame.vn/uploads/71eab3cf-ec50-4dab-b30b-41fa34dbcfcc/thumbmoban-2.jpg?quality=80&w=700&h=0"
                        className="d-block w-100"
                        alt="..."
                    />
                    </a>
                </div>
                <div className="col-6">
                <a className="text-decoration-none" style={{color:"black"}} href="#a">
                    <h3>Mở Bán 1002 Lookbook A</h3>
                    <img
                        src="https://cmsv2.yame.vn/uploads/77f52c67-6d60-40c4-8a98-8ddc30c0f7e7/Thum_MB_03.02_(08).jpg?quality=80&w=700&h=0"
                        className="d-block w-100"
                        alt="..."
                    />
                    </a>
                </div>
                </div>
        </Carousel.Item>

    </Carousel>
);
}

export default Banner;
