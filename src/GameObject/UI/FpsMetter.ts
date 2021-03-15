import { DomManager, TimeManager, GameObject, TextRenderer } from "mini-engine";

const FPS_REFRESH_DELAY = 0.1;

export default class FpsMetter extends GameObject {
    private textRenderer: TextRenderer;

    private delay: number = FPS_REFRESH_DELAY;

    constructor() {
        super();

        this.layer = "UI";
        this.ui = true;

        this.textRenderer = this.addComponent(
            () =>
                new TextRenderer({
                    text: "",
                    color: "#A7D6ED",
                    size: 20,
                    fontFamily: "PressStart2P-Regular",
                    fontUrl: "font/PressStart2P-Regular.ttf",
                    pivot: "center",
                })
        );
    }

    start() {
        this.transform.position.set(DomManager.gameWidth / 2 - 120, 20 - DomManager.gameHeight / 2);
    }

    update() {
        this.delay += TimeManager.unscaledDeltaTime;
        if (this.delay >= FPS_REFRESH_DELAY) {
            this.delay = 0;

            const fps: string = (1 / TimeManager.unscaledDeltaTime).toFixed(2);
            this.textRenderer.text = `FPS: ${fps}`;
        }
    }
}
