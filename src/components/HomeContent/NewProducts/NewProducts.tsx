import styles from "./NewProducts.module.css";
import Link from "next/link";
import React from "react";

export default function NewProducts() {
  const newProductsData = {
    "Vitamin D3 Drop / Spray": {
      description:
        "These drops of vitamin D3 helps to get rid of bone disorders such as rickets and osteomalacia in children.",
      imageURL: "/images/products/vitamin-d3/promotion.jpg",
      imageAlt: "Vitamin D3",
      link: "/product/vitamin-d3-drops",
    },
    "Cetirizine and Ambroxol Syrup": {
      description:
        "These drops of vitamin D3 helps to get rid of bone disorders such as rickets and osteomalacia in children testingasgas.",
      imageURL: "/images/products/cough/Cetirizine_andAmbroxol_Syrup.jpg",
      imageAlt: "Vitamin D3",
      link: "/product/vitamin-d3-drops",
    },
    "Cholecalciferol Vitamin D3 Shots": {
      description:
        "These drops of vitamin D3 helps to get rid of bone disorders such as rickets and osteomalacia in children testingasgas.",
      imageURL: "/images/products/cough/Cholecalciferol_Vitamin D3_Shots.png",
      imageAlt: "Cholecalciferol_Vitamin D3",
      link: "/product/vitamin-d3-drops",
    },
    "Levodropropizine & Chlorpheniramine Syrup": {
      description:
        "These drops of vitamin D3 helps to get rid of bone disorders such as rickets and osteomalacia in children testingasgas.",
      imageURL:
        "/images/products/cough/Levodropropizine_and_Chlorpheniramine Syrup.jpg",
      imageAlt: "Levodropropizine_and_Chlorpheniramine",
      link: "/product/vitamin-d3-drops",
    },
  };

  return (
    <>
      {/* <div className="container"> */}
        <div className={`row`}>
          <div className="col-md-12">
            <h2 className="text-center color-primary">Featured Products</h2>
          </div>
        </div>
        <div className={`row`}>
          {Object.keys(newProductsData).map((e, i) => (
            <React.Fragment key={e}>
              <div className="col-lg-3 col-md-6 col-sm-6 mt-3">
                <div className={`card ${styles.customCard}`}>
                  <div className={`${styles.teamItem}`}>
                    <img
                      className={`card-img-top img-fluid ${styles.cardImg}`}
                      src={newProductsData[e].imageURL}
                      alt={newProductsData[e].imageAlt}
                    />
                  </div>
                  <div className={`${styles.cardImgOverlay}`}>
                    <h5 className="card-title" style={{ fontSize: "2.1em" }}>
                      {e}
                    </h5>
                    <p
                      className="card-text text-justify"
                      style={{ fontSize: "1.3em" }}
                    >
                      {newProductsData[e].description}
                    </p>
                    <div className="overlay ctr">
                      <Link href={newProductsData[e].link}>
                        <button className="btn btn-light" type="button">
                          Learn More
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </React.Fragment>
          ))}
        </div>
      {/* </div> */}
    </>
  );
}
