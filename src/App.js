import { useState } from "react";
export default function App() {

const studentsData = [
  {name:"Aiden Carter" , level:1 , AverageScore:88},
  {name:"Bella Thompson" , level:2 , AverageScore:91},
  {name:"Caleb Johnson" , level:3 , AverageScore:84},
  {name:"Daisy Nguyen" , level:3 , AverageScore:93},
  {name:"Ethan Wright" , level:1 , AverageScore:76},
  {name:"Fiona Lopez" , level:3 , AverageScore:89},
  {name:"Gavin Smith" , level:2 , AverageScore:82},
  {name:"Hannah Patel" , level:3 , AverageScore:95},
  {name:"Isaac Chen" , level:1 , AverageScore:79},
  {name:"Jasnine Rivera" , level:2 , AverageScore:87}
];

const [filterLevel , setFilterLevel]=useState("All Levels");

const filteredStudends = 
filterLevel === "All Levels" ? studentsData : studentsData.filter((student)=>
  student.level===parseInt(filterLevel)
);

  return (
    <div className="App">
      <h1 id='title'>STUDENTS OVERVIEW</h1>
      <div className="search">
        <p>filter by level</p>
        <select name="filter by level " id="filter-by-level" onChange={(e)=>{
          setFilterLevel(e.target.value);
        }}>
          <option value="All Levels">All Levels</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
      </div>
      <table>  
        <thead>
          <tr>
            <th>Name</th>
            <th>Level</th>
            <th>Average</th>
          </tr>
        </thead>
        <tbody>
          
          {filteredStudends.map((student)=>(
            <tr key={student.name}>
              <td>{student.name}</td>
              <td>{student.level}</td>
              <td>{student.AverageScore}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
} 