import { toast } from "@/hooks/use-toast";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { API_ENDPOINT } from "./env";
import axios, { isAxiosError } from "axios";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * TOAT MESSAGE ERROR
 * @param message
 * @returns
 */
export const errorToast = (message: string) => {
  return toast({
    variant: "error",
    description: message,
  });
};

/**
 * TOAT MESSAGE SUCCESS
 * @param message
 * @returns
 */
export const okToast = (message: string) => {
  return toast({
    variant: "success",
    description: message,
  });
};

/**
 *
 * @param values
 * @returns
 */
export async function apiGetReq(values: {
  accesToken?: string;
  uri: string;
}): Promise<API_REQ_OPTIONS> {
  try {
    axios.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${values.accesToken}`;

    const result = await axios.get(`${API_ENDPOINT}/${values.uri}`);
    return { data: result.data };
  } catch (err) {
    console.error(err);
    if (isAxiosError(err)) {
      return { error: true, message: err.response?.data.message };
    }
    return { message: "Something happens. Please try again later" };
  }
}

/**
 *
 * REST API POST METHOD
 * @param values
 * @returns
 */
export async function apiPostReq(values: {
  accesToken?: string;
  uri: string;
  data: object;
}): Promise<API_REQ_OPTIONS> {
  try {
    axios.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${values.accesToken}`;

    const result = await axios.post(
      `${API_ENDPOINT}/${values.uri}`,
      values.data
    );
    return { data: result.data };
  } catch (err) {
    console.error(err);
    if (isAxiosError(err)) {
      return { error: true, message: err.response?.data.message };
    }
    return { message: "Something happens. Please try again later" };
  }
}
