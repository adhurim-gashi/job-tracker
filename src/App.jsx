import { useState } from "react"; 

const stages = [
  "Saved", 
  "Applied", 
  "Interview", 
  "Offer",
  "Rejected", 
]

const initialJobs = [
  {
    id: 1,
    company: "Spotify", 
    role: "Frontend Developer Intern",
    location: "Remote", 
    status: "Saved",
    type: "Internship", 
  }, 
  {
    id: 2, 
    company: "Google", 
    role: "Junior Software Engineer", 
    location: "London",
    status: "Applied", 
    type: "Full-time", 
  }, 
  {
    id:3, 
    company: "Stripe", 
    role: "React Developer", 
    location: "Dublin", 
    status: "Interview",
    type: "Full-time",
  },
]


function App() {
  const [jobs, setJobs] = useState(initialJobs);
  const [isFormOpen, setIsFormOpen] = useState(false); 
  const [formData, setFormData] = useState({
    company: "", 
    role: "", 
    location: "", 
    status: "Saved", 
    type: "Full-time", 
  })
  const totalJobs = jobs.length 
  const appliedJobs = jobs.filter((job) => job.status === "Applied").length
  const interviewJobs = jobs.filter((job) => job.status === "Interview").length 
  const offerJobs = jobs.filter((job) => job.status === "Offer").length


  function handleAddJob(event) {
    event.preventDefault()

    if (!formData.company.trim() || !formData.role.trim()) {
      return
    }

    const newJob = {
      id: Date.now(), 
      company: formData.company.trim(), 
      role: formData.role.trim(), 
      location: formData.location.trim() || "Remote", 
      status: formData.status, 
      type: formData.type, 
    }

    setJobs([...jobs, newJob])

    setFormData({
      company: "", 
      role: "", 
      location: "", 
      status: "Saved",
      type: "Full-time", 
    })

    setIsFormOpen(false)
  }

  function handleStatusChange(jobId, newStatus) {
    const updatedJobs = jobs.map((job) => {
      if (job.id === jobId) {
        return {
          ...job, 
          status: newStatus,
        }
      }
      return job
    })
    
    setJobs(updatedJobs)
  }

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100">
      <section className="mx-auto max-w-7xl px-6 py-8">
        <header className="flex flex-col gap-6 border-b border-zinc-800 pb-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-medium text-cyan-400">ApplyBoard</p>
            <h1 className="mt-2 text-4xl font-bold tracking-tight">
              Job Application Tracker
            </h1>
            <p className="mt-3 max-w-2xl text-zinc-400">
              Track your applications from saved jobs to offers in one focused board.
            </p>
          </div>

          <button 
          onClick={() => setIsFormOpen(true)} 
          className="rounded-lg bg-cyan-400 px-5 py-3 font-semibold text-zinc-950 transition hover:bg-cyan-300">
            Add Job
          </button>
        </header>

        {isFormOpen && (
            <form
            onSubmit={handleAddJob}
            className="mt-6 rounded-xl border border-zinc-800 bg-zinc-900 p-4">
              <div className="flex items-center justify-between">
                <h2 className="font-semibold">Add a new job</h2>
                <button
                type="button"
                onClick={() => setIsFormOpen(false)} 
                className="text-md font-medium text-red-400 transition hover:text-red-300"
                >
                  Cancel
                </button>
              </div>

              <div className="mt-4 grid gap-4 md:grid-cols-2">
                <input 
                type="text"
                placeholder="Company"
                value={formData.company}
                onChange={(event) => 
                  setFormData({...formData, company: event.target.value })
                } 
                className="rounded-lg border border-zinc-700 bg-zinc-950 px-3 py-2 text-sm outline-none transition placeholder:text-zinc-600 focus:border-cyan-400"
                />

                <input 
                type="text"
                placeholder="Role"
                value={formData.role}
                onChange={(event) => 
                  setFormData({...formData, role: event.target.value})
                } 
                className="rounded-lg border border-zinc-700 bg-zinc-950 px-3 py-2 text-sm outline-none transition placeholder:text-zinc-600 focus:border-cyan-400"
                />


              <input 
                type="text"
                placeholder="Location"
                value={formData.location}
                onChange={(event) => 
                  setFormData({...formData, location: event.target.value})
                } 

                className="rounded-lg border border-zinc-700 bg-zinc-950 px-3 py-2 text-sm outline-none transition placeholder:text-zinc-600 focus:border-cyan-400"
                />
                
                <select 
                value={formData.status}
                onChange={(event) => 
                  setFormData({...formData, status: event.target.value})
                }
                className="rounded-lg border border-zinc-700 bg-zinc-950 px-3 py-2 text-sm outline-none transition focus:border-cyan-400"
                >
                  {stages.map((stage) => (
                    <option key={stage} value={stage}>
                      {stage}
                    </option>
                  ))}
                </select>

                <select
                value={formData.type}
                onChange={(event) => 
                  setFormData({...formData, type: event.target.value})
                }
                className="rounded-lg border border-zinc-700 bg-zinc-950 px-3 py-2 text-sm outline-none transition focus:border-cyan-400">
                  <option value="Full-time">Full-time</option>
                  <option value="Internship">Internship</option>
                  <option value="Part-time">Part-time</option>
                  <option value="Contract">Contract</option>
                </select>

                <button type="submit"
                className="rounded-lg bg-cyan-400 px-5 py-2 font-semibold text-zinc-950 transition hover:bg-cyan-300 md:col-span-2"
                >
                  Save Job
                </button>
              </div>
            </form>
          )}

        <section className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard label="Total Jobs" value={totalJobs}/>
          <StatCard label="Applied" value={appliedJobs}/>
          <StatCard label="Interviews" value={interviewJobs}/>
          <StatCard label="Offers" value={offerJobs}/>

        </section>

        <section className="mt-8 grid gap-4 lg:grid-cols-5">
          {stages.map((stage) => (
            <div
            key={stage}
            className="min-h-80 rounded-xl border border-zinc-800 bg-zinc-900/70 p-4"
            >
              <h2 className="font-semibold">{stage}</h2>
              <div className="mt-4 space-y-3">
                {
                  jobs.filter((job) => job.status === stage)
                  .map((job) => (
                    <JobCard key={job.id} job={job} onStatusChange={handleStatusChange} />
                  ))
                }
              </div>
            </div>
          ))}
        </section>
      </section>
    </main>
  )
}

function StatCard({ label, value }) {
  return (
    <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-4">
      <p className="text-sm text-zinc-400">{label}</p>
      <p className="mt-2 text-3xl font-bold">{value}</p>
    </div>
  )
}

function JobCard ({job, onStatusChange}) {
  return (
    <article className="rounded-lg border border-zinc-800 bg-zinc-950 p-4">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="font-semibold text-zinc-100">{job.role}</h3>
          <p className="mt-1 text-sm text-zinc-400">{job.company}</p>
        </div>

       <span className="rounded-full bg-cyan-400/10 px-2.5 py-1 text-xs font-medium text-cyan-300">
       {job.type}
       </span>
      </div>
      <p className="mt-4 text-sm text-zinc-500">{job.location}</p>
      <select
      value={job.status}
      onChange={(event) => onStatusChange(job.id, event.target.value)} 
      className="mt-4 w-full rounded-lg border border-zinc-800 bg-zinc-900 px-3 py-2 text-sm text-zinc-200 outline-none transition focus:border-cyan-400"
      >
        {stages.map((stage) => (
          <option key={stage} value={stage}>{stage}</option>
        ))}
      </select>
    </article>
  )
}

export default App;

