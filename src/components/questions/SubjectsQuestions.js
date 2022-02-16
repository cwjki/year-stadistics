const SubjectsQuestions = {
 "locale": "es",
 "title": "Sobre las asignaturas cursadas",
 "pages": [
  {
   "name": "SubjectsSurvey",
   "elements": [
    {
     "type": "matrix",
     "name": "subjects",
     "title": "¿Qué sentimientos te causaron las siguientes asignaturas?  ",
     "isRequired": true,
     "columns": [
      "Me gustó",
      "Meh...",
      "No me gustó"
     ],
     "rows": [
      "Álgebra ",
      "Análisis Matemático",
      "Programación",
      "Filosofía",
      "Lógica",
      "Programación de Máquinas",
      "Sistemas Operativos",
      "Arquitectura de Computadoras",
      "Estructuras de Datos y Algoritmos",
      "Matemática Discreta",
      "Diseño y Análisis de Algoritmos",
      "Ingenería de Software",
      "Ecuaciones Diferenciales Ordinarias",
      "Base de Datos",
      "Redes de Computadoras",
      "Modelos de Optimización",
      "Lenguajes de Programación",
      "Probabilidades",
      "Estadística",
      "Sistemas Distribuidos",
      "Compilación",
     ],
     "isAllRowRequired": true
    }
   ]
  }
 ]
}

export default SubjectsQuestions
