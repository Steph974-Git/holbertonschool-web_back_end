# NoSQL Project - Holberton School

This folder contains scripts and Python functions for working with MongoDB databases, demonstrating key NoSQL concepts through practical exercises.

---

## Folder Contents

### 1. MongoDB Shell Scripts

These files contain MongoDB shell commands to manipulate the `my_db` database and the `school` collection:

- **0-list_databases**  
  Lists all databases on the MongoDB server.

- **1-use_or_create_database**  
  Selects (or creates if it doesn't exist) the `my_db` database.

- **2-insert**  
  Inserts a document with the field `name: "Holberton school"` into the `school` collection.

- **3-all**  
  Displays all documents in the `school` collection in a readable format.

- **4-match**  
  Finds all documents in the `school` collection where `name` is `"Holberton school"`.

- **5-count**  
  Counts the total number of documents in the `school` collection.

- **6-update**  
  Updates all documents with `name: "Holberton school"` by adding or modifying the `address` field to `"972 Mission street"`.

- **7-delete**  
  Removes all documents with `name: "Holberton school"` from the `school` collection.

---

### 2. Python Functions Using PyMongo

These Python scripts use the `pymongo` library to interact with MongoDB programmatically:

- **8-all.py**  
  Defines the function `list_all(mongo_collection)` which returns all documents in a collection as a list. Returns an empty list if the collection is empty.

- **8-main.py**  
  Test script for the previous function: displays all documents in the `school` collection.

- **9-insert_school.py**  
  Defines the function `insert_school(mongo_collection, **kwargs)` which inserts a new document into a collection using keyword arguments.

- **9-main.py**  
  Test script for inserting a document into the `school` collection.

- **10-update_topics.py**  
  Defines the function `update_topics(mongo_collection, name, topics)` which updates the `topics` field for all documents matching the given name.

- **10-main.py**  
  Test script for updating the topics of a school.

- **11-schools_by_topic.py**  
  Defines the function `schools_by_topic(mongo_collection, topic)` which returns a list of schools that have a specific topic in their `topics` field.

- **11-main.py**  
  Test script for searching schools by topic.

- **12-log_stats.py**  
  Script that displays statistics about Nginx logs stored in MongoDB: total number of logs, number by HTTP method, and number of `/status` requests.

---

### 3. Sample Data

- **dump/**  
  Folder containing a BSON export of the `logs` database and the `nginx` collection, used for log statistics exercises (`nginx.bson` and metadata).

- **dump.zip**  
  Compressed archive of the `dump/` folder.

---

### 4. Other Files

- **README.md**  
  This documentation file.

- **__pycache__/**  
  Automatically generated Python cache files.

---

## Usage

- **MongoDB Shell Scripts:**  
  Run in the MongoDB shell, for example:
  ```bash
  cat 6-update | mongo my_db
  ```

- **Python Scripts:**  
  Require the `pymongo` package:
  ```bash
  python3 8-main.py
  ```

- **Importing Functions:**  
  Python functions can be imported into other scripts for automating MongoDB tasks.

---

## Learning Objectives

- Manipulate a MongoDB database using both shell commands and Python.
- Insert, search, update, and delete documents.
- Count and filter documents based on criteria.
- Analyze logs and extract statistics.

---

## Notes

- All scripts follow Holberton School formatting and commenting guidelines.
- Scripts are designed for Ubuntu 20.04 LTS with MongoDB 4.4.
- The sample data (`dump/`) allows you to test log statistics scripts with real data.

---