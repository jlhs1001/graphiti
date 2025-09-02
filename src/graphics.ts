export namespace Graphics {
    export class GPU {
        // public properties that are guaranteed to be defined
        public readonly renderTarget: HTMLCanvasElement;
        public readonly context: RenderingContext;

        // private constructor to enforce usage of the create method
        private constructor(renderTarget: HTMLCanvasElement, context: RenderingContext) {
            this.renderTarget = renderTarget;
            this.context = context;
        }


        /**
         * Creates a GPU instance while gracefully handling errors.
         * @param renderTarget The HTML canvas element to render to.
         */
        public static create(renderTarget: HTMLCanvasElement): GPU | null {
            const context = renderTarget.getContext("webgpu");

            // ensure context is defined, gracefully handle errors
            if (!context) {
                console.error("WebGPU is not supported");
                return null;
            }

            // initialize gpu
            return new GPU(renderTarget, context);
        }
    }
}