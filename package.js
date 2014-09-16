Package.describe({
    summary: "ng-google-chart for meteor ",
    version: "0.0.1",
    git: "https://github.com/dotansimha/meteor-angular-google-chart",
    name: "dotansimha:angular-google-chart"
});

Package.onUse(function (api) {
    api.versionsFrom('METEOR@0.9.0.1');
    api.use('templating', 'client');
    api.use('urigo:ngmeteor@0.2.0', 'client');
    api.addFiles('ng-google-chart.js', 'client');
});

Package.onTest(function (api) {
    api.use('tinytest');
    api.use('dotansimha:angular-google-chart');
    api.addFiles('dotansimha:angular-google-chart-tests.js');
});