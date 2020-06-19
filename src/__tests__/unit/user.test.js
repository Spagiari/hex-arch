const user = require('../user');

describe('commom cases', () => {
    test('add user', () => {
        expect(() => {
            user.testInterface.ports.addUser({id: 1, name: 'Teste', pwd: '123'})
          }).not.toThrow();
    });
});