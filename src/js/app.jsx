import AllTeams from './components/AllTeams';
import ReactDOM from 'react-dom';
import React from 'react';
import $ from 'jquery';
import 'page-scroll-to-id';
import 'datejs';

$("a[href*='#']").mPageScroll2id({
    scrollSpeed: 500,
    scrollEasing: 'swing',
    layout: 'vertical',
    highlightClass: 'active',
    targetClass: 'active'
});

var content = document.getElementById('content');
var content_2016 = document.getElementById('content_2016');
var content_2017 = document.getElementById('content_2017');

if (content) {
    ReactDOM.render(
        <AllTeams teamsUrl="teams.json" fixturesUrl="fixtures.json"/>,
        document.getElementById('content')
    );
}

if (content_2016) {
    ReactDOM.render(
        <AllTeams teamsUrl="teams-2016.json" fixturesUrl="fixtures-2016.json"/>,
        document.getElementById('content_2016')
    );
}

if (content_2017) {
    ReactDOM.render(
        <AllTeams teamsUrl="teams-2017.json" fixturesUrl="fixtures-2017.json"/>,
        document.getElementById('content_2017')
    );
}
