import { Metadata } from "next";
import * as React from "react";

export default function video() {
  const url =
    "https://www.youtube-nocookie.com/embed/lLE-f8ed7aw?si=yLpGjOmPNVI8UDyB";

  return (
    <div
      style={{
        justifyContent: "center",
        alignContent: "center",
        marginInline: "auto",
        marginTop: "50px",
        marginBottom: "50px",
        maxWidth: "800px",
      }}
    >
      <div
        style={{
          position: "relative",
          paddingBottom: "56.25%",
        }}
      >
        <iframe
          style={{
            position: "absolute",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
          }}
          src={url}
          title="Saar Biotech Factory Video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

export const metadata: Metadata = {
  title: "Factory Video | Saar Biotech",
};
