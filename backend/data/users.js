import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@test.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Harsha G D",
    email: "harsha@test.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Hemanth MR",
    email: "hemanth@test.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default users;
