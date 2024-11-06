import { IUser } from "@/models/User";

declare module "next-auth" {
  interface Session {
    user: IUser & {
      accessToken?: string;
    };
  }
}
