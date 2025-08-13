# Pagination Project - Holberton School

This folder contains Python scripts and resources for practicing pagination concepts, using a dataset of popular baby names. The exercises cover basic pagination, hypermedia pagination, and pagination resilient to data deletion.

---

## Folder Contents

### 1. Dataset

- **Popular_Baby_Names.csv**  
  This CSV file contains a dataset of popular baby names. All pagination scripts use this file as the data source.

---

### 2. Python Scripts

#### Helper Functions and Pagination

- **0-simple_helper_function.py**  
  Defines a helper function `index_range(page, page_size)` that calculates the start and end indexes for pagination based on the page number and page size.

- **1-simple_pagination.py**  
  Implements a `Server` class that loads the baby names dataset and provides a method `get_page(page, page_size)` to return a specific page of data.

- **2-hypermedia_pagination.py**  
  Extends the `Server` class to include hypermedia pagination. The method `get_hyper(page, page_size)` returns not only the data for the requested page, but also metadata such as page size, current page, next page, previous page, and total pages.

- **3-hypermedia_del_pagination.py**  
  Further extends pagination to handle cases where data may have been deleted. The method `get_hyper_index(index, page_size)` returns a page of data starting from a specific index, along with hypermedia metadata, and is resilient to missing indexes due to deletions.

---

#### Main/Test Scripts

- **0-main.py**  
  Test script for the helper function in `0-simple_helper_function.py`.

- **1-main.py**  
  Test script for the simple pagination implemented in `1-simple_pagination.py`.

- **2-main.py**  
  Test script for hypermedia pagination in `2-hypermedia_pagination.py`.

- **3-main.py**  
  Test script for deletion-resilient hypermedia pagination in `3-hypermedia_del_pagination.py`.

---

### 3. Other Files

- **README.md**  
  This documentation file.

- **__pycache__/**  
  Directory containing Python cache files generated during execution. Can be ignored.

---

## Usage

- **Dataset:**  
  All pagination scripts read from `Popular_Baby_Names.csv`. Make sure this file is present in the folder before running any script.

- **Running Scripts:**  
  Each main script (`*-main.py`) can be executed to test the corresponding pagination logic. For example:
  ```bash
  python3 1-main.py
  ```

- **Extending Functionality:**  
  The `Server` class in each script can be imported and used in other projects to implement custom pagination logic.

---

## Learning Objectives

- Understand and implement basic pagination logic.
- Extend pagination to include hypermedia metadata for API responses.
- Handle pagination in datasets where items may be deleted, ensuring robust navigation.
- Practice reading and processing CSV data in Python.

---

## Notes

- All scripts follow Holberton School formatting and commenting guidelines.
- The dataset is used for demonstration and testing purposes.
- The project is designed for educational use and can be extended for more complex pagination