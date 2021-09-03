// the current date can be obtained by calling new Date()
const currentDate = new Date(); 
console.log("time now: \n" + currentDate + "\n");


// you can pass the Date method a string to create
// a specific date for a specific time: present, future , or past
const futureDate = new Date("2030-10-10");
console.log("future date:" + "\n" + futureDate+ "\n");


// you can make the date you pass into the Date function longer by adding time of day in a 24 hour format
const futureDetailedDate = new Date("2030-10-10T09:00:00");
console.log("future date with specific time:" + "\n" +futureDetailedDate);

/*
In PostgreSQL, TIMESTAMP WITH TIME ZONE corresponds to a date / time object in JavaScript .
You can take a Date( ) object in JavaScript (as in const currentDate = new Date( ) ),
which will give you and directly deposit that value into a PostgreSQL database.
*/