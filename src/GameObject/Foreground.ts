import { GameObject, RigidBody, RigidBodyType, TiledTilemapRenderer, TilemapCollider, Tileset } from "mini-engine";
import TilemapData from "../Tilemap/Tilemap01.json";

export class Foreground extends GameObject {
    private tilemapRenderer: TiledTilemapRenderer;
    private collider: TilemapCollider;

    constructor(sprite: HTMLImageElement) {
        super();

        this.layer = "Foreground";

        this.tilemapRenderer = this.addComponent(
            () =>
                new TiledTilemapRenderer({
                    tileset: new Tileset({
                        image: sprite,
                        tileWidth: 16,
                        tileHeight: 16,
                        gridWidth: 12,
                        gridHeight: 16,
                    }),
                    tilemapData: TilemapData,
                })
        );

        this.collider = this.addComponent<TilemapCollider>(
            () =>
                new TilemapCollider({
                    tilemapRenderer: this.tilemapRenderer,
                    debug: true,
                })
        );

        this.addComponent<RigidBody>(
            () =>
                new RigidBody({
                    rigidBodyType: RigidBodyType.Static,
                    layersToCollide: ["Foreground", "Bot"],
                    gravity: 0,
                })
        );

        this.transform.scale.set(3, 3);
    }
}
