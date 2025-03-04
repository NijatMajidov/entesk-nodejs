import fs from "fs";

export const getCommitsFromFile = () => {
  if (fs.existsSync("commits.txt")) {
    const data = fs.readFileSync("commits.txt", "utf-8");
    return data ? data.split("\n\n").filter(Boolean) : [];
  }
  return [];
};

export const appendCommitToFile = (title, body) => {
  const commits = getCommitsFromFile();

  if (commits.some(commit => commit.startsWith(`Title: ${title}\n`))) {
    console.log(`Commit with title "${title}" already exists.`);
    return;
  }

  const newCommit = `Title: ${title}\nBody: ${body}\n`;
  fs.appendFileSync("commits.txt", newCommit + "\n");
  console.log(`New commit added with title: ${title}`);
};

export const deleteCommitByTitle = (title) => {
  const commits = getCommitsFromFile();
  const filteredCommits = commits.filter(commit => !commit.startsWith(`Title: ${title}\n`));

  if (commits.length === filteredCommits.length) {
    console.log(`No commit found with title: "${title}"`);
    return;
  }

  fs.writeFileSync("commits.txt", filteredCommits.join("\n\n"));
  console.log(`Commit with title "${title}" has been deleted.`);
};