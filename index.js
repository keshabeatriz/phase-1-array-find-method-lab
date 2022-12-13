// const win = item => item.result === "W"

function superbowlWin(item) {
    const winningYear = item.find(item => item.result === "W")
        if (winningYear) {
            return winningYear.year;
       } else {
        return undefined};
}