// Student Management
const students = [];

function addStudent(student) {
    students.push(student);
}

function getStudent(id) {
    return students.find(student => student.id === id);
}

function updateStudent(id, updatedInfo) {
    const index = students.findIndex(student => student.id === id);
    if (index !== -1) {
        students[index] = { ...students[index], ...updatedInfo };
    }
}

function deleteStudent(id) {
    const index = students.findIndex(student => student.id === id);
    if (index !== -1) {
        students.splice(index, 1);
    }
}

// Teacher Management
const teachers = [];

function addTeacher(teacher) {
    teachers.push(teacher);
}

function getTeacher(id) {
    return teachers.find(teacher => teacher.id === id);
}

function updateTeacher(id, updatedInfo) {
    const index = teachers.findIndex(teacher => teacher.id === id);
    if (index !== -1) {
        teachers[index] = { ...teachers[index], ...updatedInfo };
    }
}

function deleteTeacher(id) {
    const index = teachers.findIndex(teacher => teacher.id === id);
    if (index !== -1) {
        teachers.splice(index, 1);
    }
}

// Class Management
const classes = [];

function addClass(classObj) {
    classes.push(classObj);
}

function getClass(id) {
    return classes.find(classObj => classObj.id === id);
}

function updateClass(id, updatedInfo) {
    const index = classes.findIndex(classObj => classObj.id === id);
    if (index !== -1) {
        classes[index] = { ...classes[index], ...updatedInfo };
    }
}

function deleteClass(id) {
    const index = classes.findIndex(classObj => classObj.id === id);
    if (index !== -1) {
        classes.splice(index, 1);
    }
}

// Grade Management
const grades = [];

function addGrade(grade) {
    grades.push(grade);
}

function getGrade(id) {
    return grades.find(grade => grade.id === id);
}

function updateGrade(id, updatedInfo) {
    const index = grades.findIndex(grade => grade.id === id);
    if (index !== -1) {
        grades[index] = { ...grades[index], ...updatedInfo };
    }
}

function deleteGrade(id) {
    const index = grades.findIndex(grade => grade.id === id);
    if (index !== -1) {
        grades.splice(index, 1);
    }
}