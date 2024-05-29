from flask import Flask, request, jsonify
from flask_cors import CORS
import requests

app = Flask(__name__)
CORS(app)

RASA_URL = "http://localhost:5005/webhooks/rest/webhook"

@app.route("/chat", methods=["POST"])
def chat():
    user_message = request.json.get("message")
    response = requests.post(RASA_URL, json={"message": user_message})
    return jsonify(response.json())

if __name__ == "__main__":
    app.run(port=5000)
