import React from 'react'
import { useEffect, useState } from "react";


const Jobs=()=> {
    const [applied, setApplied] = useState([]);
        const [saved, setSaved] = useState([]);
   const allJobs = [
        { id: 1, title: "Frontend Developer", location: "Bhopal" },
        { id: 2, title: "Backend Developer", location: "Indore" },
        { id: 3, title: "React Intern", location: "Remote" },
      ];
  const [jobs, setJobs] = useState(allJobs);

        const applyJob = (id) => {
        if (!applied.includes(id)) {
          const updated = [...applied, id];
          setApplied(updated);
          localStorage.setItem("appliedJobs", JSON.stringify(updated));
          alert("Job Applied");
        }
      };
    
      const saveJob = (id) => {
        if (!saved.includes(id)) {
          const updated = [...saved, id];
          setSaved(updated);
          localStorage.setItem("savedJobs", JSON.stringify(updated));
          alert("Job Saved");
        }
      };
  
  return (
    <>
    
     {/* Job List */}
      <div className="max-w-2xl mx-auto space-y-4 h-100">
        {jobs.map(job => (
          <div
            key={job.id}
            className="bg-white p-4 rounded-xl shadow flex justify-between items-center"
          >
            <div>
              <h3 className="font-bold">{job.title}</h3>
              <p className="text-gray-600">{job.location}</p>
            </div>

            <div className="flex gap-2">
              <button
                onClick={() => applyJob(job.id)}
                className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
              >
                Apply
              </button>
              <button
                onClick={() => saveJob(job.id)}
                className="bg-gray-300 px-3 py-1 rounded hover:bg-gray-400"
              >
                Save
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default Jobs