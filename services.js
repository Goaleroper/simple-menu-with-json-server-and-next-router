import axios from "axios";
axios.interceptors.response.use(null, (error) => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;
  if (!expectedError) {
    alert("An Error Occured");
  }
  alert("Something Went Wrong");
  return;
});
export async function getName() {
  let response = await axios.get("http://localhost:5000/name");
  return response.data;
}

export async function getList() {
  let response = await axios.get("http://localhost:5000/path");
  return response.data.sort((a, b) => a.priority - b.priority);
}
