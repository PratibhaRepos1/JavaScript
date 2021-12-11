//show the numbers till the given input number and tell its even or add
//EvenOdd(10);

EvenOdd_refactor(10);
function EvenOdd(num)
{
    for(let i = 0; i<= num; i++)
    {
        if(i % 2 == 0)
        {
            console.log(i + ' EVEN');
        }
        else{
            console.log(i + ' ODD');
        }
    }
    return;
   
}

//Here refactor the code in following way
function EvenOdd_refactor(num){
    for(let i = 0; i<= num; i++)
    {
        const messsage =  (i % 2 == 0)? 'EVEN' : 'ODD';
        console.log(i + ' ' + messsage)
    }
}