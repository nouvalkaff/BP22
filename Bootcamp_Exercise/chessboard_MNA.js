const makeChessboard = () => {
    let chessboard= []
    const pion= ['pion']
    const chess= ['Benteng', 'Kuda', 'Menteri', 'Raja', 'Ratu', 'Menteri', 'Kuda', 'Benteng']

  const prajuritHitam = chess.map(i => `${i} Hitam`);
  const prajuritPutih = chess.map(i => `${i} Putih`);
  const ruangKosong = new Array(8).fill('')
  const pionHitam = []; for (i = 0; i < 8; i++) {pionHitam.push(`${pion} Hitam`)}
  const pionPutih = []; for (i = 0; i < 8; i++) {pionPutih.push(`${pion} Putih`)}

  chessboard.push(prajuritHitam);
  chessboard.push(pionHitam);
  chessboard.push(ruangKosong);
  chessboard.push(ruangKosong);
  chessboard.push(ruangKosong);
  chessboard.push(ruangKosong);
  chessboard.push(pionPutih);
  chessboard.push(prajuritPutih);

    return chessboard;
  }

  const printBoard = (x) => {
    var pilihPion = (x).toLowerCase();
    switch (pilihPion) {
      case "black":
        console.log(makeChessboard())
        break;
      case "white":
        console.log(makeChessboard().reverse())
        break;
      default:
        console.log("HANYA MASUKKAN 'white' ATAU 'black'")
    }
  }

  printBoard('white');
