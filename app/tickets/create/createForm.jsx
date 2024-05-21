"use client"
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function CreateForm() {
  
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [priority, setPriority] = useState("low");
  const [isLoading, setIsLoading] = useState("false");
  
  const handleSubmit = async (e) =>{
    e.preventDefault()
    setIsLoading(true)
    

     const newTicket = {title, body, priority,user_email:"yoloho!@gmail.com"};
     const req = await fetch('http://localhost:4000/tickets',{
        method : "POST",
        headers : {"Content-Type" : "application/json"},
        body : JSON.stringify(newTicket)
     }) 
     if(req.status === 201){
      console.log("req is here"+req.status)
      router.refresh()
      router.push('/tickets')
     }

  }
  
  return (
    <form onSubmit={handleSubmit} className="w-1/2">
      <label>
        <span>Title:</span>
        <input
            required
            type="text"
            onChange={e=>setTitle(e.target.value)}
            value={title}>
        </input>
      </label>
      <label>
        <span>Body:</span>
        <textarea 
            required
            onChange={e=>setBody(e.target.value)}
            value={body}>
        </textarea>
      </label>
      <label>
        <span>Priority:</span>
        <select
            required
            onChange={e=>setPriority(e.target.value)}
            value={priority}>
            <option>
                Low Priority
            </option>
            <option>
                Medium Priority
            </option>
            <option>
                High Priority
            </option>
        </select>
      </label>

      <button >
        {isLoading && <span>Add Ticket</span>} 
        {!isLoading && <span>Adding</span>}
      </button>
    </form>
  );
}
