'user strict';
let movieFrom = document.getElementById('movieFrom');
let addMovie = document.getElementById('addMovie');
let movieTable = document.getElementById('movie table');

function Movie(name, category, year, img) {
    this.name = name;
    this.year = year;
    this.img = './src.img';
    allcategory.push(thise);

}
allcategory[];
function movieHandler(event) {
    event.preventDefualt();
    let name = event.target.name.value;
    let year = event.target.year.value;
    let img = event.target.img.value;
    let new category = new category(name, year, img);
    setmovie();
    render();
}
movieFrom.addEventListener('click', movieHandler);
function setmovie() {
    localStorage.setItem('categorys', JSON.stringify(allcategory));

}
function render() {
    let tr = document.createElement('tr');
    rows.push(rows.lengh);
    localStorage.setItem('rows', JSON.stringify(rows));
    tablebody.appendchild(tr);
    let td = document.createElement('td');
    tr.appendChild(td);
    td.textContent = this.name;
    let td = document.createElement('td');
    tr.appendChild(td);
    td.textContent = this.category;
    let td = document.createElement('td');
    tr.appendChild(td);
    td.textContent = this.year;
    let td = document.createElement('td');
    tr.appendChild(td);
    td.textContent = this.img;
}