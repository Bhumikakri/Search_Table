let sea = document.querySelector("input");
let items = document.querySelectorAll(".tbody tr ");
let bodyTable = document.querySelector(".tbody")

sea.addEventListener('input',()=>{
    let arrayConvert = Array.from(items);


     let result = arrayConvert.filter((ele) =>{
        let arr = ele.children[0].innerText;
        if(arr.startsWith(sea.value)){
           
            return ele;
        }
    })

    bodyTable.replaceChildren(...result);

})

// console.log(sea.value);











































// let searchBar = document.querySelector('input');
// let table = document.querySelector('table');
// let rows = [...document.querySelectorAll('tbody tr')];
// let tbody = document.querySelector('tbody');

// function filterData(){
//     let searchText= searchBar.value.toLowerCase();
//     let filterList = rows.filter((i) => {
//         return i.firstElementChild.innerText.toLowerCase().includes(searchText);
//     });
//     while(tbody.firstChild){
//         tbody.removeChild(tbody.firstChild);
//     }
//     for(let i=0; i<filterList.length; i++){
//         tbody.appendChild(filterList[i]);
//     }
// }

// searchBar.addEventListener('keyup', filterData);