from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
import requests  # Import the requests module
from agent import agent  # Import the Rasa agent instance

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

RASA_URL = "http://localhost:5005/webhooks/rest/webhook"

@app.route("/chat", methods=["POST"])
def chat():
    user_message = request.json.get("message")
    response = agent.handle_text(user_message)
    print("Response from Rasa server:", response)  # Debugging statement
    return jsonify(response)


@app.route("/", defaults={"path": ""})
@app.route("/<path:path>")
def index(path):
    return send_from_directory('Z:\reactjs\JobMage\jobmage\frontend\src\pages\ChatBot', 'ChatBot.jsx')


if __name__ == "__main__":
    app.run(port=5000)
