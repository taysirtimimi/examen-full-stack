
const API_URLS = [
  "https://examen-full-stack-backend.vercel.app",
  "https://examen-full-stack-ecru.vercel.app"
];

async function testerBackend() {
  for (const url of API_URLS) {
    try {
      const response = await fetch(`${url}/api/health`);

      if (!response.ok) {
        continue;
      }

      const data = await response.json();

      if (data.status === "ok" && data.service === "mern-api") {
        console.log("Backend connecté :", url);
        console.log(data);
        return;
      }
    } catch (error) {
      console.log("URL non fonctionnelle :", url);
    }
  }

  console.error("Aucun backend disponible.");
}

testerBackend();
