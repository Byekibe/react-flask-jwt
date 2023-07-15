from flask import Flask, request
from models import create_connection
from flask_cors import CORS
from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required
from flask_jwt_extended import JWTManager
from dotenv import load_dotenv
load_dotenv()
import os

MY_SECRET_KEY= os.getenv("MY_SECRET_KEY")
app = Flask(__name__)
CORS(app)

conn = create_connection()
cursor = conn.cursor()
print(cursor)

app.config["JWT_SECRET_KEY"] = MY_SECRET_KEY
jwt = JWTManager(app)

@app.route("/token", methods=["POST"])
def create_token():
    email = request.json.get("email")
    password = request.json.get("password")
    print(email, password)

    access_token = ""

    if email != "test@gmail.com" or password != "test":
        return { "msg": "Wrong credentials"}, 401
    else:
        access_token = create_access_token(identity=email)
    
    return { "access_token": access_token }

@app.route("/protected")
@jwt_required
def protected():
    return { "msg": "Protected route" }

if __name__=="__main__":
    app.run(port=7002, debug=True)