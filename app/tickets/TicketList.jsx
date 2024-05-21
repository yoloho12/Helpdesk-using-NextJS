import Link from "next/link"

async function getTickets(){

  //delay 3 seconds
  await new Promise(resolve => {setTimeout(resolve,3000)})


  const res = await fetch("http://localhost:4000/tickets",{
    next: { revalidate: 0 },
  })
  return res.json()
}

export default async function TicketList() {
  const tickets = await getTickets()
  return (tickets.map(ticket => (
   
    <div key={ticket.id} className="card my-5">
    <Link href={`/tickets/${ticket.id}`}>
      <h3>{ticket.title}</h3>
      <p className="body">{ticket.body.slice(0,200)}...</p>
      <div className={`pill ${ticket.priority}`}>{ticket.priority} Priority</div>
    </Link>
    </div>
  )))
}