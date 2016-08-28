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

ReactDOM.render(
    <AllTeams teamsUrl="teams.json" fixturesUrl="fixtures.json"/>,
    document.getElementById('content')
);