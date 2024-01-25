import { Grid, Typography } from "@mui/material";

export default function Expo2012Content() {
  return (
    <>
      <Grid container justifyContent={"center"} alignContent={"center"}>
        <Grid
          container
          item
          xs={11}
          sm={11}
          md={10}
          margin={5}
          justifyContent={"center"}
          alignContent={"center"}
        >
          <Grid item xs={12} m={2}>
            <Typography
              fontSize={"4em"}
              variant="h4"
              className="color-primary text-center"
            >
              Pharmac South 2014
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={7} p={2}>
            <Typography
              fontSize={"1.8em"}
              className="lh-lg"
              textAlign={"justify"}
            >
              Saar Biotech had participated in PHARMAC SOUTH 2014 held on 18- 19
              July,2014 that was an International Exhibition jointly organized
              by the Indian Drug Manufacturers Association (IDMA-TNPSB) and
              Orbit Exhibitions Pvt. Ltd. For Contract Manufacturers,
              Pharmaceuticals, Nutraceuticals Formulations etc. in the Medical &
              Pharmaceutical industry.
              <br />
              <br />
              The factory is operating with experienced and hard working
              employees. It is equipped with sophisticated, modern and vquality
              control equipments. The facility has also been equipped to handle
              the development of formulation OF New DRUGS. Our product range
              comprises Anti-retrovirals, Anti-malarials, Cardiovascular and
              Dermatology.
              <br />
              <br />
              The two-day national exhibition of innovative pharmaceutical
              products and company profiles for good-quality enquiries, was
              aimed to attract more buyers of contract manufacturing services
              from across the country and outside. The buyer groups included
              manufacturing companies and marketing companies. This was an
              opportunity for pharma manufacturers to outsource contract
              manufacturers. This was the first chance in south India for the
              local manufacturers and the biggest participant from north India
              and other regions of the nation to gather together on a single
              platform, build relationships for contract manufacturing services
              and buy innovative products.The theme of the expo was 'Destination
              for Innovative and Reliable Healthcare Products'. This event
              offered an exceptional opportunity to all the exhibitors to market
              their wares to the pharmaceutical industry, increase awareness
              about their wares and amend their corporate visibility.
              <br />
              <br />
              The occasion was helpful to attract participant in
              pharmaceuticals, Nutraceuticals, intermediates and APIs suppliers
              as well as experts from the medical and pharma sectors. This
              specialized conference included seminars and panel discussions on
              both days, along with the exhibition.
            </Typography>
          </Grid>
          <Grid item xs={11} sm={11} md={3} p={2}>
            <Typography
              fontSize={"2.2em"}
              variant="h6"
              className="color-primary text-start"
            >
              Exhibition Highlights
            </Typography>
            <Typography m={2} fontSize={"1.6em"} variant="body1">
              Pharmaceuticals Products Exhibition
            </Typography>
            <Typography m={2} fontSize={"1.6em"} variant="body1">
              Expo based on the theme 'Destination for Innovative and Reliable
              Healthcare Products'.
            </Typography>
            <Typography m={2} fontSize={"1.6em"} variant="body1">
              B2B Exhibition
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
