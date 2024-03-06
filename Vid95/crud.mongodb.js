use("CrudDb");

db.createCollection("courses");
db.courses.insertOne({
    name: "Harry's Web Dev Free Course",
    price: 0,
    assignments: 12,
    projects: 45
})