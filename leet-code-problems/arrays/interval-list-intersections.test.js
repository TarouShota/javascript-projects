import { intervalIntersection } from './interval-list-intersections'
test('calclulates intersction of two lists', () => {
    expect(intervalIntersection([[0, 2], [5, 10], [13, 23], [24, 25]], [[1, 5], [8, 12], [15, 24], [25, 26]])).toBe(3);
});