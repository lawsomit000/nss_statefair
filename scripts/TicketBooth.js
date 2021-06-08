
const contentTarget = document.querySelector(".entry")
const eventHub = document.querySelector("#state-fair")

const addRideTicket = () => {
    console.log("Ride Ticket was clicked")
}
const addFoodTicket = () => {
    console.log("Food Ticket was clicked")
}
const addGameTicket = () => {
    console.log("Game Ticket was clicked")
}
const addSideshowTicket = () => {
    console.log("Sideshow Ticket was clicked")
}
const addFullPackageTicket = () => {
    console.log("Full Package Ticket was clicked")
}

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

