import pickle

def save_model(model, file_name):
	with open(file_name, "wb") as file_handler:
		pickle.dump(model, file_handler)

def load_model(file_name):
	with open(file_name, "rb") as file_handler:
		return pickle.load(file_handler)

def get_knn_records(model, test, n=5, df_filter=None):

	def loop_with_filters(X, knn):
		if type(df_filter) is not list or len(df_filter) < 2:
			raise ValueError('Wrong filter parameter. It needs to be column and filter value in a list.')

		results = []

		for i in knn[1][0]:
			val = X.iloc[[i]]

			if val[df_filter[0]].values[0] == df_filter[1]:
				results.append(val.index[0])

		return results

	def loop_without_filters(X, knn):
		results = []

		for i in knn[1][0]:
			results.append(X.iloc[[i]].index[0])

		return results						

	X = load_model('data/knn_training_set.pkl')

	if df_filter:
		knn = model.kneighbors(test, n_neighbors=len(X.values))			
		return loop_with_filters(X, knn)

	else:
		knn = model.kneighbors(test, n_neighbors=n)
		return loop_without_filters(X, knn)

def get_data(data, ls):
	return data[data['id'].isin(ls)].reset_index(drop=True)