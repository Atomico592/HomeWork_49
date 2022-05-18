const chesseBoard = (value: number) => {
    let board: string = "";
        for (let i = 0; i < value*value; i += 1) {
            if ((i % (value + 1)) == 0) {
                board += "\n";
            } else if (i % 2 != 0) {
                board += "██";
            } else {
                board += "  ";
            }
        }

        return board;
}
console.log(chesseBoard(8));