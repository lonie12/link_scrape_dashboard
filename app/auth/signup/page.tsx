"use client";

import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Google } from "iconsax-react";
import { register } from "@/actions/register";
import { useRouter } from "next/navigation";
import { useRef } from "react";
import { errorToast } from "@/lib/utils";

const SignUpPage = () => {
  const router = useRouter();
  const ref = useRef<HTMLFormElement>(null);

  const handleSubmit = async (formData: FormData) => {
    try {
      const res = await register({
        name: formData.get("name")?.valueOf(),
        email: formData.get("email")?.valueOf(),
        password: formData.get("password")?.valueOf(),
      });
      if (res?.error) return errorToast(res.error);
      ref.current?.reset();
      return router.push("/");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="h-screen w-full lg:grid lg:grid-cols-2 px-3">
      <div className="flex items-center justify-center py-12">
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold">Sign up</h1>
            <p className="text-balance text-muted-foreground">
              Signup to continue using Linkscrape
            </p>
          </div>
          <form ref={ref} action={handleSubmit} className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                name="name"
                type="text"
                placeholder="Jeanne Doe"
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="m@example.com"
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                name="password"
                type="password"
                placeholder="********"
                required
              />
            </div>
            <Button type="submit" className="w-full">
              Sign Up
            </Button>
            <Button variant="outline" className="w-full">
              <Google /> Continue with Google
            </Button>
          </form>
          <div className="mt-4 text-center text-sm">
            Already have an account?{" "}
            <Link href="/auth/signin" className="underline">
              Sign in
            </Link>
          </div>
        </div>
      </div>
      <div className="hidden bg-muted lg:block">
        <Image
          src="https://img.freepik.com/photos-gratuite/employe-magasin-vetements-faisant-commande-ligne-client-afro-americain-debout-au-comptoir-boutique-moderne_482257-72233.jpg?t=st=1729209862~exp=1729213462~hmac=a59b45eca7c0cb3e7b7bc52e07a9b47c07e7e31ee37c6a2fe4fca64f93840c43&w=996"
          alt="Image"
          width="1920"
          height="1080"
          className="h-screen w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </div>
  );
};

export default SignUpPage;
