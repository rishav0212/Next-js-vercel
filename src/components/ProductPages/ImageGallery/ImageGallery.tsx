"use client";
import { useState } from "react";
import styles from "./ImageGallery.module.css";
export default function ImageGallery({ imagesCount, name }) {
  const [currImage, setCurrImage] = useState(0);
  const imgSource = "/images/products/" + name;

  const handleClick = (index) => {
    console.log("click pressed");
    console.log(imgSource + (index + 1));
    setCurrImage(index);
  };

  return (
    <div className={styles.galleryContainer}>
      <div className={styles.galleryWrapper}>
        <div className={styles.largeImage}>
          <img
            className={styles.largeImage}
            src={imgSource + (currImage + 1) + ".jpg"}
            alt={name}
          />
        </div>
        <div className={styles.thumb}>
          <ul className={styles.myUL}>
            {Array.from({ length: imagesCount }, (_, index) => (
              <li key={index}>
                <img
                  className={index === currImage ? styles.current : null}
                  src={imgSource + (index + 1) + ".jpg"}
                  alt={`Image ${index + 1}`}
                  onClick={() => handleClick(index)}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
