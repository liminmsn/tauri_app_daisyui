import { Icon } from "@iconify/react";
import { window } from "@tauri-apps/api";

const win = window.getCurrentWindow();

export default function () {
    return <div className="drag sticky top-0 w-full shadow-sm theme_2 backdrop-blur-xs flex justify-between" style={{ padding: '2px' }}>
        <div className="no_drag select-none inline-flex items-center">
            <img src="/vite.svg" className="px-1" style={{ height: '20px ' }} />
            <span>标题</span>
        </div>
        <div className="no_drag flex gap-x-0.2">
            <Icon icon="line-md:minus-square-twotone" height={24} className="cursor-pointer" onClick={() => win.minimize()} />
            <Icon icon="line-md:close-circle-twotone" height={24} className="text-red-400 cursor-pointer" onClick={() => win.close()} />
        </div>
    </div>
}