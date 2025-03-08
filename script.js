function fix() {
    //Write your code here!
    let coconut = document.getElementById("coconut");
    coconut.remove();
    let coast = document.getElementById("coast");
    coast.remove();
    let watermelon = document.getElementById("watermelon");
    watermelon.remove();
    let sunflowers = document.getElementById("sunflowers");
    sunflowers.remove();
    let tree = document.createElement("img");
    tree.id = "tree";
    tree.src = "to-add/christmasTree.jpg";
    photos = document.getElementById("photos");
    photos.appendChild(tree);
    let snowman = document.createElement("img");
    snowman.id = "snowman";
    snowman.src = "to-add/snowmen.jpg";
    photos.appendChild(snowman);
    let stockings = document.createElement("img");
    stockings.id = "stockings";
    stockings.src = "to-add/stockings.jpg";
    photos.appendChild(stockings);
}