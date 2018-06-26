import pandas as pd
import numpy as np

from flask import request, json, jsonify
from math import inf
from collections import OrderedDict

from utils import load_model, get_knn_records, get_data


def district_stats():

	try:
		test_json = request.get_json()
		test = pd.DataFrame.from_records([test_json])

	except Exception as e:
		raise e

	if test.empty:
		# return(bad_request())
		pass
	else:
		# LOAD A MODEL
		model = load_model('data/knn_regressor.pkl')
		
		# LOAD DATA
		df = pd.read_csv('data/house_data.csv')
		df_zipcode = df[df['zipcode'] == int(test_json['zipcode'])]


		list_yrs = [x for x in range(1950, 2020+1, 10)]
		dict_yr_build = OrderedDict()
		for i, j in enumerate(list_yrs):
		    if i == 0:
		        continue
		    temp = df_zipcode['yr_built'].between(list_yrs[i-1]+1, j)
		    string = '{}-{}'.format(list_yrs[i-1], j)
		    dict_yr_build[string] = temp[temp == True].count()
		    
		temp = df_zipcode['yr_built'].between(-inf, 1950)
		string = "-1950"
		dict_yr_build[string] = temp[temp == True].count()


		list_sqft = [x for x in range(0, 4000+1, 1000)]
		dict_sqft = OrderedDict()
		for i, j in enumerate(list_sqft):
		    if i == 0:
		        continue
		    temp = df_zipcode['sqft_living'].between(list_sqft[i-1]+1, j)
		    string = '{}-{}'.format(list_sqft[i-1], j)
		    dict_sqft[string] = {"count": temp[temp == True].count(), "median": df_zipcode[temp]['price'].median()}
		    
		temp = df_zipcode['sqft_living'].between(4001, inf)
		string = "4000+"
		dict_sqft[string] = {"count": temp[temp == True].count(), "median": df_zipcode[temp]['price'].median()}

		# Get kneighbors ids
		ids = get_knn_records(model, test, df_filter=['zipcode', int(test_json['zipcode'])])[:20]

		# Get kNN records
		df_houses = get_data(df, ids)

		df_sqft = pd.DataFrame.from_dict(dict_sqft, orient='index')
		df_yr_build = pd.DataFrame.from_dict(dict_yr_build, orient='index')

		response = {}
		response["districtSqft"] = df_sqft.to_dict(orient='index')
		response["districtYears"] = df_yr_build.to_dict(orient='index')
		response["districtHouses"] = df_houses.to_dict(orient='index')
		response = json.dumps(response)

		return response