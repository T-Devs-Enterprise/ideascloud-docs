const fetch = require("node-fetch");

module.exports = function () {
  return async (tree, { data }) => {
    if (data.fetchContributors) {
      //const contributors = await fetch(
      //  "https://api.github.com/repos/T-Devs-Enterprise/ideascloud-docs/contributors",
      //  {
      //    headers: {
      //      Authorization: `token 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`,
      //    },
      //  }
      //).then((res) => res.json());

      //console.log(contributors);
      //.then((res) => res.map(({ login }) => login));

      const contributors = [
        {
          login: "franka107",
          id: 49798546,
          node_id: "MDQ6VXNlcjQ5Nzk4NTQ2",
          avatar_url: "https://avatars.githubusercontent.com/u/49798546?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/franka107",
          html_url: "https://github.com/franka107",
          followers_url: "https://api.github.com/users/franka107/followers",
          following_url:
            "https://api.github.com/users/franka107/following{/other_user}",
          gists_url: "https://api.github.com/users/franka107/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/franka107/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/franka107/subscriptions",
          organizations_url: "https://api.github.com/users/franka107/orgs",
          repos_url: "https://api.github.com/users/franka107/repos",
          events_url: "https://api.github.com/users/franka107/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/franka107/received_events",
          type: "User",
          site_admin: false,
          contributions: 1,
        },
      ];

      //data.$contributors = [...new Set(contributors)];
      data.$contributors = contributors;
    }
    return tree;
  };
};
