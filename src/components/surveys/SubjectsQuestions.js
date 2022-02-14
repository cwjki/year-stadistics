const SubjectsQuestions = {
 "id": "4",
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
      "Lógica"
     ],
     "isAllRowRequired": true
    }
   ]
  }
 ]
}

export default SubjectsQuestions
