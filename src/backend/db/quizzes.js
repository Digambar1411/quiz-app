import { v4 as uuid } from "uuid";

export const quizzes = [
  {
    categoryName: "maths",
    _id:"1",
    questionText: "A triangle where one angle is 90 degree is called",
    options: [
      { id: uuid(),text:"Acute",isCorrect:false},
      { id: uuid(),text:"Right",isCorrect:true},
      { id: uuid(),text:"Equilateral",isCorrect:false},
      { id: uuid(),text:"Obtuse",isCorrect:false}
    ],
    answer: "Right"
  },

  {
    categoryName: "maths",
    _id:"2",
    questionText: "What is the area of a triangle with base 10 cm and height 25 cm?",
    options: [ 
      {id:uuid(),text:"35 sq cm" ,isCorrect:false},  
      {id:uuid(),text:"250 sq cm",isCorrect:false},  
      {id:uuid(),text:"125 sq cm",isCorrect:true},  
      {id:uuid(),text:"135 sq cm",isCorrect:false}
    ],
    answer: "125 sq cm",
  },

  {
    categoryName: "maths",
    _id:"3",
    questionText: "A triangle where all sides are congruent is called",
    options: [
      {id:uuid(),text:"Scalene",isCorrect:false}, 
      {id:uuid(),text:"Isosceles",isCorrect:false}, 
      {id:uuid(),text:"Equilateral",isCorrect:true}, 
      {id:uuid(),text:"Right",isCorrect:false}
    ],
    answer: "Equilateral",
  },

  {
    categoryName: "web developmemt",
    _id:"1",
    questionText: "Choose the correct HTML element to define important text",
    options: [
      { id: uuid(),text:"<strong>",isCorrect:true},
      { id: uuid(),text:"<i>",isCorrect:false},
      { id: uuid(),text:"<important>",isCorrect:false},
      { id: uuid(),text:"<b>",isCorrect:false}
    ],
    answer: "<strong>"
  },

  {
    categoryName: "web developmemt",
    _id:"2",
    questionText: "What will be the output of console.log(typeof typeof 1);",
    options: [
      { id: uuid(),text:"1",isCorrect:false},
      { id: uuid(),text:"string",isCorrect:true},
      { id: uuid(),text:"number",isCorrect:false},
      { id: uuid(),text:"true",isCorrect:false}
    ],
    answer: "string"
  },

  {
    categoryName: "web developmemt",
    _id:"3",
    questionText: "What will be the output of console.log(('b' + 'a' + + 'a' + 'a').toLowerCase());",
    options: [
      { id: uuid(),text:"banana",isCorrect:true},
      { id: uuid(),text:"bananaa",isCorrect:false},
      { id: uuid(),text:"ba+aa",isCorrect:false},
      { id: uuid(),text:"option 4",isCorrect:false}
    ],
    answer: "banana"
  },

 
  {     
    categoryName: "physics",
    _id:"1",
    questionText: "The sky appears blue because of",
        options: [ 
          {id:uuid(),text:"Atmospheic water vapour",isCorrect:false},  
          {id:uuid(),text:"Scattering of light",isCorrect:true},  
          {id:uuid(),text:"Reflection on seawater",isCorrect:false},  
          {id:uuid(),text:"Emission of blue wavelenght by the sun",isCorrect:false}
        ],
        answer: "Scattering of light"
  },

  {
    categoryName: "physics",
    _id:"2",
    questionText: "Which of the below parts of sunlight makes solar cooker hot?",
    options: [ 
      {id:uuid(),text:"Ultraviolet",isCorrect:false},  
      {id:uuid(),text:"Red light",isCorrect:false},  
      {id:uuid(),text:"Cosmic rays",isCorrect:false},  
      {id:uuid(),text:"Infrared",isCorrect:true}
    ],
    answer: "Infrared"
  },

  {
    categoryName: "physics",
    _id:"3",
    questionText: "The speed of light, with the rise in the temperature of the medium",
    options: [
      {id:uuid(),text:"Suddenly drops",isCorrect:false}, 
      {id:uuid(),text:"Remains unaltered",isCorrect:true}, 
      {id:uuid(),text:"Decreases",isCorrect:false}, 
      {id:uuid(),text:"Increases",isCorrect:false}
    ],
    answer: "Remains unaltered"
  },

  {
    categoryName: "science",
    _id:"1",
    questionText:"In fireworks, the green flame is produced because of",
    options: [ 
      {id:uuid(),text:"Sodium",isCorrect:false},  
      {id:uuid(),text:"Potassium",isCorrect:false},  
      {id:uuid(),text:"Mercury",isCorrect:false},  
      {id:uuid(),text:"Barium",isCorrect:true}
    ],
    answer: "Barium"
  },
  
  {
    categoryName: "science",
    _id:"2",
    questionText: "Heavy water is",
    options: [ 
      {id:uuid(),text:"Deuterium oxide",isCorrect:true},  
      {id:uuid(),text:"PH7",isCorrect:false},  
      {id:uuid(),text:"Rain water",isCorrect:false},  
      {id:uuid(),text:"Tritium oxide",isCorrect:false}
    ],
    answer: "Deuterium oxide"
  },
  {
    categoryName: "science",
    _id:"3",
    questionText: "Which of the following is used in pencils?",
    options: [ 
      {id:uuid(),text:"Graphite",isCorrect:true},  
      {id:uuid(),text:"Silicon",isCorrect:false},  
      {id:uuid(),text:"Phosphorous",isCorrect:false},  
      {id:uuid(),text:"Charcoal",isCorrect:false}
    ],
    answer: "Graphite"
  },

  {
    categoryName: "maths",
    _id:"4",
    questionText: "Which Greek letter is used to denote summation in mathematics?",
    options: [
      { id: uuid(),text:"Epsilon",isCorrect:false},
      { id: uuid(),text:"Alpha",isCorrect:false},
      { id: uuid(),text:"Lambda",isCorrect:false},
      { id: uuid(),text:"Sigma",isCorrect:true}
    ],
    answer: "Sigma"
  },

  {
    categoryName: "maths",
    _id:"5",
    questionText: "Who invented zero(0)?",
    options: [ 
      {id:uuid(),text:"Archimedes",isCorrect:false},  
      {id:uuid(),text:"Aryabhatta",isCorrect:true},  
      {id:uuid(),text:"Ramanujan",isCorrect:false},  
      {id:uuid(),text:"Brahmagupta",isCorrect:false}
    ],
    answer: "Aryabhatta"
  },
  {
    categoryName: "science",
    _id:"4",
    questionText: "Balloons are filled with?",
    options: [ 
      {id:uuid(),text:"Oxyzen",isCorrect:false},  
      {id:uuid(),text:"Helium",isCorrect:true},  
      {id:uuid(),text:"Nitrogen",isCorrect:false},  
      {id:uuid(),text:"Argon",isCorrect:false}
    ],
    answer: "Helium"
  }

    
];
