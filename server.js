//REQUIRE FFMPEG
//OUTPUT ws://{{url}}:5000


Stream = require('node-rtsp-stream')

const argv = process.argv
const port = argv[argv.indexOf("-p") + 1];
const url = argv[argv.indexOf("-u") + 1];
stream = new Stream({
  name: 'name',
  streamUrl: url,
  wsPort: port,
  ffmpegOptions: { // options ffmpeg flags
    '-stats': '', // an option with no neccessary value uses a blank string
    '-r': 30 // options with required values specify the value after the key
  }
})