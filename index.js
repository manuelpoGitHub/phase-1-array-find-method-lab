function superbowlWin(records) {
  const winningRecord = records.find(function (record) {
    return record.result === "W";
  });

  return winningRecord ? winningRecord.year : undefined;
}


