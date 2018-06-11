from sklearn.neighbors import KNeighborsRegressor
from sklearn.model_selection import train_test_split

def knn_regressor(dataframe, n_neighbors, weights, target, *args):

	features = list(*args)
	
	X = dataframe[features]
	y = dataframe[target]

	X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2)

	knn = KNeighborsRegressor(n_neighbors, weights)
	knn.fit(X_train, y_train)

	return knn, X_train