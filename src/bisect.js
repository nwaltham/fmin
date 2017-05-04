/*jshint esversion: 6 */

/** finds the zeros of a function, given two starting points (which must
 * have opposite signs */
export function bisect(f, a, b, parameters) {
       parameters = parameters || {};
        var maxIterations = parameters.maxIterations || 100,
            tolerance = parameters.tolerance || 1e-10,
            fA = f(a),
            fB = f(b),
            delta = b - a;
            if (Math.abs(fA)<0.00001) { fA = 0;}
            if (Math.abs(fB)<0.00001) { fB = 0;}
// console.log(a+";"+b +" --- "+fA+";"+fB);
        if (fA * fB > 0) {
            console.log("Initial bisect points must have opposite signs");
            console.log(`a = ${a}`);
            console.log(`b = ${b}`);
            console.log(`fA = ${fA}`);
            console.log(`fB = ${fB}`);
            console.log(`fA * fB = ${fA * fB}`);
            throw "Initial bisect points must have opposite signs";
        }
        if (fA === 0) return a;
        if (fB === 0) return b;
        for (var i = 0; i < maxIterations; ++i) {
            delta /= 2;
            var mid = a + delta,
                fMid = f(mid);
            if (fMid * fA >= 0) {
                a = mid;
            }
            if ((Math.abs(delta) < tolerance) || (fMid === 0)) {
                return mid;
            }
        }
        return a + delta;
}
