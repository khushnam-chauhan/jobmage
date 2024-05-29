from rasa.core.agent import Agent

# Path to your Rasa model directory
model_path = "Z:\reactjs\JobMage\jobmage\ChatBot\ChatBot\models\20240529-140605-burning-sash.tar.gz"

# Initialize Rasa agent
agent = Agent.load(model_path)
