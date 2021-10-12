// placeholder for Vehicle class tests
test('sanity', () => { // test
    expect(true).not.toBe(false); // assertion
    expect(1 + 1).toBe(2);
    expect('Learning tests').toHaveLength(14);
    expect(false).toBeFalsy();
    expect(typeof null).toBe('object');
    // expect({}).toBe({}); // fails
    expect({}).toEqual({});
    // expect({x: 1, y: 0}).toEqual({ x: 1});
});