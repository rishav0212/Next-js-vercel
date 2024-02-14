"use client";
import { redirect } from "next/navigation";
import { useEffect } from "react";

function Page() {
  useEffect(() => {
    // Function to trigger the PDF download
    const downloadPDF = () => {
      const link = document.createElement("a");
      link.href = "/brochure/brochure.pdf";
      link.download = "Saar Biotech Brochure.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    };

    downloadPDF();
    redirect("/products/");
  }, []);
  return <div></div>;
}

export default Page;
