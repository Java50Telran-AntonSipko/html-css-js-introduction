
export class Tabs {
    #addButtonElement
    #showEmpButtonElement
    constructor(parentId) {
        const parentElement = document.getElementById(parentId)
        const sectionElements = document.querySelectorAll("section")
        const formElement = document.getElementById("form-section")
        const tableElement = document.getElementById("table-section")
        hideItems(sectionElements);
        parentElement.innerHTML = `<button id="add-employee">Add Employee</button>
        <button id="show-employees">Show Employees</button>`
        this.#addButtonElement = document.getElementById("add-employee")
        this.#showEmpButtonElement = document.getElementById("show-employees")
        this.#addButtonElement.addEventListener("click", () => this.showForm(formElement, tableElement))
        this.#showEmpButtonElement.addEventListener("click", () => this.showTable(formElement, tableElement))
    }
    showForm(formElement, tableElement) {
        if (tableElement.style.visibility == "visible") {
            tableElement.style.visibility = "hidden"
            this.#showEmpButtonElement.style.backgroundColor = "white"
        }
        if (formElement.style.visibility == "hidden") {
            this.#addButtonElement.style.backgroundColor = "cyan"
            formElement.style.visibility = "visible"
        }


    }
    showTable(formElement, tableElement) {
        if (formElement.style.visibility == "visible") {
            formElement.style.visibility = "hidden"
            this.#addButtonElement.style.backgroundColor = "white"
        }
        if (tableElement.style.visibility == "hidden") {
            this.#showEmpButtonElement.style.backgroundColor = "cyan"
            tableElement.style.visibility = "visible"
        }


    }



}
function hideItems(sectionElements) {
    const sectionData = Array.from(sectionElements).map(element => {
        return element.style.visibility = "hidden"
    })
    return sectionData.join("");


}


