# discord-emoji-grabber

Downloads emojis from all your discord servers.
(based off marceau-maubert's code)

# Note

You will need to obtain your token ID from the Discord Web interface.

You will need to rename discord.js.old in node_modules to discord.js once 'npm i' has been run.

## Usage

Tested only on Windows 10 x64 only, with Node version 15.5.1

[node.js](https://nodejs.org/en/) and npm (included with node.js) are required to get this going.

1. Clone this repository.
2. Open a command prompt / terminal inside of the repository's folder.
3. Run `npm i`. This will install the script's dependencies.
    - Ignore any warnings.
4. Enter your discord token into the relevant line in index.js
5. Run `node index.js`. This will run the script.
6. The script should now start downloading every custom emoji of every server you're in, one by one, in an adjacent folder called `emojis`. It'll exit automatically when it's done.

## Troubleshooting

On Linux, run

`sudo npm i`

If vulnerabilities were found, run

`sudo npm audit fix`

If that doesn't work, try

`sudo npm audit fix --force`

You may still get warnings but the script should now work properly.

`node index.js`
