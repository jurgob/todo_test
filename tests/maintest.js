//framework_name:  angularjs|flux|emberjs

var framework_name = casper.cli.get('fw')

var PAGE_URL = "http://localhost:8000/"+framework_name
var PAGE_TITLE = framework_name+" TODO list"

casper.test.begin('Page Load', 3, function suite(test) {
    casper.start(PAGE_URL, function() {
        casper.echo("testing framework: "+framework_name)

        test.assertTitle(PAGE_TITLE, "page title is correct");
    });

    casper.waitFor(function check() {
            return this.evaluate(function() {
                return ( $('.addItemText').length > 0 );
            });
        }, function then() {
            var itemText = "0";

            // var _addItemFunc = function(itemText){
            //     __utils__.echo("$('.addItemText').length: "+$('body').html())
            //     $('.addItemText').val(itemText) 
            //     $('.addItemText').change()
            //     $('.addItemBtn').click()
            //     return $('.addItemText').val()
            // }
            //var ev = this.evaluate(_addItemFunc, {itemText:itemText})

            casper.sendKeys('.addItemText', itemText);
            casper.click('.addItemBtn');
            test.assertEvalEquals(function() {
                var testItems$ =$('li');
                return testItems$.last().find('.itemLabel').text().trim()
            }, itemText,  "item add success");
        }, function timeout(){
            this.echo("problem during page render")
        },
        10000
    );

    casper.then(function() {
        var itemText = "1000";
        
        // var _addItemFunc = function(){
        //     casper.sendKeys('.addItemText', itemText);
        //     casper.click('.addItemBtn');
        // }
        // casper.repeat(parseInt(itemText), _addItemFunc);

        var _addItemFunc = function(itemText){
            var toAdd = itemText;
            for(var idx = 0; idx<=toAdd; idx++ ){
                $('.addItemText').blur()
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