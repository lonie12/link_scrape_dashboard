"use server";

import { API_ENDPOINT } from "@/lib/env";
import axios, { isAxiosError } from "axios";

export const register = async (values: {
  email?: string | object;
  password?: string | object;
  name?: string | object;
}) => {
  try {
    const { email, password, name } = values;
    const result = await axios.post(`${API_ENDPOINT!}/auth/register`, {
      email,
      name,
      password,
    });
    console.log(result);
    if (result.status == 201) {
      return result.data;
    } else {
      return { error: result.data.message };
    }
  } catch (e) {
    console.log(e);
    if (isAxiosError(e)) {
      console.log(e.status);
      switch (e.status) {
        case 500:
          return { error: "Internal server error" };
        case 409:
          return { error: "User already exists" };
        default:
          return { error: "Registration failed" };
      }
    }
  }
};
