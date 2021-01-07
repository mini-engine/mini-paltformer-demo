import { Sprite, Animation, AssetManager, Rectangle } from "mini-engine";

export const Enemy01Walking = (): Animation => {
    const config = {
        image: AssetManager.getImage("image/enemy/goblin_spritesheet.png"),
        smooth: false,
    };

    return new Animation({
        sprites: [
            new Sprite({
                ...config,
                slice: new Rectangle(0, 0, 16, 16),
            }),
            new Sprite({
                ...config,
                slice: new Rectangle(16, 0, 16, 16),
            }),
            new Sprite({
                ...config,
                slice: new Rectangle(32, 0, 16, 16),
            }),
            new Sprite({
                ...config,
                slice: new Rectangle(48, 0, 16, 16),
            }),
            new Sprite({
                ...config,
                slice: new Rectangle(64, 0, 16, 16),
            }),
            new Sprite({
                ...config,
                slice: new Rectangle(80, 0, 16, 16),
            }),
        ],
        speed: 0.4,
        loop: true,
    });
};
