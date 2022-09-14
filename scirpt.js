let sch = new Array([], [], [], [], [], [], [], []);
for (let i = 0; i <= 7; i++) {
  for (let z = 0; z <= 7; z++) {
    if (i % 2 == 0) {
      if (z % 2 == 0) {
        sch[i].push("black");
      } else {
        sch[i].push("white");
      }
    } else {
      if (z % 2 == 0) {
        sch[i].push("white");
      } else {
        sch[i].push("black");
      }
    }
  }
}

console.log(sch);
