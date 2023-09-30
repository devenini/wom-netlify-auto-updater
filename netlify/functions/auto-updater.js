const { schedule } = require("@netlify/functions");
const { WOMClient } = require('@wise-old-man/utils');

// Get the PLAYERS_TO_UPDATE environment variable
const playersToUpdateEnv = process.env.PLAYERS_TO_UPDATE || '';

// Split the string by commas and trim the spaces
const playersToUpdate = playersToUpdateEnv.split(',').map(value => value.trim());

/**
 * Updates the players in the database
 * 
 * @param {string[]} players The players to update
 */
const updatePlayers = async (players) => {
    return import('node-fetch').then(async module => {
        const fetch = module.default; // Define fetch within the dynamic import

        // Create a new WOM client
        const client = new WOMClient();

        for (let index = 0; index < players.length; index++) {
            const player = players[index];

            await client.players.updatePlayer(player);
            console.log(`Updated player ${player}`);
        }

        return {
            statusCode: 200,
        };
    });
};

const handler = async function() {
    try {
        // Check if playersToUpdate is not empty
        if (playersToUpdate.length > 0) {
            await updatePlayers(playersToUpdate);
        } else {
            console.log('No players to update.');
        }

        return {
            statusCode: 200,
        };
    } catch (error) {
        console.error("Error in the handler:", error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: "Internal server error" }),
        };
    }
};

exports.handler = schedule("@hourly", handler);
