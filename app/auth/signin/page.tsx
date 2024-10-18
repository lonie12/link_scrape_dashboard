"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Google } from "iconsax-react";
import { useRouter } from "next/navigation";
import { FormEvent, MouseEvent } from "react";
import { signIn } from "next-auth/react";
import { useToast } from "@/hooks/use-toast";

const SignInPage = () => {
  const { toast } = useToast();
  const router = useRouter();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const formData = new FormData(event.currentTarget);
      const res = await signIn("credentials", {
        email: formData.get("email"),
        password: formData.get("password"),
        redirect: false,
      });
      if (res?.error) {
        return toast({ variant: "error", description: res?.error.toString() });
      }
      if (res?.ok) {
        toast({
          variant: "success",
          description: "You are successfuly logged in",
        });
        return router.push("/");
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleGoogleLogin = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    signIn("google", { callbackUrl: "/" });
  };

  return (
    <div className="auth-content-wrapper px-3">
      <Card className="w-full sm:max-w-[420px] mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="grid gap-4">
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
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                <Link
                  href="#"
                  className="ml-auto inline-block text-sm underline"
                >
                  Forgot your password?
                </Link>
              </div>
              <Input
                id="password"
                name="password"
                type="password"
                placeholder="********"
                required
              />
            </div>
            <Button type="submit" className="w-full">
              Sign In
            </Button>
            <Button
              onClick={handleGoogleLogin}
              variant="outline"
              className="w-full"
            >
              <Google /> Login with Google
            </Button>
          </form>
          <div className="mt-4 text-center text-sm">
            Don&apos;t have an account?{" "}
            <Link href="/auth/signup" className="underline">
              Sign up
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SignInPage;
