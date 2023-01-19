"use client";
import { showNotification } from "@mantine/notifications";
import { Button, TextInput, Title } from "@mantine/core";
import { useRouter } from "next/navigation";
import { useForm } from "@mantine/form";
import { setCookie } from "cookies-next";
import React from "react";
//
//
const LoginPage = () => {
  const router = useRouter();
  const form = useForm({
    initialValues: {
      user_id: "",
      password: "",
    },
  });
  // functions
  const submitHandler = async (values) => {
    // empty-check
    if (values.user_id == "" || values.password == "") {
      showNotification({
        message: "User Id and Password cannot be empty!",
        color: "red",
        disallowClose: true,
        autoClose: 2000,
        title: "Error!",
      });
      return;
    }
    // verification
    if (values.user_id != "admin" || values.password != "admin") {
      showNotification({
        title: "Error!",
        message: "Wrong Credentials!",
        color: "red",
        disallowClose: true,
        autoClose: 2000,
      });
      return;
    }
    //
    setCookie("token", "is_verified");
    router.push("/dashboard/");
    //
  };
  //
  return (
    <>
      <section className="h-screen w-[100%] flex justify-center items-center bg-[#111]">
        <main className="w-[500px] max-w-[95%] p-5 rounded-md z-9 bg-[#bbbbbb]">
          <Title className="text-center" order={1}>
            Welcome Back
          </Title>
          <form
            className="flex flex-col gap-5"
            onSubmit={form.onSubmit(submitHandler)}
          >
            <TextInput
              placeholder="Enter user ID"
              label="User ID"
              variant="filled"
              size="md"
              withAsterisk
              {...form.getInputProps("user_id")}
            />
            <TextInput
              type={"password"}
              placeholder="Enter Password"
              label="Password"
              variant="filled"
              size="md"
              withAsterisk
              {...form.getInputProps("password")}
            />
            <Button
              type={"submit"}
              className="transition-all bg-blue-500 hover:bg-blue-900 w-[50%] ml-auto"
              size="md"
            >
              Login
            </Button>
          </form>
        </main>
      </section>
    </>
  );
};

export default LoginPage;
