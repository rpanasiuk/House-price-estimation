<h1 align="center">House price estimation</h1><br>
<p align="left">
	App which uses a simple machine learning model to estimate
	house price. It has components which visualize fetched data from the
	database. User puts his house data and get price in response
	with marking points with similar houses on real map (API).
</p>

## Table of Contents

- [Used technologies](#used-technologies)
- [Introduction](#introduction)
- [Features](#features)
- [Layout](#layout)
- [ToDo List](#todo-list)
- [Changelog](#changelog)

## Used technologies

<div>
	<img src="https://raw.githubusercontent.com/rpanasiuk/House-price-estimation/master/src/img/html.png" alt="HTML icon" style="display: inline-block;" width="100" />
	<img src="https://raw.githubusercontent.com/rpanasiuk/House-price-estimation/master/src/img/css.png" alt="CSS icon" style="display: inline-block;" width="100" />
	<img src="https://raw.githubusercontent.com/rpanasiuk/House-price-estimation/master/src/img/javascript.png" alt="JavaScript icon" style="display: inline-block;" width="100" />
	<img src="https://raw.githubusercontent.com/rpanasiuk/House-price-estimation/master/src/img/python.png" alt="Python icon" style="display: inline-block;" width="100" />
	<img src="https://raw.githubusercontent.com/rpanasiuk/House-price-estimation/master/src/img/react.png" alt="React icon" style="display: inline-block;" width="100" />
	<img src="https://raw.githubusercontent.com/rpanasiuk/House-price-estimation/master/src/img/redux.png" alt="Redux icon" style="display: inline-block;" width="100" />
	<img src="https://raw.githubusercontent.com/rpanasiuk/House-price-estimation/master/src/img/sass.png" alt="Sass icon" style="display: inline-block;" width="100" />
	<img src="https://raw.githubusercontent.com/rpanasiuk/House-price-estimation/master/src/img/webpack.png" alt="Webpack icon" style="display: inline-block;" width="100" />
</div>

## Introduction

<p align="left">
	This project uses a simple (for now) machine learning algorithm provided by scikit-learn library. User is able to send informations about his desired house and get in response a predicted price in USD. What is more, API written in Python delivers a few most similar houses to our given one. Price estimation can be done with multivariable linear regression and map is filled with markers thanks to the kNeighbours Regressor. For now it uses only the second alg for both cases where the results are not so accurate.
	One of the react-router views contains charts from d3 libraries. View presents basic information about specific district, given in input field at main view.
	Data used in this project comes from csv file and represents archival sales data in Seattle for certain period of time.	Communication between components is handled by Redux.
</p>

<div>
	<img src="https://raw.githubusercontent.com/rpanasiuk/House-price-estimation/master/src/img/d3.png" alt="d3 icon" style="display: inline-block;" height="100" />
	<img src="https://raw.githubusercontent.com/rpanasiuk/House-price-estimation/master/src/img/pandas.png" alt="pandas icon" style="display: inline-block;" height="100" />
	<img src="https://raw.githubusercontent.com/rpanasiuk/House-price-estimation/master/src/img/scikit.png" alt="scikit icon" style="display: inline-block;" height="100" />
</div>

## Features

A few of the features:

* Receive predicted price for house you want to buy or you are about to sell.
* Get a few most similar sales data records which are marked on real map.
* Watch statistics about houses sqft distribution and median price for given district.


## Layout

<div>
	<img src="https://cdn4.iconfinder.com/data/icons/proglyphs-computers-and-development/512/iMac-512.png" alt="Layout desktop" style="display: inline-block;" height="100" />

</div>

## ToDo List

- More advanced machine learning model.
- Restrict access to views. User needs to fill input fields in first place.
- Fields validation.
- Add new view.

### **Changelog**:
  - **11/06/18**
	  - Implemented a redux-form.
	  - API is working - respond gives 5 kNN records.
	  - Added a leaflot map.