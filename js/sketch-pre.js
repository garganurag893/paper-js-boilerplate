window.body = document.getElementsByTagName('body')[0];

//Pollutes the global space so we can write code more like Paperscript
//Gives global access to view, project, Path + more
paper.install(window);

//Sets up our canvas (wdone automatically if we used Paperscript)
paper.setup('sketch');
