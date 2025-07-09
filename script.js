async function generateImage() {
  const prompt = document.getElementById("imagePrompt").value;
  const imageResult = document.getElementById("imageResult");

  if (!prompt) {
    imageResult.innerHTML = "Please enter a prompt.";
    return;
  }

  imageResult.innerHTML = "Generating image...";

  try {
    const response = await fetch("https://api.openai.com/v1/images/generations", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer YOUR_OPENAI_API_KEY" // Replace with your actual API key
      },
      body: JSON.stringify({
        prompt: prompt,
        n: 1,
        size: "512x512"
      })
    });

    const data = await response.json();

    if (data.data && data.data[0].url) {
      const imageUrl = data.data[0].url;
      imageResult.innerHTML = `<img src="${imageUrl}" alt="Generated Image">`;
    } else {
      imageResult.innerHTML = "Failed to generate image.";
    }
  } catch (error) {
    imageResult.innerHTML = "Error: " + error.message;
  }
}
