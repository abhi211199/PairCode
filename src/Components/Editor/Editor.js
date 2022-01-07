import Editor, { DiffEditor, useMonaco, loader } from "@monaco-editor/react";

function App() {
  return (
    <div className="">
      <Editor
        height="50vh"
        defaultLanguage="javascript"
        defaultValue="// some comment"
      />
    </div>
  );
}

export default App;
