$( document ).ready(function() {
	loadProducts();

	/*
	 *
	 *  FUNCTION NAME : loadProducts
	 *  AUTHOR        : Mark Anthony Elbambo
	 *  DATE          : October 14, 2015
	 *  MODIFIED BY   : 
	 *  REVISION DATE :
	 *  REVISION #    : 
	 *  DESCRIPTION   : main function for loading the products
	 *  PARAMETERS    : 
	 *
	 */
	function loadProducts(){
		var json = {
			"items": {
				"phone" : [ 
					{
					"product" : "iPhone 8",
					"manufacturer" : "Apple",
					"releaseDate" : "2018",
					"price" : 499
					}, 
					{
						"product" : "Galaxy S9",
						"manufacturer" : "Samsung",
						"releaseDate" : "2018",
						"price" : 350
					}, 
					{
						"product" : "Xperia ZZ",
						"manufacturer" : "Sony",
						"releaseDate" : "2020",
						"price" : 399
					} 
				],
				"laptop" : [ 
					{
						"product" : "MacBook PRO 2018",
						"manufacturer" : "Apple",
						"releaseDate" : "2017",
						"price" : 1999
					}, 
					{
						"product" : "Vaio",
						"manufacturer" : "Sony",
						"releaseDate" : "2020",
						"price" : 1690
					} 
				]
			}
		}
		var category = json['items'];
		for(x in category){
			$("#contents").append(categoryCreator(x));
			$("#category-"+x).append(productCreator(category[x]));
		}
	}

	/*
	 *
	 *  FUNCTION NAME : categoryCreator
	 *  AUTHOR        : Mark Anthony Elbambo
	 *  DATE          : October 14, 2015
	 *  MODIFIED BY   : 
	 *  REVISION DATE :
	 *  REVISION #    : 
	 *  DESCRIPTION   : function to create the category container
	 *  PARAMETERS    : 
	 *
	 */
	function categoryCreator(name){
		var str = '<div id="category-'+name+'">';
		str += '<div class="categBox-Header">'
		str += '<h3><span class="label label-primary">'+name.toUpperCase()+'</span></h3>';
		str += '</div></div>';
		return str;
	}
	/*
	 *
	 *  FUNCTION NAME : productCreator
	 *  AUTHOR        : Mark Anthony Elbambo
	 *  DATE          : October 14, 2015
	 *  MODIFIED BY   : 
	 *  REVISION DATE :
	 *  REVISION #    : 
	 *  DESCRIPTION   :function to create the product inside the category
	 *  PARAMETERS    : 
	 *
	 */
	function productCreator(obj){
		var str = "";
		for(x in obj){
		str += '<div class="categBox">'
		str += '		<div class="panel panel-primary">';
		str += '			<div class="panel-heading">'+obj[x]['product']+'</div>';
		str += '			<div class="panel-body">';
		str += '				<div class="categBox-content-body-main">';
		str += '					<div class="categBox-content-body-image">';
		str += '						<img src="resources/images/'+(obj[x]['product']).replace(/ /g,'')+'.jpg'+'">';
		str += '					</div>';
		str += '					<div class="categBox-content-body-main-rigth">';
		str += '						<div class="categBox-content-body-description">';
		str += '							Manufactured by '+obj[x]['manufacturer'] +',';
		str += '							to be released in '+obj[x]['releaseDate'];
		str += '						</div>';
		str += '						<div class="categBox-content-body-main-rigth-buttons">';
		str += '							<span class="label label-info price-label">$'+obj[x]['price']+'</span>';
		str += '							<button class="btn btn-default btn-sm" role="group" aria-label="Add to cart">';
		str += '								Add to cart';
		str += '								<span class="glyphicon glyphicon-shopping-cart" aria-hidden="true"></span>';
		str += '							</button>';
		str += '						</div>';
		str += '					</div>';
		str += '				</div>';	
		str += '			</div>';
		str += '		</div>';
		str += '	</div>'
		}
		return str;
	}

})