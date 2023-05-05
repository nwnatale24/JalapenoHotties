from fastapi import FastAPI
from typing import Optional
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy import create_engine, Table, MetaData, insert, Column, String, Integer, Date, Double
from helpers.get_date_info import *
from datetime import datetime

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
    Column("phone_number", String(45), nullable=True),
    Column("latitude", Double(), nullable=True),
    Column("longitude", Double(), nullable=True)
    
    )

# Create a Review object that represents the "review" table in the DB.
review_table = Table(
    'review', 
    metadata, 
    Column("review_id", Integer, primary_key=True),
    Column("review_title", String(45), nullable=True),
    Column("review_text", String(450), nullable=True), 
    Column("review_total_score", Integer, nullable=True),
    Column("timestamp", Date, nullable=True),
    Column("user_id", Integer, nullable=False),
    Column("restaurant_id", Integer, nullable=False)
    )
    

# Create a Table object that represents the "restaurant" table in the DB.
user_table = Table(
    'user', 
    metadata, 
    Column("user_id", Integer, primary_key=True),
    Column("first_name", String(45), nullable=True),
    Column("last_name", String(45), nullable=True), 
    Column("email_address", String(45), nullable=True)
    )

metadata.create_all(engine)

# Endpoint for GET request to return JSON of all users and their attributes. 
@app.get("/api/users") 
async def get_all_users():
    try:

        # Open a conection to the DB.
        conn = engine.connect()

        # Execute a SELECT query on the "restaurant" table
        select_query = user_table.select()
        results = conn.execute(select_query)

        # Header for the matches dict.
        matches = {"status" : "success",
                    "message" : "null",
                    "users" : []}
                    
        # Create an array of dicts containing the results.
        for row in results:
            user_id = row[0]
            first_name = row[1]
            last_name= row[2]
            email_address = row[3]


            matches["users"].append({
                                "id" : user_id,
                                "first_name" : first_name,
                                "last_name" : last_name,
                                "email_address" : email_address

                
             })

        # Close the connection to the DB. 
        conn.close()

        return(matches)
        
    except Exception as e:
        return {"status" : "fail",
                "message" : str(e)}

# Endpoint for POST request to return JSON of added user to DB. 
@app.post("/api/users") 
async def post_user(email_address: str, first_name: str, last_name: str):
    try:

        # Open a conection to the DB.
        conn = engine.connect()


        # Execute a SELECT query on the "restaurant" table
         # Insert a review using the following values. 
        insert_query = insert(user_table).values(
            first_name=first_name,
            last_name=last_name, 
            email_address=email_address,

        )


        # Execute the insert query. 
        results = conn.execute(insert_query)

        # Commit the insert query into the database
        conn.commit()

        # Get the primary key (id) of the just created review.
        inserted_user_id = results.inserted_primary_key[0]

        # Execute a SELECT query on the "user" table
        select_query = user_table.select().where(user_table.c.user_id == inserted_user_id)
        results = conn.execute(select_query)


        # Header for the matches dict.
        matches = {"status" : "success",
                    "message" : "null",
                    "users" : []}
                    
        # Create an array of dicts containing the results.
        for row in results:
            user_id = row[0]
            first_name = row[1]
            last_name= row[2]
            email_address = row[3]


            matches["users"].append({
                                "id" : user_id,
                                "first_name" : first_name,
                                "last_name" : last_name,
                                "email_address" : email_address
                
             })

        # Close the connection to the DB. 
        conn.close()

        return(matches)
        
    except Exception as e:
        return {"status" : "fail",
                "message" : str(e)}

# Endpoint for GET request to return JSON of user and it's attributes, searched by user_id.
@app.get("/api/users/id/{user_id}") 
async def get_user_by_user_id(user_id):
    try:

        # Open a conection to the DB.
        conn = engine.connect()

        # Execute a SELECT query on the "restaurant" table
        select_query = user_table.select().where(user_table.c.user_id == user_id)
        results = conn.execute(select_query)

        # Header for the matches dict.
        matches = {"status" : "success",
                    "message" : "null",
                    "users" : []}
                    
        # Create an array of dicts containing the results.
        for row in results:
            user_id = row[0]
            first_name = row[1]
            last_name= row[2]
            email_address = row[3]


            matches["users"].append({
                                "id" : user_id,
                                "first_name" : first_name,
                                "last_name" : last_name,
                                "email_address" : email_address
                
             })

        # Close the connection to the DB. 
        conn.close()

        return(matches)
        
    except Exception as e:
        return {"status" : "fail",
                "message" : str(e)}
    
