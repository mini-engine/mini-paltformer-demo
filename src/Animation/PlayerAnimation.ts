import { Sprite, Animation, Vector2, AssetManager, Rectangle } from "mini-engine";

export const PlayerIdle = (): Animation => {
    const config = {
        image: AssetManager.getImage("image/player/player-spritesheet.png"),
        smooth: false,
    };

    return new Animation({
        sprites: [0, 16, 32, 48].map(
            (x: number) =>
                new Sprite({
                    ...config,
                    slice: new Rectangle(x, 64, 16, 16),
                })
        ),
        speed: 0.4,
        loop: true,
    });
};
