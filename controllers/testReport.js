module.exports = ({ testResportRepo, testReportService }) => {
  async function testReportWebHookApi({ testReportPayload, provider }) {
    //Validate data @todo
    //Authenticate the call
    const testReportData = {
      paitentName: testReportPayload["Patient Name"],
      paitenMobileNumber: testReportPayload.labPatientId,
      testResult: testReportPayload.reportFormatAndValues[0]["value"],
      testType: testReportPayload["Test Name"],
      reportProvider: provider,
      reportId: testReportPayload.labReportId
    };

    const testReport = await testResportRepo.create(testReportData);
    console.log(testReport);

    await testReportService.send(testReport);
    return true;
  }
  return { testReportWebHookApi };
};
