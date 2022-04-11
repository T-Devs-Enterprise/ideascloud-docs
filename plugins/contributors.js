const fetch = require("node-fetch");

module.exports = function () {
  return async (tree, { data }) => {
    if (data.fetchContributors) {
      const contributors = await fetch(
        "https://api.github.com/repos/T-Devs-Enterprise/ideascloud-docs/contributors"
      ).then((res) => res.json());

      if (Array.isArray(contributors)) {
        require("fs").writeFileSync(
          "./contributors.json",
          JSON.stringify(contributors, null, 2)
        );
      }

      const contributorsFromFile = JSON.parse(
        require("fs").readFileSync("./contributors.json", "utf8")
      );

      //data.$contributors = [...new Set(contributors)];
      data.$contributors = contributorsFromFile;
    }
    return tree;
  };
};
