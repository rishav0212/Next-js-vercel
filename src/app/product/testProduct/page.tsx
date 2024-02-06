import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
  Grid,
  Link,
} from "@mui/material";
import { FiberManualRecord } from "@mui/icons-material";
import { Metadata } from "next";
import * as styles from "@/components/ProductPages/styles.js";
import ScrollToSection from "@/components/ProductPages/ScrollToSection/ScrollToSrction";
import ImageGallery from "@/components/ImageGallery/ImageGallery";

export default function Page() {
  const link = "azithromycin";
  const Sections = [
    "description",
    "indications",
    "mechanism",
    "pharmacokinetics",
    "side effects",
    "contraindication",
    "conclusion",
  ];
  const description = `
  Azithromycin is macrolide antibiotic used to treat or prevent
  certain bacterial infections, most often those causing middle ear
  infections, strep throat, pneumonia, typhoid, bronchitis.
  Azithromycin Superior activity against gram+ve, gram-ve organism. It
  prevents bacteria from growing by interfering with their protein
  synthesis.`;

  return <ImageGallery imagesCount={5} name="azithromycin" />;
}

export const metadata: Metadata = {
  title:
    "Azithromycin Suspension | Saar Biotech | Third party Medicine Contract Manufacturing",
  description:
    "Saar biotech Contract manufacturer of pharmaceuticals located in baddi( Excise free Zone) maufacturing  Azithromycin  Tablet/Suspension which is used to treat or prevent certain bacterial infections, most often those causing middle ear infections, strep throat, pneumonia, typhoid, and sinusitis.It is also effective against certain sexually transmitted infections, such as nongonococcal urethritis, chlamydia, and cervicitis.",
  keywords:
    "Azithromycin dihydrate IP, azithromycin suspension, azithromycin side effects, azithromycin dosage, azithromycin uses, azithromycin indication, skin infection, ear infection, Gonococcal Infection, 100mg, 200mg, mg, antibiotic drugs, antibacterial drugs ",
};
