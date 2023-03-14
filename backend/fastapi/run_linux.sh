#! /bin/bash

# This script simply runs the database on the local machine 
# so FastAPI can pick up the data from it for the React app. 

uvicorn api:app --reload
