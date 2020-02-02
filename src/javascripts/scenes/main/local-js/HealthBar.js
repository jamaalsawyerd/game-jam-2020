class HealthBar extends Phaser.GameObjects.Container {
    constructor (scene, centerX, centerY, params){
        super (scene, centerX, centerY);
        this.back = scene.add.sprite(0, 0, 'ui_back').setScale(0.6);
        this.back.setScrollFactor(0,0);
        
        this.healthLeft = scene.add.tileSprite(0, 0, 0,0,'bar').setScale(0.6);
        this.healthLeft.setOrigin(1, 0.5);
        this.healthLeft.setScrollFactor(0, 0);
        this.barMax = this.healthLeft.width;
        
        this.healthRight = scene.add.tileSprite(0, 0, 0,0,'bar').setScale(0.6);
        this.healthRight.setOrigin(0, 0.5);
        this.healthRight.setScrollFactor(0, 0);
        
    }
    UpdateUI(x, y){
        const xoffset = 97;
        const yoffset = 197;
        const back_xoffset = 3;
        const back_yoffset = 200

        xleft = x - xoffset;
        xright = x + xoffset;
        ycenter = y - yoffset;

        this.healthLeft.setPosition(xleft, ycenter);
        this.healthRight.setPosition(xright, ycenter);
        this.back.setPosition(x + back_xoffset, y - back_yoffset);
    }    
    UpdateLeftHealth(leftpercent){ //percentage between 0 - 1
        //this.healthLeft.scaleX = leftpercent;
        if (leftpercent < 0){
            return;
        }
        this.healthLeft.width = leftpercent * this.barMax;
    }
    UpdateRightHealth(rightpercent){
        if (rightpercent < 0){
            return;
        }
        this.healthRight.width = rightpercent * this.barMax;
    }
}


module.exports = HealthBar;