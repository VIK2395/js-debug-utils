// https://stackoverflow.com/questions/10729276/how-can-i-get-the-full-object-in-node-jss-console-log-rather-than-object
// https://nodejs.org/api/console.html

export function consoleDir(elem: any): void {
  console.dir(elem, { depth: null, colors: true, showHidden: false });
}
