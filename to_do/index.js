class ToDo {
    constructor(name, date, hour, urgent){
        this.name = name;
        this.date = date;
        this.hour = hour;
        this.urgent = urgent;

    }

    getName = () => {
        return this.name;
    }
    changeName = (newName) => {
        this.name = newName;
    }
    getDate = () => {
        return this.date;
    }
    getDay = () => {
        const [day, month, hour]= this.date.split("/");
        return day;
    }
    getMonth = () => {
        const [day, month, hour]= this.date.split("/");
        return month;
    }
    getYear = () => {
        const [day, month, hour]= this.date.split("/");
        return hour;
    }
    changeDate = (day, month, year) => {
        this.date = `${day}/${month}/${year}`;
    }
    
    getHour = () => {
        return this.hour;
    }
    getUrgent = () => {
        return this.urgent;
    }
    changeUrgent = () => {
        this.urgent = !this.urgent;
    }
}




class ToDoDate extends ToDo{
    constructor(place){
        super();
        this.place = place;
    }

}
function guardarColor(){
    localStorage.setItem('color', JSON.stringify(color));

}
function guardarToDo(){
    localStorage.setItem('to_do', JSON.stringify(noleido));
}

        // Function to set color palette
    // Function to set color palette

document.addEventListener("DOMContentLoaded", () => {
    const paletaNeutra = document.querySelector(".default");
    const paletaFem = document.querySelector(".femenino");
    const paletaMasc = document.querySelector(".masculino");
    const root = document.documentElement;

    function setColorPalette(color) {
        for (let i = 0; i < 6; i++) {
            root.style.setProperty(`--usando${i}`, getComputedStyle(root).getPropertyValue(`--paleta-${color}${i}`));
        }
        localStorage.setItem('color', color); // Update local storage
    }


//--------------------------------------------------Cargar el local storage-----------------------------------------*/
    let color;
    if (localStorage.getItem('color')) {
        color = localStorage.getItem('color');
        setColorPalette(color);
    }

    else{
        color = "n"; // Default color
    }



    // ----------------------------------------Event listeners for palette buttons------------------------------------//
    paletaNeutra.addEventListener("click", () => {
        setColorPalette("n");
    });

    paletaFem.addEventListener("click", () => {
        setColorPalette("fem");
    });

    paletaMasc.addEventListener("click", () => {
        setColorPalette("masc");
    });

    // Set color palette on page load
    setColorPalette(color);

});