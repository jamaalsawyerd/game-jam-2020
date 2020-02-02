class CameraController {
    constructor(scene) {
        this.scene = scene;
        //set to transparent after debug
        this._center = scene.add.rectangle(0,0,5, 5, 0x000000, 1);
        scene.cameras.main.startFollow(this._center);
        //TODO reset center to 2000;?
        scene.cameras.main.setBounds(-500, 0, 1975, 500)
        //scene.cameras.main.bounds = null;

    }
    UpdatePosition(fighters, scene){
        const maxCameraSize = {x: 1980, y:1080 }
        const minCameraSize = {x: 960, y: 540 }
        const maxDist = 800;
        
        x = 0;
        y = 0;
        for (i = 0; i < fighters.length; ++i){
            x += fighters[i].x;
            y += fighters[i].y;
        }
        x /= 2
        y /= 2
        distance = Math.abs(fighters[0].x - fighters[1].x)
        newX = this.lerp(this._center.x, x, 0.5);
        newY = this.lerp(this._center.y, y, 0.5);
        this._center.setPosition(newX, newY);



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