class HealthBar extends Phaser.GameObjects.Container {
    constructor (scene, centerX, centerY, params){
        super (scene, centerX, centerY);
        this.back = scene.add.sprite(0, 0, 'ui_back');
        
        this.healthLeft = scene.add.sprite(0, 0, 'bar');
        this.healthLeft.setOrigin(1, 0.5);
        this.healthLeft.setScrollFactor(1, 0.9);
        
        this.healthRight = scene.add.sprite(0, 0, 'bar');
        this.healthRight.setOrigin(0, 0.5);
        this.healthRight.setScrollFactor(1, 0.9);
        
    }
    UpdateUI(x, y){
        const xoffset = 163;
        const yoffset = 395;
        const back_xoffset = 5;
        const back_yoffset = 400

        xleft = x - xoffset;
        xright = x + xoffset;
        ycenter = y - yoffset;

        this.healthLeft.setPosition(xleft, ycenter);
        this.healthRight.setPosition(xright, ycenter);
        this.back.setPosition(x + back_xoffset, y - back_yoffset);
    }    
    UpdateHealth(leftpercent, rightpercent){ //percentage between 0 - 1
        this.healthLeft.scaleX = leftpercent;
        this.healthRight.scaleX = rightpercent;
    }
}


module.exports = HealthBar;