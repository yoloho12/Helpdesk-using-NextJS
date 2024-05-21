async function getTickets(id) {
  // const regex1 = /^[a-zA-Z]/
  // if(regex1.test(id)){
  //   console.log("check . . .. "+ regex1.test(id))
  //   return notFound()
  // }

  //delay 3 seconds
  await new Promise((resolve) => {
    setTimeout(resolve, 3000)
  })

  const res = await fetch("http://localhost:4000/tickets/" + id, {
    next: { revalidate: 60 },
  })
  // if(!res.ok){
  //   return notFound()
  return res.json()
}

export default async function TicketDetails({ params }) {
  const ticket_by_id = await getTickets(params.id)
  return (
    <main>
      <nav>
        <h2>Ticket Details</h2>
      </nav>
      <div className="card">
        <h3>{ticket_by_id.title}</h3>
        <small>Created by {ticket_by_id.user_email}</small>
        <p>{ticket_by_id.body}</p>
        <div className={`pill ${ticket_by_id.priority}`}>
          {ticket_by_id.priority}Priority
        </div>
      </div>
    </main>
  )
}
