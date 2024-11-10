import "server-only";

import { getServerSession, Session } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";

export const verifySession = async (): Promise<Session | null> => {
  const session = await getServerSession(authOptions);

  if (!session?.user) return redirect("/auth/signin");
  return session;
};
