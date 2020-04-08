module.exports = ({ testReportRepo, testReportService }) => {
  async function testReportWebHookApi({ testReportPayload, provider }) {
    //Validate data @todo
    //Authenticate the call
    const testReportData = {
      paitentName: testReportPayload["Patient Name"],
      paitentMobileNumber: testReportPayload.labPatientId,
      testResult: testReportPayload.reportFormatAndValues
        .map((data) => data.value)
        .join("|||"),
      testType: testReportPayload.dictionaryId + "",
      reportProvider: provider,
      reportId: testReportPayload.labReportId + "",
    };
    const testReport = await testReportRepo.create(testReportData);
    const next = async () => {
      await testReportService.send(testReport);
    };
    return { status: true, next, testReportId: testReport.id };
  }
  return { testReportWebHookApi };
};
