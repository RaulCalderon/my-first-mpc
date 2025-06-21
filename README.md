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

## License
This project is licensed under the MIT License. See the `LICENSE` file for details.

---

> Example project to learn how to create MCP tools and consume public APIs.
