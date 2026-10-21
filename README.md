# Recursion Project: Fibonacci & Merge Sort

This project is part of **The Odin Project** curriculum, designed to practice and master recursion, iterative thinking, and divide-and-conquer algorithms in JavaScript.

---

## 📁 Project Structure

The project consists of two main algorithms divided into separate scripts/functions:

1. **Fibonacci Sequence (`fibonacci.js`)**: Generates Fibonacci numbers using both **iteration** and **recursion**.
2. **Merge Sort (`mergeSort.js`)**: Sorts an array using a **recursive divide-and-conquer** approach.

---

## 🚀 Part 1: Fibonacci Sequence

### 1. Iterative Approach (`fibs`)
* **Description:** Takes a number `n` and returns an array containing that many numbers from the Fibonacci sequence using a standard `for` loop.
* **Example:** `fibs(8)` returns `[0, 1, 1, 2, 3, 5, 8, 13]`

### 2. Recursive Approach (`fibsRec`)
* **Description:** Solves the same problem using recursion by building the array bottom-up as the call stack unwinds.
* **Tracing Recursion:** Adding a `console.log("This was printed recursively");` at the start of the function and calling `fibsRec(8)` will output the statement ~7–8 times, demonstrating the depth of recursive calls.

---

## 📦 Part 2: Merge Sort

### `mergeSort` & `merge`
* **Description:** A classic **divide-and-conquer** sorting algorithm. 
  * `mergeSort` recursively splits an array down the middle until it reaches base cases of 0 or 1 element.
  * `merge` takes two already-sorted arrays and combines them into a single sorted array.
* **Test Examples:**
  * `mergeSort([])` $\rightarrow$ `[]`
  * `mergeSort([73])` $\rightarrow$ `[73]`
  * `mergeSort([3, 2, 1, 13, 8, 5, 0, 1])` $\rightarrow$ `[0, 1, 1, 2, 3, 5, 8, 13]`
  * `mergeSort([105, 79, 100, 110])` $\rightarrow$ `[79, 100, 105, 110]`

---

## 🛠️ How to Run

Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

1. Clone the repository or open your project folder.
2. Run the script using Node:
   ```bash
   node fibonacci.js
   node mergeSort.js