function main() {
    var m_temp = readLine().split(' ');
    var m = parseInt(m_temp[0]);
    var n = parseInt(m_temp[1]);
    magazine = readLine().split(' ');
    ransom = readLine().split(' ');
    var count = 0;
    var result = {};
    
function hash(a){
    var hasha = {};
    for (var i in a){
        hasha[i]=a[i];
        hasha[a[i]]=1;
    while(i--){
        for (var j=i+1;j<a.length;j++){
            if (hasha[i]===a[j]){
                a.splice(j,1);
                hasha[a[i]]++;
            }
        }
    }
    }
    return hasha;
}
    var hashn= new hash(ransom);
    var hashm= new hash(magazine);
    for (var nword in hashn){
        for (var mword in hashm){
            if (hashn[nword]==hashm[mword]&&hashn[hashn[nword]]<=hashm[hashm[mword]])
                count++;
        }
    }
    if (count==Object.keys(hashn).length/2) result = 'Yes';
    else result = 'No';
    
    console.log(result);
}
