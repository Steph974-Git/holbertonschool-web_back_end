#!/usr/bin/env python3
"""
12-log_stats.py
"""


from pymongo import MongoClient


def main():
    """
    Displays statistics about Nginx logs stored in MongoDB.
    """
    client = MongoClient("mongodb://127.0.0.1:27017")
    db = client["logs"]
    col = db["nginx"]

    total = col.count_documents({})
    METHODS = ["GET", "POST", "PUT", "PATCH", "DELETE"]
    count_by_methods = {m: col.count_documents({"method": m}) for m in METHODS}

    nb_status = col.count_documents({
        "method": "GET",
        "path": "/status"
    })
    print(f"{total} logs")
    print("Methods:")
    for m in METHODS:
        print(f"\tmethod {m}: {count_by_methods[m]}")
    print(f"{nb_status} status check")


if __name__ == "__main__":
    main()
