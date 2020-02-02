
const create = function() {
  console.log('create');
  this.game.scene.start('main', { player1:'blood', player2:'foot' });
};


module.exports = create;