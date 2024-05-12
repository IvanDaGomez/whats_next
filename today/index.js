
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



//const Todo = new ToDo("wash dishes", "12/07/2006","1:22pm", false);

//console.log(Todo.getDate());



document.addEventListener("DOMContentLoaded",()=>{

    
    const paletaNeutra = document.querySelector(".default");
    const root = document.documentElement;
    paletaNeutra.addEventListener("click", () => {
        for (let i = 0; i < 6; i++) {
            root.style.setProperty(`--usando${i}`, getComputedStyle(root).getPropertyValue(`--paleta-n${i}`));
        }
    });

    const paletaFem = document.querySelector(".femenino");
    paletaFem.addEventListener("click", () => {
        for (let i = 0; i < 6; i++) {
            root.style.setProperty(`--usando${i}`, getComputedStyle(root).getPropertyValue(`--paleta-fem${i}`));
        }
    });

    const paletaMasc = document.querySelector(".masculino");
    paletaMasc.addEventListener("click", () => {
        for (let i = 0; i < 6; i++) {
            root.style.setProperty(`--usando${i}`, getComputedStyle(root).getPropertyValue(`--paleta-masc${i}`));
        }
    });

})