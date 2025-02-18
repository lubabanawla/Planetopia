// Default system prompt placeholders
const defaultPlanetData = {
  planetName: "Teras",
  color: "#8B4513",
  appearance: "Saturn-like",
  ringDescription: "transparent",
};

// Retrieve URL parameters and use default values if not provided
const urlParams = new URLSearchParams(window.location.search);
const planetName = urlParams.get("planetName") || defaultPlanetData.planetName;
const color = urlParams.get("color") || defaultPlanetData.color;
const appearance = urlParams.get("appearance") || defaultPlanetData.appearance;
const ringDescription =
  urlParams.get("ringDescription") || defaultPlanetData.ringDescription;

// Initialize chat log with Asendi's introduction
document.addEventListener("DOMContentLoaded", async () => {
  const initialPrompt = `Welcome to the tour of ${planetName}! Please introduce yourself.`;
  const asendiResponse = await getAsendiResponse(initialPrompt);
  addMessageToChatLog(asendiResponse, "asendi");
});

// System prompt for Ollama model
const systemPrompt = `You are an alien tour guide by the name of Asendi. Your job is to guide the visitor through ${planetName}, who's color is of hex code ${color} and is a ${appearance} planet with a ${ringDescription} ring around it. Be as respectful as possible, and respond in a succinctly yet witty way, like an alien. Talk like an alien, act like an alien, and be an alien. Guide the visitor through the planet, and make sure they have a good time. When you perform an action, say it within brackets, like *[Asendi waves its tentacles.]*`;

// Function to add messages to chat log
function addMessageToChatLog(message, sender) {
  const chatLog = document.getElementById("chat-log");
  const messageDiv = document.createElement("div");
  messageDiv.classList.add(
    "message",
    sender === "user" ? "user-message" : "asendi-message"
  );

  // Parse markdown to HTML
  const parsedMessage = marked.parse(message);
  messageDiv.innerHTML = parsedMessage;

  chatLog.appendChild(messageDiv);

  // Auto scroll to the bottom
  chatLog.scrollTop = chatLog.scrollHeight;
}

// Asendi's response using the Ollama LLM
async function getAsendiResponse(userMessage) {
  try {
    const payload = {
      model: "deepseek/deepseek-r1:free",
      messages: [
        {
          role: "system",
          content: systemPrompt
        },
        {
          role: "user",
          content: userMessage
        }
      ],
      stream: false,
    };

    console.log("Sending payload:", payload);

    const response = await fetch("/api", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status} \n ${response.statusText}`);
    }

    const data = await response.json();
    console.log("Success:", data);

    // Check if response is structured correctly
    if (!data.choices || !data.choices[0] || !data.choices[0].message || !data.choices[0].message.content) {
      throw new Error("Response structure unexpected: Missing 'choices[0].message.content'");
    }

    return data.choices[0].message.content;
  } catch (error) {
    console.error("Fetch error:", error);
    return "Asendi is unable to connect to the server.";
  }
}


// Handle user input
document.getElementById("send-btn").addEventListener("click", async () => {
  const userInput = document.getElementById("user-input").value.trim();
  if (userInput) {
    addMessageToChatLog(userInput, "user");
    const asendiResponse = await getAsendiResponse(userInput);
    addMessageToChatLog(asendiResponse, "asendi");
    document.getElementById("user-input").value = "";
  }
});

document.getElementById("user-input").addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    document.getElementById("send-btn").click();
  }
});

function startVisit() {
  const planetName = document.getElementById('nameInput').value || defaultPlanetData.planetName;
  const color = document.getElementById('colorPicker').value || defaultPlanetData.color;
  const appearance = state.j === 0 ? 'cloudy' : state.j === 1 ? 'jupiter' : 'scales';
  const ringDescription = state.k === 0 ? 'onering' : state.k === 1 ? 'tworings' : state.k === 2 ? 'snowring' : 'snowring2';

  const url = `/visit?planetName=${encodeURIComponent(planetName)}&color=${encodeURIComponent(color)}&appearance=${encodeURIComponent(appearance)}&ringDescription=${encodeURIComponent(ringDescription)}`;
  window.location.href = url;
}