// https://stackoverflow.com/questions/10729276/how-can-i-get-the-full-object-in-node-jss-console-log-rather-than-object
// https://nodejs.org/api/console.html

type OptionsType = {
  depth: number | null,
  colors: boolean,
  showHidden = boolean,
}

export function consoleDir(elem: any, options: OptionsType): void {
  const customDefaultOptions: OptionsType = {
    depth: 6,
    colors: true,
    showHidden: false
  }
  console.dir(elem, { ...customDefaultOptions, ...options });
}
