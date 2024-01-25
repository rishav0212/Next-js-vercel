// styles.js

export const pageItemGrid = {
  justifyContent: "center",
  alignContent: "center",
  marginTop: 2,
};
// Upper Grid Component
export const upperGrid = {
  width: "100%",
  padding: 2,
  borderRadius: 5,
  backgroundColor: "#f0f0f0",
  boxShadow: "0px 4px 12px rgb(0,0,0,0.5)",
  justifyContent: "center",
  justifyItems: "center",
};

export const titleStyle = {
  color: "#EF3E00",
  fontWeight: "bold",
  textShadow: "4px 2px 4px rgba(0, 0, 0, 0.3)",
  marginBottom: 3,
  fontSize: "4.5em",
  textAlign: "center",
  "&:hover": {
    textShadow: "5px 2px 4px rgba(0, 0, 0, 0.4)",
  },
};

export const indications = {
  title: {
    color: "#EF3E00",
    fontSize: "2.3em",
  },
  data: {
    fontSize: "2.3em",
    marginLeft: "5px",
  },
};

export const approved = {
  title: {
    color: "#EF3E00",
    fontSize: "2.3em",
  },
  data: {
    fontSize: "2.3em",
    marginLeft: "5px",
  },
};

export const presentation = {
  title: {
    fontSize: "2.1em",
  },
  data: {
    fontSize: "1.8em",
    marginLeft:"35px",
  },
};

export const sectionTitle = {
  color: "whitesmoke",
  display: "inline-block",
  borderRadius: 10,
  background: `linear-gradient(45deg, #EF3E00 30%, #FF8E53 90%)`,
  padding: 1.2,
  boxShadow: "0 4px 6px rgba(0,0,0, 0.8)",
  marginBottom: 2,
  marginTop: 3,
  width: "calc(15vh + 9vw)",
  fontSize: "2.1em",
  textAlign: "center",
  "&:hover": {
    boxShadow: "0 6px 10px rgba(0, 0, 0, 0.9)",
  },
};

export const sectionData = {
  fontSize: "1.8em",
  textAlign:"justify"
};

export const list={
  fontSize: "1.8em",
}

export const imgPaper = {
  position: "relative",
  overflow: "hidden",
  display: "inline-block",
  borderRadius: 5,
  transition: "box-shadow 0.3s ease-in-out",
  alignContent: "center",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.9)",
  "&:hover": {
    boxShadow: "0 8px 16px rgba(0, 0, 0, 0.6)",
    transform: "scale(1.05)",
  },
};

export const lowerGrid = {
  marginTop: 4,
  padding: 3,
  paddingTop: 0,
  borderRadius: 5,
  backgroundColor: "#f0f0f0",
  boxShadow: "0px 4px 12px rgb(0,0,0,0.5)",
};

export const readMoreGrid = {
  display: "-webkit-box",
  WebkitBoxOrient: "vertical",
  overflow: "hidden",
  WebkitLineClamp: 2,
  textOverflow: "ellipsis",
  marginInline: 2,
  marginTop: 1,
  fontSize: "1.6em",
};
