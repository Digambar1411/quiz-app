import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * Every user will have cart (Quantity of all Products in Cart is set to 1 by default), wishList by default
 * */

export const users = [
  {
    _id: 1007,
    firstName: "Digambar",
    lastName: "Deshawal",
    email: "admin@gmail.com",
    password: "123456",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: 1008,
    firstName: "john",
    lastName: "deh",
    email: "john@gmail.com",
    password: "john@123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
