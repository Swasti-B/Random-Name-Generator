function generate()
    {
    const Names= ["Shaivy", "Arushi", "Rajvi", "Avinash","Ingrid","Tanisha","Tianna","Swasti","Prashant"]
    let len= Names.length;

    let arr1=[];
    let arr2=[];
    let arr3=[];
    let taken1=[]

    while(taken1.length!==Names.length)
    {
        let randomval = Names[Math.floor(Math.random()*len)];
        if(!(taken1.includes(randomval))){
            taken1.push(randomval)
        }
        else continue;
    }
    console.log(taken1,"taken1");
    arr1=taken1.slice(0,3);
    arr2 = taken1.slice(3,6);
    arr3 = taken1.slice(6,len)

    document.getElementById("Ein").innerHTML = arr1
    document.getElementById("Newt").innerHTML = arr2
    document.getElementById("Tes").innerHTML = arr3
}