import React, { useState } from "react";
import { saveContent } from "../services/contentService";

function Editor() {
  const [content, setContent] = useState("");

  const handleSave = async () => {
    try {
      await saveContent({ content });
      alert("Content saved successfully!");
    } catch (err) {
      console.error("Save failed:", err);
    }
  };

  return (
    <div className="editor">
      <h2>📝 Content Editor</h2>
      <textarea
        rows="10"
        cols="80"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Write your content here..."
      />
      <br />
      <button onClick={handleSave}>Save</button>
    </div>
  );
}

export default Editor;
