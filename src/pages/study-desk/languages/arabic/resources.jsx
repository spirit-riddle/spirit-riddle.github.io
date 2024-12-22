import React from "react";
import StudyDeskLayout from "../../../../components/StudyDeskLayout/StudyDeskLayout";
import arabicTabs from "./_tabs.json"

const StudyDeskPage = () => (
  <StudyDeskLayout
    tabs={arabicTabs.tabs}
    activeTabIndex={0}
    activeSubItem={"Arabic"}
  >
    <h2>Resources for Learning Arabic</h2>

    <p>
      Learning Arabic is a journey into one of the most beautiful and widely spoken languages in the world.
      To start, mastering pronunciation is essential for understanding and communicating effectively.
      Below is a resource to help you get familiar with Arabic sounds, starting with the basics of pronunciation.
    </p>

    <div style={{ textAlign: "center", margin: "20px 0" }}>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/8_60iWXl7dw?start=267"
        title="Arabic Pronunciation Guide"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
    <br />
    <p>
      The Arabic alphabet is unique and versatile, consisting of 28 letters that adapt their shape based on their position in a word.
      These letters can take on four forms: <strong>isolated</strong> (when the letter stands alone), <strong>initial</strong> (when it starts a word),
      <strong>medial</strong> (when it occurs in the middle), and <strong>final</strong> (when it ends a word).
      Understanding these forms is crucial for reading and writing in Arabic, as the visual changes ensure a fluid connection between letters,
      giving the script its characteristic elegance and readability.
    </p>
    <div style={{ textAlign: "center", margin: "20px 0" }}>
      <img
        src="/training/arabic/arabic-alphabet.png"
        alt="Arabic Alphabet Forms"
        style={{ maxWidth: "100%", border: "1px solid #ddd", borderRadius: "8px" }}
      />
    </div>
    <p style={{ textAlign: "center" }}>
      For more detailed information on the Arabic script and its forms, refer to the{" "}
      <a
        href="https://www.loc.gov/catdir/cpso/romanization/arabic.pdf?utm_source=chatgpt.com"
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: "#007acc", textDecoration: "none", fontWeight: "bold" }}
      >
        Arabic Romanization Table
      </a>{" "}
      provided by the Library of Congress.
    </p>

    <br />
    <p>
      Arabic Grammar video playlist for learning how to write and speak words and sentences in Arabic.
    </p>
    <div style={{ textAlign: "center", margin: "20px 0" }}>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/0EMtQ64vS5Q?list=PL1M2O2sAd6vleEuMk58NyF1vAdfSGZtEI"
        title="Arabic Grammar Video Playlist"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>

      <br />

      {/* In Progress Section */}
      <section
        style={{
          backgroundColor: "#fffbcc",
          borderRadius: "8px",
          padding: "1rem",
          marginTop: "2rem",
          textAlign: "center",
          color: "#555",
          fontSize: "1rem",
        }}
      >
        <p>
          <strong>In Progress:</strong> Content and insights are continuously being developed. Stay tuned for updates!
        </p>
      </section>
    </div>

  </StudyDeskLayout>
);

export default StudyDeskPage;
