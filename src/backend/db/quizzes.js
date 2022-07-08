import { v4 as uuid } from "uuid";

export const quizzes = [
  {
    categoryName: "maths",
    questionText: "A triangle where all sides are congruent is called?",
    options: [
      { id: uuid(),text:"Acute"},
      { id: uuid(),text:"Right"},
      { id: uuid(),text:"Equilateral"},
      { id: uuid(),text:"Obtuse"}
    ],
    answer: "Equilateral"
  },

  {
    categoryName: "maths",
    questionText: "What is the area of a triangle with base 10 cm and height 25 cm?",
    options: [ 
      {id:1,text:"35 sq cm"},  
      {id:1,text:"250 sq cm"},  
      {id:1,text:"125 sq cm"},  
      {id:1,text:"135 sq cm"}
    ],
    answer: "125 sq cm",
  },

  {
    categoryName: "maths",
    questionText: "A triangle where all sides are congruent is called",
    options: [
      {id:1,text:"Scalene"}, 
      {id:2,text:"Isosceles"}, 
      {id:3,text:"Equilateral"}, 
      {id:4,text:"Stress"}
    ],
    answer: "Attachment Issues",
  },

  {
    categoryName: "web developmemt",
    questionText: "Choose the correct HTML element to define important text",
    options: [
      { id: uuid(),text:"<strong>"},
      { id: uuid(),text:"<i>"},
      { id: uuid(),text:"<important>"},
      { id: uuid(),text:"<b>"}
    ],
    answer: "<strong>"
  },

  {
    categoryName: "web developmemt",
    questionText: "What will be the output of console.log(typeof typeof 1);",
    options: [
      { id: uuid(),text:"1"},
      { id: uuid(),text:"string"},
      { id: uuid(),text:"number"},
      { id: uuid(),text:"true"}
    ],
    answer: "string"
  },

  {
    categoryName: "web developmemt",
    questionText: "What will be the output of console.log(('b' + 'a' + + 'a' + 'a').toLowerCase());",
    options: [
      { id: uuid(),text:"banana"},
      { id: uuid(),text:"bananaa"},
      { id: uuid(),text:"ba+aa"},
      { id: uuid(),text:"option 4"}
    ],
    answer: "banana"
  },

 
  {     
    categoryName: "physics",
    questionText: "The sky appears blue because of",
        options: [ 
          {id:1,text:"Atmospheic water vapour"},  
          {id:2,text:"Scattering of light"},  
          {id:3,text:"Reflection on seawater"},  
          {id:4,text:"Emission of blue wavelenght by the sun"}
        ],
        answer: "Scattering of light"
  },

  {
    categoryName: "physics",
    questionText: "Which of the below parts of sunlight makes solar cooker hot?",
    options: [ 
      {id:1,text:"Ultraviolet"},  
      {id:2,text:"Red light"},  
      {id:3,text:"Cosmic rays"},  
      {id:4,text:"Infrared"}
    ],
    answer: "Infrared"
  },

  {
    categoryName: "physics",
    questionText: "The speed of light, with the rise in the temperature of the medium",
    options: [
      {id:1,text:"Suddenly drops"}, 
      {id:2,text:"Remains unaltered"}, 
      {id:3,text:"Decreases"}, 
      {id:4,text:"Increases"}
    ],
    answer: "remains unaltered"
  },

  {
    categoryName: "science",
    questionText:"In fireworks, the green flame is produced because of",
    options: [ 
      {id:1,text:"Sodium"},  
      {id:2,text:"Potassium"},  
      {id:3,text:"Mercury"},  
      {id:4,text:"Barium"}
    ],
    answer: "Barium"
  },
  
  {
    categoryName: "science",
    questionText: "Heavy water is",
    options: [ 
      {id:1,text:"Deuterium oxide"},  
      {id:2,text:"PH7"},  
      {id:3,text:"Rain water"},  
      {id:4,text:"Tritium oxide"}
    ],
    answer: "Deuterium oxide"
  },
  {
    categoryName: "science",
    questionText: "Which of the following is used in pencils?",
    options: [ 
      {id:1,text:"Graphite"},  
      {id:2,text:"Silicon"},  
      {id:3,text:"Phosphorous"},  
      {id:4,text:"Charcoal"}
    ],
    answer: "Graphite"
  }
  
];
