const contentTarget = document.querySelector(".rides")
// const eventHub = document.querySelector("#state-fair")
const divAdd = document.createElement('div')

export const addRideTicket = () => {
    // divAdd.appendChild(contentTarget)
    contentTarget.classList.add('person', 'rider')
}
// been trying appendChild but have not had it work yet. Going to keep trying down this path tomorrow. 