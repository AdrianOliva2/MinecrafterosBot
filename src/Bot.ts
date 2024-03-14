import { Client, Events, GatewayIntentBits, Partials } from 'discord.js'
import 'dotenv/config'

require('dotenv').config()
const token = process.env.TOKEN

console.log('Bot is starting...')

const client = new Client({
  intents: [GatewayIntentBits.Guilds],
  partials: [
    Partials.Channel,
    Partials.Message,
    Partials.User,
    Partials.Reaction
  ]
})

client.once(Events.ClientReady, (readyClient) => {
  console.log(`Ready! Logged in as ${readyClient.user.tag}!`)
})

console.log(token)
client.login(token)
