"use client";
import styles from "./ImageGallery.module.css";
export default function ImageGallery() {
  const handleClick = function (imageId) {
    console.log("click pressed");
    console.log(imageId);
    console.log(document.getElementById(imageId).src);
    document.getElementById("largeImage").src =
      document.getElementById(imageId).src;
  };

  return (
    <>
      <div className={`${styles.galleryContainer}`}>
        <div className={`${styles.galleryWrapper}`}>
          <div className={`${styles.thumb}`}>
            <ul className={`${styles.myUL}`}>
              <li>
                <img
                  src="/images/azithromycin1.jpg"
                  id="image-1"
                  onClick={() => handleClick("image-1")}
                />
              </li>
              <li>
                <img
                  src="/images/banner1.jpg"
                  id="image-2"
                  onClick={() => handleClick("image-2")}
                />
              </li>
              <li>
                <img
                  src="/images/banner2.jpg"
                  id="image-3"
                  onClick={() => handleClick("image-3")}
                />
              </li>
              <li>
                <img
                  src="/images/banner3.jpg"
                  id="image-4"
                  onClick={() => handleClick("image-4")}
                />
              </li>
              <li>
                <img
                  src="/images/dm-image1.jpg"
                  id="image-5"
                  onClick={() => handleClick("image-5")}
                />
              </li>
            </ul>
          </div>
          <div className={`${styles.largeImage}`}>
            <img
              className={`${styles.largeImage}`}
              src="/images/azithromycin1.jpg"
              id="largeImage"
            />
          </div>
        </div>
      </div>
    </>
  );
}
