import Image from "next/image";
import HomeContent from "../components/HomeContent/HomeContent";
//import styles from "./page.module.css";
import Banner from "@/components/HomeContent/Banner";
import AppThemeProvider from "@/theme";

export default function Home() {
  return (
    <div>
      <Banner />
      <HomeContent />
    </div>
  );
}
