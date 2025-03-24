for ( let i = 1;i < 101; i ++){
    if ( i%3==0){
        document.writeln("fizz");
    } else if (i%5 ==0){
        document.writeln("Buzz");
    } else if ((i%3 ==0) &&(i%5==0)){
        document.writeln("fizzBuzz");
    } else {
        document.writeln(i);
    }
}