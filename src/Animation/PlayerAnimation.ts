import { Sprite, Animation, Vector2, AssetManager, Rectangle } from "mini-engine";

export const PlayerIdle = (): Animation => {
    const config = {
        image: AssetManager.getImage("image/player/player-spritesheet.png"),
        smooth: false,
    };

    return new Animation({
        sprites: [
            new Sprite({
                ...config,
                slice: new Rectangle(0, 64, 16, 16),
            }),
            new Sprite({
                ...config,
                slice: new Rectangle(16, 64, 16, 16),
            }),
            new Sprite({
                ...config,
                slice: new Rectangle(32, 64, 16, 16),
            }),
            new Sprite({
                ...config,
                slice: new Rectangle(48, 64, 16, 16),
            }),
        ],
        speed: 0.4,
        loop: true,
    });
};
