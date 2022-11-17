const btns = document.querySelectorAll('.btn');
const values = document.querySelector('.value');

//Initialize count
let count = 0;

btns.forEach(function(btn){
    btn.addEventListener('click', function(e){
        // console.log(e.currentTarget.classList)
        const styles = e.currentTarget.classList;

        if(styles.contains('decrease')){
            count--;
        }else if(styles.contains('increase')){
            count++;
        }else{
            count = 0;
        }

        values.textContent = count;

    })
})

