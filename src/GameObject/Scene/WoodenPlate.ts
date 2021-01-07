import { AssetManager, GameObject, Sprite, SpriteRenderer, Vector2 } from "mini-engine";

export class WoodenPlate extends GameObject {
    constructor() {
        super();

        this.layer = "Foreground";

        this.addComponent(
            () =>
                new SpriteRenderer({
                    sprite: new Sprite({
                        image: AssetManager.getImage("image/misc/wooden_plate.png"),
                        smooth: false,
                    }),
                    tiled: new Vector2(3, 1),
                    offset: new Vector2(0, 0),
                })
        );

        this.transform.scale.set(3, 3);
        this.transform.position.set(72, -48);
        this.transform.rotation = 0;
    }
}
