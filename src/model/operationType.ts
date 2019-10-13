import { OPERATION_STATUS } from "./operationStatusType";

export interface OperationCreate {
  status: OPERATION_STATUS;
  properties: JSON;
  created_by: number;
}
export interface OperationEdit {
  id: number;
  status: OPERATION_STATUS;
  properties: JSON;
}
