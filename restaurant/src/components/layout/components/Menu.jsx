import React from "react";

const Menu = ({ items }) => {
  return (
    <main className="product-space">
      <div className="container">
        <div className="row">

          {items.map((item) => {
            const { id, img, price, desc, title } = item;
            return (
              <div className="col-lg-6 col-md-6 col-sm-12 mb-3" key={id}>
                <article className="shadow rounded h-100">
                  <div className="card h-100">
                    <img
                      src={img}
                      className="card-img-top img-ratio"
                      alt={title}
                      style={{ aspectRatio: "16/10", objectFit: "cover" }}
                    />
                    <div className="card-body">
                      <h5 className="card-title">{title}</h5>
                      <p className="card-text">{desc}</p>
                      <button className="btn bg-primary text-light">
                        ₹ {price}
                      </button>
                    </div>
                  </div>
                </article>
              </div>
            );
          })}
          
        </div>
      </div>
    </main>
  );
};

export default Menu;
