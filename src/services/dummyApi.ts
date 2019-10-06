export const getAuthor = async (request, response) => {
  response.send({
    author: "Gerardo Perrucci",
    email: "centrodph@gmail.com"
  });
};
export const getTest = async (request, response) => {
  response.send("Express APP working");
};
