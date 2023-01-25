export function get(path) {
  return fetch(path, {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzY2NmZmQ2MjAzZGIxZjA1M2VhYmIyYWFkMWU5ZDkxOCIsInN1YiI6IjYzOTRkY2RhNmU5MzhhMDA5ZjVhOGEzZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ah22s3N18Eu105s-1YtG0VO_Dar4UW55jGrPrDt_hPs",
      "Content-Type": "application/json;charset=utf-8",
    },
  }).then((result) => result.json());
}
