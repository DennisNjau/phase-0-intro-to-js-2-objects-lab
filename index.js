const employee = {
    name:'Joseph',
    streetAddress:'kimathi street'
};

function updateEmployeeWithKeyAndValue(employee,key,value){
    return Object.assign({}, employee,{[key]: value});
}
function desructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(employee, key){
    const newObj = object.assign({},employee)
    delete newObj[key];
    return newObj;
}

function desructivelyDeleteEmployeeByKey(employee, key){
    delete employee[key];
    return employee;
}