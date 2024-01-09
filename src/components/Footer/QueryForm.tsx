"use client"
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import FormProvider from "../hook-form/FormProvider";
import { Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import RHFTextField from "../hook-form/RHFText.Field";
import { forwardRef } from "react";
import { LoadingButton } from "@mui/lab";
import MuiAlert from "@mui/material/Alert";

// const Alert = forwardRef(function Alert(props, ref :<HTMLDivElement> ) {
//     return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
// });

export default function QueryForm({ props }) {
  // return <div>QUERY FORM</div>;
  const theme = useTheme();
  const isSmallerMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const QuerySchema = Yup.object().shape({
      name: Yup.string().required("Name is required"),
      email: Yup.string().email().required("Email is required"),
      phone: Yup.string().required("Mobile Number is required"),
      company: Yup.string().required("Company name is required"),
      query: Yup.string().required("Query is required")
  });

  const defaultValues = {
      name: "",
      email: "",
      phone: "",
      company: "",
      query: ""
  };

  const methods = useForm({
      resolver: yupResolver(QuerySchema),
      defaultValues
  });
  // console.log(methods)

  const {
    reset, 
    handleSubmit,
    setError,
    formState: { errors }
  } = methods;

  const onSubmit = async (data) => {
      try {
        console.log(data)
      }
      catch (error) {
          console.log(error);
          setError("name", {
              ...error,
              message: error.message,
          });
      }
      finally {
          reset();
      }
  }

  return (
      <Stack sx={{ width: isSmallerMobile ? '100%' : 'auto' }}>
          <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
              <Stack spacing={3} mb={5} mt={3}>
                  {/* {
                      !!errors.afterSubmit && (
                          <Alert severity="error">{errors.afterSubmit.message}</Alert>
                      )
                  } */}
                  {
                      props === "footer" ?
                          <>
                              {
                                  isSmallerMobile ?
                                      <>
                                          <RHFTextField name={"name"} label={"Full Name"} helperText={undefined} />
                                          <RHFTextField name={"email"} label={"Email"} helperText={undefined} />
                                          <RHFTextField name={"phone"} label={"Phone"} helperText={undefined} />
                                          <RHFTextField name={"company"} label={"Company Name"} helperText={undefined} />
                                      </>
                                      :
                                      <>
                                          <Stack direction="row" spacing={3}>
                                              <RHFTextField name={"name"} label={"Full Name"} helperText={undefined} />
                                              <RHFTextField name={"company"} label={"Company Name"} helperText={undefined} />
                                          </Stack>
                                          <Stack direction="row" spacing={3}>
                                              <RHFTextField name={"email"} label={"Email"} helperText={undefined} />
                                              <RHFTextField name={"phone"} label={"Phone"} helperText={undefined} />
                                          </Stack>
                                      </>
                              }
                          </>
                          :
                          <>
                              <RHFTextField name={"name"} label={"Full Name"} helperText={undefined} />
                              <RHFTextField name={"email"} label={"Email"} helperText={undefined} />
                              <RHFTextField name={"phone"} label={"Phone"} helperText={undefined} />
                              <RHFTextField name={"company"} label={"Company Name"} helperText={undefined} />
                          </>
                  }
                  <RHFTextField name={"query"} label={"Message"} multiline rows={4} helperText={undefined} />
              </Stack>
              <LoadingButton
                  color="primary"
                  size='medium'
                  type="submit"
                  variant="contained"
                  loading={false}
                  className="loading-button"
              >
                  <Typography variant="body1">Send Query</Typography>
              </LoadingButton>
          </FormProvider>
      </Stack>
  )
}


