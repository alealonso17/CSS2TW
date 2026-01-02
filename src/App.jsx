import { useState } from "react"
import { Header } from "./components/Header"
import { Footer } from "./components/Footer"
import { ArrowRight } from "lucide-react"
import { convertCssToTailwind } from "./converter/convertCssToTailwind"
import Editor from "@monaco-editor/react"
import { cssToTailwindMap } from "./converter/cssToTailwindMap"

function Button({ title }) {
  return (
    <div className="flex items-center gap-3 select-none">
      <button className="w-4 h-4 rounded-md border border-gray-500 cursor-pointer" />
      <h4 className="text-gray-300 text-[12px]">{title}</h4>
    </div>
  )
}
function handleEditorMount(editor, monaco) {
  //Desactiva validaciones CSS (subrayado rojo)
  monaco.languages.css.cssDefaults.setDiagnosticsOptions({
    validate: false,
  })

  // Autocomplete
  monaco.languages.registerCompletionItemProvider("css", {
    triggerCharacters: [":", "-", " "],
    provideCompletionItems(model, position) {
      const line = model.getLineContent(position.lineNumber)
      const word = model.getWordUntilPosition(position)

      // PROPIEDADES
      if (!line.includes(":")) {
        return {
          suggestions: Object.keys(cssToTailwindMap).map((prop) => ({
            label: prop,
            kind: monaco.languages.CompletionItemKind.Property,
            insertText: `${prop}: `,
            range: {
              startLineNumber: position.lineNumber,
              endLineNumber: position.lineNumber,
              startColumn: word.startColumn,
              endColumn: word.endColumn,
            },
          })),
        }
      }

      // VALORES
      const property = line.split(":")[0].trim()
      const values = cssToTailwindMap[property]

      if (!values) return { suggestions: [] }

      return {
        suggestions: Object.keys(values).map((value) => ({
          label: value,
          kind: monaco.languages.CompletionItemKind.Value,
          insertText: value,
          range: {
            startLineNumber: position.lineNumber,
            endLineNumber: position.lineNumber,
            startColumn: word.startColumn,
            endColumn: word.endColumn,
          },
        })),
      }
    },
  })
}

export function App() {
  const [cssInput, setCssInput] = useState(
    `display: flex;
justify-content: center;
align-items: center;`
  )
  const [tailwindOutput, setTailwindOutput] = useState("")

  function handleConvert() {
    setTailwindOutput(convertCssToTailwind(cssInput))
  }

  return (
    <main className="bg-[#0d1118] min-h-screen flex flex-col items-center p-10 gap-10">
      <Header />
      <div className="flex items-center gap-3 rounded-xl border border-[#232a39] bg-[#0e141f] px-5 py-3 text-sm text-gray-400">
        <span className="font-mono">
          Feel kind? Give the repo a star ⭐
        </span>

        <a
          href="https://github.com/alealonso17/CSS2TW"
          target="_blank"
          rel="noopener noreferrer"
          className="ml-2 inline-flex items-center gap-1 rounded-md border border-gray-700/60 bg-gray-800/40 px-3 py-1 text-xs text-gray-300 transition
               hover:bg-gray-700/60 hover:text-white"
        >
          GitHub
        </a>
      </div>
      <article className="flex gap-10 items-center">
        {/* CSS INPUT */}
        <section className="flex flex-col gap-1">
          <h4 className="font-mono text-sm text-gray-500 px-1">CSS Input</h4>
          <div className="h-80 w-[420px] rounded-xl border border-[#232a39] bg-[#0e141f] overflow-hidden">
            <Editor
              height="100%"
              language="css"
              theme="vs-dark"
              value={cssInput}
              onChange={(value) => setCssInput(value ?? "")}
              onMount={handleEditorMount}
              options={{
                minimap: { enabled: false },
                fontSize: 12,
                fontFamily: "JetBrains Mono",
                padding: { top: 12 },

                quickSuggestions: {
                  other: true,
                  comments: false,
                  strings: false,
                },
                suggestOnTriggerCharacters: true,
                wordBasedSuggestions: false,
              }}
            />
          </div>
        </section>

        {/* BUTTON */}
        <button
          onClick={handleConvert}
          className="cursor-pointer group flex items-center gap-2 rounded-lg bg-gradient-to-r text-white  from-purple-500 to-blue-500 px-6 py-3 transition-all hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
        >
          Convert
          <ArrowRight className="w-5 h-5 transition-transform duration-200 ease-out group-hover:translate-x-1" />
        </button>

        {/* OUTPUT */}
        <section className="flex flex-col gap-1">
          <h4 className="font-mono text-sm text-gray-500 px-1">
            Tailwind Output
          </h4>
          <div className="h-80 w-[420px] rounded-xl border border-[#232a39] bg-[#0e141f] overflow-hidden">
            <Editor
              height="100%"
              language="css"
              theme="vs-dark"
              value={tailwindOutput}
              onMount={handleEditorMount}
              options={{
                readOnly: true,
                minimap: { enabled: false },
                fontSize: 12,
                fontFamily: "JetBrains Mono",
                padding: { top: 12 },
              }}
            />
          </div>
        </section>
      </article>

      <Footer />
    </main>
  )
}