class Group {

    constructor(name) {
        this.groupName = name;
        this.groupTeams = [];
        this.groupFixtures = [];
    }

    get name() {
        return this.groupName;
    }

    addTeam(team) {
        this.groupTeams.push(team);
    }

    get teams() {
        return this.groupTeams;
    }

    addFixture(fixture) {
        this.fixtures.push(fixture);
    }

    get fixtures() {
        return this.groupFixtures;
    }

    static buildGroups(rawTeams, rawFixtures) {

        const groupNames = ["A", "B", "C", "D", "E", "F", "G", "H"];
        let groups = groupNames.map(name => new Group(name));

        rawTeams.forEach(team => {
            let group = groups.find(group => group.name === team.group);
            group.addTeam(team);
        });

        rawFixtures.forEach(fixture => {
            let teamGroup = rawTeams.find(team => team.name === fixture.homeTeamName).group;
            let group = groups.find(group => group.name === teamGroup);

            fixture.homeTeam = group.teams.find(team => team.name === fixture.homeTeamName);
            fixture.awayTeam = group.teams.find(team => team.name === fixture.awayTeamName);

            group.addFixture(fixture);
        });

        return groups;
    }
}