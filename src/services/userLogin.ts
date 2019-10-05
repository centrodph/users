import { db } from "../model/setup";
import { loginUser } from "../model/query";

export const userLogin = async (request, response) => {
  try {
    const { email, password } = request.body;
    const { rows } = await db.query(loginUser({ email }));
    const user = rows[0];
    if (!user) {
      return response.status(403).json({});
    }
    response.status(200).send(user);
  } catch (error) {
    response.status(500).send();
  }
};
