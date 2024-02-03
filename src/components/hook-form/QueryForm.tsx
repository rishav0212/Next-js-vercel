"use client";
import { useForm } from "react-hook-form";
import { FormProvider as Form } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Grid, Typography } from "@mui/material";
import RHFTextField from "./RHFText.Field";
import { LoadingButton } from "@mui/lab";
import { useState } from "react";

export default function QueryForm({ props }) {
  const QuerySchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email().required("Email is requi`red"),
    phone: Yup.string().required("Mobile Number is required"),
    company: Yup.string().required("Company name is required"),
    query: Yup.string().required("Query is required"),
  });

  const defaultValues = {
    name: "",
    email: "",
    phone: "",
    company: "",
    query: "",
  };

  const methods = useForm({
    resolver: yupResolver(QuerySchema),
    defaultValues,
  });
  // console.log(methods)

  const {
    reset,
    handleSubmit,
    setError,
    formState: { errors },
  } = methods;

  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const onSubmit = async (data) => {
    try {
      console.log(data);
      setLoading(true);
      const response = await fetch(
        "https://node.saarbiotech.in/EmailClient.php",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      const result = await response.json();
      console.log(result);

      if (result.success) {
        setSuccessMessage("Query submitted successfully!");
        setTimeout(() => setSuccessMessage(""), 5000);
      } else {
        setSuccessMessage("pls try again after some time!");
        setTimeout(() => setSuccessMessage(""), 5000);
      }
    } catch (error) {
      console.log(error);
      setError("name", {
        ...error,
        message: error.message,
      });
    } finally {
      setLoading(false);
      reset();
    }
  };

  return (
    <Form {...methods}>
      <form name="htmlform" onSubmit={handleSubmit(onSubmit)}>
        {props === "footer" ? (
          <>
            <Grid container spacing={1.5}>
              <Grid item xs={12} sm={6}>
                <RHFTextField
                  name={"name"}
                  label={"Full Name"}
                  helperText={undefined}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <RHFTextField
                  name={"company"}
                  label={"Company Name"}
                  helperText={undefined}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <RHFTextField
                  name={"email"}
                  label={"Email"}
                  helperText={undefined}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <RHFTextField
                  name={"phone"}
                  label={"Phone"}
                  helperText={undefined}
                />
              </Grid>
              <Grid item xs={12}>
                <RHFTextField
                  name={"query"}
                  label={"Message"}
                  multiline
                  rows={4}
                  helperText={undefined}
                />
                <div>
                  {
                    <Typography variant="body1" color="green">
                      {successMessage}
                    </Typography>
                  }
                  {loading ? (
                    <Typography variant="body1" color="blue">
                      Sending Query . . .
                    </Typography>
                  ) : null}
                </div>

                <LoadingButton
                  color="primary"
                  size="medium"
                  type="submit"
                  variant="contained"
                  loading={false}
                  className="loading-button"
                  sx={{ margin: 1.5 }}
                >
                  <Typography variant="body1">Send Query</Typography>
                </LoadingButton>
              </Grid>
            </Grid>
          </>
        ) : (
          <>
            <RHFTextField
              name={"name"}
              label={"Full Name"}
              helperText={undefined}
            />
            <RHFTextField
              name={"email"}
              label={"Email"}
              helperText={undefined}
            />
            <RHFTextField
              name={"phone"}
              label={"Phone"}
              helperText={undefined}
            />
            <RHFTextField
              name={"company"}
              label={"Company Name"}
              helperText={undefined}
            />
            <RHFTextField
              name={"query"}
              label={"Message"}
              multiline
              rows={4}
              helperText={undefined}
            />
            <div>
              {
                <Typography variant="body1" color="green">
                  {successMessage}
                </Typography>
              }
              {loading ? (
                <Typography variant="body1" color="blue">
                  Sending Query . . .
                </Typography>
              ) : null}
            </div>
            <LoadingButton
              color="primary"
              size="medium"
              type="submit"
              variant="contained"
              loading={false}
              className="loading-button"
              sx={{ margin: 2 }}
            >
              <Typography variant="body1">Send Query</Typography>
            </LoadingButton>
          </>
        )}
      </form>
    </Form>
  );
}
