/*
When started with the --inspect switch, a Node.js process listens for a
debugging client. By default, it will listen at host and port:
127.0.0.1:9229.

Each process is also assigned a unique UUID (https://tools.ietf.org/html/rfc4122).

Inspector clients must know and specify host address, prot, and UUID to connect.
A full URL will look something like "ws://127.0.0.1:9229/hex-hex-hex-hex-hex".

Node.js will also start listening for debugging messages if it receives a
SIGUSR1 signal. (not available on Windows). In Node.js 8 and later, this
activates the Inspector API.
================================================================================
SECURITY NOTE:
Since the debugger has full access to the Node.js execution environment, a
malicious actor can connect to this port and execute arbitrary code on behalf
of the Node.js process. i.e. don't expose the debug port publicly.

Node.js has a section for 'Enabling remote debugging scenarios' safely for
client connection if ever necessary.
================================================================================

Local applications have full access to the inspector. Even if you bind the
inspector port to 127.0.0.1 (the default), any applications running locally on
the machine will have unrestricted access.

For further information on use, see:
https://nodejs.org/api/inspector.html
*/