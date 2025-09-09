function main() {
  fetch("http://127.0.0.1:3000/") //local host link with the port number
    .then(async (res) => {
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const json = await res.json();

      console.log("total kidneys:", json.numberofkidneys);
      console.log("healthy kidneys:", json.numberofhealthykidneys);
      console.log("unhealthy kidneys:", json.numberofunhealthykidneys);
    })
    .catch((err) => {
      console.error("request failed:", err.message);
    });
} 

main();
