#!/usr/bin/env bash

install(){
	npm i
	npm i -S redux babel-core
}

run(){
	npm run dev # checkout localhost:8080
}

$@