import React, { useState } from 'react';
import Editor from '@monaco-editor/react';
import {
  Play,
  Copy,
  RotateCcw,
  Terminal,
  Code2,
  FileCode2
} from 'lucide-react';

const DevLab = () => {
  const [activeTab, setActiveTab] = useState('web');
  const [webTab, setWebTab] = useState('html');
  const [theme, setTheme] = useState('dark');

  const [html, setHtml] = useState(`<h1>Welcome to Tech Routes</h1>
<p>Build modern projects here.</p>
<button>Click Me</button>`);

  const [css, setCss] = useState(`body {
  font-family: Arial;
  padding: 20px;
}

h1 {
  color: blue;
}`);

  const [js, setJs] = useState(`document.querySelector("button").onclick = function() {
  alert("Welcome to Tech Routes");
};`);

  const [python, setPython] = useState(`print("Hello Python")`);

  const [java, setJava] = useState(`public class Main {
  public static void main(String[] args) {
    System.out.println("Hello Java");
  }
}`);

  const [srcDoc, setSrcDoc] = useState('');
  const [output, setOutput] = useState('');

  const copyCode = () => {
    if (activeTab === 'web') navigator.clipboard.writeText(html + css + js);
    if (activeTab === 'python') navigator.clipboard.writeText(python);
    if (activeTab === 'java') navigator.clipboard.writeText(java);
  };

  const resetCode = () => {
    setHtml(`<h1>Welcome to Tech Routes</h1>`);
    setCss(`body { font-family: Arial; }`);
    setJs(`console.log("Hello Tech Routes");`);
    setPython(`print("Hello Python")`);
    setJava(`public class Main {
  public static void main(String[] args) {
    System.out.println("Hello Java");
  }
}`);
    setOutput('');
    setSrcDoc('');
  };

  const runCode = async () => {
    if (activeTab === 'web') {
      const source = `
      <html>
      <style>${css}</style>
      <body>
      ${html}
      <script>${js}<\/script>
      </body>
      </html>
      `;
      setSrcDoc(source);
      setOutput('');
      return;
    }

    let code = '';
    let language_id = 71;

    if (activeTab === 'python') {
      code = python;
      language_id = 71;
    }

    if (activeTab === 'java') {
      code = java;
      language_id = 62;
    }

    setOutput('Running...');

    try {
      const response = await fetch(
        'https://ce.judge0.com/submissions?base64_encoded=false&wait=true',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            source_code: code,
            language_id,
          }),
        }
      );

      const data = await response.json();

      setOutput(
        data.stdout ||
        data.stderr ||
        data.compile_output ||
        'No Output'
      );
    } catch {
      setOutput('Execution Failed');
    }
  };

  return (
    <div className={`h-screen flex flex-col ${
      theme === 'dark'
        ? 'bg-[#020617] text-white'
        : theme === 'light'
        ? 'bg-white text-black'
        : 'bg-sky-900 text-white'
    }`}>

      {/* Header */}
      <div className="flex items-center justify-between px-6 py-4 bg-[#0f172a] border-b border-white/10">

        <div className="flex items-center gap-3">
          <Code2 className="text-blue-500" />
          <span className="font-bold text-xl">Tech Routes DevLab</span>
        </div>

        {/* Main Tabs */}
        <div className="flex gap-3">
          {['web', 'python', 'java'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2 rounded-xl font-semibold ${
                activeTab === tab
                  ? 'bg-blue-600'
                  : 'bg-white/5 hover:bg-white/10'
              }`}
            >
              {tab.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Actions */}
        <div className="flex gap-3">

          <select
            value={theme}
            onChange={(e) => setTheme(e.target.value)}
            className="px-3 py-2 rounded-xl bg-white/5 border border-white/10"
          >
            <option value="dark">Dark</option>
            <option value="light">Light</option>
            <option value="ocean">Ocean</option>
          </select>

          <button onClick={copyCode} className="p-3 rounded-xl bg-white/5">
            <Copy size={18} />
          </button>

          <button onClick={resetCode} className="p-3 rounded-xl bg-white/5">
            <RotateCcw size={18} />
          </button>

          <button
            onClick={runCode}
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-500 font-bold"
          >
            <Play size={18} />
            Run
          </button>
        </div>
      </div>

      {/* Main */}
      <div className="flex flex-1 p-4 gap-4">

        {/* Editor */}
        <div className="w-1/2 rounded-2xl overflow-hidden border border-white/10 bg-[#0f172a] flex flex-col">

          <div className="px-4 py-3 bg-[#111827] border-b border-white/10 flex justify-between">

            <div className="flex items-center gap-2 text-sm text-slate-400">
              <FileCode2 size={16} />
              Editor Workspace
            </div>

            {activeTab === 'web' && (
              <div className="flex gap-2">
                {['html', 'css', 'js'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setWebTab(tab)}
                    className={`px-3 py-1 rounded-lg text-sm ${
                      webTab === tab ? 'bg-blue-600' : 'bg-white/5'
                    }`}
                  >
                    {tab.toUpperCase()}
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="flex-1">

            {activeTab === 'web' && webTab === 'html' && (
              <Editor
                height="100%"
                language="html"
                value={html}
                onChange={(value) => setHtml(value || '')}
                theme={theme === 'light' ? 'light' : 'vs-dark'}
              />
            )}

            {activeTab === 'web' && webTab === 'css' && (
              <Editor
                height="100%"
                language="css"
                value={css}
                onChange={(value) => setCss(value || '')}
                theme={theme === 'light' ? 'light' : 'vs-dark'}
              />
            )}

            {activeTab === 'web' && webTab === 'js' && (
              <Editor
                height="100%"
                language="javascript"
                value={js}
                onChange={(value) => setJs(value || '')}
                theme={theme === 'light' ? 'light' : 'vs-dark'}
              />
            )}

            {activeTab === 'python' && (
              <Editor
                height="100%"
                language="python"
                value={python}
                onChange={(value) => setPython(value || '')}
                theme={theme === 'light' ? 'light' : 'vs-dark'}
              />
            )}

            {activeTab === 'java' && (
              <Editor
                height="100%"
                language="java"
                value={java}
                onChange={(value) => setJava(value || '')}
                theme={theme === 'light' ? 'light' : 'vs-dark'}
              />
            )}

          </div>
        </div>

        {/* Output */}
        <div className="w-1/2 rounded-2xl overflow-hidden border border-white/10 bg-black flex flex-col">

          <div className="px-4 py-3 bg-[#111827] border-b border-white/10 flex items-center gap-2 text-sm text-slate-400">
            <Terminal size={16} />
            Live Output
          </div>

          {activeTab === 'web' ? (
            <iframe
              srcDoc={srcDoc}
              title="output"
              sandbox="allow-scripts"
              className="w-full h-full bg-white"
            />
          ) : (
            <div className="flex-1 p-6 text-green-400 font-mono bg-black">
              <pre>{output || 'Run code to see output...'}</pre>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default DevLab;