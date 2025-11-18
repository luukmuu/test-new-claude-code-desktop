# Accessing the Stray Dog Web Directory

## Current Status

The Next.js development server is running successfully inside the container on port 3006 and binding to all network interfaces (0.0.0.0:3006).

## The Connection Issue

The "Unable to connect" error in Firefox occurs because:

1. **Container Isolation**: The development server runs inside a Docker/container environment
2. **Port Forwarding**: Port 3006 needs to be forwarded/mapped from the container to your host machine
3. **Network Access**: Your browser on macOS cannot directly access `localhost:3006` without proper port mapping

## Solutions

### Option 1: Configure Port Forwarding (Recommended)

Check your Claude Code Desktop configuration to see how to expose/forward ports from the container to your host machine. You may need to:

1. Stop the Claude Code session
2. Configure port forwarding for port 3006
3. Restart Claude Code and run `npm run dev` again

### Option 2: Use a Different Port

Some ports may already be forwarded by Claude Code. Common development ports include:
- 3000
- 8080
- 8000
- 5000

Would you like me to try a different port?

### Option 3: Check Claude Code Documentation

Refer to Claude Code documentation for:
- How to expose ports from the container
- How to access web services running in the container
- Available proxy or tunnel mechanisms

## Verification

The server IS working correctly. From inside the container:
```bash
curl http://localhost:3006
# Returns: Full HTML page with "Stray Dog - Modern Web Directory"
```

## Next Steps

Please let me know which approach you'd like to take:
1. Configure port forwarding in Claude Code
2. Try a different port
3. Check if there's a Claude Code tunnel/proxy URL available
