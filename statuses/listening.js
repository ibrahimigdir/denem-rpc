const
  rpcGenerator = require("discordrpcgenerator"),

  // Add your client id in the index.js file
  SMALL_IMAGE = "nike",
  LARGE_TEXT = "I AM MUSIC",
  IMAGE = "cactus",
  SONG = "instagram.com/ibrahim.igdr",
  ARTIST = "Travis Scott";

module.exports = (client, CLIENT_ID) => rpcGenerator.getRpcImage(CLIENT_ID, IMAGE)
  .then(image => client.user.setPresence(
    rpcGenerator.createSpotifyRpc(client)
      .setApplicationId(CLIENT_ID)
      .setAssetsLargeImage(image.id)
      .setAssetsLargeText(LARGE_TEXT)
      .setAssetsSmallImage("spotify:ab67706c0000bebb46336eab29b279c68724d743")
      .setDetails(SONG)
      .setStartTimestamp("" || Date.now())
      .setEndTimestamp("253402300799000" || Date.now())
      .setState(ARTIST)
      .toDiscord()
  ));
