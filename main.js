const dob = new Date(2005, 4, 7);
//Age calculation + insertion
let diff = new Date(Date.now() - dob.getTime());
let age = Math.abs(diff.getUTCFullYear() - 1970);

document.getElementById("age").innerText = age + ", ";
