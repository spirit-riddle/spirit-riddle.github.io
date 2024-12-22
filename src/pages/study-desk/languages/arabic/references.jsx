import React from "react";
import StudyDeskLayout from "../../../../components/StudyDeskLayout/StudyDeskLayout";
import arabicTabs from "./_tabs.json"

const ArabicReferencesPage = () => (
  <StudyDeskLayout
    tabs={arabicTabs.tabs}
    activeTabIndex={2}
    activeSubItem={"Arabic"}
  >
    <h2>References for Arabic Course</h2>
    <p>
      This table contains all the resources and references used in the Arabic course. Use it to revisit sources for deeper study or to explore more from the content creators.
    </p>

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
            Reference
          </th>
          <th
            style={{
              border: "1px solid #ddd",
              padding: "8px",
              textAlign: "left",
            }}
          >
            Link
          </th>
          <th
            style={{
              border: "1px solid #ddd",
              padding: "8px",
              textAlign: "left",
            }}
          >
            Notes
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td
            style={{
              border: "1px solid #ddd",
              padding: "8px",
            }}
          >
            @TheArabicCoach
          </td>
          <td
            style={{
              border: "1px solid #ddd",
              padding: "8px",
            }}
          >
            <a
              href="https://www.youtube.com/@TheArabicCoach"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#007acc", textDecoration: "none" }}
            >
              The Arabic Coach
            </a>
          </td>
          <td
            style={{
              border: "1px solid #ddd",
              padding: "8px",
            }}
          >
            Videos selected to teach proper pronunciation of the Arabic alphabet, helping you overcome any accent-related challenges.
          </td>
        </tr>
        <tr>
          <td
            style={{
              border: "1px solid #ddd",
              padding: "8px",
            }}
          >
            Library of Congress
          </td>
          <td
            style={{
              border: "1px solid #ddd",
              padding: "8px",
            }}
          >
            <a
              href="https://www.loc.gov/catdir/cpso/romanization/arabic.pdf?utm_source=chatgpt.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#007acc", textDecoration: "none" }}
            >
              Arabic Romanization Table
            </a>
          </td>
          <td
            style={{
              border: "1px solid #ddd",
              padding: "8px",
            }}
          >
            A comprehensive guide to Arabic script romanization, including forms and transliteration rules.
          </td>
        </tr>
        <tr>
          <td
            style={{
              border: "1px solid #ddd",
              padding: "8px",
            }}
          >
            @ArabicKhatawaat
          </td>
          <td
            style={{
              border: "1px solid #ddd",
              padding: "8px",
            }}
          >
            <a
              href="https://www.youtube.com/@ArabicKhatawaat"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#007acc", textDecoration: "none" }}
            >
              Arabic Khatawaat
            </a>
          </td>
          <td
            style={{
              border: "1px solid #ddd",
              padding: "8px",
            }}
          >
            Playlists selected to teach foundational Arabic grammar, providing a clear starting point for beginners.
          </td>
        </tr>
      </tbody>
    </table>
  </StudyDeskLayout>
);

export default ArabicReferencesPage;
