import pandas as pd

from flask import Flask, request
from flask_cors import CORS

from controllers.post_prediction import predict


app = Flask(__name__)
CORS(app)



@app.route('/predict', methods=['POST'])
def post_prediction():
	return predict()

if __name__ == "__main__":
	app.run(host= '0.0.0.0')