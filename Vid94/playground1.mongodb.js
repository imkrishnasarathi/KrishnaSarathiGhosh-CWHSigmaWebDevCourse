use('SigmaDatabase');

// Insert a few documents into the courses collection.
db.getCollection('courses').insertMany([
    {
      "name": "Java",
      "Price": 20000,
      "instructor": "Harry"
    },
    {
      "name": "Python",
      "Price": 15000,
      "instructor": "John"
    },
    {
      "name": "C++",
      "Price": 18000,
      "instructor": "Emma"
    },
    {
      "name": "JavaScript",
      "Price": 22000,
      "instructor": "Michael"
    },
    {
      "name": "Ruby",
      "Price": 17000,
      "instructor": "Sophia"
    },
    {
      "name": "C#",
      "Price": 19000,
      "instructor": "Olivia"
    },
    {
      "name": "PHP",
      "Price": 16000,
      "instructor": "James"
    },
    {
      "name": "Swift",
      "Price": 23000,
      "instructor": "Isabella"
    },
    {
      "name": "Kotlin",
      "Price": 21000,
      "instructor": "Liam"
    },
    {
      "name": "Go",
      "Price": 24000,
      "instructor": "Ava"
    }
  ]
  );

console.log("Done inserting data")