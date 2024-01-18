
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
import info from "@/product_details/info";

export default function ProductPage({ name }) {
  let productInfo =  info[name.toUpperCase()];

  return (
    <>
      <Toolbar />
      <Typography variant="h4" className="text-center color-primary">
        {productInfo.name}
      </Typography>
      <Toolbar />

      <Container maxWidth="md">
        <Typography variant="subtitle1" className="fw-600 mb-2 mt-5">
          Indications:- {productInfo.indications}
        </Typography>
        <Typography
          variant="h6"
          className="color-primary mb--25 mt-4 text-uppercase"
        >
          Approved Name -{" "}
          <span style={{ color: "black" }}>{productInfo.approved_name}</span>
        </Typography>
        {productInfo.sprayPresentation ? (
          <>
            <Typography variant="button" className="font--size-1125">
              Spray Presentation:
            </Typography>

            <div className="font--size-1125">
              {productInfo.sprayPresentation.map((dataitem) => {
                return <Typography key={dataitem.id}>{dataitem}</Typography>;
              })}
            </div>
          </>
        ) : null}

        {productInfo.description ? (
          <>
            <Typography
              variant="h6"
              className="color-primary mb--25 mt-4 text-uppercase"
            >
              Description
            </Typography>

            <Typography className="my-3">{productInfo.description}</Typography>
          </>
        ) : null}

        {productInfo.indicationsList ? (
          <>
            <Typography
              variant="h6"
              className="color-primary mt-4 text-uppercase"
            >
              Indications
            </Typography>

            <ul>
              {productInfo.indicationsList.map((dataitem) => {
                return (
                  <ListItem key={dataitem.id}>
                    <ListItemIcon>
                      <FiberManualRecord className="color-primary icon-small" />
                    </ListItemIcon>
                    <ListItemText>{dataitem}</ListItemText>
                  </ListItem>
                );
              })}
            </ul>
          </>
        ) : null}

        <Typography variant="h6" className="color-primary mt-4 text-uppercase">
          Side Effects
        </Typography>

        {/* <ul>
            {productInfo.sideEffects.map((dataitem)=>{
              return (
                <ListItem>
                  <ListItemIcon>
                    <FiberManualRecord className="color-primary icon-small" />
                  </ListItemIcon>
                  <ListItemText>{dataitem}</ListItemText>
                </ListItem>
              )
            })}
          </ul> */}
      </Container>
    </>
  );
}
