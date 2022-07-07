const Employee = require("../lib/employee");

test("Can create an new employee.", () => {
  const employeeInstance = new Employee();
  expect(typeof employeeInstance).toBe("object");
});

test("Testing name.", () => {
  const name = "Andrew";
  const employeeInstance = new Employee(name);
  expect(employeeInstance.name).toBe(name);
});

test("Testing ID.", () => {
  const id = 2;
  const employeeInstance = new Employee("Andrew", id);
  expect(employeeInstance.id).toBe(id);
});

test("Testing email.", () => {
  const email = "towers.a@gmail.com";
  const employeeInstance = new Employee("Andrew", 2, email);
  expect(employeeInstance.email).toBe(email);
});

test("Gets name through getName method.", () => {
  const testName = "Andrew";
  const employeeInstance = new Employee(testName);
  expect(employeeInstance.getName()).toBe(testName);
});

test("Can test ID through getID method.", () => {
  const testID = 2;
  const employeeInstance = new Employee("Andrew", testID);
  expect(employeeInstance.getId()).toBe(testID);
});

test("Can test email through getEmail method.", () => {
  const testEmail = "towers.a@gmail.com";
  const employeeInstance = new Employee("Andrew", 2, testEmail);
  expect(employeeInstance.getEmail()).toBe(testEmail);
});

test("Testing role.", () => {
  const returnValue = "Employee";
  const employeeInstance = new Employee("Andrew", 2, "towers.a@gmail.com");
  expect(employeeInstance.getRole()).toBe(returnValue);
});
