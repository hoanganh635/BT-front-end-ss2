    let rectangle = {
        width: 10,
        height: 5,
        getArea: function(){
            return this.width * this.height;
        }
    };


    let area = rectangle.getArea();
    console.log(area);