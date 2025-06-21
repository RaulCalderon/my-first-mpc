# MCP Weather Server Demo

This project is a sample MCP (Model Context Protocol) server that exposes a tool to fetch the weather for any city using the Open-Meteo API.

## Features
- Basic MCP server using `@modelcontextprotocol/sdk` and `zod` for validation.
- `fetch-weather` tool that takes a city name and returns current weather information.
- Uses public APIs for geocoding and weather data.

## Installation
1. Clone this repository:
   ```sh
   git clone https://github.com/your-username/your-repo.git
   cd your-repo
   ```
2. Install dependencies:
   ```sh
   npm install
   ```

## Usage
Run the MCP server:
```sh
npx tsx main.ts
```

This will start the server and you can connect from any compatible MCP client.

## Note:
You can also run this to use the inspector on the web browser.
```sh
npx -y @modelcontextprotocol/inspector npx -y tsx main.ts
```
1.- Run the command.
2.- Go to the link provided in console.
3.- Configure the enviroment this way:
    - Transport Type: STDIO
    - Command: npx
    - Arguments: -y tsx main.ts
    - Proxy Session Token: the token generated when start the server. (MCP_PROXY_AUTH_TOKEN=YOUR_TOKEN)
4.- Connect -> List Tools -> Select your MCP -> Start using it.

## Main structure
- `main.ts`: Source code for the server and weather tool.
- `package.json`: Project dependencies and scripts.

## BONUS 

I attatched a json file (with a different name), which is used on Claude an AI Assistant built by Anthropic. 
In this file, we can use the AI to do incredible things, such as the following and many more:

## 1.- Get access to folders and interact with your computer. 📁

**https://github.com/modelcontextprotocol/servers/tree/main/src/filesystem**

`
"mcpServers": {
   "filesystem": {
      "command": "npx",
      "args": [
        "-y",
        "@modelcontextprotocol/server-filesystem",
        "/Users/username/Desktop",
        "/path/to/other/allowed/dir"
      ]
   }
}
`

Tasks examples (via prompts):
Give permission to access the Desktop
   - Give instructions to move any .mp4 file to a single folder.
   - Ask to remove any file larger than 20 MB.
   - Create a script for a video.
etc.


## 2.- Get access to a database and start prompting simple or complex tasks. 🤖

**https://github.com/modelcontextprotocol/servers-archived/tree/main/src/postgres**

`
"postgres": {
   "command": "npx",
   "args": [
     "-y",
     "@modelcontextprotocol/server-postgres",
     "postgresql://DB_USER:DB_PASS@localhost:5432/DB_NAME"
   ]
}
`

Tasks examples (via prompts):
- Truncate a single table
- Get all data from a single user and export it into a csv file.
- Get all activity from a user that has root privileges on diferent tables.
etc.

You can install Claude Agent and configure the json file like this to test them.
*[Just make sure you are using the Claude configuration in both cases.]*

## NOTE
the 'weather' element in the configuration file, is the MCP  we just created. Yes, you can using on Claude too.

## License
This project is licensed under the MIT License. See the `LICENSE` file for details.

---

> Example project to learn how to create MCP tools and consume public APIs.
