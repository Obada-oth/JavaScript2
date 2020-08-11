/**
 
 ** Exercise 2: What 's your Monday worth? **
 
 Write a function that finds out what your hourly rate on a Monday would be
 Use the map array function to take out the duration time for each task.
 Avoid using for loop or forEach.
 Multiply each duration by a per - hour rate for billing and sum it all up.
 Output a formatted Euro amount, rounded to Euro cents, e.g: €11.34.
 Make sure the function can be used on any array of objects that contain a duration property with a number value

 */

function dayWorth(tasks, hourlyRate) {
  // put your code in here, the function does returns a euro formatted string
  // convert minutes spent on each task to hours , and put the values in a new array
  let taskDurationHrs = tasks.map((task) => task.duration / 60);
  //caculate what each task is worth based on the specified hourly rate and put the values in a new array
  let taskWorth = taskDurationHrs.map((taskDurationHrs) => taskDurationHrs * hourlyRate);
  //set the format for EUR and the country and language to (Dutch-Netherlands)
  let formatter = new Intl.NumberFormat('nl-NL', {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 2,
  });
  //sums up the  tasks worth and returns that in a EUR formatted string for any array of objects which has a 'duration' property
  return formatter.format(taskWorth.reduce((total, taskPay) => total + taskPay, 0));
}

const mondayTasks = [
  {
    name: 'Daily standup',
    duration: 30, // specified in minutes
  },
  {
    name: 'Feature discussion',
    duration: 120,
  },
  {
    name: 'Development time',
    duration: 240,
  },
  {
    name: 'Talk to different members from the product team',
    duration: 60,
  },
];

console.log(dayWorth(mondayTasks, 25)); //€187.50
console.log(dayWorth(mondayTasks, 13.37)); //€100.28
