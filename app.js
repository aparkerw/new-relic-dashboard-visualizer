import NRQLService from "./services/NRQLService";

let NRQL = NRQLService.getNRQL({limit: 100});

console.log(NRQL);