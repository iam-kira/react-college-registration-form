import { blueGrey } from "@material-ui/core/colors";
// import { withThemeCreator } from "@material-ui/styles";

export const styles = {
  formContainer: {
    display: "flex",
    flexFlow: "row Wrap",
    justifyContent: "space-around",
    alignItems: "center",
    height: "98vh",
  },

  form: {
    padding: "10px",
    minHeight: "350px",
    height: "auto",
    
  },
  formTitle: {
    color: blueGrey[700],
    textAlign: "center",
    margin: "10px 0px 30px 0px",
  },

  steps: {
    color: "white",
    padding: "16px",
  },
};
