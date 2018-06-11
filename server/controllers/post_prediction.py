import pandas as pd
import os
import sys

from flask import request

# SERVER_PATH = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
# print(sys.path)
# sys.path[0] = SERVER_PATH
# print(sys.path)
from utils import load_model
# sys.path.insert(0, ".")
# print(os.path.abspath(__file__))
# from os.path.join(SERVER_PATH, 'utils.py') import load_model

pd.set_option('display.max_columns', 500)

def predict():

	try:
		test_json = request.get_json()
		test = pd.DataFrame.from_records([test_json])
		print(test_json)

	except Exception as e:
		raise e

	if test.empty:
		return(bad_request())
	else:
		# LOAD A MODEL
		model = load_model('data/knn_regressor.pkl')
		df = pd.read_csv('data/house_data.csv')

		prediction = model.predict(test)
		print(prediction)

		# Get kneighbors ids
		ids = get_knn_records(model, test)

		# Get kNN records
		data = get_data(df, ids)
		print(data)

		response = data.to_json(orient="records")
		print(response)

		return response

def get_knn_records(model, test):

    X = load_model('data/knn_training_set.pkl')

    knn = model.kneighbors(test)

    results = []
    for i in knn[1][0]:
        results.append(X.iloc[[i]].index[0])

    return results

def get_data(data, ls):
    return data[data['id'].isin(ls)].reset_index(drop=True)