function countDevelopers(list) {
    let jsDevelopers = 0;
     
     for (let i = 0; i < list.length; i++) {
       const dev = list[i];
       
       if (dev.continent === 'Europe' && dev.language === 'JavaScript') {
         jsDevelopers++;
       }
     }
     
     return jsDevelopers;
   }