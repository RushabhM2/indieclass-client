/*
Comments:

We keep the API functions that interface with the server in this file

//TODO

*/

// import { DATABASE_URL } from './../env'

const BASE_URL = process.env.REACT_APP_DATABASE_URL // || DATABASE_URL

export const getTeacher = async (classId, teacher, setTeacher) => {
  return fetch(`${BASE_URL}/class/${classId}`)
    .then((res) => res.json())
    .then((teacher) =>
      setTeacher({
        firstname: teacher.firstname,
        lastname: teacher.lastname,
        bio: teacher.bio,
      })
    )
    .catch((err) => console.log(err));
};
