import ErrorRepository from '../errorrepository';

test('return known error', () => {
    const errorRepository = new ErrorRepository();
    expect(errorRepository.translate(1)).toBe("Персонаж уже в команде");

});

test('return unknown error', () => {
    const errorRepository = new ErrorRepository();
    expect(errorRepository.translate(3)).toBe("Unknown error");

});
