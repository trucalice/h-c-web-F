function filterEmail (email) {
    if (!Array.isArray(email)) {
        console.log("Invalid Array");
        return;
    }
    if (email.length === 0) {
        console.log("Array is empty");
        return;
    }
    let filtered = email.filter(email => email.includes("@") && !email.includes(" "));
    if (filtered.length === 0) {
        console.log("Invalid Array");
    } else {
        console.log(filtered);
    }
}
let email1 = ["john.doe@gmail.com", "invalidemail.com", "hello@domain.net", "space @out.com"];
let email2 = [];
let email3 = ["abc"];

filterEmail(email1);
filterEmail(email2);    
filterEmail(email3);