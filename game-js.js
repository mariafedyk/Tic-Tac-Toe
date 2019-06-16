var turn = 0;

document.getElementById('game').onclick=function(event){
	console.log(event);
	if(event.target.className=="block"){
		if(turn%2==0){
			event.target.innerHTML='x';
		}
		else{
			event.target.innerHTML='o';
		}
		turn++;
		checkWinner();
	}
}

//012
//345
//678

function checkWinner(){
	var allblocks=document.getElementsByClassName('block');

	//Crosses' turn
	if(allblocks[0].innerHTML=='x' && allblocks[1].innerHTML=='x' && allblocks[2].innerHTML=='x') alert('Cross wins!');
	if(allblocks[3].innerHTML=='x' && allblocks[4].innerHTML=='x' && allblocks[5].innerHTML=='x') alert('Cross wins!');
	if(allblocks[6].innerHTML=='x' && allblocks[7].innerHTML=='x' && allblocks[8].innerHTML=='x') alert('Cross wins!');
	if(allblocks[0].innerHTML=='x' && allblocks[3].innerHTML=='x' && allblocks[6].innerHTML=='x') alert('Cross wins!');
	if(allblocks[1].innerHTML=='x' && allblocks[4].innerHTML=='x' && allblocks[7].innerHTML=='x') alert('Cross wins!');
	if(allblocks[2].innerHTML=='x' && allblocks[5].innerHTML=='x' && allblocks[8].innerHTML=='x') alert('Cross wins!');
	if(allblocks[0].innerHTML=='x' && allblocks[4].innerHTML=='x' && allblocks[8].innerHTML=='x') alert('Cross wins!');
	if(allblocks[2].innerHTML=='x' && allblocks[4].innerHTML=='x' && allblocks[6].innerHTML=='x') alert('Cross wins!');

	//Zeros' turn
	if(allblocks[0].innerHTML=='o' && allblocks[1].innerHTML=='o' && allblocks[2].innerHTML=='o') alert('Zero wins!');
	if(allblocks[3].innerHTML=='o' && allblocks[4].innerHTML=='o' && allblocks[5].innerHTML=='o') alert('Zero wins!');
	if(allblocks[6].innerHTML=='o' && allblocks[7].innerHTML=='o' && allblocks[8].innerHTML=='o') alert('Zero wins!');
	if(allblocks[0].innerHTML=='o' && allblocks[3].innerHTML=='o' && allblocks[6].innerHTML=='o') alert('Zero wins!');
	if(allblocks[1].innerHTML=='o' && allblocks[4].innerHTML=='o' && allblocks[7].innerHTML=='o') alert('Zero wins!');
	if(allblocks[2].innerHTML=='o' && allblocks[5].innerHTML=='o' && allblocks[8].innerHTML=='o') alert('Zero wins!');
	if(allblocks[0].innerHTML=='o' && allblocks[4].innerHTML=='o' && allblocks[8].innerHTML=='o') alert('Zero wins!');
	if(allblocks[2].innerHTML=='o' && allblocks[4].innerHTML=='o' && allblocks[6].innerHTML=='o') alert('Zero wins!');
}