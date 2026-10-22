
const API_URL = "https://examen-full-stack-ecru.vercel.app";

fetch(`${API_URL}/api/health`)
  .then(response => {
    if (!response.ok) {
      throw new Error("Erreur HTTP : " + response.status);
    }
    return response.json();
  })
  .then(data => {
    console.log("Backend connecté :", data);
  })
  .catch(error => {
    console.error("Erreur de connexion :", error);
  });
