#!/usr/bin/env bash

install(){
	npm i
	npm i -S redux babel-core redux-logger redux-thunk axios redux-promise-middleware
}

run(){
	npm run dev # checkout localhost:8080
}

$@