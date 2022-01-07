import { TerminalRounded } from "@mui/icons-material";
import { useEffect } from "react";
import { Terminal as Xterm } from 'xterm';
import '../../../node_modules/xterm/css/xterm.css'

function Terminal() {

    useEffect(()=>{
        var curr_line = "";
      var entries = [];
        var term = new Xterm()
        term.open(
            /* element */ document.getElementById("terminal-div"),
            /* focus */   true,
        )

        term.writeln("Welcome to xterm.js")
        term.writeln("term is a local terminal emulation, without a real terminal in the back-end.")
        term.writeln("Type some keys and commands to play around.")
        term.writeln("")
        
        term.prompt = () => {
            if (curr_line) {
              let data = { method: "command", command: curr_line };
            //   ws.send(JSON.stringify(data));
            }
          };
          term.prompt();
          
          term.onKey(e=> {
            var ev=e.domEvent,key=e.key;
            if (ev.keyCode === 13) {
              if (curr_line) {
                entries.push(curr_line);
                term.write("\r\n");
                term.write("web shell $ ");
                term.prompt();
              }
            } else if (ev.keyCode === 8) {
              // Backspace
              if (curr_line) {
                curr_line = curr_line.slice(0, curr_line.length - 1);
                term.write("\b \b");
              }
            } else {
              curr_line += key;
              term.write(key);
            }
          });
    
          // paste value
        //   term.on("paste", function(data) {
        //     curr_line += data;
        //     term.write(data);
        //   });
    });

    return (
        <div id="terminal-div" />
    );
}

export default Terminal;