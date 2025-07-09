async function generatePoem() {
  const theme = document.getElementById("theme").value;
  const poemResult = document.getElementById("poemResult");

  poemResult.textContent = "Generating...";

  const response = await fetch("https://api.openai.com/v1/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer YOUR_OPENAI_API_KEY" // Replace with your actual key
    },
    body: JSON.stringify({
      model: "text-davinci-003",
      prompt: `Write a short 4-line poem about "${theme}"`,
      max_tokens: 50,
      temperature: 0.7
    })
  });

  const data = await response.json();
  poemResult.textContent = data.choices[0].text.trim();
}
