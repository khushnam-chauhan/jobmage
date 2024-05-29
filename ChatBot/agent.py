from rasa.core.agent import Agent

# Path to your Rasa model directory
model_path = r"Z:\reactjs\JobMage\jobmage\ChatBot\models\20240529-144050-novel-crocodile.tar.gz"

# Initialize Rasa agent
print("Model path:", model_path)
agent = Agent.load(model_path)

