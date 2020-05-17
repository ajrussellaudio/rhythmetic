export default (original, target) => {
    return 12 * Math.log2(target / original);
};
