import axios from "axios";

const run = async (graphQL) => {

    const resp = await axios.post("https://postman-echo.com/post", graphQL);

    return resp;

}

export default { run };