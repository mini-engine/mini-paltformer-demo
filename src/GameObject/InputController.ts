import { GameObject, GamepadController, InputManager, KeyboardController, Vector2 } from "mini-engine";

export class InputController extends GameObject {
    private keyboard: KeyboardController;
    private gamepad: GamepadController;

    private _axis: Vector2 = new Vector2(0, 0);
    private _jump: boolean = false;

    constructor() {
        super();

        this.keyboard = InputManager.keyboard;
        this.gamepad = InputManager.gamepad;
    }

    public get axis(): Vector2 {
        return this._axis;
    }

    public get jump(): boolean {
        return this._jump;
    }

    protected update(): void {
        this.updateKeyboard();
        this.updateGamepad();
    }

    private updateKeyboard(): void {
        this._axis.x = this.keyboard.isPressed("ArrowRight") ? 1 : this.keyboard.isPressed("ArrowLeft") ? -1 : 0;

        this._axis.y = this.keyboard.isPressed("ArrowUp") ? 1 : this.keyboard.isPressed("ArrowDown") ? -1 : 0;

        this._jump = this.keyboard.isPressed("Space");
    }

    private updateGamepad(): void {}
}
