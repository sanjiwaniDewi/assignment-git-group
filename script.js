const data = [
    {
        nama: "coco",
        age: 18,
    },
    {
        nama: "cucu",
        age: 19,
    },
    {
        nama: "caca",
        age: 18,
    },
    {
        nama: "cici",
        age: 20,
    },
];

let dataPerson = document.getElementById("personalData");
for (const iterator of data) {
    const container = document.createElement("div");
    container.style.margin = "10px";
    container.style.padding = "50px";
    const name = document.createElement("h4");
    const age = document.createElement("p");
    name.appendChild(document.createTextNode(iterator["nama"]));
    age.appendChild(document.createTextNode(iterator["age"]));
    container.appendChild(name);
    container.appendChild(age);
    dataPerson.appendChild(container);
}
