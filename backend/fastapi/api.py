from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy import create_engine, Table, MetaData, insert, Column, String, Integer
import json

app = FastAPI()
engine = create_engine('mysql+mysqlconnector://root:password@localhost:3306/jh')
metadata = MetaData()

origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# Create a Table object that represents the "restaurant" table in the DB.
restaurant_table = Table(
    'restaurant', 
    metadata, 
    Column("restaurant_id", Integer, primary_key=True),
    Column("city", String(45), nullable=True),
    Column("name", String(45), nullable=True), 
    Column("website", String(45), nullable=True),
    Column("phone_number", String(45), nullable=True))
    

# Endpoint for GET request to return JSON of restaurants and their attributes.
@app.get("/api/restaurants")
async def get_resurants():
    try:
        # Open a conection to the DB.
        conn = engine.connect()

        # Execute a SELECT query on the "restaurant" table
        select_query = restaurant_table.select()
        results = conn.execute(select_query)

        restaurant_names = []

        # Create an array of the restaurant names. 
        for row in results:
            restaurant_names.append(row[2])

        
        for row in results:
            print(row)
        #return {"restaurant_names " : restaurant_names}



        # Close the connection to the DB. 
        conn.close()

    except Exception as e:
        return {"error": str(e)}

# Endpoint to POST (add) a new restaurant to our DB. 
@app.post("/api/restaurants/")
async def post_restaurant(name: str, website: str):
    try:
        # Open a connection to the DB.
        conn = engine.connect()

        print(name)
        print(website)

        # Insert a restaurant using the following values. 
        insert_query = insert(restaurant_table).values(
            city='place',
            name=name, 
            website=website,
            phone_number='1234567890'
        )
        
        # Execute the insert query. 
        results = conn.execute(insert_query)

        # Close the connection to the DB. 
        conn.close()

        # If successful, return a success, a message of null, and the id of the restaurant created. 
        return {"state" : 'success', "message" : 'null', "restaurant_id" : ""}

    # If not successful, return an error with the error message. 
    except Exception as e:
        return {"state" : 'error', "message" : str(e)}
