import pandas as pd
import os

from .model import knn_regressor

# SERVER_PATH = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
# print(SERVER_PATH)
from utils import save_model

def main():
	df = pd.read_csv('../data/house_data.csv')
	df = df.set_index('id')

	features = [
		'bedrooms', 
		'bathrooms', 
		'sqft_living',  # thresholds
		'sqft_lot', 	# thresholds
		'yr_built', 	# thresholds
		'zipcode'
	]
	target = 'price'

	model, X = knn_regressor(df, 5, 'uniform', target, features)

	save_model(model, '../data/knn_regressor.pkl')
	save_model(X, '../data/knn_training_set.pkl')

if __name__ == '__main__':
	main()