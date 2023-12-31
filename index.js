const users = [
    { name: "John", age: 25, occupation: "gardener" },
    { name: "Lenny", age: 51, occupation: "programmer" },
    { name: "Andrew", age: 43, occupation: "teacher" },
    { name: "Peter", age: 81, occupation: "teacher" },
    { name: "Anna", age: 43, occupation: "teacher" },
    { name: "Albert", age: 76, occupation: "programmer" },
    { name: "Adam", age: 47, occupation: "teacher" },
    { name: "Robert", age: 72, occupation: "driver" },
];

function main() {
    const root = document.querySelector('#root')
    const h1 = document.createElement("h1")
    h1.innerHTML = "FREELANCERS"
    root.append(h1)

    const ul = document.createElement('ul')
    const userList = users.map(user => `
        <li>${user.name}, ${user.age}, ${user.occupation}</li>
    `)
    ul.innerHTML = userList.join('')
    root.append(ul)
}

//call the main function
main();