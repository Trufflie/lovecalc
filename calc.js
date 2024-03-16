//these prompts dont do anything, just makes people feel important
prompt("what is your name?")
prompt("what is your crush's name?")

var n = Math.random();
n = n * 100;
n = Math.floor(n) + 1;
if (n > 70){
    alert('CONGRATS! Your love percentage is ' + n + '%');
} 
if (n > 30 && n <=70)
{
    alert('not bad... your love score is ' + n + '%')
}
if (n > 0 && n <=30)
{
    alert('sorry...... your love score is only ' + n + '%')
}
