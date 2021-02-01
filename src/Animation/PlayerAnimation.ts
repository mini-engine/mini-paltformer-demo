import { Sprite, Animation, Vector2, AssetManager, Rectangle } from "mini-engine";

export const PlayerIdle = (): Animation => {
    return new Animation({
        sprites: [0, 16, 32, 48].map(
            (x: number) =>
                new Sprite({
                    image: AssetManager.getImage("image/player/player-spritesheet.png"),
                    smooth: false,
                    slice: new Rectangle(x, 64, 16, 16),
                })
        ),
        speed: 0.4,
        loop: true,
    });
};

export const PlayerRun = (): Animation => {
    return new Animation({
        sprites: [0, 16, 32, 48, 64, 80].map(
            (x: number) =>
                new Sprite({
                    image: AssetManager.getImage("image/player/player-spritesheet.png"),
                    smooth: false,
                    slice: new Rectangle(x, 16, 16, 16),
                })
        ),
        speed: 0.4,
        loop: true,
    });
};
