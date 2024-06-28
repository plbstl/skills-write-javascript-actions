const core = require('@actions/core');
const getJoke = require('./joke');

async function run() {
  const joke = await getJoke();
  console.log(joke);
  core.setOutput('joke-output', joke);
}

run();
