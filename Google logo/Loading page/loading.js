        const indicator = document.querySelector(".indicator");
        const output = document.querySelector("output");

        var percent = 0;
        var interval;

        interval = setInterval (function() {
            percent++;
            output.value = percent + "%";
            indicator.setAttribute("style", `--completion: ${percent}%`);

            if (percent == 100){
                clearInterval(interval);
            }
        }, 60);