export default function concat(arr: Array<any>, ...args): Array<any> {
  const res = arr.slice();
  args.forEach(item => {
    if (Array.isArray(item)) {
      // const of 不会像 foreach 那样过滤掉 undefined
      for (const i of item) {
        res.push(i);
      }
    } else {
      res.push(item);
    }
  })
  return res;
}