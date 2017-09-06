var app = new function() {
		this.el = document.getElementById('desejos');
		
		this.desejos = [ // Array com desejos.
		'Ir a florida final do ano e visitar todos os lugares bonitos',
		'Comprar um carro',
		'Reformar a casa',
		'Comprar um dog',
		'Terminar a faculdade',
		'Iniciar a Pós-Graduação'
		];
		
	this.Count = function(data) { //contar elementos no Array
		var el   = document.getElementById('counter');
		var name = 'desejo';
		if (data) {
			if (data > 1) {
				name = 'desejos';
			}
		el.innerHTML = data + ' ' + name ;
		} else {
			el.innerHTML = 'Sem ' + name;
		}
	};
	this.FetchAll = function() { // função que coloca os desejos na tela
		var data = '';
		if (this.desejos.length > 0) {
			for (i = 0; i < this.desejos.length; i++) {
				data += '<tr>';
				data += '<td>' + this.desejos[i] + '</td>';
				data += '<td><i class="glyphicon glyphicon-pencil" onclick="app.Edit(' + i + ')"></i></td>';
				data += '<td><i class="glyphicon glyphicon-remove" aria-hidden="true" onclick="app.Delete(' + i + ')"></i></td>';
				data += '</tr>';
			}
		}
		this.Count(this.desejos.length);
		return this.el.innerHTML = data;
	};
	this.Add = function () { // Adicionar novos Desejos
		el = document.getElementById('add-name');
		var desejo = el.value;
		if (desejo) {
			this.desejos.push(desejo.trim());
			el.value = '';
			this.FetchAll();
		}
	};
	this.Edit = function (item) { // Editar os Desejos
		var el = document.getElementById('edit-name');
		el.value = this.desejos[item];
		document.getElementById('spoiler').style.display = 'block';
		self = this;
		document.getElementById('saveEdit').onsubmit = function() {
			var desejo = el.value;
			if (desejo) {
				self.desejos.splice(item, 1, desejo.trim());
				self.FetchAll();
				CloseInput();
			}
		}
		document.getElementById('edit-name').focus()
	};
	this.Delete = function (item) { // deletar os Desejos
		this.desejos.splice(item, 1);
		this.FetchAll();
		document.getElementById('spoiler').style.display = 'none';
	};
	}
	app.FetchAll();
	function CloseInput() {
		document.getElementById('spoiler').style.display = 'none';
	}
