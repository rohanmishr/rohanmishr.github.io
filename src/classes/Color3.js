class Color3 {
    constructor(r, g, b) {
        this.r = r;
        this.g = g;
        this.b = b;
    }

    getHex() {
        return "0x" + this.r.toString(16) + this.g.toString(16) + this.b.toString(16);
    }
}

export default Color3;