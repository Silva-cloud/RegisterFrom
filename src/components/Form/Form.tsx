import { Controller, useForm, type SubmitHandler } from "react-hook-form";
import TextField from "../TextField/TextField";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";

const schema = yup.object({
  name: yup.string().required("this field is required"),
  email: yup.string().email("Invalid email").required("this field is required"),
  password: yup
    .string()
    .required("this field is required")
    .min(8, "password must be at least 8 characters"),
  confirmPassword: yup
    .string()
    .required("this field is required")
    .test(
      "doesItMatch",
      "passwords do not match",
      (value, context) => value === context.parent.password
    ),
});

interface IFormInputs {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const initialValues = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const Form = () => {
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<IFormInputs>({
    defaultValues: initialValues,
    resolver: yupResolver(schema),
  });
  const [isLoading, setIsLoading] = useState(false);
  const onSubmit: SubmitHandler<IFormInputs> = async (data) => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      console.log(data);
      reset();
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <fieldset disabled={isLoading} className="flex flex-col gap-5">
        <Controller
          name="name"
          control={control}
          render={({ field }) => (
            <TextField
              error={errors.name}
              type="text"
              label="Name"
              {...field}
            />
          )}
        />
        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <TextField
              error={errors.email}
              type="text"
              label="Email"
              {...field}
            />
          )}
        />
        <Controller
          name="password"
          control={control}
          render={({ field }) => (
            <TextField
              error={errors.password}
              type="password"
              label="Password"
              {...field}
            />
          )}
        />
        <Controller
          name="confirmPassword"
          control={control}
          render={({ field }) => (
            <TextField
              error={errors.confirmPassword}
              type="password"
              label="Confirm Password"
              {...field}
            />
          )}
        />
        <div className="flex justify-end mt-2">
          <button
            disabled={isLoading}
            className={`rounded-xs font-semibold text-sm border-2 border-primary-black px-5 py-3 cursor-pointer hover:bg-primary-black hover:text-white transition-all ${
              isLoading ? "bg-primary-black text-white" : ""
            }`}
          >
            {isLoading ? "Loading..." : "Register"}
          </button>
        </div>
      </fieldset>
    </form>
  );
};

export default Form;
