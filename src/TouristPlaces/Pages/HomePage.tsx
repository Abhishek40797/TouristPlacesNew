import { Hero } from "./Hero";
import { FlightInfo } from "./FlightInformation";
import { Expore } from "./HomeExpore";
import { Reservations } from "./HomeReservation";
import { About } from "./HomeAbout";
import { ClientFeedback } from "./ClientFeeback";

export const Home = ()=>{
    return (
        <>
            <Hero  />
            <FlightInfo />
            <Expore />
            <Reservations />
            <About />
            <ClientFeedback />
        </>
    )
}