// styles.js
// Page Title

export const pageItemGrid = {
  fontSize: "calc(0.5vh + 0.3vw)",
  justifyContent: "center",
  alignContent: "center",
  marginTop: 2,
};
// Paper Component
export const upperPaper = {
  width: "100%",
  padding: 2,
  borderRadius: 5,
  backgroundColor: "#f0f0f0",
};

export const titleStyle = {
  color: "#EF3E00",
  fontWeight: "bold",
  textShadow: "4px 2px 4px rgba(0, 0, 0, 0.3)",
  marginBottom: 3,
  fontSize: "5em",
  textAlign: "center",
  "&:hover": {
    textShadow: "5px 2px 4px rgba(0, 0, 0, 0.4)",
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
  fontSize: "2.5em",
  textAlign: "center",
  "&:hover": {
    boxShadow: "0 6px 10px rgba(0, 0, 0, 0.9)",
  },
};

export const imgPaper = {
  position: "relative",
  overflow: "hidden",
  display: "inline-block",
  borderRadius: 5,
  transition: "box-shadow 0.3s ease-in-out",
  alignContent: "center",
  "&:hover": {
    boxShadow: "0 8px 16px rgba(0, 0, 0, 0.6)",
    transform: "scale(1.05)",
  },
};

export const lowerPaper = {
  marginTop: 4,
  padding: 3,
  paddingTop: 0,
  borderRadius: 5,
  backgroundColor: "#f0f0f0",
};

export const readMoreGrid = {
  display: "-webkit-box",
  WebkitBoxOrient: "vertical",
  overflow: "hidden",
  WebkitLineClamp: 2,
  textOverflow: "ellipsis",
  marginInline: 2,
  marginTop: 1,
  fontSize: "1.7em",
};
