class Planet {
    constructor (x, y, r, parent, orbit, distance, color){
        this.x = x;
        this.y = y;
        this.radius = r;
        this.diameter = 2 * (Math.sqrt((this.radius * this.radius) / Math.PI));
        this.parent = parent;
        this.orbit = orbit;
        this.distance = distance;
        this.color = color;
    }

    drawCircle (ctx){
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.diameter, 0, 2 * Math.PI, false);
        ctx.fill();
      }

    getCoordinates (planet, distance, count){
        let coord = {}
        coord['x'] = planet.x + distance * Math.cos( count * (Math.PI / 180) )
        coord['y'] = planet.y + distance * Math.sin( count * (Math.PI / 180) )
        return coord 
    }

    update (){
        if (this.parent !== null){
            let coord = 
                this.getCoordinates({
                    x: this.parent.x,
                    y: this.parent.y
                }, this.distance, count * this.orbit)

            this.x = coord.x
            this.y = coord.y
        }

    }

    draw (ctx){
        ctx.fillStyle = this.color;
        this.drawCircle(ctx)
    }
}