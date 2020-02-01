class CameraController {
    constructor(scene) {
        this.scene = scene;
        //set to transparent after debug
        this._center = scene.add.rectangle(0,0,5, 5, 0x000000, 1);
        scene.cameras.main.startFollow(this._center);
        //TODO reset center to 2000;?
        scene.cameras.main.setBounds(0, 0,4000, 1000)
        //scene.cameras.main.bounds = null;

    }
    UpdatePosition(fighters){
        const y_offset = 200;
        x = 0;
        y = 0;
        len = 0;
        for (i = 0; i < fighters.length; ++i){
            x += fighters[i].x;
            y += fighters[i].y;
            len += 1;
        }
        x /= len
        y /= len
        newX = this.lerp(this._center.x, x, 0.5);
        newY = this.lerp(this._center.y, y, 0.5);
        this._center.setPosition(newX, newY - y_offset);
    }
    UpdateWorldBounds(scene){
        const { centerX, centerY, width, height } = scene.cameras.main;
        x = scene.cameras.main.scrollX + centerX
        y = scene.cameras.main.scrollY + centerY
        scene.physics.world.setBounds(x - (width / 2), y - (height / 2), width, height);
    }

    lerp(a, b, t){
        return (a + t*(b - a));
    }
}
module.exports = CameraController;