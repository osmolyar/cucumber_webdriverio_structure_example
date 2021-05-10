interface Report {
    features?: Array<ReportFeature>
}

interface ReportFeature {
    scenarios: Array<ScenarioData>;
    testcases: Array<StepData>;
    cid: string;
    source:  string;
    name:  string;
    id:  string;
    tags:  string;
    feature:  string;
    browser:  string;
    browserPlatform:  string;
    jenkinsJobName:  string;
    jenkinsBuildNumber:  string;
    jenkinsBuildUrl:  string;
    jenkinsJobUrl:  string;
    linkToAllureReport:  string;
    result: number;
    testsRun: number;
    testsPassed: number;
    testsFailed: number;
}

interface ScenarioData {
    id: string;
    name: string;
    cid: string;
    steps: Array<any>;
}

interface StepData {
    scenarioName: string;
    step:  string;
    result:  string;
    error_message:  string;
}


