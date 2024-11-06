import { toast } from "@/hooks/use-toast";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const errorToast = (message: string) => {
  return toast({
    variant: "error",
    description: message,
  });
};

export const okToast = (message: string) => {
  return toast({
    variant: "success",
    description: message,
  });
};
