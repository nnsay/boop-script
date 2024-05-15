/**
  {
    "api":1,
    "name":"Now Timestamp",
    "description":"Get now timestamp",
    "author":"Jimmy Wang",
    "icon":"watch",
    "tags":"date"
  }
**/

function main(state) {
  state.fullText = Date.now();
}
