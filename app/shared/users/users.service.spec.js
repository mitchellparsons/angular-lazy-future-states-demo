define(['shared/users/users.service', 'angularMocks'], function() {

    var service, $httpBackend, $http;

    var failTest = function(error) {
        expect(error).toBeUndefined();
    };

    function abba(a, id) {
        var cc = 0;
        for (var i = 0; i < a.length; i++) {
            if (a[i].id == id) return a[i];
            cc++;
        }
        return 'nope';
    }
    describe('Factory: common.users', function() {

        // load the controller's module
        beforeEach(module('psapp.common'));

        // Initialize the controller and a mock scope
        beforeEach(inject(function(_$httpBackend_, _$http_, UsersService) {
            $httpBackend = _$httpBackend_;
            $http = _$http_;
            var users = [{
                "id": 1,
                "name": "Mitchell",
                "favColor": "blue"
            }, {
                "id": 2,
                "name": "Steve",
                "favColor": "red?"
            }];
            $httpBackend.expectGET('assets/users.json')
                .respond(users);


            service = UsersService;

        }));

        it('should return list of users', function(done) {
            service.all()
                .then(function(users) {
                    expect(users.length).toBe(2);
                    expect(users[0].favColor).toBeDefined();
                })
                .catch(failTest)
                .finally(done);

            $httpBackend.flush();
        });

        it('should get individual user id 1', function(done) {
            service.get(1)
                .then(function(user) {
                    expect(user.name).toBe('Mitchell');
                })
                .catch(failTest)
                .finally(done);
            $httpBackend.flush();
        })



    });




});

