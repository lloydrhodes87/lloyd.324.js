
const f = (a) => {
    let c = 0; 
    a.forEach((e, i) => {
        if (a[i+1] !== undefined) {
            if (e.length === 3 && a[i+1].length === 3) u()  
            if (e.length === 3 || a[i+1].length === 3) {
                if (e[e.length - 1] === a[i+1][a[i+1].length -1])u()                
            } 
            if ((e[0] === a[i+1][0]) || (e[1] === a[i+1][1])) u()
            if (e === 'J' || a[i+1] === 'J') u()                 
        }     
    })
    function u() {
        c++
        a.splice(0, 1)   
    }
    return c <= 1 ? `${c} Snap` : `${c} Snaps`
  };
  
 
  module.exports = { f };