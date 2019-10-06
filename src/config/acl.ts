import { ACCESS_TYPE } from "../model/accessType";
export const aclBasic = (allowedAccess: ACCESS_TYPE[]) => async (
  request,
  res,
  next
) => {
  console.log("ACL rules");
  console.log("Request Type:", request.method);
  console.log("Request URL:", request.originalUrl);
  console.log("Request user:", request.user ? request.user.access : "-");
  if (!request.user) return res.status(403).send();
  if (!allowedAccess.includes(request.user.access)) return res.status(403).send();
  return next();
};
