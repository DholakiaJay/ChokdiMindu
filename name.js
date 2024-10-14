form = document.getElementById("pname");
p1 = document.getElementsByName("player1")[0];
p2 = document.getElementsByName("player2")[0];
go = document.getElementById("start");
restart = document.getElementById("retry");

go.addEventListener("click", (e) => {
  e.preventDefault();
  divEle = document.createElement("div");
  pEle = document.createElement("p");
  divEle.append(pEle);
  divEle.classList.add("namess");
  pEle.innerHTML = `Welcome , <b style="color:lightgreen; text-shadow:3px 3px 45px green;">${p1.value} <small>[ X ]</small>  </b> & <b style="color:hotpink; text-shadow:3px 3px 45px hotpink;">${p2.value} <small>[ O ]</small> </b>`;
  document.body.append(divEle);
  restart.style.cssText = `display: initial;`;
});

// winner = document.createElement("div");
// winner.innerHTML = `<b style="color:lightgreen;">${p1.value}is Winner</b>`;
// winner.classList.add("winner");
// document.body.append(winner);
