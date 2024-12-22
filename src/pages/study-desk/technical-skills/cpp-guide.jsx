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
  </StudyDeskLayout>
);

export default CppGuidePage;
