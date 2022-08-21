let employee = {name: 'kelvin', streetAddress: 'kikuyu'};

function updateEmployeeWithKeyAndValue(){
    let newEmployee = {...employee};
    newEmployee.name = 'Sam';
    newEmployee.streetAddress = "11 Broadway";
    return newEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(){
    employee.streetAddress = '12 Broadway';
    return employee;
}

function deleteFromEmployeeByKey(){
    let newEmployee = {employee};
    delete newEmployee.name;
    return newEmployee;

}

function destructivelyDeleteFromEmployeeByKey(){
    let newEmployee = delete employee.name;
    return employee;
}
