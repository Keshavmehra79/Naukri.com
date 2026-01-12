import React from 'react'
import pic from "../assets/png.png"
import { useEffect, useState } from "react";

const Jobseeker=()=> {
      const allJobs = [
        { id: 1, title: "Frontend Developer", location: "Bhopal" },
        { id: 2, title: "Backend Developer", location: "Indore" },
        { id: 3, title: "React Intern", location: "Remote" },
      ];
    
      const [jobs, setJobs] = useState(allJobs);
      const [search, setSearch] = useState("");
      const [profile, setProfile] = useState({ name: "", skills: "" });
      const [applied, setApplied] = useState([]);
      const [saved, setSaved] = useState([]);
    
      useEffect(() => {
        setApplied(JSON.parse(localStorage.getItem("appliedJobs")) || []);
        setSaved(JSON.parse(localStorage.getItem("savedJobs")) || []);
        setProfile(JSON.parse(localStorage.getItem("profile")) || { name: "", skills: "" });
      }, []);
    
      
    
      const saveProfile = () => {
        localStorage.setItem("profile", JSON.stringify(profile));
        alert("Profile Saved");
      };
    
      const searchJob = () => {
        const filtered = allJobs.filter(job =>
          job.title.toLowerCase().includes(search.toLowerCase())
        );
        setJobs(filtered);
      };
    
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
    
      const viewAppliedJobs = () => {
        setJobs(allJobs.filter(job => applied.includes(job.id)));
      };
    
      const viewSavedJobs = () => {
        setJobs(allJobs.filter(job => saved.includes(job.id)));
      };






  return (
    <>
    <div className=' flex justify-evenly h-100 w-full bg-cyan-100'>

      {/* First sec */}
      <div className='h-40 w-80 '>
        <h1 className='text-4xl font-extrabold text-blue-900 m-4 ml-10 p-4 mb-10'>Find the most exiciting startup jobs</h1>

        
      </div>

      {/* Second sec */}
      <div>
        <img src={pic} alt="" />
      </div>
  </div>

        <div className="min-h-screen bg-gray-100 p-6">



      <h1 className="text-3xl font-bold text-center mb-6">
        Wellcome in this web
      </h1>


      {/* Profile Card */}
      <div className="max-w-md mx-auto bg-white p-4 rounded-xl shadow mb-6">
        <h2 className="font-semibold mb-2">My Profile</h2>
        <input
          placeholder="Name"
          value={profile.name}
          className="w-full border p-2 rounded mb-2"
          onChange={(e) => setProfile({ ...profile, name: e.target.value })}
        />
        <input
          placeholder="Skills"
          value={profile.skills}
          className="w-full border p-2 rounded mb-2"
          onChange={(e) => setProfile({ ...profile, skills: e.target.value })}
        />
        <button
          onClick={saveProfile}
          className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
        >
          Save Profile
        </button>
      </div>

      {/* Search & Filters */}
      <div className="max-w-2xl mx-auto bg-white p-4 rounded-xl shadow mb-6">
        <input
          placeholder="Search Job"
          className="w-full border p-2 rounded mb-3"
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="flex gap-2">
          <button
            onClick={searchJob}
            className="flex-1 bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700"
          >
            Search
          </button>
          <button
            onClick={viewAppliedJobs}
            className="flex-1 bg-gray-600 text-white py-2 rounded hover:bg-gray-700"
          >
            Applied
          </button>
          <button
            onClick={viewSavedJobs}
            className="flex-1 bg-yellow-500 text-white py-2 rounded hover:bg-yellow-600"
          >
            Saved
          </button>
        </div>
      </div>

      {/* Job List */}
      <div className="max-w-2xl mx-auto space-y-4">
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

    </div>

    
    </>
  )
}

export default Jobseeker