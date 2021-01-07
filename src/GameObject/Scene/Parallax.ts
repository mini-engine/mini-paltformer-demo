import { AssetManager, GameObject, Sprite, SpriteRenderer, Vector2 } from "mini-engine";

export class Parallax extends GameObject {
    constructor() {
        super();

        this.layer = "Parallax";

        this.addComponent(
            () =>
                new SpriteRenderer({
                    sprite: new Sprite({
                        image: AssetManager.getImage("image/scene/background.png"),
                        smooth: false,
                    }),
                    tiled: new Vector2(2, 1),
                })
        );

        this.transform.scale.set(6, 6);
        this.transform.position.set(0, 0);
    }
}
