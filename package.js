Package.describe({
    summary: "ng-google-chart for meteor ",
    version: "0.0.2",
    git: "https://github.com/dotansimha/meteor-angular-google-chart",
    name: "dotansimha:angular-google-chart"
});

Package.onUse(function (api) {
    api.versionsFrom('METEOR@0.9.0.1');
    api.use('urigo:angular', 'client');
    api.addFiles('ng-google-chart.js', 'client');
});

Package.onTest(function (api) {
    api.use('tinytest');
    api.use('dotansimha:angular-google-chart', 'client');
    api.addFiles('dotansimha:angular-google-chart-tests.js', 'client');
});
