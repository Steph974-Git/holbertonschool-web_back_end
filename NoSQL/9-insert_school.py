#!/usr/bin/env python3
"""
9-insert_school.py
"""
def insert_school(mongo_collection, **kwargs):
    """
    Inserts a new document in a collection based on kwargs.
    Returns the inserted document's ID.
    """
    result = mongo_collection.insert_one(kwargs)
    return result.inserted_id
