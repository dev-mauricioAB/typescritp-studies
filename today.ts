const t1 = {
  a: 1, b: 2, obj: {
  c:3, d: 4
} };

// here 'obj' its a new reference
const t2 = {
  ...t1,
  obj: {
    ...t1.obj,
  }
}

// here 'obj' appoint to same 'obj' item from t1
// so if we change obj props value will change in both
const t3 = {
  ...t1,
}
t3.obj.c = 12

// t2.obj.c = 7


console.log({t1,t2, t3})