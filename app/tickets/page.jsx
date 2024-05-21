import { Suspense } from "react";
import TicketList from "./TicketList";
import Loading from "../loading";

export default function Tickets() {
  return (
    <main>
      <div>
        <nav>
          <h2>Tickets!</h2>
          <p>
            <small>Currently available tickets </small>
          </p>
        </nav>
      </div>
      <Suspense fallback={<Loading/>}>
        <TicketList />
      </Suspense>
    </main>
  );
}
