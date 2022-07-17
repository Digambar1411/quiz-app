import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

 export const categories = [
  {
    _id: uuid(),
    name:"Maths",
    image:"assets/maths.svg",
    imageLight:"assets/light_maths.svg",
    description:"Quizes based on maths",
  },

  {
    _id: uuid(),
    name:"Science",
    image:"assets/science.svg",
    imageLight:"assets/light_science.svg",
    description:"Quizes based on science",
  },

  {
    _id: uuid(),
    name:"Physics",
    image:"assets/physics.svg",
    imageLight:"assets/light_physics.svg",
    description:"Quizes based on physics",
  },

  {
    _id: uuid(),
    name:"Web Developmemt",
    image:"assets/web.svg",
    imageLight:"assets/light_web.svg",
    description:"Quizes based on web developmemnt",
  }
  
];

