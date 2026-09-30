import { useState } from "react";

const StudentForm = ({ onAddStudent }) => {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [course, setCourse] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        const student = {
            id: Date.now(),
            name,
            age,
            course
        };

        onAddStudent(student);

        setName(""); setAge(""); setCourse("");
    };


  return (
    <form onSubmit={handleSubmit}>
        <input value={name} onChange={(event) => setName(event.target.value)} placeholder="Student Name" />
        <input value={age} onChange={(event) => setAge(event.target.value)} placeholder="Age" type="number" />
        <input value={course} onChange={(event) => setCourse(event.target.value)} placeholder="Course" />
        <button type="submit">Add Student</button>
    </form>
  )
}

export default StudentForm