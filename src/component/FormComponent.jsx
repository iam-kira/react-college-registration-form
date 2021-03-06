import React, { Component } from "react";
import PropTypes from "prop-types";
import "../style.css";
import {
  Box,
  Grid,
  Paper,
  withStyles,
  Stepper,
  Step,
  StepLabel,
} from "@material-ui/core";
import Step1 from "./Steps/step1";
import Step2 from "./Steps/step2";
import Step3 from "./Steps/step3";
import FinalStep from "./Steps/FinalStep";
import { renderText } from "./common/DisplayComponent";
import { styles } from "./common/styles";

class FormComponent extends Component {
  state = {
    data: {
      firstName: "",
      lastName: "",
      gender: "",
      phone: "",
      email: "",

      highestDegree: "",
      issuedBy: "",
      yearOfPassing: "",
      jobType: "",

      skill: "",
      jobApplyFor: "",
      workExperence: "",
      expectedSalary: "",
    },
    errors: {},
    steps: [
        { label: "Step1: Personal Bio" },
        { label: "Step2: Education" },
        { label: "Step3: Interests" },
    ],
    stepCount: 0,
  };
  render() {
    const { classes } = this.props;

    const handleSubmit = (e) => {
      e.preventDefault();
      console.log("form submitted");
    };

    const handleOnChange = ({ target }) => {
      const { data, errors } = this.state;

      target.value.length <= 3
        ? (errors[target.name] = `${target.name} have at least 3 letter`)
        : (errors[target.name] = "");

      data[target.name] = target.value;
      this.setState({ data, errors });
    };

    const handleNextStep = () => {
      let { stepCount } = this.state;
      console.log("stepCount", stepCount);
      stepCount = stepCount + 1;
      this.setState({ stepCount });
    };
    const handleBackStep = () => {
      let { stepCount } = this.state;
      stepCount = stepCount - 1;
      this.setState({ stepCount });
    };

    const getStepContent = (step) => {
      switch (step) {
        case 0:
          return (
            <Step1
              state={this.state}
              handleChange={handleOnChange}
              handleNext={handleNextStep}
            />
          );
        case 1:
          return (
            <Step2
                  state={this.state}
                  handleChange={handleOnChange}
                  handleNext={handleNextStep}
                  handlePrev={handleBackStep}
            />
          );
        case 2:
              return (
            <Step3
                      state={this.state}
                      handleChange={handleOnChange}
                      handleNext={handleNextStep}
                      handlePrev={handleBackStep}
                      handleSubmit={handleSubmit}
            />
              );
        case 3:
              return <FinalStep data={this.state.data} />;
        default:
              return (
            <Step1
                      state={this.state}
                      handleChange={handleOnChange}
                      handleNext={handleNextStep}
            />
              );
      }
    };

    return (
        <div className="main-div">


            
            <Box pt={2} className="box-1">
                {renderText({
                    type: "h4",
                    color: "",
                    label: "Registration Form",
                    align: "center",
                })}
            </Box>


            <Grid container className={classes.formContainer} >
                <Box sx={{ maxWidth: 400 }}>
                    <Stepper activeStep={this.state.stepCount} orientation="vertical" className="box-2">
                        {this.state.steps.map((item) => (
                            <Step key={item.label}>
                                <StepLabel>{item.label}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                </Box> 
                {/* <Stepper activeStep={this.state.stepCount} alternativeLabel orientation="vertical" >
                    {this.state.steps.map((item) => (
                        <Step key={item.label}>
                            <StepLabel>{item.label}</StepLabel>
                        </Step>
                    ))}
                </Stepper> */}

                <Grid item xs={12} sm={7} >
                    {/* className={classes.form} */}
                    <form onSubmit={this.handleSubmit} className={classes.form} >
                        <Paper component={Box} mb={1}></Paper>
                        {getStepContent(this.state.stepCount)}
                    </form>
                </Grid>
            </Grid>
        </div>
    );
  }
}

FormComponent.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FormComponent);
