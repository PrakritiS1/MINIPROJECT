
const express = require("express"); 
const mongoose = require("mongoose"); 
const app = express(); app.use(express.json());
mongoose.connect("mongodb://127.0.0.1:27017/schoolDB"); 
const Student = mongoose.model("Student", { name: String, class: String, roll: Number, }); 
    app.post("/students", async (req, res) => 
    { const s = new Student(req.body); 
        await s.save();
         res.json(s); }); 
app.get("/students", async (req, res) =>
     {
         const students = await Student.find(); 
         console.log(students); 
         res.json(students); 
        }); 
app.put("/students/:id", async (req, res) =>
    { 
        await Student.findByIdAndUpdate(req.params.id, req.body); 
        res.json({ message: "Student Updated" });
     }); 
app.delete("/students/:id", async (req, res) =>
         { 
            await Student.findByIdAndDelete(req.params.id);
             res.json({ message: "Student Deleted" });
             });

app.listen(3000, () => console.log("Server Running"));