import { addRideTicket } from "./rides/RideTicketHolders.js"
import { addGameTicket } from "./games/gameTicketHolders.js"
import { addFoodTicket } from "./food/foodTicketHolders.js"
import { addSideshowTicket } from "./sideshows/sideShowTicketHolders.js"


const contentTarget = document.querySelector(".entry")
const eventHub = document.querySelector("#state-fair")


eventHub.addEventListener("click", (event) => {
    if (event.target.id === "rideTicket") {
        addRideTicket()
    } else if (event.target.id === "foodTicket") {
        addFoodTicket()
    } else if (event.target.id === "gameTicket") {
        addGameTicket()
    } else if (event.target.id === "sideshowTicket") {
        addSideshowTicket()
    } else if (event.target.id === "fullPackageTicket") {
        addFullPackageTicket()
    }
})

export const ticketBooth = () => {
    return `
        <div class="ticketBooth">
            <button id="rideTicket"> Ride Ticket </button>
            <button id="foodTicket"> Food Ticket </button>
            <button id="gameTicket"> Game Ticket </button>
            <button id="sideshowTicket"> Sideshow Ticket </button>
            <button id="fullPackageTicket"> Full Package Ticket </button>
        </div>
    `
}

