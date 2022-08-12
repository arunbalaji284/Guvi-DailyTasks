var request=new XMLHttpRequest();

request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
request.send();

request.onload=function(){

   var result=JSON.parse(request.response);
   console.log(result);


  //print the all the countries which belongs to Asia region
   resu = result.filter((ele)=>ele.region == "asia").map((ele)=>ele.name);
   console.log(resu);
    
  //Print all the counties details whose population is less than 2 lakhs
  
   res=result.filter((ele)=>ele.population < 200000).map((ele)=>ele.name);
   console.log(res);  

  // Print the following details name, capital, flag using forEach function

   result.forEach((country) => {
   console.log(`Name : ${country.name}, Capital : ${country.capital}, Flag : ${country.flag}`);
   });


  // Print the total population of countries using reduce function

   var total = result.reduce((pop,ele)=>pop+ele.population,0);
   console.log(total);


  // Print the country which uses US Dollars as currency.
  
   var curr =  result.filter((ele)=>ele.currencies.code == "USD").map((ele)=>ele.name);
   console.log(curr);

    
