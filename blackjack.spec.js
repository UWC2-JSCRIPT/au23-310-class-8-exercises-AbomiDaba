describe('Test the dealerShouldDraw function', () => {
    it('should determine if the dealer should draw', ()=> {
        let hand1 = [
            {suit: 'hearts', val: 10, displayVal: 'ten'}, 
            {suit: 'hearts', val: 9, displayVal: 'nine'}
        ]
        let hand2 = [
            {suit: 'hearts', val: 6, displayVal: 'six'},
            {suit: 'hearts', val: 11, displayVal: 'Ace'}
        ]
        let hand3 = [
            {suit: 'hearts', val: 10, displayVal: 'ten'}, 
            {suit: 'hearts', val: 11, displayVal: 'Ace'},
            {suit: 'hearts', val: 6, displayVal: 'six'}
        ]

        let hand4 = [
            {suit: 'hearts', val: 2, displayVal: 'two'},
            {suit: 'hearts', val: 4, displayVal: 'four'},
            {suit: 'hearts', val: 2, displayVal: 'two'},
            {suit: 'hearts', val: 5, displayVal: 'five'},
        ]

        const result1 = dealerShouldDraw(hand1);
        const result2 = dealerShouldDraw(hand2);
        const result3 = dealerShouldDraw(hand3);
        const result4 = dealerShouldDraw(hand4);

        expect(result1).toEqual(false);
        expect(result2).toEqual(true);
        expect(result3).toEqual(false);
        expect(result4).toEqual(true);
    })
})