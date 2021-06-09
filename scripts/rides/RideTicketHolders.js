
// const eventHub = document.querySelector("#state-fair")
// document.getElementsByClassName('people food')
// const contentTarget = document.querySelector(".rides")
// const contentTarget = document.querySelector('.rides')

const addRideTicket = () => {
   return `<li class= "person rider">
    </li>`
}

export const ticketSales = () => {
    const sales = addRideTicket()

    let html = "<ul>"

    const listItems = sales.map(addRideTicket)

    html += listItems.join("")
    html += "</ul>"

    return html 
}