const func = (i = 0) => {
    setTimeout(() => {
        const styles = ['shakeit', 'twister', 'fontalicious', 'strobe', 'intensifies'];
        document.querySelector('h1').className = 'animated ' + styles[i];
        if (i === 4) {
            i = 0;
        }
        else {
            i = i + 1;
        }
        func(i);
    }, 1000)
}

func();