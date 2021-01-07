import { BoxCollider, Component, RigidBody, TYPE_RIGIDBODY, Vector2 } from "mini-engine";
import { InputController } from "../../GameObject/InputController";

export class Movements extends Component {
    // cache
    private feetCollider: BoxCollider;
    private rigidBody: RigidBody;
    private inputController: InputController;

    // config
    private gravity: number = 5;
    private walkSpeed: number = 5;
    private jumpSpeed: number = 14;

    // state
    private grounded: boolean = false;
    private velocity: Vector2 = new Vector2(0, 0);
    private jumping: boolean = false;

    protected start(): void {
        this.feetCollider = this.getComponentByName("FeetCollider");
        this.rigidBody = this.getComponentByType(TYPE_RIGIDBODY);
        this.inputController = this.findGameObjectByName("InputController");

        this.rigidBody.gravity = this.gravity;
    }

    protected update(): void {
        this.grounded = this.feetCollider.collidesWithLayer("Foreground");
        this.walk();
        this.jump();
    }

    private walk(): void {
        this.velocity.set(this.inputController.axis.x * this.walkSpeed, this.rigidBody.velocity.y);
        this.rigidBody.velocity = this.velocity;
    }

    private jump(): void {
        if (this.grounded === true && this.inputController.jump === true && this.jumping === false) {
            this.jumping = true;
            this.velocity.set(this.rigidBody.velocity.x, this.jumpSpeed);
            this.rigidBody.velocity = this.velocity;
        }

        this.jumping &&= this.inputController.jump;
    }
}
