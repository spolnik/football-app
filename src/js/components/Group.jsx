class Group extends React.Component {
    render() {
        var teamNodes = this.props.teams.sort((a, b) => {
            return parseInt(b.squadMarketValue) - parseInt(a.squadMarketValue);
        }).map((team) => {
            return (
                <Team team={team} key={team.name}/>
            );
        });

        return <div className="group" id={this.props.group.toLowerCase()}>
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h2 className="panel-title">Group {this.props.group}</h2>
                </div>

                <div className="panel-body">
                    <ul className="nav nav-tabs" role="tablist">
                        <li role="presentation" className="active">
                            <a href={"#standings" + this.props.group} aria-controls={"standings" + this.props.group}
                               role="tab" data-toggle="tab">Standings</a>
                        </li>
                        <li role="presentation">
                            <a href={"#fixtures" + this.props.group} aria-controls={"fixtures" + this.props.group}
                               role="tab" data-toggle="tab">Fixtures</a>
                        </li>
                        <li role="presentation">
                            <a href={"#teams" + this.props.group} aria-controls={"teams" + this.props.group}
                               role="tab" data-toggle="tab">Teams</a>
                        </li>
                    </ul>

                    <div className="tab-content">
                        <div role="tabpanel" className="tab-pane fade in active" id={"standings" + this.props.group}>
                            <Table teams={this.props.teams}/></div>
                        <div role="tabpanel" className="tab-pane fade" id={"fixtures" + this.props.group}><Fixtures
                            fixtures={this.props.fixtures}/></div>
                        <div role="tabpanel" className="tab-pane fade" id={"teams" + this.props.group}>{teamNodes}</div>
                    </div>
                </div>

            </div>
        </div>;
    }
}
