import React from "react";

const Menu = ({ items }) => {
  return (
    <main className="product-space">
      <div className="Container">
        <div className="row card-deck">
          {items.map((item) => {
            const { id, img, price, desc, title } = item;
            return (
              <div className="col-6 text-center" style={{"marginBlock" : "1%"}} key={id}>
                <article className="shadow rounded" key={id} style={{"height" : "100%"}}>
                <div className="card" style={{"height" : "100%"}}>
                  <img src={img} className="card-img-top img-ratio" alt={title} style={{"aspectRatio" : "16/10" , "objectFit" : "cover"}} />
                  <div className="card-body " style={{"height" : "100%"}}>
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">
                     {desc}
                    </p>
                    <button className="btn bg-primary text-light" style={{"bottom" : "0"}}>₹ {price}</button>
                  </div>
                </div></article>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default Menu;
