import React from "react";
import StudyDeskLayout from "../../../components/StudyDeskLayout/StudyDeskLayout";

const CppGuidePage = () => (
  <StudyDeskLayout
    activeSubItem={"C++ Development"}
  >
    <h2>C++ Development Guide</h2>

    <p>
      Welcome to the C++ Development Guide! This resource aims to help JavaScript developers transition to C++ by highlighting key concepts and features unique to C++. Use this glossary to familiarize yourself with the language's core terminology and paradigms.
    </p>

    <h3>Glossary of C++ Terms</h3>
    <table
      style={{
        width: "100%",
        borderCollapse: "collapse",
        marginTop: "1rem",
        fontFamily: "'Courier New', Courier, monospace",
      }}
    >
      <thead>
        <tr style={{ backgroundColor: "#f4f4f4" }}>
          <th
            style={{
              border: "1px solid #ddd",
              padding: "8px",
              textAlign: "left",
            }}
          >
            Term
          </th>
          <th
            style={{
              border: "1px solid #ddd",
              padding: "8px",
              textAlign: "left",
            }}
          >
            Definition
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style={{ border: "1px solid #ddd", padding: "8px" }}>Pointer</td>
          <td style={{ border: "1px solid #ddd", padding: "8px" }}>
            A variable that stores the memory address of another variable. Pointers enable dynamic memory allocation and manipulation, a concept not directly present in JavaScript.
          </td>
        </tr>
        <tr>
          <td style={{ border: "1px solid #ddd", padding: "8px" }}>Reference</td>
          <td style={{ border: "1px solid #ddd", padding: "8px" }}>
            An alias for an existing variable, allowing it to be accessed and modified without copying. Similar to JavaScript object references but more controlled.
          </td>
        </tr>
        <tr>
          <td style={{ border: "1px solid #ddd", padding: "8px" }}>Template</td>
          <td style={{ border: "1px solid #ddd", padding: "8px" }}>
            A blueprint for creating generic classes and functions, enabling type-safe code reuse. JavaScript lacks a direct equivalent but achieves similar functionality with dynamic typing.
          </td>
        </tr>
        <tr>
          <td style={{ border: "1px solid #ddd", padding: "8px" }}>Destructor</td>
          <td style={{ border: "1px solid #ddd", padding: "8px" }}>
            A special member function that is automatically invoked when an object goes out of scope to clean up resources. JavaScript's garbage collector handles memory cleanup automatically.
          </td>
        </tr>
        <tr>
          <td style={{ border: "1px solid #ddd", padding: "8px" }}>Namespace</td>
          <td style={{ border: "1px solid #ddd", padding: "8px" }}>
            A declarative region that provides scope to identifiers, preventing name collisions. JavaScript handles this with modules or objects.
          </td>
        </tr>
        <tr>
          <td style={{ border: "1px solid #ddd", padding: "8px" }}>Overloading</td>
          <td style={{ border: "1px solid #ddd", padding: "8px" }}>
            The ability to define multiple functions with the same name but different parameters. JavaScript achieves a similar effect with optional parameters or dynamic arguments.
          </td>
        </tr>
        <tr>
          <td style={{ border: "1px solid #ddd", padding: "8px" }}>Static</td>
          <td style={{ border: "1px solid #ddd", padding: "8px" }}>
            A keyword used to define class-level variables and functions that are shared across all instances. JavaScript provides similar functionality with static methods.
          </td>
        </tr>
      </tbody>
    </table>

    <br />
    <h2>Memory Management in C++</h2>

    <p>
      Mastering memory management is essential for C++ development. Unlike JavaScript, where memory is automatically handled by a garbage collector, C++ gives developers direct control over memory allocation and deallocation. Here’s a comprehensive guide to understanding memory management in C++:
    </p>

    <h3>Key Concepts</h3>
    <ul>
      <li>
        <strong>Stack vs. Heap Memory:</strong>
        <ul>
          <li>
            <strong>Stack Memory:</strong> Automatically managed, fast, but
            limited in size. Variables are destroyed when they go out of scope.
          </li>
          <li>
            <strong>Heap Memory:</strong> Used for dynamic memory allocation.
            Must be manually managed using <code>new</code> and{" "}
            <code>delete</code>.
          </li>
        </ul>
      </li>
      <li>
        <strong>Pointers:</strong> Variables that store memory addresses. They
        enable dynamic memory manipulation but require careful handling to
        avoid memory leaks.
      </li>
      <li>
        <strong>References:</strong> Aliases for existing variables, safer than
        pointers. References must always point to valid data.
      </li>
      <li>
        <strong><code>new</code> and <code>delete</code>:</strong> Operators for
        dynamic memory allocation and deallocation.
      </li>
      <li>
        <strong>Memory Leaks:</strong> Failure to free allocated memory leads to
        leaks, consuming resources over time.
      </li>
      <li>
        <strong>Smart Pointers:</strong> Modern C++ features like{" "}
        <code>std::unique_ptr</code> and <code>std::shared_ptr</code> that
        automate memory management and prevent leaks.
      </li>
    </ul>

    <h3>Examples</h3>
    <pre style={{ backgroundColor: "#f4f4f4", padding: "1rem", borderRadius: "5px" }}>
      {`// Stack Memory Example
void example() {
    int x = 10; // Allocated on the stack
} // x is automatically destroyed here

// Heap Memory Example
void example() {
    int* ptr = new int(10); // Allocated on the heap
    delete ptr;            // Deallocated manually
}`}
    </pre>

    <h3>Types to Memorize</h3>
    <p>C++ is a statically typed language, so understanding and memorizing types is essential. Here's a categorized list:</p>
    <ul>
      <li>
        <strong>Fundamental Types:</strong>
        <ul>
          <li><code>int</code>, <code>short</code>, <code>long</code>, <code>unsigned</code></li>
          <li><code>float</code>, <code>double</code>, <code>long double</code></li>
          <li><code>char</code>, <code>wchar_t</code>, <code>bool</code></li>
        </ul>
      </li>
      <li>
        <strong>Derived Types:</strong>
        <ul>
          <li><code>int*</code> (pointers)</li>
          <li><code>int&</code> (references)</li>
          <li>Arrays (e.g., <code>int arr[10];</code>)</li>
          <li>Functions (e.g., <code>int add(int a, int b);</code>)</li>
        </ul>
      </li>
      <li>
        <strong>User-Defined Types:</strong> <code>struct</code>, <code>class</code>, <code>union</code>, <code>enum</code>
      </li>
      <li>
        <strong>Type Modifiers:</strong> <code>const</code>, <code>volatile</code>, <code>mutable</code>
      </li>
      <li>
        <strong>Specialized Types:</strong>
        <ul>
          <li><code>std::string</code></li>
          <li><code>std::array</code>, <code>std::vector</code>, <code>std::tuple</code></li>
        </ul>
      </li>
      <li>
        <strong>Modern C++ Types:</strong> <code>auto</code>, <code>decltype</code>, <code>nullptr</code>, <code>std::shared_ptr</code>, <code>std::unique_ptr</code>
      </li>
    </ul>

  </StudyDeskLayout>
);

export default CppGuidePage;
