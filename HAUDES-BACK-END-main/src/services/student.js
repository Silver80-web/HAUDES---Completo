const db = require("../db");

const getAllEmailsService = async () => {
    return await db.query("SELECT CUENTA_GOOGLE FROM alumnos");
};

const getAllControlNumbersService = async () => {
    return await db.query("SELECT NO_CONTROL FROM alumnos");
};

const getAllClassesService = async () => {
    return await db.query("SELECT GRUPO_ACTUAL FROM alumnos");
};

const getAllFullNamesService = async () => {
    return await db.query("SELECT NOMBRE, PATERNO, MATERNO FROM alumnos");
};

const addStudentService = ({ CARRERA, TURNO, SEMESTRE, GRUPO_ACTUAL, NO_CONTROL, NOMBRE, PATERNO, MATERNO, CURP, SEXO, FECHA_NAC, CUENTA_GOOGLE }) => {
    return db.query("INSERT INTO alumnos (CARRERA, TURNO, SEMESTRE, GRUPO_ACTUAL, NO_CONTROL, NOMBRE, PATERNO, MATERNO, CURP, SEXO, FECHA_NAC, CUENTA_GOOGLE) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
        [CARRERA, TURNO, SEMESTRE, GRUPO_ACTUAL, NO_CONTROL, NOMBRE, PATERNO, MATERNO, CURP, SEXO, FECHA_NAC, CUENTA_GOOGLE]);
}

module.exports = { addStudentService, getAllEmailsService, getAllControlNumbersService, getAllClassesService, getAllFullNamesService };