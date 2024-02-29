from flask import Flask
from core_routes import core_routes
import os 
from dotenv import load_dotenv

app= Flask(__name__)

load_dotenv()
app.config["SECRET_KEY"]=os.environ["SECRET_KEY"]

app.register_blueprint(core_routes)

if __name__=="__main__":
  app.run(host="0.0.0.0",debug=True)
