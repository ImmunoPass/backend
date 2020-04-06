module.exports = ({ testReportRepo, testReportService }) => {
  async function testReportWebHookApi({ testReportPayload, provider }) {
    //Validate data @todo
    //Authenticate the call
    const testReportData = {
      paitentName: testReportPayload["Patient Name"],
      paitentMobileNumber: testReportPayload.labPatientId,
      testResult: testReportPayload.reportFormatAndValues[0]["value"],
      testType: testReportPayload["Test Name"],
      reportProvider: provider,
      reportId: testReportPayload.labReportId + "",
    };
    const testReport = await testReportRepo.create(testReportData);
    const next = async () => {
      await testReportService.send(testReport);
    };
    return { status: true, next };
  }
  return { testReportWebHookApi };
};
