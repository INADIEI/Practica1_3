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
                this.position = Possition(x, y); // Se debe modificar solo que no se con que restricciones o condiciones
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
// => 10180

const point=new Possition();
point.x;
// => 0
point.y;
// => 0

point.move(100,200);
point.x;
point.y;

const programWindow = new ProgramWindow();
programWindow.screenSize.width;
// =>800

const programWindow = new ProgramWindow();

const newSize(600,400)
programWindow.resize(newSize);
programWindow.size.width;
//=> 600
programWindow.size.height;
// =>400

const programWindow = new ProgramWindow();

const newPossition = new Possition(50,100);
programWindow.move(newPossition);
programWindow.position.x;
programWindow.position.y;

const programWindow = new ProgramWindow();
changeWindow(programWindow);
programWindow.size.width;
