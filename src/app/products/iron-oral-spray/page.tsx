import {
  Container,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import { FiberManualRecord } from "@mui/icons-material";

export default function IronSpray() {
  return (
    <>
      <Toolbar />
      <Typography variant="h4" className="text-center color-primary">
        Iron Oral Spray
      </Typography>
      <Toolbar />

      <Container maxWidth="md">
        <img
          src="/images/iron-oral-spray.jpg"
          alt="Saar Biotech"
          style={{ width: "100%" }}
        />

        <Typography variant="subtitle1" className="fw-600 mb-2 mt-5">
          Indications:- Avoiding digestive comfort and enhancing bioavailability
        </Typography>

        <Typography
          variant="h6"
          className="color-primary mb--25 mt-4 text-uppercase"
        >
          Approved Name -{" "}
          <span style={{ color: "black" }}>Iron Oral Spray</span>
        </Typography>

        <Typography variant="button" className="font--size-1125">
          Spray Presentation:
        </Typography>

        <Typography className="font--size-1125">
          Iron (As Ferric ammonium citrate) 4.2 mg
        </Typography>

        <Typography className="my-3">
          Iron oral spray is an effective intra-spray technology formulated to
          directly deliver iron into the bloodstream, bypassing the primary
          processing by the digestive system and thus preventing digestive
          discomfort experienced from ingested iron supplements while also
          enhancing bioavailability. The tiny droplets absorb quickly, providing
          fast nutrient uptake.
        </Typography>

        <Typography variant="h6" className="color-primary mt-4 text-uppercase">
          Indications
        </Typography>

        <List>
          <ListItem>
            <ListItemIcon>
              <FiberManualRecord className="color-primary icon-small" />
            </ListItemIcon>
            <ListItemText>Prevents digestive discomfort</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <FiberManualRecord className="color-primary icon-small" />
            </ListItemIcon>
            <ListItemText>Reduces tiredness and fatigue</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <FiberManualRecord className="color-primary icon-small" />
            </ListItemIcon>
            <ListItemText>Increases bioavailability</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <FiberManualRecord className="color-primary icon-small" />
            </ListItemIcon>
            <ListItemText>
              Effective alternative to tablets and capsules
            </ListItemText>
          </ListItem>
        </List>

        <Typography variant="h6" className="color-primary mt-4 text-uppercase">
          Main Features
        </Typography>

        <List>
          <ListItem>
            <ListItemIcon>
              <FiberManualRecord className="color-primary icon-small" />
            </ListItemIcon>
            <ListItemText>Treats Anemia</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <FiberManualRecord className="color-primary icon-small" />
            </ListItemIcon>
            <ListItemText>Boosts Hemoglobin</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <FiberManualRecord className="color-primary icon-small" />
            </ListItemIcon>
            <ListItemText>Reduces Fatigue</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <FiberManualRecord className="color-primary icon-small" />
            </ListItemIcon>
            <ListItemText>Increases Muscle Strength</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <FiberManualRecord className="color-primary icon-small" />
            </ListItemIcon>
            <ListItemText>Boosts Immunity</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <FiberManualRecord className="color-primary icon-small" />
            </ListItemIcon>
            <ListItemText>Improves Concentration</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <FiberManualRecord className="color-primary icon-small" />
            </ListItemIcon>
            <ListItemText>Reduces Bruising</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <FiberManualRecord className="color-primary icon-small" />
            </ListItemIcon>
            <ListItemText>Restores Sleep</ListItemText>
          </ListItem>
        </List>

        <Typography
          variant="h6"
          className="color-primary mb--25 mt-4 text-uppercase"
        >
          Description
        </Typography>

        <Typography>
          Iron is an essential mineral. Most of the iron in the body is found in
          the hemoglobin of red blood cells and in the myoglobin of muscle
          cells. Iron is vital for transporting oxygen and carbon dioxide. It is
          highly regarded for its role in supporting a healthy immune system,
          treating anemia, boosting hemoglobin, reducing tiredness and
          supporting a normal cognitive function.
        </Typography>

        <Typography variant="h6" className="color-primary mt-4 text-uppercase">
          Storage
        </Typography>

        <List>
          <ListItem>
            <ListItemIcon>
              <FiberManualRecord className="color-primary icon-small" />
            </ListItemIcon>
            <ListItemText>
              tore at room temperature and out of direct sunlight.
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <FiberManualRecord className="color-primary icon-small" />
            </ListItemIcon>
            <ListItemText>Keep out of reach of children.</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <FiberManualRecord className="color-primary icon-small" />
            </ListItemIcon>
            <ListItemText>Once opened, use within 6 months.</ListItemText>
          </ListItem>
        </List>

        <Toolbar />

        <Typography className="fst-italic fw-600">
          Disclaimer: The data uploaded is made from content already available
          on internet. The company holds no right of it and is not responsible
          for any wrong information.
        </Typography>

        <Toolbar />
      </Container>
    </>
  );
}
