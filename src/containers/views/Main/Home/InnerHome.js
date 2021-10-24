import React from "react";
import Typed from "react-typed";

export default function InnerHome() {
  // var typed = new Typed(".typing", {
  //   strings: ["WORD", "EXSEL", "Power point", "Kampyuter asoslari"],
  // typeSpeed: 100,
  // backSpeed: 70,
  // loop: true,
  // });
  return (
    <section className="home" id="home">
      <div className="content">
        <h3>
          best mobile app <span>showcase</span>
        </h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
          suscipit porro nam libero natus error consequatur sed repudiandae eos
          quo?
        </p>

        <h3 className="type__text">
          <Typed
            strings={["WORD", "EXSEL", "Power point", "Kampyuter asoslari"]}
            typeSpeed={100}
            backSpeed={70}
            loop={true}
          />
        </h3>
        <h2 className="type__text">o'rgatiladi</h2>
      </div>

      <div className="image">
        <img src="https://covid.azimedhospital.uz/wp-content/uploads/2021/05/герб_Узб_вектор-01.png" />
      </div>
    </section>
  );
}