# Endpoint for GET request to return JSON of user and it's attributes, searched by email_address.
@app.get("/api/users/email/{email_address}") 
async def get_user_by_email_address(email_address):
    try:

        # Open a conection to the DB.
        conn = engine.connect()

        # Execute a SELECT query on the "user" table
        select_query = user_table.select().where(user_table.c.email_address == email_address)
        results = conn.execute(select_query)

        # Header for the matches dict.
        matches = {"status" : "success",
                    "message" : "null",
                    "users" : []}
                    
        # Create an array of dicts containing the results.
        for row in results:
            user_id = row[0]
            first_name = row[1]
            last_name= row[2]
            email_address = row[3]


            matches["users"].append({
                                "id" : user_id,
                                "first_name" : first_name,
                                "last_name" : last_name,
                                "email_address" : email_address

                
             })

        # Close the connection to the DB. 
        conn.close()

        return(matches)
        
    except Exception as e:
        return {"status" : "fail",
                "message" : str(e)}

# Endpoint for GET request to return JSON of user and it's attributes, searched by user_id.
@app.get("/api/users/full_name/{full_name}") 
async def get_user_by_full_name(full_name):
    try:

        # Open a conection to the DB.
        conn = engine.connect()

        # Split full name provided in path into first name and last name. 
        first_and_last_name_array = full_name.split(" ")

        if len(first_and_last_name_array) != 2:
            raise Exception("Full name must consist of only a first name and last name, separated by one space.")

        first_name = first_and_last_name_array[0]
        last_name = first_and_last_name_array[1]

        # Execute a SELECT query on the "users" table
        select_query = user_table.select().where(user_table.c.first_name == first_name).where(user_table.c.last_name == last_name)
        results = conn.execute(select_query)

        # Header for the matches dict.
        matches = {"status" : "success",
                    "message" : "null",
                    "users" : []}
                    
        # Create an array of dicts containing the results.
        for row in results:
            user_id = row[0]
            first_name = row[1]
            last_name= row[2]
            email_address = row[3]


            matches["users"].append({
                                "id" : user_id,
                                "first_name" : first_name,
                                "last_name" : last_name,
                                "email_address" : email_address
                
             })

        # Close the connection to the DB. 
        conn.close()

        return(matches)
        
    except Exception as e:
        return {"status" : "fail",
                "message" : str(e)}
    
# Endpoint for GET request to return all reviews.
@app.get("/api/reviews") 
async def get_all_reviews():
    try:

        # Open a conection to the DB.
        conn = engine.connect()

        # Execute a SELECT query on the "restaurant" table
        select_query = review_table.select()
        results = conn.execute(select_query)

        # Header for the matches dict.
        matches = {"status" : "success",
                    "message" : "null",
                    "reviews" : []}

        # Create an array of dicts containing the results.
        for row in results:
            review_id = row[0]
            review_title = row[1]
            review_text = row[2]
            review_total_score = row[3]
            timestamp = row[4]
            user_id = row[5]
            restaurant_id = row[6]

            matches["reviews"].append({
                                "id" : review_id,
                                "review_title" : review_title,
                                "review_text" : review_text,
                                "review_total_score" : review_total_score,
                                "timestamp" : timestamp,
                                "user_id" : user_id,
                                "restaurant_id" : restaurant_id
             })

        # Close the connection to the database. 
        conn.close()


        return(matches)
        
    except Exception as e:
        return {"status" : "fail",
                "message" : str(e)}

# Endpoint to POST (add) a new review to the DB. 
@app.post("/api/reviews")
async def post_review( review_title: str, review_text: str, review_total_score: int, user_id: int, restaurant_id: int):
    try:
        # Open a connection to the DB.
        conn = engine.connect()

        # Get the current date and time to store in the 'timestamp' field in the db.
        now = datetime.now()
        curr_time = now.strftime("%Y%m%d%H%M%S")

        if (review_total_score > 5 or review_total_score < 1):
            raise Exception("ERROR: review score must be from 1 (inclusive) to 5 (inclusive)")

        # Insert a review using the following values. 
        insert_query = insert(review_table).values(
            review_title=review_title,
            review_text=review_text, 
            review_total_score=review_total_score,
            timestamp=curr_time,
            user_id=user_id, # Need to get the current time here
            restaurant_id=restaurant_id
        )

        # Execute the insert query. 
        results = conn.execute(insert_query)

        # Commit the insert query into the database
        conn.commit()

        # Get the primary key (id) of the just created review.
        inserted_review_id = results.inserted_primary_key[0]

        # Execute a SELECT query on the "review" table
        select_query = review_table.select().where(review_table.c.review_id == inserted_review_id)
        results = conn.execute(select_query)

        # Header for the matches dict.
        matches = {"status" : "success",
                    "message" : "null",
                    "reviews" : []}
      
        for row in results:
            review_id = row[0]
            review_title = row[1]
            review_text = row[2]
            review_total_score = row[3]
            timestamp = row[4]
            user_id = row[5]
            restaurant_id = row[6]

            matches["reviews"].append({
                                "id" : review_id,
                                "review_title" : review_title,
                                "review_text" : review_text,
                                "review_total_score" : review_total_score,
                                "timestamp" : timestamp,
                                "user_id" : user_id,
                                "restaurant_id" : restaurant_id
             })
        
        # Close the connection to the DB. 
        conn.close()

        # Return a review with all of it's created credentials. 
        return(matches)

    # If not successful, return an error with the error message. 
    except Exception as e:
        return {"state" : 'error', "message" : str(e)}

