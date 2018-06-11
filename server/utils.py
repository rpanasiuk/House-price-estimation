import pickle

def save_model(model, file_name):
	with open(file_name, "wb") as file_handler:
		pickle.dump(model, file_handler)

def load_model(file_name):
	with open(file_name, "rb") as file_handler:
		return pickle.load(file_handler)