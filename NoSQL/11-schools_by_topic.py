#!/usr/bin/env python3
"""
11-schools_by_topic.py
"""


def schools_by_topic(mongo_collection, topic):
    """
    Returns the list of schools having a specific topic.
    """
    result = mongo_collection.find({"topics": topic})
    return list(result)
