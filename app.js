import dotenv from 'dotenv';
dotenv.config();
import NRQLService from "./services/NRQLService.js";
import NerdGraphService from "./services/NerdGraphService.js";

console.log(process.env);
const run = async () => {
    let nrql = NRQLService.getNRQLTimeSeries({limit: 100});
    console.log(nrql);
    let accounts = await NerdGraphService.getAccounts();
    let results = await NerdGraphService.runNRQL(nrql);
    console.log("results", results);
}

run();