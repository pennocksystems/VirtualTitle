VirtualTitle is an interactive assistant designed to streamline title-related inquiries. It features a conversational AI interface ("Title Tom") capable of handling multi-language support, internal record checks, and state-specific logic.

🔗 Project Links
Live Demo (Render): https://virtualtitle.onrender.com

Production Deployment (GCP): https://virtual-title-388261781366.us-central1.run.app/

🛠 Tech Stack
Backend: Node.js (Express)

Frontend: HTML5, CSS3, JavaScript (Vanilla)

AI/LLM: OpenAI API / Gemini

Hosting: Render (Demo) & Google Cloud Run (Production)

📁 Project Structure & Key Files
/public (The Frontend)
index.html: The entry point. Contains the core structure and UI layout.

script.js: The "Brain." Handles message rendering, API calls, animations, and language switching.

style.css: All visual styling and typing animations.

/states: Contains individual state-specific logic files.

/icons: Assets for the UI. Note: When adding new images to GitHub, ensure the file path is flat (e.g., titleagent.png) to ensure proper rendering.

/data (The Mock Backend)
client_data.csv: Contains mock internal client data.

⚠️ CRITICAL: Do not rearrange or rename headers in this file. The parser in db.js is position-dependent.

db.js: The parser logic for the CSV data. Includes a built-in debugger accessible via browser 'Inspect' mode.

Server & Configuration
server.js: The Node.js entry point. Starts the server and routes traffic.

.env: Stores sensitive keys (OpenAI API Key). This file is git-ignored and must be created manually on new local environments.

render.yaml: Configuration for the Render hosting environment.

🚀 Development & Deployment Workflow
The project follows a linear deployment path: VS Code ➡️ GitHub ➡️ Render ➡️ Cloud Console

1. Local Development
Clone the repository.

Run npm install to install dependencies (housed in node_modules).

Create a .env file in the root and add the necessary API keys.

Run node server.js to start the local server.

2. Pushing Updates
Changes are not automatic. You must manually push from VS Code to GitHub:

Bash
git add .
git commit -m "Description of changes"
git push origin main
3. Deployment
Render: Automatically deploys whenever the GitHub main branch is updated.

Google Cloud: Project Owner can manage production scaling and infrastructure via the GCP Console.

⚠️ Important Notes
State Logic: When using Gemini to generate new state files, always verify the DMV/RMV reference links manually, as AI-generated links may be hallucinated.

Security: Never commit the .env file. Ensure all API keys are managed via the GCP Secret Manager or Render Environment Variables.

Image Deployment: GitHub occasionally adds sub-folders to image paths during manual uploads. If an image breaks, check that the path in GitHub matches the reference in the code exactly.
