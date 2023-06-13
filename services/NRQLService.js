const getNRQL = ({ limit = 5 }) => {
    return `{
    actor {
      nrql(accounts: 1, query: "SELECT * FROM Transaction limit ${limit}") {
        nrql
        otherResult
        rawResponse
        totalResult
        results
      }
    }
  }`;
};

export default { getNRQL };
