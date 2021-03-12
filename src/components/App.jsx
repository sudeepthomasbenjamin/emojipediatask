import React from "react";
import Entry from "../Entry";
import emojipedia from "../emojipedia";

function args(emojis) {
  return (
    <Entry
      key={emojis.id}
      name={emojis.name}
      emoji={emojis.emoji}
      desc={emojis.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary"> {emojipedia.map(args)} </dl>
    </div>
  );
}

export default App;
