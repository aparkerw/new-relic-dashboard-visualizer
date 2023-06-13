import NRQLService from "./services/NRQLService.js";
import NerdGraphService from "./services/NerdGraphService.js";

const run = async () => {
    let NRQL = NRQLService.getNRQL({limit: 100});
    let results = await NerdGraphService.run(NRQL);
    console.log("results", results);
}

run();