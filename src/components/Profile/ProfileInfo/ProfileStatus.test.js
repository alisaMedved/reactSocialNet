

describe('ProfileStatus component', () => {
    test('status from props should be in local state', () => {
        const component = create(<ProfileStatus status='bla bla' />);
        const instance = component.getInstance();
        expect(instance.state.status).toBe("bla bla");
    });
});

const obj = {
    a: 1,
    b: [1, 4, 7]
};

const obj2 = {
    a: 1,
    b: [1, 4, 66]
    };

test("obj equal", ()=> {
   expect(obj).toEqual(obj2);
});
