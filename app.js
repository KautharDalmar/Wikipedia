

let searchText = document.querySelector('#searchText');
let findNow  = document.querySelector('#findNow');
let searchResult = document.querySelector('#searchResult');

findNow.addEventListener('click', (e)=>{
    e.preventDefault();
    let url = `https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=20&srsearch=${searchText.value}`;
    fetch(url).then(response => response.json()).then(data =>{
        console.log(data);
        searchResult.innerHTML = ``;
        data.query.search.forEach(items =>{
            let resultURL = `https://en.wikipedia.org/?curid=${items.pageid}`;
            searchResult.insertAdjacentHTML(`afterBegin` , `<div class="resultItem">
        <a href="${resultURL}" target="_blank" class="resultTitle">${items.title}</a><br>
        <a href="${resultURL}" target="_blank" class="link">${resultURL}</a>
        <p>${items.snippet}</p>
    </div>`)
        })
        
    })
    
})
    // const search = searchText.findNow(searchResult);
    // if(searchText.value === 0){
    //     alert('No Results found, Try different Keywords');
    //     return ;
    // }
    // async function handleSubmit(event) {
    //     // [..]
      
    //     try {
    //       const results = await searchWikipedia(searchQuery);
      
    //       if (results.query.searchinfo.totalhits === 0) {
      
    //         alert('No results found. Try different keywords');
      
    //         return;
      
    //       }
      
      
    //       displayResults(results);
    //     } catch (err) {
    //       console.log(err);
    //       alert('Failed to search wikipedia');
    //     } finally {
    //       spinner.classList.add('hidden');
    //     }
    //   }



