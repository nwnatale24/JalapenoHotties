# Helper functions to return any specific information about the 
# created timestamp for a review.

def get_year(timestamp: str):
    return timestamp[0:4]

def get_month(timestamp: str):
    return timestamp[4:6]

def get_day(timestamp: str):
    return timestamp[6:8]

def get_time(timestamp: str):
    return timestamp[8:14]

def get_hour(timestamp: str):
    return timestamp[8:10]

def get_minute(timestamp: str):
    return timestamp[10:12]

def get_second(timestamp: str):
    return timestamp[12:14]
