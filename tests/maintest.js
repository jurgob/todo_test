
var framework_name = "angularjs"

var PAGE_URL = "http://localhost:8000/"+framework_name
var PAGE_TITLE = framework_name+" TODO list"


casper.test.begin('Page Load', 3, function suite(test) {
    casper.start(PAGE_URL, function() {
        test.assertTitle(PAGE_TITLE, "page title is correct");
        //test.assertExists('form[action="/search"]', "main form is found");
        // this.fill('form[action="/search"]', {
        //     q: "casperjs"
        // }, true);
    });

    casper.then(function() {
        var itemText = "0";
        var _addItemFunc = function(itemText){
            console.log("inside evaluate")
            $('.addItemText').val(itemText) 
            $('.addItemText').change()
            $('.addItemBtn').click()
            return $('.addItemText').val()
        }
        
        var ev = this.evaluate(_addItemFunc, {itemText:itemText})

        test.assertEvalEquals(function() {
            var testItems$ =$('li');
            return testItems$.last().find('.itemLabel').text().trim()
        }, itemText,  "item add success");
        
    });


    casper.then(function() {
        var itemText = "1000";
        var _addItemFunc = function(itemText){
            var toAdd = itemText;

            for(var idx = 0; idx<=toAdd; idx++ ){
                $('.addItemText').val(idx) 
                $('.addItemText').change()
                $('.addItemBtn').click()
            }

        }
        
        var ev = this.evaluate(_addItemFunc, {itemText:itemText})

        test.assertEvalEquals(function() {
            var testItems$ =$('li');
            __utils__.echo(testItems$.length)
            __utils__.echo(testItems$.last().find('.itemLabel').text().trim())

            return testItems$.last().find('.itemLabel').text().trim()
        }, itemText,  "a lot of items add success"); 
    });


    casper.run(function() {
        test.done();
    });
});