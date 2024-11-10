"use server";

import { verifySession } from "@/lib/session";
import { apiGetReq } from "@/lib/utils";

export const listProspects = async () => {
  try {
    const session = await verifySession();
    return apiGetReq({
      uri: "/prospect",
      accesToken: session?.user.accessToken,
    });
  } catch (err) {
    console.log(err);
  }
};

// export const addProspects = async () => {
//   const session = await getServerSession();
//   console.log(session);
// };

// export const updateProspects = async () => {
//   const session = await getServerSession();
//   console.log(session);
// };

// export const removeProspects = async () => {
//   const session = await getServerSession();
//   console.log(session);
// };
