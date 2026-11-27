question 1

let students = ["shubh", "rahul", "prince", "shipi", "krishna", "ankit", "om",
    "rajesh", "abhishek", "vihsal", "mantu", "nitin"]

let result = []

for (const student of students) {
    if (student.length < 6) {
        result.push("king and lucky");
    }
    else if (student.length < 5) {
        result.push("most lucky person in world")
    }
    else {
        result.push("average people")
    }

}

question 2
function doubleTrouble(arr) {
    for (let i = 0; i < arr.length; i++) {

        if (arr[i] === arr[i + 1]) {
            arr[i] = arr[i] * 2;
            i++;
        }
        else {
            arr[i] = arr[i] * 2;
        }

    }
    return arr;
}

console.log(doubleTrouble([2, 2, 3, 4, 4, 5]));

question 3

function string(str) {
    let mirror = str.split("").reverse().join("");
    return str + mirror
}

console.log(string("prince"));

question 4//

function checkpassword(password) {
    if (
        password.length > 8 &&
        /[A-Z]/.test(password) &&
        /[a-z]/.test(password) &&
        /[0-9]/.test(password)
    ) {

        return true;
    }
    else {
        return false;
    }
}

console.log(checkpassword("Rajkumar123"));
console.log(checkpassword("Raj123"));
if (localStorage.getItem("name")) {
    a = localStorage.getItem("name")
    document.write("welcome " + a);
}
else {
question 7//
    function savetolocalstorage(note) {
        localStorage.setItem("note", note);
    }
    let note = localStorage.getItem("note")
    document.write(note)
    document.querySelector("button").addEventListener("click", () => {
        let note = prompt("enter your name")
        savetolocalstorage(note)
        document.write(note)
    })






