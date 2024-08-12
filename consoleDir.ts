// https://stackoverflow.com/questions/10729276/how-can-i-get-the-full-object-in-node-jss-console-log-rather-than-object
// https://nodejs.org/api/console.html

type OptionsType = {
  depth: number | null,
  colors: boolean,
  showHidden: boolean,
  getters: boolean | 'get' | 'set'
}

export function consoleDir(elem: any, options: OptionsType): void {
  const customDefaultOptions: OptionsType = {
    depth: 6,
    colors: true,
    showHidden: false
  }
  console.dir(elem, { ...customDefaultOptions, ...options });
}

// To log object getters it is required to set showHidden to true as well
// https://stackoverflow.com/questions/28072671/how-can-i-get-console-log-to-output-the-getter-result-instead-of-the-string-ge
console.dir(object, { getters: true, showHidden: true });
console.log(util.inspect(object, { getters: true, showHidden: true }))
