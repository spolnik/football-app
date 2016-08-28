import React from 'react';
import GroupBlock from './Group'
import Group from '../domain/Group';
import $ from 'jquery';

export default class AllTeams extends React.Component {

    constructor(props) {
        super(props);
        this.state = { teams: [], fixtures: [] };
    }

    componentDidMount() {
        $.getJSON(this.props.teamsUrl, result =>
            this.setState({teams: result.teams})
        );

        $.getJSON(this.props.fixturesUrl, result =>
            this.setState({fixtures: result.fixtures})
        );
    }

    render() {

        let groups = Group.buildGroups(this.state.teams, this.state.fixtures);

        let teamNodes = groups.map(group =>
            <GroupBlock group={group} key={group.name} />
        );

        return <div>{teamNodes}</div>;
    }
}

