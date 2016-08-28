import React from 'react';
import GroupBlock from './Group'
import Group from '../domain/Group';
import KnockoutStage from './KnockoutStage';
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

        let groupNodes = groups.map(group =>
            <GroupBlock group={group} key={group.name} />
        );

        return <div>
            {groupNodes}
            <KnockoutStage
                name="Round-of-16"
                fixtures={Group.buildKnockoutStage(this.state.teams, this.state.fixtures, 7)}
                numOfMatchDay={8}
            />
            <KnockoutStage
                name="Quater-finals"
                fixtures={Group.buildKnockoutStage(this.state.teams, this.state.fixtures, 8)}
                numOfMatchDay={4}
            />
            <KnockoutStage
                name="Semi-finals"
                fixtures={Group.buildKnockoutStage(this.state.teams, this.state.fixtures, 9)}
                numOfMatchDay={2}
            />
            <KnockoutStage
                name="Final"
                fixtures={Group.buildKnockoutStage(this.state.teams, this.state.fixtures, 10)}
                numOfMatchDay={1}
            />
        </div>;
    }
}

