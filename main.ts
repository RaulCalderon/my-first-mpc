import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js'
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js'
import { z } from 'zod'

// 1.- Create server.
// Main interface for the MCP server.
// It manages the tools, connections, and interactions with clients.

const server = new McpServer({
    name: "Demo",
    version: "1.0.0"
})

// 2.- Set tools.
// Tools are functions that can be called by clients to perform specific tasks.
// In this case, we create a tool to fetch the weather of a city.

server.tool(
    'fetch-weather', // titulo de la herramienta
    'Tool to fetch the weather of a City',
    {
        city: z.string().describe('City name')
    },
    async({city}) =>{
        const response = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=10&language=en&format=json`)
        const data = await response.json()
        
        if (data.length === 0){

            return {
                content: [
                    {
                        type: 'text',
                        text: `No info for ${city}`
                    }
                ]
            }

        }

        const { latitude, longitude } = data.results[0]

        const weatherResponse = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m&current=temperature_2m,precipitation,is_day`)
        const weatherData = await weatherResponse.json()

        return {
            content: [
                {
                    type: 'text',
                    text: JSON.stringify(weatherData, null, 2)
                }
            ]
        }
    }
)

// 3.- Listen for connections.
// The server listens for incoming connections from clients.
// In this case, we use a StdioServerTransport to communicate via standard input/output.
const transport = new StdioServerTransport()
await server.connect(transport)














