//Services

fetch("https://strapidraft.herokuapp.com/articles").then((response) => {
		return response.json();
	})
	.then((data)=>{	
			data.forEach(elem => {

				const MasterDiv = document.getElementById('published');
				console.log('foreach', elem.title);
				const DivElement = document.createElement('div')
				DivElement.classList.add('w3-quarter');
				let img = document.createElement('ul', 'li'); 

				 let bigtitle = document.createElement('h3');
				 bigtitle.innerText = `${elem.title}`;
				 let bigbody = document.createElement('p');
				 bigbody.innerText = `${elem.body}`;
                 DivElement.append(img, bigtitle, bigbody);
				 MasterDiv.append(DivElement);
	
		});	
	})


	
