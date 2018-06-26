import pandas as pd

from flask import Flask, request
from flask_cors import CORS

from controllers.post_prediction import predict
from controllers.post_district import district_stats


app = Flask(__name__)
CORS(app)



@app.route('/predict', methods=['POST'])
def post_prediction():
	return predict()

@app.route('/district', methods=['POST'])
def post_district():
	return district_stats()

if __name__ == "__main__":
	app.run(host= '0.0.0.0')