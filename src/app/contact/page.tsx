import ContactContent from "@/components/ContactContent/ContactContent";
import { Metadata } from "next";
import Head from "next/head";

function Contact() {
  return <>
    <Head><link rel="canonical" href="https://old.saarbiotech.in/contact-us.html" /></Head>
  <ContactContent /></>;
}

export default Contact;

export const metadata: Metadata = {
  title: "Contact Saar Biotech | Inquire and Connect",
  description:
    "Contact Saar Biotech for pharmaceutical contract manufacturing inquiries. Reach out to us for high-quality DCGI approved drugs. Connect with a leading GMP certified pharma company in Baddi, Himachal Pradesh.",
  keywords:
    "Contact Saar Biotech, Inquire Saar Biotech, Connect Saar Biotech, Pharmaceutical Contract Manufacturing, DCGI Approved Drugs, GMP Certified Pharma Company, Baddi Himachal Pradesh, Pharma Manufacturing Inquiry, Pharmaceutical Inquiry",
};
