import yargs from "yargs/yargs";
import { hideBin } from "yargs/helpers";
import { appendCommitToFile, deleteCommitByTitle } from './utils.js';

const argv = yargs(hideBin(process.argv))
  .command({
    command: "add",
    describe: "Add a new commit",
    builder: {
      title: {
        describe: "Title: ",
        demandOption: true,
        type: "string",
      },
      body: {
        describe: "Body: ",
        demandOption: true,
        type: "string",
      },
    },
    handler(argv) {
      appendCommitToFile(argv.title, argv.body);
    },
  })
  .command({
    command: "delete",
    describe: "Delete a commit by title",
    builder: {
      title: {
        describe: "Title to delete",
        demandOption: true,
        type: "string",
      },
    },
    handler(argv) {
      deleteCommitByTitle(argv.title);
    },
  })
  .parse();