
import { model, Types, Schema } from "mongoose";
import { v4 as uuidv4 } from 'uuid';


export const DOCUMENT_NAME = 'User';
export const COLLECTION_NAME = 'users';

export default interface User {
  _id: Types.ObjectId;
  name?: string;
  username?: string;
  email?: string;
  password?: string;
  verified?: boolean;
  status?: boolean;
  uid?: string;
  createdAt?: Date;
  updatedAt?: Date;
}
const schema = new Schema<User>(
  {
    name: { type: Schema.Types.String, required: true },
    username: { type: Schema.Types.String, required: true, unique: true ,match: /^[a-zA-Z0-9]+$/},
    email: { type: Schema.Types.String, required: true },
    password: { type: Schema.Types.String, required: true, select: false},
    verified: { type: Schema.Types.Boolean, default: false },
    status: { type: Schema.Types.Boolean, default: true, select: false},
    uid: { type: Schema.Types.String, default: uuidv4(), select: false},
    createdAt: { type: Schema.Types.Date, default: Date.now,select:false },
    updatedAt: { type: Schema.Types.Date, default: Date.now, select: false },
  },
  {
    versionKey: false,
    timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' },
  });

  schema.index({ _id: 1, status: 1 });
  schema.index({ status: 1 });
  export const UserModel = model<User>(DOCUMENT_NAME, schema, COLLECTION_NAME);
  

