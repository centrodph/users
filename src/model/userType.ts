import { ACCESS_TYPE } from "./accessType";
import { USER_STATUS } from './userStatus';
export interface UserCreate {
  email: string;
  password: string;
  access: ACCESS_TYPE;
  status: USER_STATUS;
}
