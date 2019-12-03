import React from "react";
import "./App.css";
import axios from "axios";
import GithubCard from "./GithubCard";
import FollowerCard from "./FollowerCard";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        login: "tetondan",
        id: 8883343,
        node_id: "MDQ6VXNlcjg4ODMzNDM=",
        avatar_url: "https://avatars2.githubusercontent.com/u/8883343?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/tetondan",
        html_url: "https://github.com/tetondan",
        followers_url: "https://api.github.com/users/tetondan/followers",
        following_url:
          "https://api.github.com/users/tetondan/following{/other_user}",
        gists_url: "https://api.github.com/users/tetondan/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/tetondan/starred{/owner}{/repo}",
        subscriptions_url:
          "https://api.github.com/users/tetondan/subscriptions",
        organizations_url: "https://api.github.com/users/tetondan/orgs",
        repos_url: "https://api.github.com/users/tetondan/repos",
        events_url: "https://api.github.com/users/tetondan/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/tetondan/received_events",
        type: "User",
        site_admin: false,
        name: "Daniel Frehner",
        company: null,
        blog: "http://www.danielfrehner.com",
        location: "Jackson Hole, Wy",
        email: null,
        hireable: null,
        bio: "Program Manager (PT Web) @ Lambda School\r\n",
        public_repos: 49,
        public_gists: 3,
        followers: 92,
        following: 8,
        created_at: "2014-09-23T17:47:56Z",
        updated_at: "2019-11-09T08:41:05Z"
      },

      followers: [
        {
          login: "radelmann",
          id: 11262165,
          node_id: "MDQ6VXNlcjExMjYyMTY1",
          avatar_url: "https://avatars0.githubusercontent.com/u/11262165?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/radelmann",
          html_url: "https://github.com/radelmann",
          followers_url: "https://api.github.com/users/radelmann/followers",
          following_url:
            "https://api.github.com/users/radelmann/following{/other_user}",
          gists_url: "https://api.github.com/users/radelmann/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/radelmann/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/radelmann/subscriptions",
          organizations_url: "https://api.github.com/users/radelmann/orgs",
          repos_url: "https://api.github.com/users/radelmann/repos",
          events_url: "https://api.github.com/users/radelmann/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/radelmann/received_events",
          type: "User",
          site_admin: false
        },
        {
          login: "bbalaran",
          id: 9732594,
          node_id: "MDQ6VXNlcjk3MzI1OTQ=",
          avatar_url: "https://avatars0.githubusercontent.com/u/9732594?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/bbalaran",
          html_url: "https://github.com/bbalaran",
          followers_url: "https://api.github.com/users/bbalaran/followers",
          following_url:
            "https://api.github.com/users/bbalaran/following{/other_user}",
          gists_url: "https://api.github.com/users/bbalaran/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/bbalaran/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/bbalaran/subscriptions",
          organizations_url: "https://api.github.com/users/bbalaran/orgs",
          repos_url: "https://api.github.com/users/bbalaran/repos",
          events_url: "https://api.github.com/users/bbalaran/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/bbalaran/received_events",
          type: "User",
          site_admin: false
        },
        {
          login: "TheeSweeney",
          id: 13893492,
          node_id: "MDQ6VXNlcjEzODkzNDky",
          avatar_url: "https://avatars1.githubusercontent.com/u/13893492?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/TheeSweeney",
          html_url: "https://github.com/TheeSweeney",
          followers_url: "https://api.github.com/users/TheeSweeney/followers",
          following_url:
            "https://api.github.com/users/TheeSweeney/following{/other_user}",
          gists_url: "https://api.github.com/users/TheeSweeney/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/TheeSweeney/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/TheeSweeney/subscriptions",
          organizations_url: "https://api.github.com/users/TheeSweeney/orgs",
          repos_url: "https://api.github.com/users/TheeSweeney/repos",
          events_url:
            "https://api.github.com/users/TheeSweeney/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/TheeSweeney/received_events",
          type: "User",
          site_admin: false
        },
        {
          login: "vanleuvenze",
          id: 10999270,
          node_id: "MDQ6VXNlcjEwOTk5Mjcw",
          avatar_url: "https://avatars0.githubusercontent.com/u/10999270?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/vanleuvenze",
          html_url: "https://github.com/vanleuvenze",
          followers_url: "https://api.github.com/users/vanleuvenze/followers",
          following_url:
            "https://api.github.com/users/vanleuvenze/following{/other_user}",
          gists_url: "https://api.github.com/users/vanleuvenze/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/vanleuvenze/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/vanleuvenze/subscriptions",
          organizations_url: "https://api.github.com/users/vanleuvenze/orgs",
          repos_url: "https://api.github.com/users/vanleuvenze/repos",
          events_url:
            "https://api.github.com/users/vanleuvenze/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/vanleuvenze/received_events",
          type: "User",
          site_admin: false
        },
        {
          login: "kartikvempati",
          id: 13309089,
          node_id: "MDQ6VXNlcjEzMzA5MDg5",
          avatar_url: "https://avatars2.githubusercontent.com/u/13309089?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/kartikvempati",
          html_url: "https://github.com/kartikvempati",
          followers_url: "https://api.github.com/users/kartikvempati/followers",
          following_url:
            "https://api.github.com/users/kartikvempati/following{/other_user}",
          gists_url:
            "https://api.github.com/users/kartikvempati/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/kartikvempati/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/kartikvempati/subscriptions",
          organizations_url: "https://api.github.com/users/kartikvempati/orgs",
          repos_url: "https://api.github.com/users/kartikvempati/repos",
          events_url:
            "https://api.github.com/users/kartikvempati/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/kartikvempati/received_events",
          type: "User",
          site_admin: false
        },
        {
          login: "jphuangjr",
          id: 10719417,
          node_id: "MDQ6VXNlcjEwNzE5NDE3",
          avatar_url: "https://avatars0.githubusercontent.com/u/10719417?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/jphuangjr",
          html_url: "https://github.com/jphuangjr",
          followers_url: "https://api.github.com/users/jphuangjr/followers",
          following_url:
            "https://api.github.com/users/jphuangjr/following{/other_user}",
          gists_url: "https://api.github.com/users/jphuangjr/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/jphuangjr/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/jphuangjr/subscriptions",
          organizations_url: "https://api.github.com/users/jphuangjr/orgs",
          repos_url: "https://api.github.com/users/jphuangjr/repos",
          events_url: "https://api.github.com/users/jphuangjr/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/jphuangjr/received_events",
          type: "User",
          site_admin: false
        },
        {
          login: "mmiller42",
          id: 11927375,
          node_id: "MDQ6VXNlcjExOTI3Mzc1",
          avatar_url: "https://avatars3.githubusercontent.com/u/11927375?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/mmiller42",
          html_url: "https://github.com/mmiller42",
          followers_url: "https://api.github.com/users/mmiller42/followers",
          following_url:
            "https://api.github.com/users/mmiller42/following{/other_user}",
          gists_url: "https://api.github.com/users/mmiller42/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/mmiller42/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/mmiller42/subscriptions",
          organizations_url: "https://api.github.com/users/mmiller42/orgs",
          repos_url: "https://api.github.com/users/mmiller42/repos",
          events_url: "https://api.github.com/users/mmiller42/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/mmiller42/received_events",
          type: "User",
          site_admin: false
        },
        {
          login: "bartonyoung",
          id: 19825957,
          node_id: "MDQ6VXNlcjE5ODI1OTU3",
          avatar_url: "https://avatars0.githubusercontent.com/u/19825957?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/bartonyoung",
          html_url: "https://github.com/bartonyoung",
          followers_url: "https://api.github.com/users/bartonyoung/followers",
          following_url:
            "https://api.github.com/users/bartonyoung/following{/other_user}",
          gists_url: "https://api.github.com/users/bartonyoung/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/bartonyoung/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/bartonyoung/subscriptions",
          organizations_url: "https://api.github.com/users/bartonyoung/orgs",
          repos_url: "https://api.github.com/users/bartonyoung/repos",
          events_url:
            "https://api.github.com/users/bartonyoung/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/bartonyoung/received_events",
          type: "User",
          site_admin: false
        },
        {
          login: "dalinhuang99",
          id: 6508763,
          node_id: "MDQ6VXNlcjY1MDg3NjM=",
          avatar_url: "https://avatars2.githubusercontent.com/u/6508763?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/dalinhuang99",
          html_url: "https://github.com/dalinhuang99",
          followers_url: "https://api.github.com/users/dalinhuang99/followers",
          following_url:
            "https://api.github.com/users/dalinhuang99/following{/other_user}",
          gists_url:
            "https://api.github.com/users/dalinhuang99/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/dalinhuang99/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/dalinhuang99/subscriptions",
          organizations_url: "https://api.github.com/users/dalinhuang99/orgs",
          repos_url: "https://api.github.com/users/dalinhuang99/repos",
          events_url:
            "https://api.github.com/users/dalinhuang99/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/dalinhuang99/received_events",
          type: "User",
          site_admin: false
        },
        {
          login: "VijayaRamesh05",
          id: 27732064,
          node_id: "MDQ6VXNlcjI3NzMyMDY0",
          avatar_url: "https://avatars0.githubusercontent.com/u/27732064?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/VijayaRamesh05",
          html_url: "https://github.com/VijayaRamesh05",
          followers_url:
            "https://api.github.com/users/VijayaRamesh05/followers",
          following_url:
            "https://api.github.com/users/VijayaRamesh05/following{/other_user}",
          gists_url:
            "https://api.github.com/users/VijayaRamesh05/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/VijayaRamesh05/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/VijayaRamesh05/subscriptions",
          organizations_url: "https://api.github.com/users/VijayaRamesh05/orgs",
          repos_url: "https://api.github.com/users/VijayaRamesh05/repos",
          events_url:
            "https://api.github.com/users/VijayaRamesh05/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/VijayaRamesh05/received_events",
          type: "User",
          site_admin: false
        },
        {
          login: "designerexpert",
          id: 20391435,
          node_id: "MDQ6VXNlcjIwMzkxNDM1",
          avatar_url: "https://avatars0.githubusercontent.com/u/20391435?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/designerexpert",
          html_url: "https://github.com/designerexpert",
          followers_url:
            "https://api.github.com/users/designerexpert/followers",
          following_url:
            "https://api.github.com/users/designerexpert/following{/other_user}",
          gists_url:
            "https://api.github.com/users/designerexpert/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/designerexpert/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/designerexpert/subscriptions",
          organizations_url: "https://api.github.com/users/designerexpert/orgs",
          repos_url: "https://api.github.com/users/designerexpert/repos",
          events_url:
            "https://api.github.com/users/designerexpert/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/designerexpert/received_events",
          type: "User",
          site_admin: false
        },
        {
          login: "nphillips78",
          id: 32022560,
          node_id: "MDQ6VXNlcjMyMDIyNTYw",
          avatar_url: "https://avatars0.githubusercontent.com/u/32022560?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/nphillips78",
          html_url: "https://github.com/nphillips78",
          followers_url: "https://api.github.com/users/nphillips78/followers",
          following_url:
            "https://api.github.com/users/nphillips78/following{/other_user}",
          gists_url: "https://api.github.com/users/nphillips78/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/nphillips78/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/nphillips78/subscriptions",
          organizations_url: "https://api.github.com/users/nphillips78/orgs",
          repos_url: "https://api.github.com/users/nphillips78/repos",
          events_url:
            "https://api.github.com/users/nphillips78/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/nphillips78/received_events",
          type: "User",
          site_admin: false
        },
        {
          login: "wildpow",
          id: 17464319,
          node_id: "MDQ6VXNlcjE3NDY0MzE5",
          avatar_url: "https://avatars3.githubusercontent.com/u/17464319?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/wildpow",
          html_url: "https://github.com/wildpow",
          followers_url: "https://api.github.com/users/wildpow/followers",
          following_url:
            "https://api.github.com/users/wildpow/following{/other_user}",
          gists_url: "https://api.github.com/users/wildpow/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/wildpow/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/wildpow/subscriptions",
          organizations_url: "https://api.github.com/users/wildpow/orgs",
          repos_url: "https://api.github.com/users/wildpow/repos",
          events_url: "https://api.github.com/users/wildpow/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/wildpow/received_events",
          type: "User",
          site_admin: false
        },
        {
          login: "JacquelynnRohrich",
          id: 33401573,
          node_id: "MDQ6VXNlcjMzNDAxNTcz",
          avatar_url: "https://avatars2.githubusercontent.com/u/33401573?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/JacquelynnRohrich",
          html_url: "https://github.com/JacquelynnRohrich",
          followers_url:
            "https://api.github.com/users/JacquelynnRohrich/followers",
          following_url:
            "https://api.github.com/users/JacquelynnRohrich/following{/other_user}",
          gists_url:
            "https://api.github.com/users/JacquelynnRohrich/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/JacquelynnRohrich/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/JacquelynnRohrich/subscriptions",
          organizations_url:
            "https://api.github.com/users/JacquelynnRohrich/orgs",
          repos_url: "https://api.github.com/users/JacquelynnRohrich/repos",
          events_url:
            "https://api.github.com/users/JacquelynnRohrich/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/JacquelynnRohrich/received_events",
          type: "User",
          site_admin: false
        },
        {
          login: "ahrjarrett",
          id: 15133992,
          node_id: "MDQ6VXNlcjE1MTMzOTky",
          avatar_url: "https://avatars2.githubusercontent.com/u/15133992?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/ahrjarrett",
          html_url: "https://github.com/ahrjarrett",
          followers_url: "https://api.github.com/users/ahrjarrett/followers",
          following_url:
            "https://api.github.com/users/ahrjarrett/following{/other_user}",
          gists_url: "https://api.github.com/users/ahrjarrett/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/ahrjarrett/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/ahrjarrett/subscriptions",
          organizations_url: "https://api.github.com/users/ahrjarrett/orgs",
          repos_url: "https://api.github.com/users/ahrjarrett/repos",
          events_url:
            "https://api.github.com/users/ahrjarrett/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/ahrjarrett/received_events",
          type: "User",
          site_admin: false
        },
        {
          login: "zeeshanmustafa",
          id: 18405014,
          node_id: "MDQ6VXNlcjE4NDA1MDE0",
          avatar_url: "https://avatars1.githubusercontent.com/u/18405014?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/zeeshanmustafa",
          html_url: "https://github.com/zeeshanmustafa",
          followers_url:
            "https://api.github.com/users/zeeshanmustafa/followers",
          following_url:
            "https://api.github.com/users/zeeshanmustafa/following{/other_user}",
          gists_url:
            "https://api.github.com/users/zeeshanmustafa/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/zeeshanmustafa/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/zeeshanmustafa/subscriptions",
          organizations_url: "https://api.github.com/users/zeeshanmustafa/orgs",
          repos_url: "https://api.github.com/users/zeeshanmustafa/repos",
          events_url:
            "https://api.github.com/users/zeeshanmustafa/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/zeeshanmustafa/received_events",
          type: "User",
          site_admin: false
        },
        {
          login: "LisaCee",
          id: 18077352,
          node_id: "MDQ6VXNlcjE4MDc3MzUy",
          avatar_url: "https://avatars0.githubusercontent.com/u/18077352?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/LisaCee",
          html_url: "https://github.com/LisaCee",
          followers_url: "https://api.github.com/users/LisaCee/followers",
          following_url:
            "https://api.github.com/users/LisaCee/following{/other_user}",
          gists_url: "https://api.github.com/users/LisaCee/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/LisaCee/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/LisaCee/subscriptions",
          organizations_url: "https://api.github.com/users/LisaCee/orgs",
          repos_url: "https://api.github.com/users/LisaCee/repos",
          events_url: "https://api.github.com/users/LisaCee/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/LisaCee/received_events",
          type: "User",
          site_admin: false
        },
        {
          login: "MTakow",
          id: 22819904,
          node_id: "MDQ6VXNlcjIyODE5OTA0",
          avatar_url: "https://avatars1.githubusercontent.com/u/22819904?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/MTakow",
          html_url: "https://github.com/MTakow",
          followers_url: "https://api.github.com/users/MTakow/followers",
          following_url:
            "https://api.github.com/users/MTakow/following{/other_user}",
          gists_url: "https://api.github.com/users/MTakow/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/MTakow/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/MTakow/subscriptions",
          organizations_url: "https://api.github.com/users/MTakow/orgs",
          repos_url: "https://api.github.com/users/MTakow/repos",
          events_url: "https://api.github.com/users/MTakow/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/MTakow/received_events",
          type: "User",
          site_admin: false
        },
        {
          login: "cameldjoulako",
          id: 24195550,
          node_id: "MDQ6VXNlcjI0MTk1NTUw",
          avatar_url: "https://avatars0.githubusercontent.com/u/24195550?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/cameldjoulako",
          html_url: "https://github.com/cameldjoulako",
          followers_url: "https://api.github.com/users/cameldjoulako/followers",
          following_url:
            "https://api.github.com/users/cameldjoulako/following{/other_user}",
          gists_url:
            "https://api.github.com/users/cameldjoulako/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/cameldjoulako/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/cameldjoulako/subscriptions",
          organizations_url: "https://api.github.com/users/cameldjoulako/orgs",
          repos_url: "https://api.github.com/users/cameldjoulako/repos",
          events_url:
            "https://api.github.com/users/cameldjoulako/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/cameldjoulako/received_events",
          type: "User",
          site_admin: false
        },
        {
          login: "stefmolin",
          id: 24376333,
          node_id: "MDQ6VXNlcjI0Mzc2MzMz",
          avatar_url: "https://avatars3.githubusercontent.com/u/24376333?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/stefmolin",
          html_url: "https://github.com/stefmolin",
          followers_url: "https://api.github.com/users/stefmolin/followers",
          following_url:
            "https://api.github.com/users/stefmolin/following{/other_user}",
          gists_url: "https://api.github.com/users/stefmolin/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/stefmolin/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/stefmolin/subscriptions",
          organizations_url: "https://api.github.com/users/stefmolin/orgs",
          repos_url: "https://api.github.com/users/stefmolin/repos",
          events_url: "https://api.github.com/users/stefmolin/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/stefmolin/received_events",
          type: "User",
          site_admin: false
        },
        {
          login: "maguilr",
          id: 24927858,
          node_id: "MDQ6VXNlcjI0OTI3ODU4",
          avatar_url: "https://avatars1.githubusercontent.com/u/24927858?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/maguilr",
          html_url: "https://github.com/maguilr",
          followers_url: "https://api.github.com/users/maguilr/followers",
          following_url:
            "https://api.github.com/users/maguilr/following{/other_user}",
          gists_url: "https://api.github.com/users/maguilr/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/maguilr/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/maguilr/subscriptions",
          organizations_url: "https://api.github.com/users/maguilr/orgs",
          repos_url: "https://api.github.com/users/maguilr/repos",
          events_url: "https://api.github.com/users/maguilr/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/maguilr/received_events",
          type: "User",
          site_admin: false
        },
        {
          login: "jocylpz",
          id: 37204549,
          node_id: "MDQ6VXNlcjM3MjA0NTQ5",
          avatar_url: "https://avatars0.githubusercontent.com/u/37204549?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/jocylpz",
          html_url: "https://github.com/jocylpz",
          followers_url: "https://api.github.com/users/jocylpz/followers",
          following_url:
            "https://api.github.com/users/jocylpz/following{/other_user}",
          gists_url: "https://api.github.com/users/jocylpz/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/jocylpz/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/jocylpz/subscriptions",
          organizations_url: "https://api.github.com/users/jocylpz/orgs",
          repos_url: "https://api.github.com/users/jocylpz/repos",
          events_url: "https://api.github.com/users/jocylpz/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/jocylpz/received_events",
          type: "User",
          site_admin: false
        },
        {
          login: "9inety4",
          id: 37230990,
          node_id: "MDQ6VXNlcjM3MjMwOTkw",
          avatar_url: "https://avatars0.githubusercontent.com/u/37230990?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/9inety4",
          html_url: "https://github.com/9inety4",
          followers_url: "https://api.github.com/users/9inety4/followers",
          following_url:
            "https://api.github.com/users/9inety4/following{/other_user}",
          gists_url: "https://api.github.com/users/9inety4/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/9inety4/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/9inety4/subscriptions",
          organizations_url: "https://api.github.com/users/9inety4/orgs",
          repos_url: "https://api.github.com/users/9inety4/repos",
          events_url: "https://api.github.com/users/9inety4/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/9inety4/received_events",
          type: "User",
          site_admin: false
        },
        {
          login: "AfshanFatima",
          id: 37081147,
          node_id: "MDQ6VXNlcjM3MDgxMTQ3",
          avatar_url: "https://avatars3.githubusercontent.com/u/37081147?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/AfshanFatima",
          html_url: "https://github.com/AfshanFatima",
          followers_url: "https://api.github.com/users/AfshanFatima/followers",
          following_url:
            "https://api.github.com/users/AfshanFatima/following{/other_user}",
          gists_url:
            "https://api.github.com/users/AfshanFatima/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/AfshanFatima/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/AfshanFatima/subscriptions",
          organizations_url: "https://api.github.com/users/AfshanFatima/orgs",
          repos_url: "https://api.github.com/users/AfshanFatima/repos",
          events_url:
            "https://api.github.com/users/AfshanFatima/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/AfshanFatima/received_events",
          type: "User",
          site_admin: false
        },
        {
          login: "hjhuney",
          id: 36340340,
          node_id: "MDQ6VXNlcjM2MzQwMzQw",
          avatar_url: "https://avatars3.githubusercontent.com/u/36340340?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/hjhuney",
          html_url: "https://github.com/hjhuney",
          followers_url: "https://api.github.com/users/hjhuney/followers",
          following_url:
            "https://api.github.com/users/hjhuney/following{/other_user}",
          gists_url: "https://api.github.com/users/hjhuney/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/hjhuney/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/hjhuney/subscriptions",
          organizations_url: "https://api.github.com/users/hjhuney/orgs",
          repos_url: "https://api.github.com/users/hjhuney/repos",
          events_url: "https://api.github.com/users/hjhuney/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/hjhuney/received_events",
          type: "User",
          site_admin: false
        },
        {
          login: "jacqueline-homan",
          id: 3537889,
          node_id: "MDQ6VXNlcjM1Mzc4ODk=",
          avatar_url: "https://avatars1.githubusercontent.com/u/3537889?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/jacqueline-homan",
          html_url: "https://github.com/jacqueline-homan",
          followers_url:
            "https://api.github.com/users/jacqueline-homan/followers",
          following_url:
            "https://api.github.com/users/jacqueline-homan/following{/other_user}",
          gists_url:
            "https://api.github.com/users/jacqueline-homan/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/jacqueline-homan/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/jacqueline-homan/subscriptions",
          organizations_url:
            "https://api.github.com/users/jacqueline-homan/orgs",
          repos_url: "https://api.github.com/users/jacqueline-homan/repos",
          events_url:
            "https://api.github.com/users/jacqueline-homan/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/jacqueline-homan/received_events",
          type: "User",
          site_admin: false
        },
        {
          login: "mr-burton",
          id: 35740349,
          node_id: "MDQ6VXNlcjM1NzQwMzQ5",
          avatar_url: "https://avatars1.githubusercontent.com/u/35740349?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/mr-burton",
          html_url: "https://github.com/mr-burton",
          followers_url: "https://api.github.com/users/mr-burton/followers",
          following_url:
            "https://api.github.com/users/mr-burton/following{/other_user}",
          gists_url: "https://api.github.com/users/mr-burton/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/mr-burton/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/mr-burton/subscriptions",
          organizations_url: "https://api.github.com/users/mr-burton/orgs",
          repos_url: "https://api.github.com/users/mr-burton/repos",
          events_url: "https://api.github.com/users/mr-burton/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/mr-burton/received_events",
          type: "User",
          site_admin: false
        },
        {
          login: "maxwashington",
          id: 36821512,
          node_id: "MDQ6VXNlcjM2ODIxNTEy",
          avatar_url: "https://avatars1.githubusercontent.com/u/36821512?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/maxwashington",
          html_url: "https://github.com/maxwashington",
          followers_url: "https://api.github.com/users/maxwashington/followers",
          following_url:
            "https://api.github.com/users/maxwashington/following{/other_user}",
          gists_url:
            "https://api.github.com/users/maxwashington/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/maxwashington/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/maxwashington/subscriptions",
          organizations_url: "https://api.github.com/users/maxwashington/orgs",
          repos_url: "https://api.github.com/users/maxwashington/repos",
          events_url:
            "https://api.github.com/users/maxwashington/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/maxwashington/received_events",
          type: "User",
          site_admin: false
        },
        {
          login: "nunulong",
          id: 10455217,
          node_id: "MDQ6VXNlcjEwNDU1MjE3",
          avatar_url: "https://avatars2.githubusercontent.com/u/10455217?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/nunulong",
          html_url: "https://github.com/nunulong",
          followers_url: "https://api.github.com/users/nunulong/followers",
          following_url:
            "https://api.github.com/users/nunulong/following{/other_user}",
          gists_url: "https://api.github.com/users/nunulong/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/nunulong/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/nunulong/subscriptions",
          organizations_url: "https://api.github.com/users/nunulong/orgs",
          repos_url: "https://api.github.com/users/nunulong/repos",
          events_url: "https://api.github.com/users/nunulong/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/nunulong/received_events",
          type: "User",
          site_admin: false
        },
        {
          login: "ala2233",
          id: 23330609,
          node_id: "MDQ6VXNlcjIzMzMwNjA5",
          avatar_url: "https://avatars3.githubusercontent.com/u/23330609?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/ala2233",
          html_url: "https://github.com/ala2233",
          followers_url: "https://api.github.com/users/ala2233/followers",
          following_url:
            "https://api.github.com/users/ala2233/following{/other_user}",
          gists_url: "https://api.github.com/users/ala2233/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/ala2233/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/ala2233/subscriptions",
          organizations_url: "https://api.github.com/users/ala2233/orgs",
          repos_url: "https://api.github.com/users/ala2233/repos",
          events_url: "https://api.github.com/users/ala2233/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/ala2233/received_events",
          type: "User",
          site_admin: false
        }
      ]
    };
  }

  componentDidMount() {
    const userData = axios
      .get(/* "https://api.github.com/users/tetondan" */)
      .then(response => {
        console.log(response);

        this.setState(oldState => ({
          user: response.data
        }));
      })
      .catch(error => {
        console.log(error);
      });
    const followersData = axios
      .get(/* "https://api.github.com/users/tetondan/followers" */)
      .then(response => {
        console.log(response);

        this.setState(oldState => ({
          followers: response.data
        }));
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="header">
            <img src="./assets/lambdalogo.png" alt="Lambda Logo" />
            <p>❤️'s</p>
            <img src="./assets/githublogo.png" alt="GitHub Logo" />
          </div>
          <div className="cards">
            {!this.state.user && <h2>Loading...</h2>}
            <GithubCard user={this.state.user} />
            <div className="followers">
              <h2>{this.state.user.name + "'s Followers"}</h2>
              {this.state.followers.map(follower => (
                <FollowerCard user={follower} />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
