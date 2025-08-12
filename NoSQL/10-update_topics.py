#!/usr/bin/env python3
"""
10-update_topics.py
"""
def update_topics(mongo_collection, name, topics):
    """
    Updates the topics of a school document based on the name.
    Returns the number of documents modified.
    """
    result = mongo_collection.update_one(
        {"name": name},
        {"$set": {"topics": topics}}
    )
    return result.modified_count
