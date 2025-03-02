export class MyExceptions extends Error {}

export const callMe = (name) => {
  if (name === "Hafhis") {
    throw new MyExceptions("Ups my exception happen");
  } else {
    return "OK";
  }
};
