 
// <!-- java script for audio  -->
        
        var audio = new Audio("./images/intro.mp3");

        function playAudio() {
        audio.play();
        }

        document.getElementById("speaker").addEventListener("click", playAudio);

// for stickey menu 

        window.addEventListener('scroll', function(){
                let navbar = document.getElementById('nav-bar')
                if(window.pageYOffset >= 65){
                    navbar.classList.add('sticky');
                }else{
                    navbar.classList.remove('sticky');
                }
            });
  