# Endpoint for GET request to return all reviews about a particular 
# restaurant using the id of the restaurant as a PATH parameter.
@app.get("/api/reviews/user_id/{user_id}") 
async def get_review_by_user_id(user_id):
    try:

        # Open a conection to the DB.
        conn = engine.connect()

        # Execute a SELECT query on the "restaurant" table
        select_query = review_table.select().where(review_table.c.user_id == user_id)
        results = conn.execute(select_query)

        # Header for the matches dict.
        matches = {"status" : "success",
                    "message" : "null",
                    "reviews" : []}

        # Create an array of dicts containing the results.
        for row in results:
            review_id = row[0]
            review_title = row[1]
            review_text = row[2]
            review_total_score = row[3]
            timestamp = row[4]
            user_id = row[5]
            rest_id = row[6]

            matches["reviews"].append({
                                "id" : review_id,
                                "review_title" : review_title,
                                "review_text" : review_text,
                                "review_total_score" : review_total_score,
                                "timestamp" : timestamp,
                                "user_id" : user_id,
                                "restaurant_id" : rest_id
             })

        # Close the connection to the database. 
        conn.close()

        return(matches)
        
    except Exception as e:
        return {"status" : "fail",
                "message" : str(e)}

# Endpoint for GET request to return all reviews about a particular 
# restaurant using the id of the restaurant as a PATH parameter.
@app.get("/api/reviews/restaurant_id/{restaurant_id}") 
async def get_review_by_restaurant_id(restaurant_id):
    try:

        # Open a conection to the DB.
        conn = engine.connect()

        # Execute a SELECT query on the "restaurant" table
        select_query = review_table.select().where(review_table.c.restaurant_id == restaurant_id)
        results = conn.execute(select_query)

        # Header for the matches dict.
        matches = {"status" : "success",
                    "message" : "null",
                    "reviews" : []}

        # Create an array of dicts containing the results.
        for row in results:
            review_id = row[0]
            review_title = row[1]
            review_text = row[2]
            review_total_score = row[3]
            timestamp = row[4]
            user_id = row[5]
            restaurant_id = row[6]

            matches["reviews"].append({
                                "id" : review_id,
                                "review_title" : review_title,
                                "review_text" : review_text,
                                "review_total_score" : review_total_score,
                                "timestamp" : timestamp,
                                "user_id" : user_id,
                                "restaurant_id" : restaurant_id
             })

        # Close the connection to the database. 
        conn.close()

        return(matches)
        
    except Exception as e:
        return {"status" : "fail",
                "message" : str(e)}

# Endpoint for GET request to return JSON of all restaurants and their attributes.
@app.get("/api/restaurants")
async def get_all_resurants():
    try:
        # Open a conection to the DB.
        conn = engine.connect()

       # Execute a SELECT query on the "restaurant" table
        select_query = restaurant_table.select()
        results = conn.execute(select_query)

        # Header for the matches dict.
        matches = {"status" : "success",
                    "message" : "null",
                    "restaurants" : []}
                    
        # Create an array of dicts containing the results.
        for row in results:
            restaurant_id = row[0]
            restaurant_city = row[1]
            restaurant_name= row[2]
            restaurant_website = row[3]
            restaurant_phone_number = row[4]
            latitude = row[5]
            longitude = row[6]

            matches["restaurants"].append({
                                "id" : restaurant_id,
                                "city" : restaurant_city,
                                "name" : restaurant_name,
                                "website" : restaurant_website,
                                "phone_number" : restaurant_phone_number,
                                "latitide" : latitude,
                                "longitude" : longitude
                
             })

        # Close the connection to the database. 
        conn.close()

        return(matches)
        
    except Exception as e:
        return {"status" : "fail",
                "message" : str(e)}

