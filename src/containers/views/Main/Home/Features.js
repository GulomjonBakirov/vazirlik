import React from "react";

export default function Features() {
  return (
    <section className="features" id="features">
      <h1 className="heading"> app features </h1>

      <div className="box-container">
        <div className="box">
          <img
            src="https://webstockreview.net/images/clipart-word-2013-bunting-banner-10.png"
            alt=""
          />
          <h3>amazing UI design</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam
            minus recusandae autem, repellendus fugit quaerat provident
            voluptatum non officiis ratione.
          </p>
          <a href="#" className="btn">
            read more
          </a>
        </div>

        <div className="box">
          <img
            src="https://www.pngitem.com/pimgs/m/525-5253967_excel-icon-transparent-hd-png-download.png"
            alt=""
          />
          <h3>soft and smooth animations</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam
            minus recusandae autem, repellendus fugit quaerat provident
            voluptatum non officiis ratione.
          </p>
          <a href="#" className="btn">
            read more
          </a>
        </div>

        <div className="box">
          <img
            src="https://i.ya-webdesign.com/images/power-point-icon-png.png"
            alt=""
          />
          <h3>freindly interactions</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam
            minus recusandae autem, repellendus fugit quaerat provident
            voluptatum non officiis ratione.
          </p>
          <a href="#" className="btn">
            read more
          </a>
        </div>
      </div>
    </section>
  );
}
