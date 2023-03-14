# This script simply runs the database on the local machine 
# so FastAPI can pick up the data from it for the React app

python.exe -m uvicorn api:app --reload