# Endpoint to POST (add) a new restaurant to the DB. 
@app.post("/api/restaurants")
async def post_restaurant( city: str, name: str, website: str, phone_number: str):
    try:
        # Open a connection to the DB.
        conn = engine.connect()

        # Insert a restaurant using the following values. 
        insert_query = insert(restaurant_table).values(
            city=city,
            name=name, 
            website=website,
            phone_number=phone_number
        )

        print(insert_query)

        # Execute the insert query. 
        results = conn.execute(insert_query)

        # Commit the insert query into the database
        conn.commit()


        # Get the primary key (id) of the just created restaurant.
        inserted_restaurant_id = results.inserted_primary_key[0]


        # Execute a SELECT query on the "restaurant" table
        select_query = restaurant_table.select().where(restaurant_table.c.restaurant_id == inserted_restaurant_id)
        results = conn.execute(select_query)

        # Header for the matches dict.
        matches = {"status" : "success",
                    "message" : "null",
                    "restaurants" : []}
                    
        # Create an array of dicts containing the results.
        for row in results:
            restaurant_id = row[0]
            restaurant_city = row[1]
            restaurant_name= row[2]
            restaurant_website = row[3]
            restaurant_phone_number = row[4]
            latitude = row[5]
            longitude = row[6]

            matches["restaurants"].append({
                                "id" : restaurant_id,
                                "city" : restaurant_city,
                                "name" : restaurant_name,
                                "website" : restaurant_website,
                                "phone_number" : restaurant_phone_number,
                                "latitide" : latitude,
                                "longitude" : longitude
                
             })
        
        # Close the connection to the DB. 
        conn.close()

        # Return a resturant with all of it's created credentials. 
        return(matches)

    # If not successful, return an error with the error message. 
    except Exception as e:
        return {"state" : 'error', "message" : str(e)}

# Endpoint for GET request to return JSON of restaurant and it's attributes, searched by name.
@app.get("/api/restaurants/{name}") 
async def get_resurant_by_name(name):
    try:

        # Open a conection to the DB.
        conn = engine.connect()

        # Execute a SELECT query on the "restaurant" table
        select_query = restaurant_table.select().where(restaurant_table.c.name == name)
        results = conn.execute(select_query)

        # Header for the matches dict.
        matches = {"status" : "success",
                    "message" : "null",
                    "restaurants" : []}
                    
        # Create an array of dicts containing the results.
        for row in results:
            restaurant_id = row[0]
            restaurant_city = row[1]
            restaurant_name= row[2]
            restaurant_website = row[3]
            restaurant_phone_number = row[4]
            latitude = row[5]
            longitude = row[6]

            matches["restaurants"].append({
                                "id" : restaurant_id,
                                "city" : restaurant_city,
                                "name" : restaurant_name,
                                "website" : restaurant_website,
                                "phone_number" : restaurant_phone_number,
                                "latitide" : latitude,
                                "longitude" : longitude
                
             })

        # Close the connection to the database. 
        conn.close()

        return(matches)
        
    except Exception as e:
        return {"status" : "fail",
                "message" : str(e)}

@app.get("/api/restaurant/restaurant_id/{restaurant_id}") 
async def get_restaurant_by_restaurant_id(restaurant_id):
    try:

        # Open a conection to the DB.
        conn = engine.connect()

        # Execute a SELECT query on the "restaurant" table
        select_query = restaurant_table.select().where(restaurant_table.c.restaurant_id == restaurant_id)
        results = conn.execute(select_query)

        # Header for the matches dict.
        matches = {"status" : "success",
                    "message" : "null",
                    "restaurants" : []}
                    
        # Create an array of dicts containing the results.
        for row in results:
            restaurant_id = row[0]
            restaurant_city = row[1]
            restaurant_name= row[2]
            restaurant_website = row[3]
            restaurant_phone_number = row[4]
            latitude = row[5]
            longitude = row[6]

            matches["restaurants"].append({
                                "id" : restaurant_id,
                                "city" : restaurant_city,
                                "name" : restaurant_name,
                                "website" : restaurant_website,
                                "phone_number" : restaurant_phone_number,
                                "latitide" : latitude,
                                "longitude" : longitude
                
             })

        # Close the connection to the database. 
        conn.close()

        return(matches)
        
    except Exception as e:
        return {"status" : "fail",
                "message" : str(e)}


