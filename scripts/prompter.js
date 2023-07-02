// OPD-1A
// const salesCount = departments.sales.numberOfEmployees;
// console.log("De afdeling Sales heeft " + [salesCount] + " medewerkers")
//
// OPD-1B
// const marketingDescription = departments.marketing.description;
// console.log("Marketing is een leuke afdeling om te werken. " + [marketingDescription] + ".")
//
// OPD-1C
// const csCount = departments["customer-service"].numberOfEmployees;
// console.log("De afdeling Customer Service heeft " + [csCount] + " medewerkers")
//
// OPD-1D
// const funcDescSales = departments.sales.jobs[1].description;
// console.log("Sales is een uitdagende afdeling om te werken als Verkoopmanager. " + [funcDescSales]);
//
// OPD-2A-B-C
const departmentInfo = prompt(`Over welke afdeling wil je meer informatie? Kies uit: [marketing / sales / customer-service]`);
switch (departmentInfo) {
    case "marketing":
    case "sales":
    case "customer-service":
        // console.log("Je koos " + [departmentInfo] + ". " + departments[departmentInfo].description);
        break;
    default:
        // console.error("This is not a valid department! Refresh your page and try again.");
        document.getElementById("error-message").textContent = 'This is not a valid department! Refresh your page and try again.!';
}
// OPD-3A-B-C
// const functionInfo = prompt("Je koos " + [departmentInfo] + ". Over welke functie wil je meer weten? Voer een getal tussen 0 en 3 in." +
//     "\n 0: " + departments.marketing.jobs[0].title + "," +
//     "\n 1: " + departments.marketing.jobs[1].title + "," +
//     "\n 2: " + departments.marketing.jobs[2].title + "," +
//     "\n 3: " + departments.marketing.jobs[3].title);
//
// switch (functionInfo) {
//     case "0":
//         console.log("Je koos " + departments.marketing.jobs[0].title + ". Een uitdagende rol! " + departments.marketing.jobs[0].description);
//         break;
//     case "1":
//         console.log("Je koos " + departments.marketing.jobs[1].title + ". Een uitdagende rol! " + departments.marketing.jobs[1].description);
//         break;
//     case "2":
//         console.log("Je koos " + departments.marketing.jobs[2].title + ". Een uitdagende rol! " + departments.marketing.jobs[2].description);
//         break;
//     case "3":
//         console.log("Je koos " + departments.marketing.jobs[3].title + ". Een uitdagende rol! " + departments.marketing.jobs[3].description);
//         break;
//     default:
//         console.error("This is not a valid function! Refresh your page and try again.");
// }

// OPD-4A
// console.log([departmentInfo] + " is een leuke afdeling om te werken. Er werken op dit moment " + departments[departmentInfo].numberOfEmployees + " medewerkers.");

//OPD-4B-C
// const functionInfo = prompt("Je koos " + [departmentInfo] + ". Over welke functie wil je meer weten? Voer een getal tussen 0 en 3 in." +
const functionInfo = prompt(`Je koos ${departmentInfo}. Over welke functie wil je meer weten? Voer een getal tussen 0 en 3 in.` +
    "\n 0: " + departments[departmentInfo].jobs[0].title + "," +
    "\n 1: " + departments[departmentInfo].jobs[1].title + "," +
    "\n 2: " + departments[departmentInfo].jobs[2].title + "," +
    "\n 3: " + departments[departmentInfo].jobs[3].title);

switch (functionInfo) {
    case "0":
    case "1":
    case "2":
    case "3":
        // console.log("Je koos " + departments[departmentInfo].jobs[functionInfo].title + ". Een uitdagende rol! " + departments[departmentInfo].jobs[functionInfo].description);
        document.getElementById("role-title").textContent = departments[departmentInfo].jobs[functionInfo].title;
        document.getElementById("department-description").textContent = departments[departmentInfo].description;
        document.getElementById("role-description").textContent = departments[departmentInfo].jobs[functionInfo].description;
        break;
    default:
        // console.error("This is not a valid function! Refresh your page and try again.");
        document.getElementById("error-message").textContent = 'This is not a valid choice! Refresh your page and try again.';
}

// OPD-5A
// document.getElementById("name").textContent = "Patrick van Tessel";
// document.getElementById("error-message").textContent = 'Sushi!';

// OPD-5B
// Zie in bovenstaande code de regels met document statements er in

// OPD-5C
// Zie in bovenstaande code de regel met backticks en ${} er in


