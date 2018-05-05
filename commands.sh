#!/usr/bin/env bash

install(){
	npm i
	npm i -S redux babel-core redux-logger redux-thunk axios
}

run(){
	npm run dev # checkout localhost:8080
}

$@