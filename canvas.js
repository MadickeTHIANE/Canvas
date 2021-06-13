
let canvas = document.getElementById('canvas');
canvas.width = window.innerWidth - 5;
canvas.height = window.innerHeight - 5 ;

canvas.style.backgroundColor = "white"
let context  = canvas.getContext("2d");
/*Création d'une position aléatoire pour les cercles grace a Math.random() */


/*Creation des Cercles */ 
//On crée un nouveau chemin de dessins 
/*context.beginPath()
/* On crée le cercle, on n"oublie pas que le debut de l'angle est de 0 et la fin de l'angle est egale a PI * 2 */
/*context.arc(300,400,50,0 ,Math.PI *2 ,false );
/*Maintenant on dessine le cercle sur la Page */ 
/*context.stroke()
/*On ferme le chemin du dessins semblable a penup() sur python */
/*context.closePath()
/*Et maintenant, on definie la couleur de fond du cercle grace a fillStyle qui n'est pas une fonction et on "colorie" avec fill() */

/*context.fillStyle = "#DDDDD4"
context.fill()*/
/*Creation de la fonction de collision */
function distance(x1,x2,y1,y2){
    let distance_x = x2 - x1;
    let distance_y = y2 - y1; 
    let distancee = Math.sqrt(distance_x * distance_x  + distance_y * distance_y)
    

    return distancee;
}




/*Tout d'abord nous recuperons la distance entre les cercles */




class Circle{
    constructor(x,y,radius,color,speed,dx,dy){
        this.x = x ;
        this.y = y;
        this.radius = radius;
        this.color = color ; 
        this.speed = speed;
        this.dx = 0.2 ;
        this.dy = 0.2;
    }
    draw(){
        context.beginPath();

        context.arc(this.x,this.y,this.radius,0,Math.PI * 2 ,false)
        context.fillStyle = this.color; 
        context.lineWidth = 5;

        context.fill();
        context.closePath();
    }
    update(){
        this.draw(context);
        
        if (this.x + this.radius > innerWidth || this.x - this.radius < 0 )
        {
            this.dx = -this.dx;
        }
        
        if(this.y + this.radius > innerHeight || this.y - this.radius < 0)
        {
            this.dy= -this.dy;
        }
        this.x += this.dx;
        this.y += this.dy;
        for(let j = 0 ; j< circleArray.length ; j++)
        {
            for(let y = j + 1  ; y<circleArray.length ; y++)
            {
                    
                let d = distance(circleArray[j].x, circleArray[y].x, circleArray[j].y, circleArray[y].y);
                if(d <= (circleArray[j].radius + circleArray[y].radius))
                {   
                        collision(circleArray[j], circleArray[y])
                        
                }
                
                    
            }

        }  
    }
}


let animation  = function(){
        setTimeout(function(){
        requestAnimationFrame(animation);
        context.clearRect(0, 0,canvas.width,canvas.height);

        for(i = 0 ; i<circleArray.length;i++){
            circleArray[i].update() 

        }
    },1000/30)   
}


let circleArray = [];
for(let i = 0 ; i < 10 ; i++){
    let x = Math.random() * window.innerWidth;
    let y = Math.random() * window.innerHeight;
    if(x >= window.innerWidth  ){
        x = Math.random() * window.innerWidth;
    }
    if (y >= window.innerWidth ){
        y = Math.random() * window.innerWidth;
    }

    let my_circle = new Circle(x,y,20,"#dddd12",1);
            circleArray.push(my_circle);
            circleArray[i].draw();
            animation();

}




