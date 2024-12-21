export default class IdadeMinimaError extends Error {
    constructor(message) {
        super(message);
        this.name = "IdadeMinimaError";
    }
}
