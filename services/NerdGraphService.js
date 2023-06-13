import axios from "axios";

const headers = () => {
    return {
        "API-Key": process.env.NEW_RELIC_API_KEY,
        "Content-Type": "application/json",
        Accept: 'application/json',
        'Accept-Charset': 'utf-8',
        "Access-Control-Allow-Origin": "http://localhost:3000/",
        "Access-Control-Allow-Methods": "POST",
        "charset": "UTF-8",
    };
}

const runNRQL = async (nrql) => {

    var graphql_query = {
    query: `
        {
            actor {
              nrql(query: "${nrql}", accounts: 3914962) {
                results
                totalResult
              }
            }
          }`,
        variables: {}
    }

    let resp = await axios.post('https://api.newrelic.com/graphql', graphql_query, {
        headers: headers()
    });

    console.log(resp.data.data.actor.nrql.results);

    return '';
}

const getAccounts = async () => {

    var graphql = { query: "{\n  actor {\n    accounts {\n      id\n      name\n    }\n  }\n}", variables: null };

    axios({
        url: 'https://api.newrelic.com/graphql',
        method: 'post',
        headers: headers(),
        data: graphql
    }).then((result) => {
        console.log(JSON.stringify(result.data))
    });

    // axios.post('https://one.newrelic.com/graphql', graphql, {
    //     headers: {
    //         "Content-Type": "application/json",
    //         "API-Key": "NRAK-GCI9V3ZCONKUJQ02YM383D9J5DE"
    //     }
    // })
    //     .then(function (response) {
    //         console.log('111', response);
    //     })
    //     .catch(function (error) {
    //         console.log('222', error);
    //     });

    return '';
}






export default { runNRQL, getAccounts };