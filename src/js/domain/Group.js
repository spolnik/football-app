export default class Group {

    constructor(name) {
        this._name = name;
        this._teams = [];
        this._fixtures = [];
    }

    get name() {
        return this._name;
    }

    addTeam(team) {
        this._teams.push(team);
    }

    get teams() {
        return this._teams;
    }

    addFixture(fixture) {
        this._fixtures.push(fixture);
    }

    get fixtures() {
        return this._fixtures;
    }

    static buildGroups(rawTeams, rawFixtures) {

        const groupNames = ["A", "B", "C", "D", "E", "F", "G", "H"];
        let groups = groupNames.map(name => new Group(name));

        rawTeams.forEach(team => {
            let group = groups.find(group => group.name === team.group);
            group.addTeam(team);
        });

        rawFixtures.forEach(fixture => {
            if (fixture.matchday > 6) {
                return;
            }

            let teamGroup = rawTeams.find(team => team.name === fixture.homeTeamName).group;
            let group = groups.find(group => group.name === teamGroup);

            fixture.homeTeam = group.teams.find(team => team.name === fixture.homeTeamName);
            fixture.awayTeam = group.teams.find(team => team.name === fixture.awayTeamName);

            group.addFixture(fixture);
        });

        return groups;
    }

    static buildKnockoutStage(rawTeams, rawFixtures, matchday) {
        let fixtures = [];

        rawFixtures.forEach(fixture => {
            if (fixture.matchday < matchday || fixture.matchday > matchday) {
                return;
            }

            fixture.homeTeam = rawTeams.find(team => team.name === fixture.homeTeamName);
            fixture.awayTeam = rawTeams.find(team => team.name === fixture.awayTeamName);

            fixtures.push(fixture);
        });

        return fixtures;
    }
}