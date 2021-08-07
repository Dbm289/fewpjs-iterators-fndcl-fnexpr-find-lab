const record = [
    { year: "2018", result: "L" },
    { year: "2017", result: "W" },
    { year: "2016", result: "N/A" },
    //...
  ]

function superbowlWin(record) {
    let winningYear = record.find((y) => y.result === "W")
    if (winningYear) {
        return winningYear.year
    }
    return undefined
}
superbowlWin(record)