// Import and invoke the ticket booth component function

import { ticketBooth } from "./TicketBooth.js"

const buttonsContainer = document.querySelector("#buttonsContainer")

const renderAllHTML = () => {
    buttonsContainer.innerHTML = ticketBooth()

}
renderAllHTML()

