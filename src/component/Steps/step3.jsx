import React from "react";
import { Box, Grid, Paper } from "@material-ui/core";
import { styles } from "../common/styles";
import {
  renderButton,
  renderInputField,
  renderSelect,
  renderText,
} from "../common/DisplayComponent";

const Step3 = ({
  state,
  handleChange,
  handleNext,
  handlePrev,
  handleSubmit,
}) => {
  return (
    <Paper style={styles.steps}>
      <Box mt={2} mb={2}>
        {renderText({
          label: "Address",
          type: "h6",
          color: "textPrimary",
          align: "center",
        })}
      </Box>
      {/* skill: "",
      ifany: "",
      interestedtopics: "", */}

      <Grid container spacing={1} style={{ marginBottom: "16px" }}>
        <Grid item xs={12} sm={6}>
          {renderInputField({
            state,
            name: "Home Address",
            label: "Home Address",
            onChange: handleChange,
          })}
        </Grid>
      </Grid>

      <Grid container spacing={1} style={{ marginBottom: "16px" }}>


        <Grid item xs={12} sm={6}>
          {renderInputField({
            state,
            name: "Permantend Address",
            label: "Permantend Address",
            onChange: handleChange,
          })}
        </Grid>
      </Grid>

      <Grid container component={Box} justify='flex-end' mt={2} p={2}>
        <Box ml={2}>
          {renderButton({
            label: "Back",
            color: "default",
            onClick: handlePrev,
          })}
        </Box>
        <Box ml={2}>
          {renderButton({ label: "Finish", onClick: handleNext })}
        </Box>
      </Grid>
    </Paper>
  );
};

export default Step3;
