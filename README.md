## Teknologi

Node.js med Express og EJS som view engine. EJS (Embedded JavaScript) støtter vanlig html, men kan også generere html-kode fra javascript i følgende format:


```
<% if (something) { %>
  <h1><%= console.log(something) %></h1>
<% } %>
```


`<%...%>` og `<%=...%>` er reserverte tags for å "embedde" javascript.

Vi bruker det også for å importere html filer ved følgende syntax:


```
<head><% include partials/head %></head>
```


Dermed kan vi i nye filer kun bruke denne linjen fremfor å legge til stylesheets o.l. Hvis man ønsker å endre noe i "head" trenger man kun å endre dette én gang!

For å sette opp backbone i programmet med Express brukte vi: [Express-Generator](https://expressjs.com/en/starter/generator.html)

Denne gir oss en app.js-fil med standard setup som vi har modifisert til å bl.a. tilpasse scripts, paths, view engine, port. Etter å ha importert det vi trenger av bibliotek settes appen opp med følgede:


```
app.engine('html', require('ejs').renderFile);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
```


Hvor 'views' referer til mappen 'views' som inneholder alle .ejs filer.

Ellers fulgte express-generator med handling av 404-side.

### Flex-box

Alle elementer på siden, der det gir mening (posts, navbar, knapper o.l.) er flexboxes. Et godt eksempel på dette vises ved resizing av siden, slik at navbar går fra "flex-direction: column" til "row".

### Navbar
Implementert via divs for wrapper og navbar items. Vi har to helt forskjellige layouts ved @media tags.

### Ajax
Brukes for å hente inn ekstra dokumentasjon (denne) på /docs. Denne filen ligger delt i lenken i følgende script:

```$.ajax({
		url: "http://docs.google.com/document/d/e/2PACX-1vQYqV98XXr3M-FMcrwjHyA60SiwibFxY2hhIu0roHagXJtdrjKO3fGygsdVeqFRy0WaIA3jGPxZJgfd/pub",
		success: function(result){
			$("#doc").append(result);
		},
		error: function(){
			alert("Could not load file");
		}
	});
```

## jQuery

*   Selector: brukes overalt der jQuery er innblandet
    *   `$('.dynamic-amount')...`
*   Funksjoner fra jQuery API, feks `.each` og `.val`

        ```
        $('.dynamic-amount').each(function(i, obj) {
        		defPortionValues.push(obj.textContent);
        	});
        
	$("#portions_view").val(function(i,oldval) {
        		return oldval>1 ? --oldval : oldval;
        	});
        ```


*   Events for - og + i antall porsjoner gjør at ingrediensene endres:


```
	$('.decrease').click(function(){
		$("#portions_view").val(function(i,oldval) {
			return oldval>1 ? --oldval : oldval;
		});
		updatePortions();
	});
```


## Resonsivt design

*   Siden har tre forskjellige layouts ved bruk av delt-skjerm, fullskjerm og mobil-størrelse. Alle endringer i layout animeres.
