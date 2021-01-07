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
    TimeManager,
    Vector2,
} from "mini-engine";
import { Enemy01Walking } from "../../Animation/Enemy01Animations";

export class Enemy01 extends GameObject {
    private spriteRenderer: SpriteRenderer;
    private animator: Animator;
    private bodyCollider: BoxCollider;
    private edgeCollider: BoxCollider;
    private rigidBody: RigidBody;

    private readonly walkSpeed: number = 1.6;

    constructor() {
        super();

        this.layer = "Enemy";

        this.spriteRenderer = this.addComponent<SpriteRenderer>(
            () =>
                new SpriteRenderer({
                    sprite: new Sprite({
                        image: AssetManager.getImage("image/enemy/goblin_spritesheet.png"),
                        slice: new Rectangle(0, 0, 16, 16),
                        smooth: false,
                    }),
                })
        );

        this.animator = this.addComponent<Animator>(
            () =>
                new Animator({
                    spriteRenderer: this.spriteRenderer,
                })
        ).addAnimation("Walking", Enemy01Walking());

        this.bodyCollider = this.addComponent(
            () => new BoxCollider({ width: 10, height: 16, physics: true, debug: true }),
            "BodyCollider"
        );
        this.edgeCollider = this.addComponent(
            () => new BoxCollider({ width: 4, height: 4, offsetX: 7, offsetY: -6, physics: false, debug: true }),
            "EdgeCollider"
        );

        this.rigidBody = this.addComponent(
            () =>
                new RigidBody({
                    rigidBodyType: RigidBodyType.Dynamic,
                    layersToCollide: ["Foreground", "Player"],
                    gravity: 0,
                })
        );
    }

    protected start(): void {
        this.transform.scale.set(3, 3);
        this.transform.position.set(200, -48);
        //this.transform.rotation = 45;
        this.animator.playAnimation("Walking");
    }

    protected update(): void {
        this.move();
    }

    private move(): void {
        if (this.bodyCollider.collidesWithLayer("Foreground") === false) {
            return;
        }

        if (this.edgeCollider.collidesWithLayer("Foreground") === false) {
            this.transform.scale.set(-this.transform.scale.x, this.transform.scale.y);
        }

        this.rigidBody.velocity.set(this.transform.scale.unit().x * this.walkSpeed, 0);
    }
}
