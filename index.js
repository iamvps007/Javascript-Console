//Don't Remove try and catch block
//Write your code in try block
//vaibhavpratapsingh.com
try{
    let a = 5;
    let b = 5;
    let c = a+b;
    cout(c); //use cout instead of console.log(); 
    
    for(let i = 0;i<10;i++)
    {
        cout("@_iamvps_");
    }
    
    try{
        let divide = 10/0;
    }
    catch(e)
    {
        cout(e);   
    }
    
    function test()
    {
        cout("hello");
    }
    
    function test1(num1,num2)
    {
        return num1+num2;
    }
    
    cout(test1(num1,num2));
    
    
    
}catch(err)
{
    cout(err.message);
}
