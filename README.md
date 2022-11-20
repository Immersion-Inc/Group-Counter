## Group-Counter
This is a simple piece of code designed to count and announce new and lost group members, I've open sourced this because I'm tired of seeing people make something as simple as this a paid service, or a free service with a silly watermark that you cannot remove.
## Installation
1) Clone/Download this repository to somewhere safe on your PC
2) Run `npm i` within the folder using a terminal to install all required packages.
3) Open a text editor and edit the `config.json` file to your desired configurations.
4) Run `node index.js` to start Group-Counter, and you're all done!
## config.json
I've tried to make this as customizeable as possible for developers that may not be very experienced with Node.JS, so I've made a fun config file for you to use 😄!
Most of the indexes should be quite self-explanatory, so I'm going to skip to the final two which are `IncreaseString` & `DecreaseString`!

*IncreaseString* will be sent by the webhook when a group gains members, and *DecreaseString* will be sent by the webhook when the group looses members (🙁). I've made it
really easy to configure these, as I know some people might not like a default message that you can't really change.

You can utilise three different "formats" (idk the official term) to make your string work.
1) **[GROUPNAME]** --> The group name
2) **[N]** --> How many members have been gained/lost
3) **[M]** --> The string "member" but if [N] is greater than 1, it'll be "members" 😀

For example, you could set IncreaseString to something like:

`📣 [GROUPNAME] has gained [N] [M]!` --> **`📣 Scriptbloxian Studios has gained 15 members!`**

## Thank you for reading
Sweet. That should be it for now, please create [an issue](https://github.com/Immersion-Inc/Group-Counter/issues) if anythings wrong.
