import { Schema, model, Model } from "mongoose";
import { IUser } from "../@types";

interface UserModel extends Model<IUser> {
  build(attrs: IUser): IUser;
}

const UserSchema = new Schema<IUser, UserModel>(
  {
    name: {
      type: String,
      trim: true,
      required: true,
      max: 50,
    },
    email: {
      type: String,
      trim: true,
      lowercase: true,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    toJSON: {
      virtuals: true,
      transform(_doc, ret) {
        ret.id = ret._id;
        delete ret._id;
      },
      versionKey: false,
    },
    timestamps: true,
  }
);

//statics
UserSchema.statics.build = (attrs: IUser) => {
  return new User(attrs);
};

//creating user model
const User = model<IUser>("users", UserSchema);

export default User;
