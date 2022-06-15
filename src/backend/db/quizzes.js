import { v4 as uuid } from "uuid";

export const quizzes = [
  {
    categoryName: "maths",
    question: "question number 1",
    options: [
      { id: uuid(),text:"narendra"},
      { id: uuid(),text:"modi"},
      { id: uuid(),text:"om"},
      { id: uuid(),text:"birla"}
    ],
    answer: "om"
  },

  {
    categoryName: "maths",
    question: "question number 2",
    options: [ 
      {id:1,text:"Season 3"},  
      {id:1,text:"Season 5"},  
      {id:1,text:"Season 7"},  
      {id:1,text:"Season 4"}
    ],
    answer: "Season 4",
  },

  {
    categoryName: "maths",
    question: "question number 3",
    options: [
      {id:1,text:"Attachment Issues"}, 
      {id:2,text:"Panic Attack"}, 
      {id:3,text:"Trauma"}, 
      {id:4,text:"Stress"}
    ],
    answer: "Attachment Issues",
  },

  {     
    categoryName: "physics",
        question: "question number 4",
        options: [ 
          {id:1,text:"Season 3"},  
          {id:2,text:"Season 5"},  
          {id:3,text:"Season 7"},  
          {id:4,text:"option 4"}
        ],
        answer: "option 4"
  },

  {
    categoryName: "physics",
    question: "question number 5",
    options: [ 
      {id:1,text:"Season 3"},  
      {id:2,text:"Season 5"},  
      {id:3,text:"Season 7"},  
      {id:4,text:"Season 4"}
    ],
    answer: "Season 4"
  },

  {
    categoryName: "physics",
    question: "question number 6",
    options: [
      {id:1,text:"Attachment Issues"}, 
      {id:2,text:"Panic Attack"}, 
      {id:3,text:"Trauma"}, 
      {id:4,text:"Stress"}
    ],
    answer: "Attachment Issues"
  },

  {
    categoryName: "science",
    question: "question number 7",
    options: [ 
      {id:1,text:"Season 3"},  
      {id:2,text:"Season 5"},  
      {id:3,text:"Season 7"},  
      {id:4,text:"Season 4"}
    ],
    answer: "Season 5"
  },
  
  {
    categoryName: "science",
    question: "last question",
    options: [ 
      {id:1,text:"Season 1"},  
      {id:2,text:"Season 5"},  
      {id:3,text:"Season 2"},  
      {id:4,text:"Season 4"}
    ],
    answer: "Season 4"
  }
  
];
