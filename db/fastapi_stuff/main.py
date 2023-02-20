# run "uvicorn main:app --reload" in the terminal to run the database ...

from fastapi import FastAPI

app = FastAPI()

@app.get("/")
async def root():
    return {"message": "Hello World"}