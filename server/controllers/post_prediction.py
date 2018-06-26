import pandas as pd
import os
import sys

from flask import request

from utils import load_model, get_knn_records, get_data

pd.set_option('display.max_columns', 500)

def predict():

	try:
		test_json = request.get_json()
		test = pd.DataFrame.from_records([test_json])
		print(test_json)

	except Exception as e:
		raise e

	if test.empty:
		# return(bad_request())
		pass
	else:
		# LOAD A MODEL
		model = load_model('data/knn_regressor.pkl')
		df = pd.read_csv('data/house_data.csv')

		prediction = model.predict(test)
		print(prediction)

		# Get kneighbors ids
		ids = get_knn_records(model, test, 5)

		# Get kNN records
		data = get_data(df, ids)
		print(data)

		response = data.to_json(orient="records")
		print(response)

		return response