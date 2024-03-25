function Size(width, height){
    this.width = width || 80;
    this.height = height || 60;
    this.resize = function(newWidth, newHeight){
        this.width = newWidth;
        this.height = newHeight;
    };
}

function Possition(x, y){
    this.x = x || 0;
    this.y = y || 0;
    this.move = function(newX, newY){
        this.x = newX;
        this.y = newY;
    };
}

function ProgramWindow(screenSize, size, position){
    this.screenSize = Size(800, 600);
    this.size = Size();
    this.position = Possition();
    this.resize = function(Size){
        if(width >= 1 && height >= 1){
            this.screenSize = Size(width, height)
        }
        else{
            if(Size.width < 1){
                Size.width = 1;
                this.screenSize = Size(width, height);
            }
            else{
                Size.height = 1;
                this.screenSize = Size(width, height);
            }
        }
    };
    this.move = function(Possition){
        if(x >= 0 && y >= 0){
            if(x >= width && y >= height ){
                this.position = Possition(550, 200);
            }else{
                this.position = Possition(x, y);
            }
        }
        else{
            if(Possition.x < 0){
                Possition.x = 1;
                this.position = Possition(x, y);
            }
            else{
                Possition.y = 1;
                this.position = Possition(x, y);
            }
        }
    };
}

function changeWindow(ProgramWindow) {
    ProgramWindow.Size(400, 300);
    ProgramWindow.Possition(100, 150);

    return programWindow;
}


const size =new Size(1080,764);
size.width;
// => 1080
size.height;
// => 764

size.resize(1920, 1080);
size.width;
// => 1920
size.height;
// => 1080

const point=new Possition();
point.x;
// => 0
point.y;
// => 0

point.move(100,200);
point.x;
point.y;

let programWindow1 = new ProgramWindow();
programWindow1.screenSize.width;
// =>800

let programWindow2 = new ProgramWindow();
const newSize = new Size(600,400);
programWindow2.resize(newSize);
programWindow2.size.width;
//=> 600
programWindow2.size.height;
// =>400

let programWindow3 = new ProgramWindow();
const newPossition = new Possition(50,100);
programWindow3.move(newPossition);
programWindow3.position.x;
programWindow3.position.y;

let programWindow4 = new ProgramWindow();
changeWindow(programWindow4);
programWindow4.size.width;
