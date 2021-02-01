import {
    Animator,
    AssetManager,
    BoxCollider,
    GameObject,
    Rectangle,
    RigidBody,
    RigidBodyType,
    Sprite,
    SpriteRenderer,
    Vector2,
} from "mini-engine";
import * as Animations from "../Animation/PlayerAnimation";
import { Movements } from "../Component/Player/Movements";

export class Player extends GameObject {
    private spriteRenderer: SpriteRenderer;
    private animator: Animator;
    private bodyCollider: BoxCollider;
    private feetCollider: BoxCollider;
    private rigidBody: RigidBody;
    private grounded: boolean = false;

    constructor() {
        super();

        this.layer = "Player";

        this.spriteRenderer = this.addComponent<SpriteRenderer>(
            () =>
                new SpriteRenderer({
                    sprite: new Sprite({
                        image: AssetManager.getImage("image/player/player-spritesheet.png"),
                        slice: new Rectangle(0, 64, 16, 16),
                        smooth: false,
                    }),
                })
        );

        this.animator = this.addComponent<Animator>(
            () =>
                new Animator({
                    spriteRenderer: this.spriteRenderer,
                })
        )
            .addAnimation("PlayerIdle", Animations.PlayerIdle())
            .addAnimation("PlayerRun", Animations.PlayerRun());

        this.bodyCollider = this.addComponent(
            () => new BoxCollider({ width: 8, height: 16, debug: true }),
            "BodyCollider"
        );

        this.feetCollider = this.addComponent(
            () => new BoxCollider({ width: 6, height: 6, offsetY: -5, physics: true, debug: true }),
            "FeetCollider"
        );

        this.rigidBody = this.addComponent(
            () =>
                new RigidBody({
                    rigidBodyType: RigidBodyType.Dynamic,
                    layersToCollide: ["Foreground", "Enemy"],
                })
        );

        this.addComponent(() => new Movements(), "Movements");
    }

    protected start(): void {
        this.transform.scale.set(3, 3);
        this.transform.position.set(180, 92);
        //this.transform.rotation = 45;
        this.animator.playAnimation("PlayerIdle");
    }

    protected update(): void {
        this.grounded = this.feetCollider.collidesWithLayer("Foreground");

        this.transform.scale.x =
            this.rigidBody.velocity.x !== 0
                ? Math.sign(this.rigidBody.velocity.x) * Math.abs(this.transform.scale.x)
                : this.transform.scale.x;

        this.updateAnimations();
    }

    private updateAnimations(): void {
        if (this.rigidBody.velocity.x !== 0 && this.grounded) {
            this.animator.playAnimation("PlayerRun");
        } else {
            this.animator.playAnimation("PlayerIdle");
        }
    }
}
