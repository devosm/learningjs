let user = {
    firstName: "Manu",
    lastName: "Devos",
    age: 26
}
let countries = ["Belgium", "France", "Netherlands", "Germany"]

console.log("Creator of this code is " + user.firstName + " " + user.lastName + " who is " + user.age + " years old.")

for(i = 0; i < countries.length; i ++){
    let listCountries = countries[i]
    console.log("- " + listCountries)
}