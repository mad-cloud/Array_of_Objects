//Q1.
let studentRecords = [{name:"John",id:123,marks:98},
    {name:"Baba",id:101,marks:23},
    {name:"yaga",id:200,marks:45},
    {name:"Wick",id:115,marks:75}
];

let namearr = studentRecords.map(val => val.name.toUpperCase());
console.log(namearr);


//Q2.

let detarr = studentRecords.filter(val => val.marks > 50);
console.log(detarr);

//Q3.
let detarr1 = studentRecords.filter(val =>val.marks > 50 && val.id > 120);
console.log(detarr1);

//Q4.

let sumarr = studentRecords.reduce((accu, curr) => accu + curr.marks,0);
console.log(sumarr);

//Q5.
let namearr1 = studentRecords.filter(val => val.marks > 50);
let namedet=namearr1.map(val => val.name);
console.log(namedet);

//Q6.
let detid = studentRecords.filter(val => val.id > 120);
let detsum = detid.reduce((accu, curr) => accu + curr.marks,0);
console.log(detsum);

//Q7.
let arr7 = studentRecords.filter(x => x.marks < 50);
let arr8=arr7.map(x=>x.marks+15)
let arr9=arr8.filter(x=>x.marks>50)
console.log(arr9);


//Q8.

let student1 = {
    name : "Dev",
    class : 4,
    roll_no : 203
}

let student2 = {
    name : "Neha",
    class : 4,
    roll_no : 202
}
let student3 = {
    name : "Sharayu",
    class : 4,
    roll_no : 205
}

let student4 = {
    name : "Bhushan",
    class : 4,
    roll_no : 208
}
let student5 = {
    name : "Shravani",
    class : 4,
    roll_no : 209
}

let student6 = {
    name : "Ankush",
    class : 4,
    roll_no : 210
}
let studentarr =[{...student1},{...student2},{...student3},{...student4},{...student5},{...student6}];
console.log(studentarr);
