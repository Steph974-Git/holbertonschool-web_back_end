# Python Async Comprehension Project - Holberton School

This folder contains Python scripts and exercises focused on asynchronous programming and asynchronous comprehensions using `asyncio`. The goal is to understand how to write, use, and measure asynchronous generators and comprehensions in Python.

---

## Folder Contents

### 1. Python Scripts

#### Asynchronous Generators and Comprehensions

- **0-async_generator.py**  
  Defines an asynchronous generator function `async_generator()` that yields random numbers after a short delay. This script demonstrates how to create and use async generators in Python.

- **1-async_comprehension.py**  
  Implements an asynchronous comprehension using the generator from `0-async_generator.py`. The function `async_comprehension()` collects all values produced by the async generator into a list using async for and returns the list.

- **2-measure_runtime.py**  
  Measures the total runtime of running multiple asynchronous comprehensions concurrently. The function `measure_runtime()` uses `asyncio.gather()` to run four instances of `async_comprehension()` in parallel and returns the elapsed time. This script demonstrates the performance benefits of asynchronous execution.

---

#### Main/Test Scripts

- **0-main.py**  
  Test script for the asynchronous generator in `0-async_generator.py`. It runs the generator and prints the yielded values.

- **1-main.py**  
  Test script for the asynchronous comprehension in `1-async_comprehension.py`. It runs the comprehension and prints the resulting list.

- **2-main.py**  
  Test script for measuring runtime in `2-measure_runtime.py`. It prints the total time taken to run multiple comprehensions concurrently.

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
  The async generator and comprehension functions can be imported and reused in other projects to implement custom asynchronous workflows.

---

## Learning Objectives

- Understand how to define and use asynchronous generators in Python.
- Learn how to use asynchronous comprehensions to collect values from async generators.
- Measure and compare the runtime of sequential vs. concurrent asynchronous operations.
- Practice using `asyncio` for efficient asynchronous programming.

---

## Notes

- All scripts follow Holberton School formatting and commenting guidelines.
- The project is designed for Python 3.7+ (for async/await syntax).
- The examples are intended for educational purposes and can be extended for more advanced asynchronous programming scenarios.
