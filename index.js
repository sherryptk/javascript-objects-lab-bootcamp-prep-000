//var meals = { breakfast: "oatmeal" };

//var recipes = {kale: "1 cup", sausage: "1 lb", potatoes: "1 lb", coconut milk: "2 cups"}

var recipes={}

function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign({}, object, { [key]: value })
}

//returns an object with the orignal key value pairs and the new key value pair:
