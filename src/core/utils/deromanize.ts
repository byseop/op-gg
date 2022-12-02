export const deromanize = (s: string) => {
  const str = s.toUpperCase();
  var validator = /^M*(?:D?C{0,3}|C[MD])(?:L?X{0,3}|X[CL])(?:V?I{0,3}|I[XV])$/;
  var token = /[MDLV]|C[MD]?|X[CL]?|I[XV]?/g;
  var key = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
  };
  var num = 0,
    m;
  if (!(str && validator.test(str))) return false;
  // eslint-disable-next-line no-cond-assign
  while ((m = token.exec(str))) num += key[m[0] as keyof typeof key];
  return num;
};
