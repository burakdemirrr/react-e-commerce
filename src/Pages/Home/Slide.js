import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styles.css";

// import required modules

export default function App() {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={100}
        className="mySwiper"
      >
            <SwiperSlide>
                <img src="https://www.flawwears.com/Uploads/UrunResimleri/thumb/moto-club-oversize-printed-sweatshirt-e-4a27.jpg" alt="" />
            <h3>Moto Club Oversize Printed</h3>
            <p>$139,00</p>
            </SwiperSlide>
        <SwiperSlide>
            <img src="https://www.flawwears.com/Uploads/UrunResimleri/thumb/s.a-city-siyah-oversize-premium-tshirt-e7d-49.jpg" alt="" />
            <h3>S.A City Siyah Oversize Premium</h3>
            <p>$159,00</p>
        </SwiperSlide>
            <SwiperSlide>
                    <img src="https://www.flawwears.com/Uploads/UrunResimleri/thumb/mini-cep-extra-baggy-fit-khaki-pants-670a1c.jpg" alt="" />
                    <h3>Mini Cep Extra Baggy Fit Khanki Pants</h3>
                    <p>$191,00</p>
            </SwiperSlide>
                <SwiperSlide>
                    <img src="https://www.flawwears.com/Uploads/UrunResimleri/thumb/rv-never-established-oversize-washed-s-2af-88.jpg" alt="" />
                    <h3>Moto Club Oversize Printed</h3>
                    <p>$139,00</p>
            </SwiperSlide>
        <SwiperSlide>
                    <img src="https://www.flawwears.com/Uploads/UrunResimleri/thumb/oversize-baskili-sweatshirt-c3b-e2.jpg" alt="" />
                    <h3>OVERSIZE PRINTED SWEATHSIRT</h3>
                    <p>$139,00</p>
        </SwiperSlide>
        <SwiperSlide>

        <img src="https://www.flawwears.com/Uploads/UrunResimleri/thumb/cut-details-oversize-cut-tee--ff1fe.jpeg" alt="" />
                    <h3>Cut Details Oversize Cut Tee</h3>
                    <p>$114,00</p>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
