# WOM Netlify Auto Updater

Auto-update OSRS Wise Old Man progress tracker via Netlify scheduled functions.

## About

This project is a Netlify-based auto-updater for the OSRS Wise Old Man progress tracker. It allows you to automatically update players data using [Wise Old Man API](https://docs.wiseoldman.net/) and [Netlify scheduled functions](https://docs.netlify.com/functions/scheduled-functions/#getting-started).

## Getting Started

To get started with this project, follow these steps:

1. **Fork this Repository:**

   Fork this repository to your own GitHub account. Click the "Fork" button at the top right of this page.

2. **Set Up Environment Variables:**

   - Go to your Netlify dashboard.
   - Select your site.
   - Navigate to "Settings" > "Build & deploy" > "Environment" > "Environment variables."
   - Add an environment variable named `PLAYERS_TO_UPDATE` and set it to a comma-separated list of players you want to update.

3. **Deploy to Netlify:**

   - Connect your forked repository to Netlify.
   - Deploy your site to Netlify.

## Environment Variables

- `PLAYERS_TO_UPDATE`: A comma-separated list of players you want to update.

## Usage

Once you've completed the setup, the Netlify scheduled function will automatically update the specified players on the OSRS Wise Old Man progress tracker at every hour.

> [!WARNING]
> Netlify functions have a timeout limit of 10 seconds. We recommend limiting the number of players to update to 6-7 players maximum to ensure the function executes within the timeout limit.

## Dependencies

- `@netlify/functions`: "^2.1.0"
- `@wise-old-man/utils`: "^3.0.3"
- `node-fetch`: "^3.3.2"

## Contributing

Feel free to contribute to this project by opening issues or submitting pull requests. Your contributions are welcome!

## License

This project is licensed under the ISC License.
