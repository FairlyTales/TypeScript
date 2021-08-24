// ! intersection types
// they serve to combine types and are somewhat similar to extender interfaces

type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

// EmployeePlus is an intersection type
type EmployeePlus = Admin & Employee;

// intersection type can be build out of any type, for example:
type Combined = string | number;
type Numeric = number | boolean;

type Universal = Combined & Numeric;

// ! IMPORTANT !
// ! intersection types and union types are different!
// ! 
// ! intersection type COMBINES multiple types into one
// ! 
// ! union type describes a value which can be ONE of several types