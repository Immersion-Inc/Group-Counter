const axios = require("axios");
const config = require("./config.json");
const url = "https://groups.roblox.com/v1/groups/";
const { WebhookClient } = require("discord.js");

var currentMembers = null;

if (config.Cooldown < 3) {
  console.log(
    "Your cooldown is too high, you may face problems; we suggest setting it to 3 seconds or higher."
  );
}

async function post() {
  var request;

  try {
    request = await axios({
      method: "get",
      url: url + config.GroupId,
    });
  } catch (error) {
    console.log(
      "⚠️ Something went wrong while fetching group data, make sure your GroupId is correct! ⚠️"
    );
    process.exit();
  }

  const data = request["data"];
  const members = data["memberCount"];
  const name = data["name"];

  if (currentMembers == null) {
    currentMembers = members;
  } else {
    const diff = members - currentMembers;
    currentMembers = members;
    var content;

    if (diff !== 0) {
      if (diff > 0) {
        var p = "";
        if (diff !== 1) {
          p = "s";
        }

        content = config.IncreaseString.replace("[GROUPNAME]", name)
          .replace("[N]", diff)
          .replace("[M]", "member" + p);
      } else if (diff < 0) {
        var p = "";
        if (Math.abs(diff) !== 1) {
          p = "s";
        }

        content = config.DecreaseString.replace("[GROUPNAME]", name)
          .replace("[N]", Math.abs(diff))
          .replace("[M]", "member" + p);
      }

      const webhookInfo = require("url")
        .parse(config.WebhookUrl)
        .pathname.split("/");
      const webhook = new WebhookClient({
        id: webhookInfo[3],
        token: webhookInfo[4],
      });
      webhook.send({
        content: content,
      });
    }
  }

  await new Promise((r) => setTimeout(r, config.Cooldown * 1000));
  post();
}

post();
