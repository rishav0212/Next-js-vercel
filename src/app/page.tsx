import Image from "next/image";
import HomeContent from "../components/HomeContent";
//import styles from "./page.module.css";
import Banner from "@/components/Banner";
import AppThemeProvider from "@/theme";


export default function Home() {
  return (
    <div>
      <Banner />
      <HomeContent />
    </div>
  );
}
