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
  textShadow: "4px 2px 4px rgba(0, 0, 0, 0.3)",
  marginBottom: 3,
  fontSize: "4em",
  textAlign: "center",
  "&:hover": {
    textShadow: "5px 2px 4px rgba(0, 0, 0, 0.4)",
  },
};

export const indications = {
  title: {
    color: "var(--primary-color)",
    fontSize: "2.2em",
  },
  data: {
    fontSize: "2.2em",
    marginLeft: "5px",
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
  color: "whitesmoke",
  display: "inline-block",
  borderRadius: "2em",
  background: `linear-gradient(45deg, #3cb6a0 0%, #3498db 100%)`,
  padding: "0.5em 1em",
  boxShadow: "0 4px 6px rgba(0,0,0, 0.8)",
  marginBottom: 2,
  marginTop: 3,
  fontSize: "1.9em",
  textAlign: "center",
  "&:hover": {
    boxShadow: "0 6px 10px rgba(0, 0, 0, 0.9)",
  },
};

export const sectionData = {
  fontSize: "1.6em",
  textAlign: "justify",
};

export const list = {
  width: "100%",
  fontSize: "1.6em",
};

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
  fontSize: "1.4em",
};
