import "./App.css";
import AppBar from "./components/AppBar";
import { useState } from "react";
import { invoke } from "@tauri-apps/api/core";
import { useThemeContext } from "./hook/ThemeProvider";

function App() {
  // const [greetMsg, setGreetMsg] = useState("");
  // const [name, setName] = useState("");

  async function greet() {
    // Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
    // setGreetMsg(await invoke("greet", { name }));
  }
  const context = useThemeContext();

  return <main data-theme={context.val} className="rounded-md theme_1 overflow-y-auto" style={{ height: '100vh' }}>
    <AppBar />
    <div className="p-1" style={{ height: '140vh' }}>
      <button className="btn btn-primary">Button</button>
    </div>
  </main>
}

export default App;
