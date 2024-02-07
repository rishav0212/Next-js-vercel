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
  color: "var(--primary-color)",
  fontWeight: "bold",
  textShadow: "2px 2px 2px rgba(0, 0, 0, 0.3)",
  marginBottom: 3,
  fontSize: "3em",
  textAlign: "center",
  "&:hover": {
    textShadow: "3px 2px 3px rgba(0, 0, 0, 0.9)",
  },
};

export const indications = {
  title: {
    color: "var(--primary-color)",
    fontSize: "1.8em",
  },
  data: {
    fontSize: "1.7em",
    marginLeft: "2em",
  },
};

export const approved = {
  title: {
    color: "var(--primary-color)",
    fontSize: "2.2em",
  },
  data: {
    fontSize: "2.2em",
    marginLeft: "5px",
  },
};

export const presentation = {
  title: {
    fontSize: "2em",
  },
  data: {
    fontSize: "1.7em",
    marginLeft: "2em",
  },
};

export const sectionTitle = {
  marginTop: 5,
  fontWeight: 500,
  borderBottom: "1px solid #999",
  marginBottom: 2,
  marginTop: 3,
  fontSize: "2.4em",
  textAlign: "left",
  width: "50%",
};

export const sectionData = {
  fontSize: "1.4em",
  textAlign: "justify",
};

export const list = {
  width: "100%",
  fontSize: "1.4em",
};

export const imgPaper = {
  position: "relative",
  overflow: "hidden",
  display: "inline-block",
  borderRadius: 1,
  transition: "box-shadow 0.3s ease-in-out",
  alignContent: "center",
  boxShadow: "0 1px 1px rgba(0, 0, 0, .9)",
  // "&:hover": {
  //   boxShadow: "0 8px 16px rgba(0, 0, 0, 0.6)",
  //   transform: "scale(1.05)",
  // },
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
  fontSize: "1.4em",
};
