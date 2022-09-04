import axios from "axios"

const BASE_URL= "http://localhost:5000/api";
const TOKEN= "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMDhjZDAzODZlNGNiNTc5ODNhNjM1YiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2MjMwMzk2MywiZXhwIjoxNjYyNTYzMTYzfQ.mgXDQUOTmVaB4QvlnN33J9CC5Adty7FY26Z15lVrs50"
export const publicRequest = axios.create({
    baseURL: BASE_URL,
  });

export const userRequest=axios.create({
    baseURL: BASE_URL,
    header: {token: `Bearer ${TOKEN}`},
})