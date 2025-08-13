# Python Async Function Project - Holberton School

This folder contains Python scripts and exercises focused on asynchronous programming using `asyncio` and coroutines. The goal is to understand how to write, execute, and measure asynchronous functions, concurrent coroutines, and tasks in Python.

---

## Folder Contents

### 1. Python Scripts

#### Async Syntax and Coroutines

- **0-basic_async_syntax.py**  
  Demonstrates basic async/await syntax in Python. Defines a simple asynchronous function and shows how to run it.

- **1-concurrent_coroutines.py**  
  Shows how to run multiple coroutines concurrently using `asyncio.gather()`. The script defines an async function and executes several instances at the same time.

- **2-measure_runtime.py**  
  Measures the total runtime of running multiple asynchronous coroutines concurrently. The function uses `asyncio.gather()` to run several coroutines in parallel and returns the elapsed time, illustrating the performance benefits of concurrency.

- **3-tasks.py**  
  Explains and demonstrates how to create and manage asyncio tasks. The script shows how to schedule coroutines as tasks and wait for their completion.

- **4-tasks.py**  
  Further explores asyncio tasks, possibly with more advanced examples or variations on task management and scheduling.

---

#### Main/Test Scripts

- **0-main.py**  
  Test script for the basic async syntax in `0-basic_async_syntax.py`.

- **1-main.py**  
  Test script for concurrent coroutines in `1-concurrent_coroutines.py`.

- **2-main.py**  
  Test script for measuring runtime in `2-measure_runtime.py`.

- **3-main.py**  
  Test script for asyncio tasks in `3-tasks.py`.

- **4-main.py**  
  Test script for advanced asyncio tasks in `4-tasks.py`.

---

### 2. Other Files

- **README.md**  
  This documentation file.

---

## Usage

- **Running Scripts:**  
  Each main script (`*-main.py`) can be executed to test the corresponding async functionality. For example:
  ```bash
  python3 1-main.py
  ```

- **Asyncio Requirements:**  
  All scripts use Python's built-in `asyncio` library. No external dependencies are required.

- **Extending Functionality:**  
  The async functions and task management examples can be imported and reused in other projects to implement custom asynchronous workflows.

---

## Learning Objectives

- Understand how to define and use asynchronous functions and coroutines in Python.
- Learn how to run multiple coroutines concurrently for improved performance.
- Measure and compare the runtime of sequential vs. concurrent asynchronous operations.
- Practice creating and managing asyncio tasks for efficient asynchronous programming.

---

## Notes

- All scripts follow Holberton School formatting and commenting guidelines.
- The project is designed for Python 3.7+ (for async/await syntax).
- The examples are intended for educational purposes and can be extended for more advanced asynchronous programming scenarios.
