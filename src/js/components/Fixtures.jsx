class Fixtures extends React.Component {

    constructor(props) {
        super(props);
        this.state = {round: 1}
    }

    previousRound() {
        var round = this.state.round;

        if (round > 1) {
            this.setState({round: round - 1});
        }
    }

    nextRound() {
        var round = this.state.round;

        if (round < 6) {
            this.setState({round: round + 1});
        }
    }

    render() {
        var fixtureNodes = this.props.fixtures.filter((item, id) => {
            var to = this.state.round * 2;
            var from = this.state.round * 2 - 2;

            return id >= from && id < to;
        }).map((fixture) => {
            return <Fixture fixture={fixture}/>
        });

        return (
            <div className="fixtures">
                <ul className="col-md-12 list-group">
                    {fixtureNodes}
                </ul>
                <nav className="col-md-12">
                    <ul className="pager">
                        <li className="previous">
                            <a href="javascript:void(0)" onClick={this.previousRound.bind(this)}>Previous</a>
                        </li>
                        <li className="next">
                            <a href="javascript:void(0)" onClick={this.nextRound.bind(this)}>Next</a>
                        </li>
                    </ul>
                </nav>
            </div>
        );
    }
}