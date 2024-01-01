import Image from "next/image";
import HomeContent from "../components/HomeContent";
// import styles from './page.module.css'
import Banner from "@/components/Banner";
import AppThemeProvider from "@/theme";
import "../fonts/fonts.css";

export default function Home() {
  return (
    <div>
      <AppThemeProvider>
        <Banner />
        <HomeContent />
      </AppThemeProvider>
    </div>
  );
}
