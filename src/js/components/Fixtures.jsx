var Fixtures = React.createClass({
    getInitialState: function() {
        return {
            round: 1
        };
    },
    previousRound: function() {
        var round = this.state.round;

        if (round > 1) {
            this.setState({round: round - 1});
        }
    },
    nextRound: function() {
        var round = this.state.round;

        if (round < 6) {
            this.setState({round: round + 1});
        }
    },
    render: function () {

        var fixtureNodes = this.props.fixtures.filter(function (item, id) {
            var to = this.state.round * 2;
            var from = this.state.round * 2 - 2;

            return id >= from && id < to;
        }.bind(this)).map(function (fixture) {
            return <Fixture fixture={fixture}  />
        });

        return (
            <div className="fixtures">
                <ul className="col-md-12 list-group">
                    {fixtureNodes}
                </ul>
                <nav className="col-md-12">
                    <ul className="pager">
                        <li className="previous">
                            <a href="javascript:void(0)" onClick={this.previousRound}>Previous</a>
                        </li>
                        <li className="next">
                            <a href="javascript:void(0)" onClick={this.nextRound}>Next</a>
                        </li>
                    </ul>
                </nav>
            </div>
        );
    }
});