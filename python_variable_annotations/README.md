# Python - Variable Annotations Project

This folder contains Python scripts and exercises focused on type hints and variable annotations, following Holberton School's curriculum. The goal is to understand how to use Python's type annotation features to improve code readability, maintainability, and tooling support.

---

## Folder Contents

### 1. Python Scripts

#### Type Hinting and Variable Annotation Exercises

- **0-add.py**  
  Defines a function `add(a: float, b: float) -> float` that adds two floating-point numbers with type annotations.

- **1-concat.py**  
  Implements `concat(str1: str, str2: str) -> str`, a function that concatenates two strings, using type hints.

- **2-floor.py**  
  Contains `floor(n: float) -> int`, a function that returns the floor of a floating-point number, annotated with types.

- **3-to_str.py**  
  Defines `to_str(n: float) -> str`, a function that converts a float to a string, with proper type annotations.

- **4-define_variables.py**  
  Demonstrates variable annotations for different types: integer, float, boolean, and string variables.

- **5-sum_list.py**  
  Implements `sum_list(input_list: List[float]) -> float`, a function that sums a list of floats, using type hints.

- **6-sum_mixed_list.py**  
  Defines `sum_mixed_list(mxd_lst: List[Union[int, float]]) -> float`, a function that sums a list containing both integers and floats, with type annotations.

- **7-to_kv.py**  
  Contains `to_kv(k: str, v: Union[int, float]) -> Tuple[str, float]`, a function that returns a tuple with a string and the square of a number, using type hints.

- **8-make_multiplier.py**  
  Implements `make_multiplier(multiplier: float) -> Callable[[float], float]`, a higher-order function that returns a function to multiply a float by a given multiplier, with type annotations.

- **9-element_length.py**  
  Defines `element_length(lst: Iterable[Sequence]) -> List[Tuple[Sequence, int]]`, a function that returns a list of tuples containing each element and its length, using advanced type hints.

---

#### Main/Test Scripts

Each main script (`*-main.py`) is designed to test the corresponding function or feature:

- **0-main.py** through **9-main.py**  
  Each main script imports and tests the function from its corresponding exercise file, printing results and demonstrating correct usage of type annotations.

---

### 2. Other Files

- **README.md**  
  This documentation file.

---

## Usage

- **Running Scripts:**  
  Each main script can be executed to test the corresponding function. For example:
  ```bash
  python3 5-main.py
  ```

- **Type Checking:**  
  You can use tools like `mypy` to check type correctness for these scripts:
  ```bash
  mypy 5-sum_list.py
  ```

- **Extending Functionality:**  
  The annotated functions can be imported into other projects to enforce type safety and improve code clarity.

---

## Learning Objectives

- Understand how to use Python's type hints and variable annotations.
- Learn to annotate function arguments, return types, and variables.
- Practice using type hints with built-in types, collections, unions, callables, and iterables.
- Improve code quality and tooling support with static type checking.

---

## Notes

- All scripts follow Holberton School formatting and commenting guidelines.
- The project is designed for Python 3.6+ (for full type annotation support).
- The examples are intended for educational purposes and can be extended for more advanced type hinting scenarios.
