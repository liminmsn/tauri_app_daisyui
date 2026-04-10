import AppBar from "@/components/AppBar";
import { useThemeContext } from "@/hook/ThemeProvider";
import "@/design/App.css";

export default function() {
  const context = useThemeContext();
  return <main data-theme={context.val} className="rounded-sm overflow-y-auto" style={{ height: '100vh' }}>
    <AppBar />
    <div className="p-1">
      <button className="btn btn-sm btn-primary">btn</button>
      {/* <span>{greetMsg}123</span>
      <input type="text" className="input input-sm input-primary px-1 mx-1" />
      <button className="btn btn-sm btn-primary" onClick={greet}>Button</button> */}
    </div>
  </main>
}
