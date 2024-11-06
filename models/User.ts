// import mongoose, { Schema, model } from "mongoose";

export interface IUser {
  _id?: string;
  email?: string | null;
  password?: string;
  name?: string | null;
  phone?: string;
  image?: string;
  createdAt?: Date;
  updatedAt?: Date;
  accessToken?: string;
}

// const UserSchema = new Schema<UserDocument>(
//   {
//     email: {
//       type: String,
//       unique: true,
//       required: [true, "Email is required"],
//       match: [
//         /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
//         "Email is invalid",
//       ],
//     },
//     password: { type: String, required: true },
//     name: { type: String, required: [true, "Name is required"] },
//   },
//   { timestamps: true }
// );

// const User = mongoose.models?.User || model<UserDocument>("User", UserSchema);
// export default User;
