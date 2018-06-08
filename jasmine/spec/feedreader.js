$(function() {

    describe('RSS Feeds', function() {
        // Checks if all feeds are defined
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        // Checks if all feed urls are defined
        it('url are defined', function() {
            for (let i = 0; i < allFeeds.length; i++) {
                expect(allFeeds[i].url).toBeDefined();
                expect(allFeeds[i].url.length).not.toBe(0);
            };
        });


        // Checks if all feed names are defined
        it('names are defined', function() {
            for (let i = 0; i < allFeeds.length; i++) {
                expect(allFeeds[i].name).toBeDefined();
                expect(allFeeds[i].name.length).not.toBe(0);
            };
        });
    });


    // Test suite 'The Menu'
    describe('The Menu', function() {
        // Checks if the menu element is hidden by default
        it('menu element is hidden', function() {
            expect($('body').hasClass('menu-hidden')).toEqual(true);
        });

        // Checks if the menu element toggles when the menu icon is clicked
        it('menu changes visibility', function() {
            $('.menu-icon-link').trigger('click');
            expect($('body').hasClass('menu-hidden')).toEqual(false);
            $('.menu-icon-link').trigger('click');
            expect($('body').hasClass('menu-hidden')).toEqual(true);
        });
    });


    // Test suite 'Initial Entries'
    describe('Initial Entries', function() {
        // For the asynchronous loadFeed()
        beforeEach(function(done) {
            loadFeed(0, function() {
                done();
            });
        });

        // Checks if the feed has at least one entry
        it('has more than 0 entries', function() {
            expect($('.entry .feed')).toBeDefined();
        });
    });


    /* TODO: Write a new test suite named "New Feed Selection" */

    /* TODO: Write a test that ensures when a new feed is loaded
     * by the loadFeed function that the content actually changes.
     * Remember, loadFeed() is asynchronous.
     */
}());