function getFirstSelector(elm){
  return document.querySelector(elm);
}

function nestedTarget(){
  return document.querySelector('#nested .target')
}

function increaseRankBy(){
  	const lists = document.querySelectorAll('.ranked-list')

  for (let i = 0; i < lists.length; i++) {
    let nodes = lists[i].children

    for (let j = 0; j < nodes.length; j++) {
      nodes[j].innerHTML = parseInt(nodes[j].innerHTML) + n
    }
  }
}
}