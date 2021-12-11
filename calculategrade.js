//calculate grade
//1-59 = F
//60-89 = P
//90-100 =E

const marks = [90, 90, 100];

calcuateGrade(marks);

function calcuateGrade(marks)
{
    let Average = 0;
    let total = 0;
    let Grade = '';
    for(i=0; i< marks.length; i++)
    {
        total = parseFloat(total) + parseFloat(marks[i]) ;
       // console.log(total);

    }
    Average = Math.floor(total / marks.length);
   //console.log(Average);
   if(Average <= 59)
        Grade = 'Fail';
    else if (Average > 59 && Average <=89)
        Grade = 'Pass'
    else
        Grade = 'Excellent'

    console.log('Your Total Mark ' + total + ' and Your Precentage is ' + Average + ' and Your Grade is ' + Grade);
    
}
