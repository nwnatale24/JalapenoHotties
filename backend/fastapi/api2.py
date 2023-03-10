from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy import create_engine, Table, MetaData, insert, Column, String

app = FastAPI()
engine = create_engine('mysql+mysqlconnector://root:password@localhost/jh')
metadata = MetaData(str(engine))

origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
try:
    connection = engine.connect()
    print("good to go")
except exception as e:
    print("error: ", e)


