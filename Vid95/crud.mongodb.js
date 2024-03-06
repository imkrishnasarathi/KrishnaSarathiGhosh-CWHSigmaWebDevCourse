// CRUD OPERATIONS
use("CrudDb");

// CREATE
/*
db.createCollection("courses");

db.courses.insertOne({
    name: "Harry's Web Dev Free Course",
    price: 0,
    assignments: 12,
    projects: 45
})

db.courses.insertMany([
    {
        "name": "Harry's Web Dev Free Course",
        "price": 0,
        "assignments": 12,
        "projects": 45
    },
    {
        "name": "Sara's JavaScript Basics",
        "price": 0,
        "assignments": 10,
        "projects": 30
    },
    {
        "name": "John's HTML Crash Course",
        "price": 0,
        "assignments": 8,
        "projects": 25
    },
    {
        "name": "Emily's CSS Fundamentals",
        "price": 0,
        "assignments": 15,
        "projects": 40
    },
    {
        "name": "Mike's Responsive Web Design",
        "price": 0,
        "assignments": 20,
        "projects": 50
    },
    {
        "name": "Sophia's Frontend Development",
        "price": 0,
        "assignments": 18,
        "projects": 48
    },
    {
        "name": "Jack's Intro to Bootstrap",
        "price": 0,
        "assignments": 10,
        "projects": 35
    },
    {
        "name": "Olivia's Web Accessibility",
        "price": 0,
        "assignments": 15,
        "projects": 42
    },
    {
        "name": "Ethan's JavaScript Frameworks",
        "price": 0,
        "assignments": 25,
        "projects": 60
    },
    {
        "name": "Ava's Backend Development",
        "price": 0,
        "assignments": 22,
        "projects": 55
    }
])
*/

// READ
/*
let a = db.courses.find({price: 0});

console.log(a.toArray())

let b = db.courses.findOne({price: 0});

console.log(b)
*/

// UPDATE
// db.courses.updateOne({price: 0}, {$set: {price: 100}})

// db.courses.updateMany({price: 0}, {$set: {price: 1000}})

// DELETE

// db.courses.deleteOne({price: 100})

// db.courses.deleteMany({price: 1000})