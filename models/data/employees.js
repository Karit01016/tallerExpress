import "dotenv/config.js"
import "../../config/dataBase.js"
import Employee from "../Employee.js"

let employeesSchema= [
    { name: "John Smith", position: "Software Engineer", salary: 70000 },
    { name: "Emily Johnson", position: "Project Manager", salary: 85000 },
    { name: "Michael Brown", position: "Data Analyst", salary: 60000 },
    { name: "Sarah Davis", position: "HR Specialist", salary: 55000 },
    { name: "James Wilson", position: "Marketing Coordinator", salary: 50000 },
    { name: "Jessica Garcia", position: "Product Designer", salary: 72000 },
    { name: "David Martinez", position: "Accountant", salary: 65000 },
    { name: "Sophia Anderson", position: "Customer Support", salary: 40000 },
    { name: "Daniel Taylor", position: "Sales Executive", salary: 62000 },
    { name: "Olivia Thomas", position: "Content Writer", salary: 45000 },
    { name: "Matthew Lee", position: "Quality Assurance Engineer", salary: 68000 },
    { name: "Chloe White", position: "Business Analyst", salary: 73000 },
    { name: "Alexander Harris", position: "Operations Manager", salary: 90000 },
    { name: "Mia Clark", position: "UX Researcher", salary: 71000 },
    { name: "Ethan Lewis", position: "IT Specialist", salary: 66000 }
]

Employee.insertMany(employeesSchema)

