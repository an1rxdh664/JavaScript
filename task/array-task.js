// 1 - 10
// let arr = new Array(5);
// let arr = [];

// let nums = [1,2,3,4,5];
// let numCopy = nums;
// console.log(numCopy === nums);

// let nums = [] + [];
// console.log(nums, typeof nums, nums.length);

// converts an array into a string
// let num1 = ['A', 'n', 'i'];
// let str = num1.join('');
// console.log(str);

// employee array
const employees = [
  { id: 1, name: "Alice", departmentId: 1, salary: 5000 },
  { id: 2, name: "Bob", departmentId: 2, salary: 7000 },
  { id: 3, name: "Charlie", departmentId: 3, salary: 4500 },
  { id: 4, name: "Diana", departmentId: 1, salary: 5500 },
  { id: 5, name: "Edward", departmentId: 2, salary: 8000 },
  { id: 6, name: "Fiona", departmentId: 4, salary: 6000 },
  { id: 7, name: "George", departmentId: 3, salary: 5200 },
  { id: 8, name: "Helen", departmentId: 4, salary: 7200 },
  { id: 9, name: "Ian", departmentId: 2, salary: 4800 },
  { id: 10, name: "Jane", departmentId: 1, salary: 5100 },
];

//department array
const departments = [
  { id: 1, name: "HR" },
  { id: 2, name: "Engineering" },
  { id: 3, name: "Marketing" },
  { id: 4, name: "Sales" },
];

const names = employees.filter((employee) => {
    return employee.departmentId === 2;
}) // filters out the employee working in the engineering department
// console.log(names);

const nameAndDep = employees.map((employee) => {
    let depart = '';
    for(let i of departments){
        if(i.id === employee.departmentId) depart = i.name 
    }    
    return `${employee.name} (${depart})`;
})
// console.log(nameAndDep);


// to find the highest salary
let highstSalary;
for(let i of employees){
    let max = 0;
    if(i.salary > max) max = i.salary;
    highstSalary = i;
}
// console.log(highstSalary);

// Shuffle the array
let nums = [2,5,1,3,4,7];
let n = 3;
let arr1 = [], arr2 = [];
for(let i=0;i<n;i++){
  arr1.push(nums[i]);
}
for(let i=n;i<nums.length;i++){
  arr2.push(nums[i]);
}