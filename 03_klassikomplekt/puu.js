// @ts-nocheck
var Tree = /** @class */ (function () {
    function Tree(ctx, startX, startY, length, angle, depth, width) {
        this.ctx = ctx;
        this.startX = startX;
        this.startY = startY;
        this.length = length;
        this.angle = angle;
        this.depth = depth;
        this.width = width;
    }
    Tree.prototype.drawTree = function (startX, startY, length, angle, depth, width) {
        if (depth === 0)
            return;
        var endX = startX + length * Math.cos(angle * Math.PI / 180);
        var endY = startY - length * Math.sin(angle * Math.PI / 180);
        this.ctx.lineWidth = width;
        this.ctx.beginPath();
        this.ctx.moveTo(startX, startY);
        this.ctx.lineTo(endX, endY);
        this.ctx.stroke();
        this.drawTree(endX, endY, length * 0.7, angle - 20, depth - 1, width * 0.7);
        this.drawTree(endX, endY, length * 0.7, angle + 20, depth - 1, width * 0.7);
    };
    Tree.prototype.draw = function () {
        this.ctx.clearRect(0, 0, canvas.width, canvas.height);
        this.ctx.strokeStyle = "brown";
        this.drawTree(this.startX, this.startY, this.length, this.angle, this.depth, this.width);
    };
    return Tree;
}());
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var tree = new Tree(ctx, canvas.width / 2, canvas.height, 100, -90, 8, 10);
tree.draw();
// Interaktiivsus
function updateTree() {
    var length = document.getElementById("length").value;
    var depth = document.getElementById("depth").value;
    var width = document.getElementById("width").value;
    tree.length = parseInt(length);
    tree.depth = parseInt(depth);
    tree.width = parseFloat(width);
    tree.draw();
}
