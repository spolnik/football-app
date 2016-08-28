import React from 'react';
import Team from './Team';
import Standings from './Standings';
import Fixtures from './Fixtures';

export default class GroupBlock extends React.Component {

    render() {
        let teamNodes = this.props.group.teams.sort((a, b) =>
            parseInt(b.squadMarketValue) - parseInt(a.squadMarketValue)
        ).map(team =>
            <Team name={team.shortName} logoUrl={team.crestUrl} marketValue={team.squadMarketValue} key={team.shortName}/>
        );

        return (
            <div className="group" id={this.props.group.name.toLowerCase()}>
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h2 className="panel-title">Group {this.props.group.name}</h2>
                    </div>

                    <div className="panel-body">
                        <ul className="nav nav-tabs" role="tablist">
                            <li role="presentation" className="active">
                                <a href={`#standings${this.props.group.name}`} aria-controls={`standings${this.props.group.name}`}
                                   role="tab" data-toggle="tab">Standings</a>
                            </li>
                            <li role="presentation">
                                <a href={`#fixtures${this.props.group.name}`} aria-controls={`fixtures${this.props.group.name}`}
                                   role="tab" data-toggle="tab">Fixtures</a>
                            </li>
                            <li role="presentation">
                                <a href={`#teams${this.props.group.name}`} aria-controls={`teams${this.props.group.name}`}
                                   role="tab" data-toggle="tab">Teams</a>
                            </li>
                        </ul>

                        <div className="tab-content">
                            <div role="tabpanel" className="tab-pane fade in active" id={`standings${this.props.group.name}`}>
                                <Standings group={this.props.group}/></div>
                            <div role="tabpanel" className="tab-pane fade" id={`fixtures${this.props.group.name}`}>
                                <Fixtures fixtures={this.props.group.fixtures} numOfMatchDay={6}/></div>
                            <div role="tabpanel" className="tab-pane fade" id={`teams${this.props.group.name}`}>
                                {teamNodes}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}
